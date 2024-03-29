import {Carousel} from "./Carousel";
import {WavyBackground} from "./WavyBackground";

const Home = () => {
  return (
    <WavyBackground className="min-h-screen flex flex-col relative z-10 overflow-hidden" id="home">
      <img className="w-[400px] mx-auto mt-36" src="/name.png"/>
      <Carousel items={["/meat.jpeg", "/milk.jpg", "/vegetables.jpg", "/drink.jpg", "/choco.jpg"]} isImage/>
    </WavyBackground>
  )
}

export default Home