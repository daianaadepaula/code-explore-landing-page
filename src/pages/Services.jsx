import { servItems } from "../constants"

const Services = () => {
	return (
		<section className="px-4 mx-auto mt-15 gap-4 flex flex-col space-y-8 justify-between items-center my-10 md:px-14 p-4 max-w-s" id="services">
			<h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">Serviços</h2>

			<ul className="flex justify-center items-center gap-3 space-x-5 space-y-4 flex-wrap lg:max-w-[1200px]">
				{servItems.map((item, index) => (
					<li key={index} className="flex flex-col items-center flex-[1_1_300px] py-[2rem] px-[1rem] text-center shadow-md rounded-lg cursor-pointer">
						<img className="w-[50px]" src={item.icon} alt="" />
						<h2 className="text-3xl my-[1rem] mx-0">{item.heading}</h2>
						<p className="text-lg mb-5">{item.text}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Services