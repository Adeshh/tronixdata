import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TronixLogo from '../assets/logo.svg'
import BannerHome from '../components/BannerHome'
import OurServices from '../components/OurServices'
import Image from 'next/image'
import BtmDesign from '../assets/btm-design.svg'
import BtmDesign2 from '../assets/btm-design2.svg'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>TronixData Inc.</title>
        <meta name="TronixData Inc." content="Helping your business with cloud data and its management" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <Image src={TronixLogo}/> */}
      </Head>
      <div className=" tracking-normal text-white gradient flex flex-col justify-center items-center w-screen">
        <BannerHome/>
        <Image className=" " src={BtmDesign} />
      </div>
      <OurServices/>
      <section className="tracking-normal text-white gradient flex flex-col justify-center items-center w-screen  ">
        <Image className=" " src={BtmDesign2} />
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Footer
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">
          Importent Links
        </h3>
        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Action!
        </button>
      </section>
     


      
    </div>
  )
}

