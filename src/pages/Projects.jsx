import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				{/* Render the grid of projects */}
				<ProjectsGrid />
				
				{/* Add the View More Projects button */}
				<div className="flex justify-center mt-8">
					<a
						href="https://drive.google.com/drive/folders/1oPFjQuWyTwZu2xgpAtC7dsuEvfb_9x1X?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
						aria-label="More Projects"
					>
						View More Projects
					</a>
				</div>
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
