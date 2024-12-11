import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'IG7 6NB, Epping Forest, United Kingdom',
		icon: <FiMapPin />,
	},
	{
		// id: 2,
		// name: 'contact@craftmarket.com',
		// icon: <FiMail />, // Uncommented and added placeholder email
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center"> {/* Adjusted for vertical layout */}
			<div className="text-center max-w-xl px-6"> {/* Align text center */}
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact Details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex items-center justify-center mb-12 mt-18" key={contact.id}> {/* Center list items */}
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		
			</div>
			);
};

export default ContactDetails;
