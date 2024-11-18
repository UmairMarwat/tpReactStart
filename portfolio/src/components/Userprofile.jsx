
export default function UserProfile(props){
    return(
        <div className="bg-black">
            <h1 className="text-3xl text-red-500 font-bold my-5 text-center"> Name: {props.name}</h1>
            <h1 className="text-3xl text-red-500 font-bold my-5 text-center"> Age: {props.age}</h1>
            <h1 className="text-3xl text-red-500 font-bold my-5 text-center"> occuption: {props.occuption}</h1>
        </div>
    )
}