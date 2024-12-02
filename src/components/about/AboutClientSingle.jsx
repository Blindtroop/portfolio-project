const AboutClientSingle = ({ image }) => {
	return (
		<div className="w-full max-w-xs h-full bg-white border border-gray-200 rounded-lg  overflow-hidden">
			<img
				src={image}
				className="w-46 h-48 object-cover"  // Ensures the image fits the container without distortion
			/>
			<div className="p-4 flex flex-col justify-between h-full">
			</div>
		</div>
	);
};

export default AboutClientSingle;
