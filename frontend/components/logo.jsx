import {Contrail_One} from "next/font/google";
const quantico = Contrail_One({subsets: ["latin"],weight:'400'});

export default function Logo({style,text}){
    return <h1 className={`inline-flex items-center ${style} ${quantico.className}`}>
        <i className="fa-regular fa-clock text-primary h-full"></i>Schedule<span className='text-primary'>Genius</span>
    </h1>
}