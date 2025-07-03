import { projectModel } from "./project.model";

const createProjectDB = async (payload: any) => {
    const result = await projectModel.create(payload);
    return result;
}

const getAllProjectDB = async () => {
    const result = await projectModel.find({});
    return result;
}


export const productServices = {
    createProjectDB,
    getAllProjectDB,
}