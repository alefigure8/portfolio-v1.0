import ButtonPages from "../component/ButtonPages";
import Post from "../component/Post";
import SkeletonContent from "../component/SkeletonContent";
import useMode from "../hooks/useMode";
import useProjects from "../hooks/useProjects";
import {setPosition} from "../config/setPosition";
import { useEffect } from "react";

const Posts = () => {
  
  const { mode } = useMode();
  const { projects, loading, pages, entries } = useProjects();

  useEffect(() => {
    setPosition();
  }, [])

  return (
    <>
      <div>
        <h3
          className={`title-pages ml-2 ${
            mode ? "text-white" : "text-zinc-800"
          }`}
        >
          Works
        </h3>
        <div className="grid grid-cols-1 px-10 md:px-0 md:grid-cols-2 md:gap-6">
          {loading ? (
            <SkeletonContent />
          ) : projects?.length > 0 ? (
            projects
              .map((project) => {
                return <Post obj={project} href="work" key={project.id} />;
              }).reverse().splice(entries[0], entries[1])
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
        <ButtonPages content="work"/>
      )}
    </>
  );
};

export default Posts;
