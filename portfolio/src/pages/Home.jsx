import Card from "../components/Card";
import Hero from "../components/Hero"
import NumberCounter from "../components/NumberCounter";
import SimpleSlider from "../components/SimpleSlider";
import UserProfile from "../components/Userprofile";

const Home = () =>{
return (
    <div className="bg-black max-h-screen">
        <Hero />
        <Card />
        <SimpleSlider />
        <NumberCounter />
        <UserProfile name="Umair" age={24} occuption="html hacker"  />
       
        
    </div>
)
}

export default Home;