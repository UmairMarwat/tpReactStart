import Graphs from "../components/Graphs";
import Linechartt from "../components/LineCharts";



export default function Services(){
    return(
        <div className="bg-red-300">
            <h1 className="text-4xl text-red-500 font-semibold">This is AOur Service</h1>
            <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-yellow-800 ">MY Monthly money Spending Shedule</h3>
            <Graphs />
            </div>
            <div>
            <h3 className="text-2xl font-bold text-yellow-800 ">MY Monthly money Spending Shedule</h3>
            <Linechartt />
            </div>
            
        </div>
    )
}