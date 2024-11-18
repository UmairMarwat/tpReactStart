import UserProfile from "../components/Userprofile";


export default function ContactUs(){
    return(
        <div className="bg-red-300">
            <UserProfile name="Jawad" age={85} occuption="Full stack mobile ai web and destop developer" />
            <h1 className="text-4xl text-red-500 font-semibold">This is Contact Us</h1>
            <h2 className="text-green-500 font-bold mt-5 text-5xl">i am SanuLLAH kiNG OF Univerce</h2>
        </div>
    )
}