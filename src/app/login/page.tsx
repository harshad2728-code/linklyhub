"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Facebook, Twitter, Linkedin } from "lucide-react";
import GradientBackground from "@/components/ui/GradientBackground";
import { GoogleSvg } from "@/lib/Svg";
import Lottie from "lottie-react";
import loginani from "../../../public/Animations/Login.json";
import SignupAni from "../../../public/Animations/Market.json";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

// --- Icons ---
const GoogleIcon = () => <GoogleSvg />;

const LogoIcon = () => (
  <Image
    src="/images/logo1.png"
    alt="DireQtKart Logo"
    width={120}
    height={120}
    className="rounded-md mx-auto"
  />
);

// --- Input Component ---
const FormInput = ({
  icon,
  type,
  placeholder,
}: {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
}) => (
  <div className="relative w-full">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
      {icon}
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-slate-700/50 border border-slate-600 pl-10 pr-4 py-3 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
    />
  </div>
);

// --- Social Buttons ---
const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-10 h-10 border-2 border-slate-600 rounded-full flex items-center justify-center text-gray-400 hover:border-purple-500 hover:text-purple-500 transition">
    {icon}
  </button>
);

// --- Main Component ---
const SlidingAuthPage: React.FC = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const router = useRouter();

  const formVariants = {
    hidden: { opacity: 0, zIndex: 10 },
    visible: { opacity: 1, zIndex: 20 },
  };

  return (
    <div className="relative min-h-screen w-full font-sans overflow-hidden bg-black">
      <Navbar />
      <GradientBackground />

      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="relative w-full max-w-5xl min-h-[550px] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-500/20 border border-white/20 overflow-hidden flex">

          {/* --- SIGN UP FORM --- */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center p-8"
            variants={formVariants}
            animate={isSignUpActive ? "visible" : "hidden"}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center w-full max-w-sm">
              <h1 className="text-3xl font-bold text-gray-100 mb-2">Create Account</h1>
              <p className="text-sm text-gray-400 mb-6">
                Join us today — unlock opportunities, connect with people, and grow faster!
              </p>

              <div className="flex justify-center space-x-4 mb-4">
                <SocialButton icon={<Facebook size={18} />} />
                <SocialButton icon={<Twitter size={18} />} />
                <SocialButton icon={<Linkedin size={18} />} />
              </div>

              <p className="text-sm text-gray-400 mb-4">
                or use your email for registration
              </p>

              <form className="space-y-4">
                <FormInput icon={<User size={16} />} type="text" placeholder="Name" />
                <FormInput icon={<Mail size={16} />} type="email" placeholder="Email" />
                <FormInput icon={<Lock size={16} />} type="password" placeholder="Password" />
                <button
                  type="submit"
                  className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-full text-sm hover:opacity-90 transition"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-6">
                Already have an account?{" "}
                <span
                  onClick={() => setIsSignUpActive(false)}
                  className="font-bold text-purple-400 hover:underline cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            </div>
          </motion.div>

          {/* --- SIGN IN FORM --- */}
          <motion.div
            className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center p-8"
            variants={formVariants}
            animate={!isSignUpActive ? "visible" : "hidden"}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full max-w-sm text-center">
              <LogoIcon />

              <h2 className="text-3xl font-bold text-gray-100 mb-2">Welcome Back</h2>
              <p className="text-sm text-gray-400 mb-6">
                Sign in to continue — your goals are just one step away!
              </p>

              <form className="space-y-6">
                <FormInput icon={<Mail size={16} />} type="email" placeholder="Email" />
                <FormInput icon={<Lock size={16} />} type="password" placeholder="Password" />

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 text-gray-400">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-600"
                    />
                    Remember me
                  </label>
                  <a href="#" className="font-semibold text-purple-400 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={() => router.push("/dashboard")}
                    className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg text-sm hover:bg-purple-700 transition"
                  >
                    Sign In
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg text-sm hover:bg-gray-50 transition"
                  >
                    <GoogleIcon />
                    Sign In with Google
                  </button>
                </div>
              </form>

              <p className="text-center text-xs text-gray-400 mt-8">
                Don’t have an account?{" "}
                <span
                  onClick={() => setIsSignUpActive(true)}
                  className="font-bold text-purple-400 hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </motion.div>

          {/* --- OVERLAY ANIMATION PANEL --- */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 z-30 overflow-hidden"
            animate={{ x: isSignUpActive ? "100%" : "0%" }}
            transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
          >
            <div className="relative bg-gradient-to-br from-blue-800 to-gray-900 h-full w-2/2 flex items-center justify-center">
              <Lottie
                animationData={isSignUpActive ? SignupAni : loginani}
                loop
                autoplay
                className="h-[380px] w-[400px] md:h-[500px] md:w-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SlidingAuthPage;
