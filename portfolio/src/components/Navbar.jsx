

export default function Navbar(){
    return(
        <div className="flex flex-row justify-between px-5 bg-black items-center">
            <div className="text-4xl font-bold text-blue-400">
                Logo
            </div>
            <ul className=" flex flex-row text-orange-400 gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}