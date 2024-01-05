import axiosApi from "../axios";

interface Project {
  id: string;
  createdTime: string;
  fields: {
    short_description: string;
    full_description: string;
    name: string;
    git_link: string;
    created: boolean;
    link: string;
    skills_id: string[];
  };
}

const getProjects = async (): Promise<Project[]> => {
  try {
    const  data  = await axiosApi.get<Project[]>("/projects");
    return data.data.records;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export { getProjects };
