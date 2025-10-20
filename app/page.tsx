// app/page.tsx - Landing Page
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Users, Shield, Briefcase, TrendingUp, Award, CheckCircle, Mail, Phone, MapPin, ArrowRight, BarChart3, Globe2, Clock } from 'lucide-react';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Expert Professionals' },
    { icon: Globe2, value: '15+', label: 'African Countries' },
    { icon: Briefcase, value: '200+', label: 'Projects Completed' },
    { icon: BarChart3, value: '98%', label: 'Client Satisfaction' }
  ];

  const expertLevels = [
    { 
      title: 'Global Expert', 
      description: 'Industry leaders with 20+ years of international experience across multiple continents and major projects',
      icon: Award
    },
    { 
      title: 'Subject Matter Experts', 
      description: 'Specialists with 15+ years of deep expertise in specific technical domains and cutting-edge technologies',
      icon: Shield
    },
    { 
      title: 'Practitioner', 
      description: 'Experienced professionals with 10+ years of proven track records in operational excellence',
      icon: CheckCircle
    }
  ];

  const services = [
    {
      title: 'Technical Assurance',
      description: 'Comprehensive technical oversight and validation ensuring project excellence',
      icon: Shield
    },
    {
      title: 'Project Assurance',
      description: 'End-to-end project management support from initiation to completion',
      icon: Briefcase
    },
    {
      title: 'Contract Assurance',
      description: 'Expert contract review, negotiation support, and compliance management',
      icon: CheckCircle
    },
    {
      title: 'Value Assurance',
      description: 'Optimizing project value and ROI throughout the entire lifecycle',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img 
                src="https://i.postimg.cc/gJZNxbSQ/gaesee-logo.png" 
                alt="GAESEE" 
                className="h-20 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'}`}>
                About Us
              </a>
              <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'}`}>
                Services
              </a>
              <a href="#experts" className={`font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'}`}>
                Experts
              </a>
              <a href="#contact" className={`font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'}`}>
                Contact
              </a>
              <Link 
                href="/register"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Register Now
              </Link>
            </div>

            <button 
              className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <a href="#about" className="block text-slate-700 hover:text-emerald-600 font-medium">About Us</a>
              <a href="#services" className="block text-slate-700 hover:text-emerald-600 font-medium">Services</a>
              <a href="#experts" className="block text-slate-700 hover:text-emerald-600 font-medium">Experts</a>
              <a href="#contact" className="block text-slate-700 hover:text-emerald-600 font-medium">Contact</a>
              <Link 
                href="/register"
                className="block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold text-center"
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2400')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-600/90 rounded-full px-5 py-2 mb-8">
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Africa's Premier Energy Expert Network</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Bridging Africa's Energy<br />
              <span className="text-emerald-400">Expertise Gap</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl">
              Connecting indigenous oil and gas companies with world-class verified experts across Africa. Building local capacity. Driving operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/register"
                className="group inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-md font-bold text-lg transition-all shadow-xl"
              >
                <span>Get Started Today</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#about"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-md font-semibold text-lg transition-all border-2 border-white/30"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center">
                <stat.icon className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">About GAESEE</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                Empowering Africa's Energy Future
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As foreign oil companies gradually exit or transfer operations to indigenous firms across Nigeria and Africa, a critical expertise gap has emerged. Many local companies find themselves unprepared for the complex technical demands of managing large-scale oil and gas operations.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                GAESEE is the first centralized, verifiable platform connecting African energy companies with global experts. We provide access to world-class professionals across all disciplines, ensuring operational excellence and industry compliance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Verified Experts</h4>
                    <p className="text-slate-600 text-sm">Thoroughly vetted professionals with proven track records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Global Standards</h4>
                    <p className="text-slate-600 text-sm">International best practices and compliance expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Local Focus</h4>
                    <p className="text-slate-600 text-sm">Building capacity within African energy companies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Rapid Response</h4>
                    <p className="text-slate-600 text-sm">Quick access to expertise when you need it most</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/register"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Join Our Network
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600" 
                  alt="Oil Refinery"
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=600" 
                  alt="Offshore Platform"
                  className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-lg shadow-2xl max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-8 h-8" />
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-emerald-100">Expert Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Comprehensive Energy Sector Coverage
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From upstream exploration to downstream distribution, we provide expert support across all oil and gas operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl h-96">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=800" 
                alt="Offshore Operations"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Offshore Operations</h3>
                <p className="text-slate-200 mb-4">Platform management, subsea systems, and offshore safety expertise</p>
                <div className="flex items-center text-emerald-400 font-semibold">
                  Learn More <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl h-96">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800" 
                alt="Pipeline Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Pipeline & Infrastructure</h3>
                <p className="text-slate-200 mb-4">Design, construction, maintenance, and integrity management specialists</p>
                <div className="flex items-center text-emerald-400 font-semibold">
                  Learn More <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl h-96">
              <img 
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800" 
                alt="Drilling Operations"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Drilling & Production</h3>
                <p className="text-slate-200 mb-4">Advanced drilling techniques and production optimization expertise</p>
                <div className="flex items-center text-emerald-400 font-semibold">
                  Learn More <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Levels */}
      <section id="experts" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Expert Categories</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Three Tiers of Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access precisely the right level of expertise for your project requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertLevels.map((level, idx) => (
              <div key={idx} className="group bg-white border-2 border-slate-200 hover:border-emerald-600 rounded-xl p-8 transition-all hover:shadow-2xl">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <level.icon className="w-9 h-9 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{level.title}</h3>
                <p className="text-slate-600 leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Comprehensive Assurance Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pre-Project, Mid-Project, or End-Project support available on-demand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-emerald-600">
                <service.icon className="w-12 h-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div 
                className="h-96 lg:h-auto"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="p-12">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Additional Services We Provide
                </h3>
                <div className="space-y-4">
                  {[
                    'Expert Matching & Placement',
                    'Technical Support & Oversight',
                    'Regulatory Compliance Support',
                    'HSE Management & Training',
                    'Quality Assurance & Control',
                    'Project Management Support',
                    'Contract Review & Negotiation',
                    'Capacity Building Programs'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(5, 150, 105, 0.95), rgba(6, 95, 70, 0.95)), url('https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=2000')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Access Top Energy Experts?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto">
            Join GAESEE today and connect with Africa's largest network of verified oil and gas professionals
          </p>
          <Link 
            href="/register"
            className="inline-flex items-center bg-white hover:bg-slate-100 text-emerald-700 px-12 py-6 rounded-md font-bold text-xl transition-all shadow-2xl"
          >
            <span>Register Your Profile</span>
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
          <p className="mt-8 text-emerald-100 text-lg">
            Powered by <span className="font-bold">Aberdeen Commercial</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <img 
                src="https://i.postimg.cc/gJZNxbSQ/gaesee-logo.png" 
                alt="GAESEE" 
                className="h-20 w-auto mb-6"
              />
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                Global African Energy Sector Expert Exchange - Connecting verified energy professionals with companies across Africa.
              </p>
              <p className="text-emerald-400 font-semibold text-lg">www.gaesee.com</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="#experts" className="text-slate-400 hover:text-emerald-400 transition-colors">Expert Levels</a></li>
                <li><Link href="/register" className="text-slate-400 hover:text-emerald-400 transition-colors">Register</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400">Nigeria & Across Africa</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <a href="mailto:info@gaesee.com" className="text-slate-400 hover:text-emerald-400 transition-colors">info@gaesee.com</a>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400">Available via website</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400">&copy; 2025 GAESEE. All rights reserved.</p>
              <p className="text-slate-400">Powered by <span className="text-emerald-400 font-semibold">Aberdeen Commercial</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}