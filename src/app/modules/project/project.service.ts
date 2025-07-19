import { IProject } from "./project.interface";
import { projectModel } from "./project.model";

const createProjectDB = async (payload: any) => {
    const result = await projectModel.create(payload);
    return result;
}

const getAllProjectDB = async () => {
  const result = await projectModel.find({}).sort({ serial: 1 });
  return result;
}

const deleteProjectDB = async (id: string) => {
  const result = await projectModel.deleteOne({_id: id});
  return result;
}
const updateProjectDB = async (id: string, payload: IProject) => {

  const result = await projectModel.updateOne(
    {_id: id},
    {$set: payload}
  );
  return result;
}

const singleProjectDB = async (id: string) => {
  const result = await projectModel.findById(id);
  return result;
}

export const productServices = {
    createProjectDB,
    getAllProjectDB,
    deleteProjectDB,
    updateProjectDB,
    singleProjectDB
}