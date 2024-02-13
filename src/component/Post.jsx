import { Link } from "react-router-dom";
import useMode from "../hooks/useMode";
import React from "react";

const Post = ({ obj, href }) => {

  const {mode} = useMode();

  return (
    <Link to={`/${href}/${obj.id}`} key={obj.id}>
      <div className="flex flex-col items-center mt-2 mb-6 md:mt-2 transition-all-1 cursor-pointer">
        <img
          className="md:w-56 md:h-36 rounded-xl"
          src={obj.cover}
          alt={obj.title}
        />
        <p
          className={`title-page mt-3 ${mode ? "text-white" : "text-zinc-800"}`}
        >
          {obj.title}
        </p>
        <p className={`parraph mt-1 ${mode ? "text-gray-400" : "text-zinc-800"}`}>
          {obj.category}
        </p>
      </div>
    </Link>
  );
};

export default Post;
