import { userValidationSchema, refreshTokenValidationSchema, forgotPasswordValidationSchema, resetPasswordValidationSchema } from '../app/modules/auth/auth.validation';

describe('Auth Validation Schemas', () => {
  describe('userValidationSchema', () => {
    const validUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'user' as const,
    };

    it('should validate a correct user', () => {
      const result = userValidationSchema.safeParse({ body: validUser });
      expect(result.success).toBe(true);
    });

    it('should reject user without name', () => {
      const { name, ...userWithoutName } = validUser;
      const result = userValidationSchema.safeParse({ body: userWithoutName });
      expect(result.success).toBe(false);
    });

    it('should reject user with invalid email', () => {
      const result = userValidationSchema.safeParse({ body: { ...validUser, email: 'not-an-email' } });
      expect(result.success).toBe(false);
    });

    it('should reject user with password less than 6 characters', () => {
      const result = userValidationSchema.safeParse({ body: { ...validUser, password: '12345' } });
      expect(result.success).toBe(false);
    });

    it('should reject user with invalid role', () => {
      const result = userValidationSchema.safeParse({ body: { ...validUser, role: 'superadmin' } });
      expect(result.success).toBe(false);
    });
  });

  describe('forgotPasswordValidationSchema', () => {
    it('should validate a correct email', () => {
      const result = forgotPasswordValidationSchema.safeParse({ body: { email: 'john@example.com' } });
      expect(result.success).toBe(true);
    });

    it('should reject missing email field', () => {
      const result = forgotPasswordValidationSchema.safeParse({ body: {} });
      expect(result.success).toBe(false);
    });
  });

  describe('resetPasswordValidationSchema', () => {
    it('should validate correct reset data', () => {
      const result = resetPasswordValidationSchema.safeParse({
        body: { email: 'john@example.com', newPassword: 'newpassword123' },
      });
      expect(result.success).toBe(true);
    });

    it('should reject reset without email', () => {
      const result = resetPasswordValidationSchema.safeParse({ body: { newPassword: 'newpassword123' } });
      expect(result.success).toBe(false);
    });

    it('should reject reset without new password', () => {
      const result = resetPasswordValidationSchema.safeParse({ body: { email: 'john@example.com' } });
      expect(result.success).toBe(false);
    });
  });
});
