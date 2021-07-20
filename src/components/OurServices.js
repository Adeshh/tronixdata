import React from 'react'
import Image from 'next/image'
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
                    text=" A carefully created service model backed by enterprise grade first party and third party technologies. A fully managed service to take away your work-load. "
                  />
                 <RightTextService 
                   src={AnalysisLogo}
                   title="Analytics and ML"
                   text="  Just converting data and sending it to cloud does not make sense. It requires intelligence to see through it. We help making data more usable than ever."
                  />
                  <LeftTextService
                    src={ArchiveLogo}
                    title="Dataservice Centers"
                    text=" A carefully created service model backed by enterprise grade first party and third party technologies. A fully managed service to take away your work-load. "
                  />
                 <RightTextService 
                   src={AnalysisLogo}
                   title="Cloud Services"
                   text="  Just converting data and sending it to cloud does not make sense. It requires intelligence to see through it. We help making data more usable than ever."
                  />
               </div>
            </section>
        </>
    )
}

export default OurServices
