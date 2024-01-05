import axiosConf from "../axios";

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
  
  interface ApiResponse {
    records: Project[];
  }

const getProjects = async ():Promise<ApiResponse> => {
    try {
        
    const { data } = await axiosConf.get<ApiResponse>('/projects')
    return data;
    } catch (error) {
        console.log(error);
    throw error;
    }
}
export {getProjects};