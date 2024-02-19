import "../prism.css";
import { Link, useParams } from "react-router-dom";
import { setPosition } from "../config/setPosition";
import { setTitle } from "../config/setTitle";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import Spinner from "../component/Spinner";
import useBlog from "../hooks/useBlog";
import useMode from "../hooks/useMode";

const Post = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const { mode } = useMode();
  const { setId, blog } = useBlog();

  useEffect(() => {
    setId(id);

    if(blog) {
      setTitle(blog?.title);
      setLoading(false);
      setDate(blog?.created_at);

      // Highlight code
      setTimeout(() => {
        Prism.highlightAll();
      }, 1000);
    }
  }, [id, blog]);

  //Colocamos la posicion en la parte superior
  useEffect(() => {
    setPosition();
  }, [])

  if (loading) {
    return <Spinner />;
  }

  const field = blog?.field;
  
  return (
    <div className="mt-6 transition-all-1">
      <h3
        className={`title-page  mb-5 ${mode ? "text-white" : "text-zinc-800"}`}
      >
        <Link to="/posts">
          <span className="title-post">Posts</span>
        </Link>
        <span className="text-sm mr-2 ml-2 font-light">{`>`}</span>
        {blog?.title}
        <span
          className={`ml-5 text-xs font-semibold px-1 bg-gray-600 text-white`}
        >
          {date?.slice(0, 10)}
        </span>
      </h3>
      <div
        className={mode ? "text-white" : "text-zinc-800"}
        dangerouslySetInnerHTML={{ __html: field }}
      ></div>
    </div>
  );
};

export default Post;
