import BenefitsSection from '@/components/Benefits'
import ComparisonTable from '@/components/ComparisonTable'
import FeaturesSection from '@/components/Feature'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Page = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ComparisonTable />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Page
