import { Link } from "react-scroll";
import { navItems } from "../constants";
import logo from "./../assets/images/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white text-lg">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            className="text-2xl font-semibold flex items-center space-x-3"
            href="home"
          >
            <img
              className="w-10 inline-block items-center"
              src={logo}
              alt="logo"
            />
          </a>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit saepe
            veritatis atque, voluptatum at alias? Rem dolores amet repellat iste
            molestiae cumque provident eos dolorum non officiis dicta, vitae
            deserunt.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Seu email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Enviar"
              className="bg-secondary py-2 px-4 rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-2xl">Links</h4>
            <ul className="space-y-3">
						{navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="block cursor-pointer hover:text-pink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

					<div className="space-y-4 mt-5">
            <h4 className="text-2xl">Termos</h4>
            <ul className="space-y-3">
              <li><a className="block hover:text-pink" href="/">Trabalhe Conosco</a></li>
              <li><a className="block hover:text-pink" href="/">Seja um Franqueado</a></li>
              <li><a className="block hover:text-pink" href="/">Condições Gerais</a></li>
              <li><a className="block hover:text-pink" href="/">Política de Privacidade</a></li>
            </ul>
          </div>

					<div className="space-y-4 mt-5">
            <h4 className="text-2xl">Centrais de Atendimento</h4>
            <ul className="space-y-3">
              <li><a className="block hover:text-pink" href="/">Suporte</a></li>
              <li><a className="block hover:text-pink" href="/">Segunda à Sexta: 09h às 20h</a></li>
              <li><a className="block hover:text-pink" href="/">Sábado e Feriados: 09h às 16h</a></li>
              <li><a className="block hover:text-pink" href="/">Central de Ajuda</a></li>
            </ul>
          </div>

        </div>
      </div>

			<hr />

			<div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
				<p> © {new Date().getFullYear()}. Todos os direitos reservados. </p>
			
				<div className="flex items-center space-x-5">
					<Facebook size={24} className="cursor-pointer hover:text-pink hover:translate-y-4 transition-all duration-300" />
					<Instagram size={24} className="cursor-pointer hover:text-pink hover:translate-y-4 transition-all duration-300" />
					<Twitter size={24} className="cursor-pointer hover:text-pink hover:translate-y-4 transition-all duration-300" />
					<Linkedin size={24} className="cursor-pointer hover:text-pink hover:translate-y-4 transition-all duration-300" />
				</div>
			
			</div>

    </footer>
  );
};

export default Footer;
