import { createContext, useState, useEffect } from "react"
import { getBlogs } from "../config/getBlogs"
import { calcularResultado } from "../helper/CalculateEntries";

const BlogContext = createContext()

const BlogProvider = ({children}) => {
  const[blogs, setBlogs] = useState([])
  const[blog, setBlog] = useState({})
  const [id, setId] = useState(0);
  const[loading, setLoading] = useState(true)
  const [pages, setPages] = useState(0)
  const ENTRIES = 6

  //Paginación
  const [actualPage, setActualPage] = useState(1);
  let since = calcularResultado([6, 0, actualPage]);
  let to = ENTRIES * actualPage;
  const [entries, setEntries] = useState([since, to]);

  useEffect(() => {
    
    const fetchData = async () => {
      //Verificamos si ya hay datos
      if(blogs.length > 0) return;

      //Obtenemos los datos de la API
      const data = await getBlogs();
      setBlogs(data);
      setPages(Math.ceil(data.length / ENTRIES))
      setLoading(false);
    }

    fetchData();

  }, [])

  useEffect(() => {

    //Función para obtener el proyecto por su ID
    const getPost = async () => {
      const postById = blogs.filter((post) => parseInt(post.id) === parseInt(id));

      setBlog(postById[0]);
    };
    
    const getPostById = async () => {

      //Verificamos si ya hay datos
      if(blogs.length > 0){
        await getPost();
        return;
      }

      //Obtenemos los datos de la API
      const data = await getBlogs();
      setBlogs(data);

      //Filtramos el proyecto por su ID
      getPost();

    };

    getPostById();
  }, [id, blogs]);

  return (
    <BlogContext.Provider value={
      {
        blogs,
        loading,
        pages,
        setId,
        blog,
        ENTRIES,
        actualPage,
        entries,
        setActualPage,
        setEntries,
      }
    }>
      {children}
    </BlogContext.Provider>
  )
}

export {
  BlogContext,
}

export default BlogProvider