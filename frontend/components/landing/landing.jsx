import Bokeh from "./bokeh";
import Desciption from "./description";

import Header from '@/components/header'
const navlinks = [
  {
    name: 'Home',
    path: '#',
    class:"hover:bg-primary"
  },
  {
    name: 'About Devs',
    path: '#about',
    class:"hover:bg-primary"
  },
  {
    name: 'Generate Code',
    path: '#generatecode',
    class: 'hover:text-black hover:bg-primary hover:scale-110 transition-transform font-mono hover:bg-black border-2 border-primary text-white origin-right'
  }
]

export default function Landing({logo}){
    return (
        <div className="grid grid-rows-[auto,1fr] p-5 px-16">
            <Header links={navlinks}/>
            <div className=' grid grid-cols-1 md:grid-cols-2 items-center justify-items-center'>
                <Bokeh styles="text-primary text-[20rem] -z-20 text-opacity-50 blur-[200px] absolute left-0"/>
                <h2 className='font-black text-7xl uppercase w-full'>
                    Make
                    <div className='text-primary text-8xl drop-shadow-[0px_0px_10px_black] flex items-center -my-6 ml-2'>
                        CR<i className='fa-regular fa-clock text-7xl'></i>N J<i className="fa-solid text-7xl h-full fa-cog fa-spin"></i>B
                    </div>
                    an easier job
                </h2>
                <Desciption logo={logo}/>
            </div>
        </div>
    )
}