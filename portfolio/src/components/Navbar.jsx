import { Link } from "react-router-dom"



export default function Navbar(){
    return(
        <div className="flex flex-row justify-between px-5 bg-black items-center">
            <div className="text-4xl font-bold text-blue-400">
                Logo
            </div>
            <ul className=" flex flex-row text-orange-400 gap-4">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/services"}>Services</Link>
                <Link to={"/contactus"}>Contact Us</Link>
            </ul>
        </div>
    )
}