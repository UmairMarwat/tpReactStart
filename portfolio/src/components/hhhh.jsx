import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <div className="flex flex-row justify-between px-5 bg-black items-center">
            <div className="text-4xl font-bold text-blue-400">
                Logo
            </div>
            <ul className="flex flex-row text-orange-400 gap-4">
                <li>
                    <Link
                        className={`hover:text-blue-500 hover:font-bold ${location.pathname === "/" ? "text-blue-500" : ""}`}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`hover:text-blue-500 hover:font-bold ${location.pathname === "/about" ? "text-blue-500" : ""}`}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={`hover:text-blue-500 hover:font-bold ${location.pathname === "/services" ? "text-blue-500" : ""}`}
                        to="/services"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        className={`hover:text-blue-500 hover:font-bold ${location.pathname === "/contactus" ? "text-blue-500" : ""}`}
                        to="/contactus"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    );
}
