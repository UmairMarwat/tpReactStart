import Card from "../components/Card";
import Hero from "../components/Hero"
import NumberCounter from "../components/NumberCounter";
import SimpleSlider from "../components/SimpleSlider";

const Home = () =>{
return (
    <div className="bg-black max-h-screen">
        <Hero />
        <Card />
        <SimpleSlider />
        <NumberCounter />
    </div>
)
}

export default Home;