import Logo from "../logo"

export default function Desciption({logo}){
    return (
        <div className="max-w-[17rem] relative">
            <div><i className='fa-solid fa-clock text-[10rem] absolute -right-16 -top-16 -zi text-primary'></i></div>
            <div className=' bg-zinc-800 bg-opacity-50 rounded-3xl text-justify backdrop-blur-lg p-5 '>
                <h2 className="text-primary text-xl font-mono font-black uppercase">About ScheduleGenius</h2>
                Say goodbye to confusing cron job syntax with <Logo text={logo}/>. Our intuitive interface and powerful algorithm generate the perfect cron job code for you – no experience required. Unlock the full potential of cron job scheduling today with <Logo text={logo}/>. Make cron job an easier job!
                <hr className='mt-5 border-primary'/>
                <a href="#generatecode" className='inline-block rounded-xl p-1 px-2 border-2 border-primary mt-5 hover:text-black group hover:bg-primary'>Try it <i className='fa-solid fa-arrow-down-long text-primary group-hover:text-black'></i></a>
            </div>
        </div>
    )
}