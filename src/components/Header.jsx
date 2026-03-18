import "../App.css";
import TextType from "../bits/TextType";
// import personImg from "../assets/img/person.jpg";

const Header = () => {
  return (
    <section className="flex justify-center items-center font-poppins">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="text-6xl font-bold mb-14">
          Hi, My Name is <span className="text-teal-500">Farid</span>
        </div>
        <div className="w-3/4 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          mollitia minus laudantium voluptate quibusdam dolores veritatis,
          possimus suscipit laborum voluptatum incidunt cumque, blanditiis illum
          quidem hic? Repellat aliquid a beatae.
        </div>
      </div>
    </section>
  );
};

export default Header;
