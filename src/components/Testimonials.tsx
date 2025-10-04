"use client";

import React,{ useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// --- Data for Testimonials ---
const testimonials = [
  {
    name: "Priya Sharma",
    business: "Saree Boutique",
    location: "Jaipur, Rajasthan",
    avatar: "PS",
    quote: "LinklyHub's COD automation is a lifesaver! No more tracking payments manually. I can finally focus on designing new sarees.",
  },
  {
    name: "Rohan Kumar",
    business: "Online Kirana Store",
    location: "Bangalore, Karnataka",
    avatar: "RK",
    quote: "The WhatsApp integration is brilliant. My local customers find it so easy to order their daily groceries. My daily orders have doubled!",
  },
  {
    name: "Ananya Reddy",
    business: "Handmade Crafts",
    location: "Hyderabad, Telangana",
    avatar: "AR",
    quote: "I never thought I could sell my crafts outside my city. With their logistics support, I'm now shipping all over India.",
  },
  {
    name: "Vikram Singh",
    business: "Street Food Cloud Kitchen",
    location: "Delhi",
    avatar: "VS",
    quote: "Setting up my store took less than 10 minutes, and the integrated UPI payments are incredibly fast. My sales have gone up by 300%!",
  },
  {
    name: "Meera Iyer",
    business: "Home Bakery",
    location: "Chennai, Tamil Nadu",
    avatar: "MI",
    quote: "The AI tool suggested I sell themed cakes for local festivals, and it was a massive hit! This platform really understands the Indian market.",
  },
];


// --- Reusable Card Component ---
const Card = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl flex flex-col h-[300px] justify-between">
        <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10" />
        <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white shadow-md">
                {testimonial.avatar}
            </div>
            <div className="ml-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
            </div>
        </div>
        <p className="text-gray-200 text-base leading-relaxed my-6">
            "{testimonial.quote}"
        </p>
    </div>
  );
};


// --- Main Testimonials Component ---
const ProfessionalTestimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds, with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextStep = () => setIndex((index + 1) % testimonials.length);
  const prevStep = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full bg-black text-white py-24 px-4 overflow-hidden">
      {/* Aurora Glow */}
      <div className="absolute top-0 left-0 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-900 via-transparent to-transparent rounded-full opacity-30 filter blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-bl from-pink-900 via-transparent to-transparent rounded-full opacity-30 filter blur-3xl" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Don't Just Take Our Word For It
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Hear directly from the entrepreneurs who are winning with LinklyHub across India.
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div 
        className="relative w-full flex items-center justify-center h-[350px] [perspective:1000px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {testimonials.map((testimonial, i) => {
          // Calculate the offset from the center card
          let offset = (i - index + testimonials.length) % testimonials.length;
          if (offset > Math.floor(testimonials.length / 2)) {
            offset -= testimonials.length;
          }

          const isCenter = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;

          return (
            <motion.div
              key={i}
              className="absolute w-[90%] max-w-lg cursor-pointer"
              style={{ zIndex: testimonials.length - Math.abs(offset) }}
              animate={{
                x: `${offset * 40}%`,
                scale: isCenter ? 1 : 0.7,
                opacity: Math.abs(offset) <= 1 ? 1 : 0,
                rotateY: isLeft ? 45 : isRight ? -45 : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              onClick={() => !isCenter && setIndex(i)}
            >
              <Card testimonial={testimonial} />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="relative flex justify-center mt-12 space-x-20 z-20">
        <button
          onClick={prevStep}
          className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextStep}
          className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ProfessionalTestimonials;