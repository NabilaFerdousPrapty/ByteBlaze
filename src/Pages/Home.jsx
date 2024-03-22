import Hero from "../components/Hero";
import wave from '../../src/assets/wave.svg'

const Home = () => {
  return (
    <>
    <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]">
      
      <Hero></Hero>
      <img src={wave} alt="" className="absolute bottom-0 w-full" />
    </div>
    
    </>
  );
};

export default Home;
