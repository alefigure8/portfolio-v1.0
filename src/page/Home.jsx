import { Link } from "react-router-dom";
import { setPosition } from "../config/setPosition";
import AboutMe from "../component/AboutMe";
import Bio from "../component/Bio";
import ButtonPrimary from "../component/Button";
import NoContent from "../component/NoContent";
import Post from "../component/Post";
import Skeleton from "../component/Skeleton";
import SocialNetwork from "../component/SocialNetWork";
import Spinner from "../component/Spinner";
import Title from "../component/Title";
import useBlog from "../hooks/useBlog";
import useMode from "../hooks/useMode";
import useProfile from "../hooks/useProfile";
import useProject from "../hooks/useProjects";
import { useEffect } from "react";

const Home = () => {
  const { blogs, loading } = useBlog();
  const { projects } = useProject();
  const { mode } = useMode();
  const { profile, loadingProfile } = useProfile();
  const POSTS = 2;

  //Fields
  const field_about = profile?.about;
  const field_like = profile?.hobbies;

  useEffect(() => {
    setPosition();
  }, [])

  return (
    <>
      <div
        className={`bg-opacity-50 backdrop-blur-md py-3 rounded-lg text-center mb-6 transition-all-1 ${
          mode ? "bg-zinc-700" : "bg-white"
        }`}
      >
        <p
          className={`transition-all ${mode ? "text-white" : "text-zinc-800"}`}
        >
          Hola 👋, gracias por visitar mi portfolio!
        </p>
      </div>

      {/*
        PRESENTACION
      */}
      {loadingProfile ? (
        <Skeleton />
      ) : (
        <section className="md:flex transition-all-1">
         <AboutMe name={profile?.name} rol={profile?.rol} img={profile?.img_personal}/>
        </section>
      )}

      {/*
        SOBRE MI
      */}
      <section className=" transition-all-2">
        <Title title="Sobre mí" />
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <>
            <p
              className={`text-justify parraph ${
                mode ? "text-white" : "text-zinc-800"
              } mb-10`}
              dangerouslySetInnerHTML={{ __html: field_about }}
            ></p>
            <Link to="works">
              <ButtonPrimary>Mis trabajos</ButtonPrimary>
            </Link>
          </>
        )}
      </section>

      {/*
        BIO
      */}
      <section className=" transition-all-3 mt-9">
        <Title title="Bio" />
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <>
            {profile?.bio?.map((bio) => {
              return <Bio key={bio.year} bio={bio} />;
            })}
          </>
        )}
      </section>

      {/* 
          ME GUSTA
      */}
      <section className="mb-6 transition-all-4 mt-9">
        <h4 className={mode ? "sub-title" : "sub-title-light"}>
          I <i className="fa-solid fa-heart text-base underline-gray"></i>
        </h4>
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <p
            className={`text-justify parraph ${
              mode ? "text-white" : "text-zinc-800"
            }`}
            dangerouslySetInnerHTML={{ __html: field_like }}
          ></p>
        )}
      </section>

      {/*
        REDES 
      */}
      <section className="transition-all-5 mt-9" id="redes">
        <Title title="Redes" />
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <div className="flex flex-col items-start">
            {profile?.networks?.map((network) => {
              return <SocialNetwork key={network.social} network={network}/>;
            })}
          </div>
        )}
      </section>

      {/*
        ULTIMOS PROYECTOS
      */}
      <section className="transition-all-6 mt-9">
        <Title title="Últimos Proyectos" />
        <div className="flex justify-center flex-col md:flex-row mt-6 mb-10 md:gap-6">
          {loading ? (
            <Spinner />
          ) : projects.length > 0 ? (
            projects
              .map((project) => {
                return <Post obj={project} href="work" key={project.id} />;
              })
              .reverse()
              .slice(0, POSTS)
          ) : (
            <NoContent msg="No hay proyectos para mostrar" />
          )}
        </div>
        <Link to="works">
          <ButtonPrimary>Anteriores trabajos</ButtonPrimary>
        </Link>
      </section>

      {/*
        ULTIMOS POSTS
      */}
      <section className="transition-all-6 mt-9">
        <Title title="Últimos posts" />
        <div className="flex justify-center flex-col md:flex-row mt-6 md:gap-6">
          {loading ? (
            <Spinner />
          ) : blogs.length > 0 ? (
            blogs
              .map((blog) => {
                return <Post obj={blog} href="post" key={blog.id} />;
              })
              .reverse()
              .slice(0, POSTS)
          ) : (
            <NoContent msg="No hay posts para mostrar" />
          )}
        </div>
        <Link to="posts">
          <ButtonPrimary>Anteriores posts</ButtonPrimary>
        </Link>
      </section>
    </>
  );
};

export default Home;
