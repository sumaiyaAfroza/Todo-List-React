import React from 'react';
import { Heart, Github, Twitter, Linkedin, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
        }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-5 lg:col-span-1">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                NexaCore
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses with innovative digital solutions. We transform ideas into exceptional experiences.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>123 Business St, Dhaka</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>+880 1234-567890</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Company
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'News & Blog', 'Press Kit'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="w-0 group-hover:w-1.5 h-1.5 bg-indigo-400 rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Services
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            </h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 'Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="w-0 group-hover:w-1.5 h-1.5 bg-indigo-400 rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Newsletter
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Subscribe to get the latest updates, news and special offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
              />
              <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 text-sm">
                Subscribe Now
              </button>
            </div>

            {/* Social Media */}
            <div className="pt-2">
              <div className="flex gap-3">
                {[
                  { icon: Github, label: 'GitHub' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Mail, label: 'Email' }
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="group relative"
                  >
                    <div className="p-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 hover:border-transparent transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/25">
                      <Icon className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-1 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} NexaCore.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> in Bangladesh
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Privacy Policy</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Terms of Service</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Sitemap</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};