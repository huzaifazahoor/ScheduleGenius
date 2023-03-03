import AboutUs from '@/components/aboutus/aboutus'
import Generator from '@/components/generator/generator'
import Landing from '@/components/landing/landing'
import Sponsors from '@/components/sponsors/sponsors'

export default function Home() {

  return (
    <div className=' grid grid-rows-[100vh,100vh,100vh,100vh] w-screen h-screen bg-gradient-to-b from-transparent via-black to-transparent text-white'>
      <Landing/>
      <Generator/>
      <AboutUs/>
      <Sponsors/>
    </div>
  )
}
