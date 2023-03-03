import Image from "next/image";

export default function SponsorCard({sponsorName,imageName,sponsorLink}){
    return(
        <a href={sponsorLink} target="_blank" className=' backdrop-blur-lg backdrop-grayscale shadow-2xl inline-flex w-fit group hover:text-zinc-700 hover:bg-primary items-center border-2 border-zinc-700 p-5 px-7 gap-2 rounded-[2.5rem]'>
            <div className={`${sponsorName==="NextGrid"?"grayscale":"invert"} group-hover:invert-0 group-hover:opacity-70`}><Image src={`/${imageName}`} width={50} height={50} alt={sponsorName}/></div>
            <h3 className='text-center text-4xl font-black'>{sponsorName}</h3>
        </a>
    )
}