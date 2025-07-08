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



export const productServices = {
    createProjectDB,
    getAllProjectDB,
    deleteProjectDB
}