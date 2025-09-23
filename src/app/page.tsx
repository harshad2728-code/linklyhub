import ComparisonTable from '@/components/ComparisonTable'
import FeaturesSection from '@/components/Feature'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonTable />
    </div>
  )
}

export default Page
