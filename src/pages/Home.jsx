import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
  <a
    href="https://drive.proton.me/u/0/DueA8QIZLAzcu8g0_EsN6yo7lZ-u6EoSN28F5pDabdU-PwMkW7I8CYdt_43_l6aeYK9MmLwwAqkvvoaK7KTdoQ==/folder/QRxgBAPqnTfW6XjbcDH6GLEfPzPE0Ufe6vVl6dlxYwu35MMsT3eFKYiRjxuJMs-LKpzBdSXC82tW6bB3aMCqAQ==?r=/DueA8QIZLAzcu8g0_EsN6yo7lZ-u6EoSN28F5pDabdU-PwMkW7I8CYdt_43_l6aeYK9MmLwwAqkvvoaK7KTdoQ==/folder/VEd4G2AdLHjbhoPYDVIwM_UnvqFN0GCWsr8Sd78_y2KkIUtn3RD-3TLcMIuW2hi0mZJoUKDuOJNK3fJmb2Ay_A=="
    target="_blank"
    rel="noopener noreferrer"
    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
    aria-label="More Projects"
  >
    View More Projects
  </a>
</div>

			</div>
		
	);
};

export default Home;
