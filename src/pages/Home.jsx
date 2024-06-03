import Banner from "../shared/Banner";
import homeImg from "./../assets/images/backgroundright.png";

const Home = () => {
  return (
    <section className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id="home">

      <Banner 
				banner={homeImg}
				heading={"Agência de Marketing Digital e Publicidade"}
				subheading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet quia adipisci molestias. Recusandae voluptas in magni, quae temporibus autem nulla sunt labore"}
				btn1={"Saiba como"} 
				btn2={"Quero saber mais"} 
			/>

    </section>
  );
};

export default Home;
