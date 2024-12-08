import { useContext } from "react";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    searchProjectsByTitle,
    selectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light relative inline-flex pb-2">
          Feautured Projects
          <span className="absolute -bottom-2 left-0 w-20 h-10 bg-alt-purple dark:bg-ternary-light rounded-lg z-10"></span>
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
          <div className="flex justify-between gap-2">
            <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"></span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                link={project.link} // Pass the link prop
                key={project.id}
                className="h-full"
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                link={project.link} // Pass the link prop
                key={project.id}
                className="h-full"
              />
            ))
          : projects.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                link={project.link} // Pass the link prop
                key={project.id}
                className="h-full"
              />
            ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
