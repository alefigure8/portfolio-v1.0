import { useEffect, useState } from "react";
import ButtonPages from "../component/ButtonPages";
import Post from "../component/Post";
import SkeletonContent from "../component/SkeletonContent";
import useBlog from "../hooks/useBlog";
import useMode from "../hooks/useMode";
import { setPosition } from "../config/setPosition";

const Posts = () => {

  const { blogs, loading, pages, ENTRIES, entries } = useBlog();
  const { mode } = useMode();

  useEffect(() => {
    setPosition();
  }, [])


  return (
    <>
      <div className="mt-6">
        <h3
          className={`title-pages ml-2 ${
            mode ? "text-white" : "text-zinc-800"
          }`}
        >
          Posts
        </h3>
        <div className="grid grid-cols-1 px-10 md:px-0 md:grid-cols-2 md:gap-6">
          {loading ? (
            <SkeletonContent />
          ) : blogs?.length > 0 ? (
            blogs
              .map((project) => {
                return (
                  <Post obj={project} href="post" key={project.id} />
                );
              })
              .reverse()
              .splice(entries[0], entries[1])
          ) : (
            <p
              className={`title-page mt-3 ${
                mode ? "text-zinc-400" : "text-zinc-800"
              }`}
            >
              Ups! Al parecer hubo un error! (F5, F5, F5!!!) 🫠
            </p>
          )}
        </div>
      </div>
      {pages > 1 && (
        <ButtonPages content="post" />
      )}
    </>
  );
};

export default Posts;
