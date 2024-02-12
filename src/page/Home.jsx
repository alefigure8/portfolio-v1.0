import { Link } from "react-router-dom";
import ButtonPrimary from "../component/Button";
import useBlog from "../hooks/useBlog";
import useProject from "../hooks/useProjects";
import useMode from "../hooks/useMode";
import useProfile from "../hooks/useProfile";
import Spinner from "../component/Spinner";
import Skeleton from "../component/Skeleton";

const Home = () => {
  const { blogs, loading } = useBlog();
  const { projects } = useProject();
  const { mode } = useMode();
  const { profile, loadingProfile } = useProfile();
  const POSTS = 2;

  //Fields
  const field_about = profile?.about;
  const field_like = profile?.hobbies;

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
          <div>
            <h1 className={mode ? "title" : "title-light"}>{profile?.name}</h1>
            <h2
              className={`parraph -ml-4 -mt-1 ${
                mode ? "text-white" : "text-zinc-800"
              }`}
            >
              {profile.rol}
            </h2>
          </div>
          <div className="flex justify-center min-w-fit md:ml-10 mt-4 md:mt-0">
            <img
              className="rounded-full w-28 h-28 md:w-24 md:h-24 border-2"
              src={profile?.img_personal}
              alt="foto de perfil"
            />
          </div>
        </section>
      )}

      {/*
        SOBRE MI
      */}
      <section className=" transition-all-2">
        <h4 className={mode ? "sub-title" : "sub-title-light"}>Sobre mí</h4>
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
        <h4 className={mode ? "sub-title" : "sub-title-light"}>Bio</h4>
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <>
            {profile?.bio?.map((bio) => {
              const field_bio = bio.goal;
              return (
                <div className="flex" key={bio.year}>
                  <p
                    className={`font-bold ${
                      mode ? "text-white" : "text-zinc-800"
                    }`}
                  >
                    {bio.year}
                  </p>
                  <p
                    className={`text-justify parraph-bio ${
                      mode ? "text-white" : "text-zinc-800"
                    }`}
                    dangerouslySetInnerHTML={{ __html: field_bio }}
                  ></p>
                </div>
              );
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
          <>
            <p
              className={`text-justify parraph ${
                mode ? "text-white" : "text-zinc-800"
              }`}
              dangerouslySetInnerHTML={{ __html: field_like }}
            ></p>
          </>
        )}
      </section>

      {/*
        REDES 
      */}
      <section className="transition-all-5 mt-9">
        <h4 className={mode ? "sub-title" : "sub-title-light"}>Redes</h4>
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <>
            <div className="flex flex-col items-start">
              {profile?.networks?.map((network) => {
                return (
                  <a href={network.link} target="_blank" key={network.social}>
                    <button
                      className={`social-link py-3 px-4 rounded-lg font-semibold parraph-social ${
                        mode
                          ? "text-teal-200  underline-link "
                          : "text-teal-700 underline-link-light underline-link-light"
                      }`}
                    >
                      <i
                        className={`${network.icon} mr-2 ${mode && "color-link"}`}
                        alt={`Icono de ${network.social}`}
                      ></i>
                      {network.user}
                    </button>
                  </a>
                );
              })}
            </div>
          </>
        )}
      </section>

      {/*
        ULTIMOS PROYECTOS
      */}
      <section className="transition-all-6 mt-9">
        <h4 className={mode ? "sub-title" : "sub-title-light"}>
          Últimos proyectos
        </h4>
        <div className="flex justify-center flex-col md:flex-row mt-6 mb-10">
          {loading ? (
            <Spinner />
          ) : projects.length > 0 ? (
            projects
              .map((project) => {
                return (
                  <Link to={`work/${project.id}`} key={project.id}>
                    <div className="flex flex-col items-center mr-6 mb-10 md:mb-4">
                      <img
                        className="w-56 h-32 rounded-lg"
                        src={project.img}
                        alt={`imagen de la entrada de blog de ${project.title}`}
                      />
                      <p
                        className={`parraph title-page mt-4 ${
                          mode ? "text-white" : "text-zinc-800"
                        }`}
                      >
                        {project.title.split("-")[0]}
                      </p>
                      <p
                        className={`text-base text-center parraph ${
                          mode ? "text-white" : "text-zinc-800"
                        }`}
                      >
                        {project.category}
                      </p>
                    </div>
                  </Link>
                );
              })
              .reverse()
              .slice(0, POSTS)
          ) : (
            <p
              className={`text-center parraph ${
                mode ? "text-zinc-400" : "text-zinc-800"
              }`}
            >
              No hay proyectos para mostrar
            </p>
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
        <h4 className={mode ? "sub-title" : "sub-title-light"}>
          Últimos posts
        </h4>
        <div className="flex justify-center flex-col md:flex-row mt-6">
          {loading ? (
            <Spinner />
          ) : blogs.length > 0 ? (
            blogs
              .map((blog) => {
                return (
                  <Link to={`post/${blog.id}`} key={blog.id}>
                    <div className="flex flex-col items-center mr-6 mb-10 md:mb-4">
                      <img
                        className="w-56 h-32 rounded-lg"
                        src={blog.img}
                        alt={`imagen de la entrada de blog de ${blog.title}`}
                      />
                      <p
                        className={`parraph title-page mt-4 ${
                          mode ? "text-white" : "text-zinc-800"
                        }`}
                      >
                        {blog.title}
                      </p>
                      <p
                        className={`text-base text-center parraph ${
                          mode ? "text-white" : "text-zinc-800"
                        }`}
                      >
                        {blog.description}
                      </p>
                    </div>
                  </Link>
                );
              })
              .reverse()
              .slice(0, POSTS)
          ) : (
            <p
              className={`text-center parraph ${
                mode ? "text-zinc-400" : "text-zinc-800"
              }`}
            >
              No hay entradas para mostrar
            </p>
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
