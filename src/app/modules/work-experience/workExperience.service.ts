import { IWorkExperience } from './workExperience.interface';
import { workExperienceModel } from './workExperience.model';

const createWorkExperienceDB = async (payload: IWorkExperience) => {
  const result = await workExperienceModel.create(payload);
  return result;
};

const getAllWorkExperienceDB = async () => {
  const result = await workExperienceModel.find().sort({ createdAt: -1 });
  return result;
};

const getSingleWorkExperienceDB = async (id: string) => {
  const result = await workExperienceModel.findById(id);
  return result;
};

const updateWorkExperienceDB = async (id: string, payload: Partial<IWorkExperience>) => {
  const result = await workExperienceModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteWorkExperienceDB = async (id: string) => {
  const result = await workExperienceModel.findByIdAndDelete(id);
  return result;
};

export const workExperienceServices = {
  createWorkExperienceDB,
  getAllWorkExperienceDB,
  getSingleWorkExperienceDB,
  updateWorkExperienceDB,
  deleteWorkExperienceDB,
};
