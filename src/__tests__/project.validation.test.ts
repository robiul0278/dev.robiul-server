import { projectValidationSchema } from '../app/modules/project/project.validation';

describe('Project Validation Schema', () => {
  const validProject = {
    title: 'Test Project',
    subTitle: 'A test project description',
    image: 'https://example.com/image.png',
    technology: ['React', 'Node.js', 'TypeScript'],
    liveLink: 'https://example.com',
    frontend: 'https://github.com/frontend',
    backend: 'https://github.com/backend',
    serial: '1',
    description: 'This is a detailed description of the project with more than 10 characters.',
  };

  describe('Valid project data', () => {
    it('should validate a correct project', () => {
      const result = projectValidationSchema.safeParse({ body: validProject });
      expect(result.success).toBe(true);
    });

    it('should validate project with optional fields', () => {
      const projectWithOptionals = {
        ...validProject,
        category: 'web-app',
        status: 'active',
      };
      const result = projectValidationSchema.safeParse({ body: projectWithOptionals });
      expect(result.success).toBe(true);
    });

    it('should validate project with archived status', () => {
      const archivedProject = {
        ...validProject,
        status: 'archived',
      };
      const result = projectValidationSchema.safeParse({ body: archivedProject });
      expect(result.success).toBe(true);
    });
  });

  describe('Invalid project data', () => {
    it('should reject project without title', () => {
      const { title, ...projectWithoutTitle } = validProject;
      const result = projectValidationSchema.safeParse({ body: projectWithoutTitle });
      expect(result.success).toBe(false);
    });

    it('should reject project with empty title', () => {
      const result = projectValidationSchema.safeParse({ body: { ...validProject, title: '' } });
      expect(result.success).toBe(false);
    });

    it('should reject project without subtitle', () => {
      const { subTitle, ...projectWithoutSubtitle } = validProject;
      const result = projectValidationSchema.safeParse({ body: projectWithoutSubtitle });
      expect(result.success).toBe(false);
    });

    it('should reject project with invalid image URL', () => {
      const result = projectValidationSchema.safeParse({ body: { ...validProject, image: 'not-a-url' } });
      expect(result.success).toBe(false);
    });

    it('should reject project with less than 3 technologies', () => {
      const result = projectValidationSchema.safeParse({ body: { ...validProject, technology: ['React'] } });
      expect(result.success).toBe(false);
    });

    it('should reject project with invalid liveLink URL', () => {
      const result = projectValidationSchema.safeParse({ body: { ...validProject, liveLink: 'not-a-url' } });
      expect(result.success).toBe(false);
    });

    it('should reject project with description less than 10 characters', () => {
      const result = projectValidationSchema.safeParse({ body: { ...validProject, description: 'Short' } });
      expect(result.success).toBe(false);
    });

    it('should reject project with invalid status', () => {
      const result = projectValidationSchema.safeParse({ body: { ...validProject, status: 'invalid' } });
      expect(result.success).toBe(false);
    });
  });
});
