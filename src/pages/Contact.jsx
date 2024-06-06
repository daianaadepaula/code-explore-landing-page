const Contact = () => {
  return (
    <section
      className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28"
      id="contact"
    >
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-5 py-10 flex justify-center items-center">
        <form className="flex flex-col gap-4 w-full max-w-xs">
          <div className="flex flex-col gap-1">
            <label className="text-zinc-800 font-semibold text-lg" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              className="border-2 border-[#5f56c7e4] focus:outline-pink shadow-sm rounded h-10 bg-white text-black font-semibold px-3"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-zinc-800 font-semibold text-lg" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="border-2 border-[#5f56c7e4] focus:outline-pink shadow-sm rounded h-10 bg-white text-black font-semibold px-3"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-zinc-800 font-semibold text-lg" htmlFor="message">
              Mensagem
            </label>
            <textarea
              cols="30"
              rows="10"
              className="border-2 border-[#5f56c7e4] focus:outline-pink shadow-sm rounded p-3 bg-white
							text-black font-semibold" 
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-500 rounded font-semibold text-white h-10 hover:bg-purple-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
