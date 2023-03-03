import Image from "next/image";

export default function ProfileCard({name,position,description,photo,socials}){
    return(
        <div className="bg-zinc-700 text-primary rounded-[2rem] overflow-hidden">
            <div className="flex bg-primary  rounded-[2rem] uppercase text-black p-2 items-center gap-x-2">
                <div className="rounded-full relative overflow-hidden max-w-full w-10 h-10">
                    <Image src={photo} fill />
                </div>
                <p className="mx-auto">{name}</p>
            </div>
            <div className="px-5 p-1">
                <p className="font-mono text-zinc-200">{position}</p>
                <p className=" max-w-[20ch] text-zinc-400 overflow-hidden">{description}</p>
            </div>
            <div className="px-5 p-2 flex gap-x-2 justify-end">
                {socials.map(link=><a href={link.url} key={link.name}><i className={`hover:scale-150 transition-transform hover:text-white fa-brands fa-${link.name}`}></i></a>)}
            </div>
        </div>
    )
}