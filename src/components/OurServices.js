import React from 'react'

import CloudLogo from '../assets/clouds.svg'
import DatacenterLogo from '../assets/datacenter.svg'
import ArchiveLogo from '../assets/Archive.svg'
import AnalysisLogo from '../assets/analytics.svg'
import LeftTextService from '../components/LeftTextService'
import RightTextService from "../components/RightTextService"


const OurServices = () => {
    return (
        <>
            <section className="bg-white border-b py-8">
               <div className="container max-w-5xl mx-auto m-8">
               <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                   Our Services
                </h1>
                 <LeftTextService
                    src={ArchiveLogo}
                    title=" Archive Modernization"
                    text=" Data grows every second, minute, and day. As it grows to archive it also painful. Get rid of massive storage systems or complicated tape management process using the cutting edge technologies, methods, and reducing prices of cloud storage. We have carefully created service model backed by enterprise grade first party and third party technologies. A fully managed service to take away your work-load. "
                  />
                 <RightTextService 
                   src={AnalysisLogo}
                   title="Analytics and ML"
                   text="  We leverage your data and the cutting edge technologies to run the sophisticated algorithms that unleash the true potential of data for your business. Just converting data and sending it to cloud does not make sense. It requires intelligence to see through it. We help making data more usable than ever."
                  />
                  <LeftTextService
                    src={DatacenterLogo}
                    title="Datacenter services "
                    text=" Bring the agility and promise of cloud services to your infrastructure. With leading cloud services providers, we help you with precision and future proof planning. Whether you run IT services on-premises or in a pulblic cloud. You always need trusted advisors. People who can work with you to meet your objectives. "
                  />
                 <RightTextService 
                   src={CloudLogo}
                   title="Cloud Services"
                   text="TDI helps organizations transform their IT environment with best-in-class Cloud Computing Services. Our team of experts delivers highly-effective and reliable cloud computing services that provide organizations with a competitive edge. Our cloud solutions enable organizations to reduce IT resource requirements and improve productivity, in addition to lowering costs and reducing the time-to-market.  Now that you have decided to move to a public cloud or you are trying to build a private cloud, every IT organization needs insights to make informed decisions."
                  />
               </div>
            </section>
        </>
    )
}

export default OurServices