import { createContext, useState, useEffect } from "react";
import { getProyect } from "../config/getProject";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const ENTRIES = 6;

  useEffect(() => {

    const fetchData = async () => {
      //Verificamos si ya hay datos
      if(projects.length > 0) return;

      //Obtenemos los datos de la API
      const data = await getProyect();
      setProjects(data);
      setPages(Math.ceil(data.length / ENTRIES));
      setLoading(false);
    };

    fetchData();

  }, []);

  useEffect(() => {

    //Función para obtener el proyecto por su ID
    const getProject = async () => {
      const projectById = projects.filter((project) => parseInt(project.id) === parseInt(id));

      setProject(projectById[0]);
    };
    
    const getProjectById = async () => {

      //Verificamos si ya hay datos
      if(projects.length > 0){
        await getProject();
        return;
      }

      //Obtenemos los datos de la API
      const data = await getProyect();
      setProjects(data);

      //Filtramos el proyecto por su ID
      getProject();

    };

    getProjectById();
  }, [id, projects]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        pages,
        setId,
        project,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext };

export default ProjectProvider;
