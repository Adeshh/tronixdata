import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TronixLogo from '../assets/logo.svg'
import BannerHome from '../components/BannerHome'
import OurServices from '../components/OurServices'
import Image from 'next/image'
import BtmDesign from '../assets/btm-design.svg'
export default function Home() {
  return (
    <>
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
     


      
    </>
  )
}

