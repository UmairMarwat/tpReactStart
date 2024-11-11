import Card from "../components/Card";
import Hero from "../components/Hero"
import SimpleSlider from "../components/SimpleSlider";

const Home = () =>{
return (
    <div className="bg-black max-h-screen">
        <Hero />
        <Card />
        <SimpleSlider />
    </div>
)
}

export default Home;