import aboutImg from "./../assets/images/whoweare.png"

const About = () => {
	return (
		<section className="md:px-14 p-4 max-w-s mx-auto mt-10" id="about">
			<div className="flex flex-col md:flex-row justify-between items-center gap-6">

				<div className="w-3/5 p-1 md:w-2/6">
					<img src={aboutImg} alt="imagem de sobre" />
				</div>

				<div className="text-center md:text-left w-5/6 md:w-3/5 space-y-14">
					<h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
						Quem também já escolheu nossa agência como {' '}
						<span className="text-pink">Agência de Marketing Digital</span>
					</h2>
					<p className="text-neutral-600 text-lg mb-7">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae inventore beatae omnis mollitia assumenda perspiciatis!
					</p>
					<button className="btn">Quero ser cliente</button>
				</div>

			</div>
		</section>
	)
}

export default About