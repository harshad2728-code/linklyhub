import FeaturesSection from '@/components/Feature'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

export default Page
