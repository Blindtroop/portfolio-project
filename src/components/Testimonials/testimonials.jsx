export default () => {
    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <figure>
                        <blockquote className="border-l-4 border-indigo-500 pl-4">
                            <p className="text-gray-800 text-xl text-center font-semibold sm:text-2xl italic">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-8">
                            <img
                                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                                alt="Martin escobar"
                                className="w-16 h-16 rounded-full border-2 border-indigo-500 shadow-md"
                            />
                            <div>
                                <span className="block text-gray-800 font-semibold text-lg">Martin Escobar</span>
                                <span className="block text-gray-600 text-sm">Founder of Meta</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    );
};
