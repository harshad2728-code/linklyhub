"use client";

import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

const FooterRedesigned = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#integrations" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "Help Center", href: "#help" },
      { name: "Blog", href: "#blog" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "API Docs", href: "#api" }
    ],
    legal: [
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Cookie Policy", href: "#cookies" }
    ]
  };

  return (
    <footer className="relative bg-black/80 text-white backdrop-blur-lg overflow-hidden">
      {/* Aurora Glow Effect */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-700 to-pink-500 rounded-full opacity-15 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-700 to-purple-500 rounded-full opacity-15 filter blur-3xl animate-pulse delay-75"></div>

      {/* Gradient Top Border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-12 max-w-7xl relative z-10">
        
        {/* Top Section: Info & Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 border-b border-white/10 pb-12">
          {/* Logo, Info & Contacts */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              
              <span className="text-2xl font-bold text-white">
                <Image src="/images/logo1.png" alt="Workflow" width={250} height={250} />
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering micro-businesses across India to sell online seamlessly. Join thousands of entrepreneurs building their dreams.
            </p>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">hello@linklyhub.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Bengaluru, India</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Get the latest tips, success stories, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
              <button className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition">
                <span>Subscribe</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white mb-4 capitalize">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} LinklyHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRedesigned;