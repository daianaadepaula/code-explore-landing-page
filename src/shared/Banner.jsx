const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-5 py-10">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">

        <div className="w-3/5 p-1 md:w-2/5">
          <img src={banner} alt="" className="lg:h-[386px]" />
        </div>

        <div className="text-center md:text-left space-y-14 md:w-3/5">
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {heading}
          </h2>
          <p className="text-[#ebebeb] text-2xl mb-8">{subheading}</p>
          <div className="space-x-5 space-y-4">
            <button className="btn">{btn1}</button>
            <button className="btn">{btn2}</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
