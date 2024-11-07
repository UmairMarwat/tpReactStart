import Coat from "../assets/images/hoddie.png"

const Data = [
    {
        id:1,
        Image: Coat,
        title: "Html",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum consectetur accusamus ipsa harum unde non sit in error officia laborum hic totam, rerum ad quasi numquam adipisci. Deleniti, aspernatur?"
    },
    {
        id:2,
        Image: Coat,
        title: "Html",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum consectetur accusamus ipsa harum unde non sit in error officia laborum hic totam, rerum ad quasi numquam adipisci. Deleniti, aspernatur?"
    },
    {
        id:3,
        Image: Coat,
        title: "Html",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum consectetur accusamus ipsa harum unde non sit in error officia laborum hic totam, rerum ad quasi numquam adipisci. Deleniti, aspernatur?"
    },
    {
        id:4,
        Image: Coat,
        title: "Html",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum consectetur accusamus ipsa harum unde non sit in error officia laborum hic totam, rerum ad quasi numquam adipisci. Deleniti, aspernatur?"
    },
    {
        id:5,
        Image: Coat,
        title: "Html",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum consectetur accusamus ipsa harum unde non sit in error officia laborum hic totam, rerum ad quasi numquam adipisci. Deleniti, aspernatur?"
    },
    
]

export default function Card(){
    return(
        <div className="text-red-500  flex flex-row"> 
        {Data.map((i) => (
            <div className="w-1/5">
            <div className="w-full">
                <img className="w-full" src={i.Image} alt="" />
            </div>
            <h3 className="text-5xl text-white font-bold">{i.id}</h3>
            <h3 className="text-3xl font-bold">{i.title}</h3>
            <p>{i.desc}</p>
            </div>))}
        </div>
    )
}