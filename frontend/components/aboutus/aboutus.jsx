import Logo from "../logo";
import ProfileCard from "./profilecard";

// create an array of profile objects
const profiles = [
    {
        name: 'Muhammad Ali',
        position: 'ML Engineer',
        photo: '/ali.png',
        socials:[
            {name:"github",url:"#"},
            {name:"linkedin",url:"#"},
        ]
    },
    {
        name: 'Huzaifa Zahoor',
        position: 'Backend Developer',
        photo: '/huzaifa.jpeg',
        socials:[
            {name:"github",url:"#"},
            {name:"linkedin",url:"#"},
        ]
    },
    {
        name: 'Zulqarnain Haider',
        position: 'Frontend Developer',
        photo: '/zain.jpeg',
        socials:[
            {name:"github",url:"#"},
            {name:"linkedin",url:"#"},
        ]
    },
    {
        name: 'Muhammad Talha',
        position: 'UI/UX Designer',
        photo: '/talha.jpeg',
        socials:[
            {name:"github",url:"#"},
            {name:"linkedin",url:"#"},
        ]
    },
    {
        name: 'Muzna Yumman',
        position: 'Content Manager',
        photo: '/muzna.jpeg',
        socials:[
            {name:"github",url:"#"},
            {name:"linkedin",url:"#"},
        ]
    },
    {
        name: 'Asad Ali',
        position: 'AI Engineer',
        photo: '/asad.jpeg',
        socials:[
            {name:"github",url:"#"},
            {name:"linkedin",url:"#"},
        ]
    },
]

export default function AboutUs(){
    return (
        <div id="about" className='px-16 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center'>
            <h2 className='italic font-black text-6xl capitalize w-full' style={{fontVariant:"small-caps"}}>
                <Logo style={'text-[1.4em] font-black'}/>
                <br/>
                developers <br/> team
            </h2>
            <div className="grid grid-cols-2 gap-5">
                {profiles.map(({name,position,description,photo,socials},index) => <ProfileCard name={name} position={position} description={description} photo={photo} socials={socials} />)}
            </div>
        </div>
    )
}