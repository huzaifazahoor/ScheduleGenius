import Bokeh from "../landing/bokeh";
import SponsorCard from "./sponsorcard";

const sponsors = [
    {
        sponsorName: "OpenAI",
        imageName: "openai.png",
        sponsorLink:"https://openai.com/"
    },
    {
        sponsorName: "LabLab AI",
        imageName: "lablabai.png",
        sponsorLink:"https://lablab.ai/"

    },
    {
        sponsorName: "NextGrid",
        imageName: "nextgrid.png",
        sponsorLink:"https://nextgrid.ai/"

    },
    {
        sponsorName: "New Native Group",
        imageName: "newnativegroup.png",
        sponsorLink:"https://newnative.ai/"

    },
]

export default function Sponsors(){
    return(
        <div className='grid grid-cols-1 grid-rows-2 relative items-center max-h-screen overflow-hidden justify-items-center'>
            <Bokeh styles={`text-[30rem] absolute -bottom-24 -left-24 -z-10 text-zinc-500 fa-cog fa-spin`}/>
            <h2 className='font-black uppercase text-7xl text-center text-zinc-500 flex'>
                Our <p className="text-primary ml-5">Sponsors</p>
            </h2>
            <div className='grid grid-cols-[repeat(4,auto)] gap-x-4 -mt-64'>
                {sponsors.map((sponsor,index) => <SponsorCard key={index} sponsorLink={sponsor.sponsorLink} sponsorName={sponsor.sponsorName} imageName={sponsor.imageName}/>)}
            </div>
        </div>
    )
}