/* This example requires Tailwind CSS v2.0+ . */
import Link from 'next/link'
import ServicesMenu from '../ServicesMenu'
import Logo from '../../components/Logo'
import Button from '../Button'
import MobileDrawer from '../header/MobileDrawer'
import MobileOpenDrawer from '../MobileOpenDrawer'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const services = [
    {
      name: 'Archive Modernization',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '/archiveModernization',
      icon: ChartBarIcon,
    },
    {
      name: 'Dynamic Datacenters',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '/dynamicDatacenters',
      icon: CursorClickIcon,
    },
    { name: 'Data and ML', 
      description: "Your customers' data will be safe and secure.", 
      href: '/dataMl', 
      icon: ShieldCheckIcon },
    {
      name: 'Consulting',
      description: "Connect with third-party tools that you're already using.",
      href: '/consulting',
      icon: ViewGridIcon,
    },
    // {
    //   name: 'Automations',
    //   description: 'Build strategic funnels that will drive your customers to convert',
    //   href: '#',
    //   icon: RefreshIcon,
    // },
  ]


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]


const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]


export default function Example() {
  return (
    <>
       <div className="border-b-2 border-gray-100 sticky top-0 absolute w-full z-20">
       <Popover className="relative bg-white">
      {({ open }) => (
        <>
       
          <div className="container mx-auto px-3 sm:px-6">
            
            <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
              <Logo/>
              <MobileOpenDrawer  />
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/">
                  <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                     Home
                 </a>
              </Link>
                
                <ServicesMenu services={services}/>
                <Link href="/about">
                  <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                     About Us
                 </a>
                </Link>
                
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Alliances
                </a>
                
              </Popover.Group>
              <Link href="/contact">
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Button color="#04c3f2" bColor="#048ac8" bgColor=""   text="Contact Us"/>
                </div>
              </Link>
              
              
            </div>
          </div>
          <MobileDrawer services={services} open={open}/>
          
        </>
      )}
    </Popover>
      </div>
       
    
           
      
    </>
   
  )
}