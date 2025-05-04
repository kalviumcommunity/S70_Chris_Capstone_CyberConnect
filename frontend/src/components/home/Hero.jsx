import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const benefits = [
    'Connect with cybersecurity experts',
    'Share your experiences and learn from others',
    'Get support if you\'ve been attacked',
    'Stay updated on the latest threats',
  ];

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const parallaxElements = containerRef.current.querySelectorAll('.parallax');

      parallaxElements.forEach((el, i) => {
        const htmlEl = el;
        const speed = i % 2 === 0 ? 0.15 : 0.1;
        htmlEl.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative pt-32 pb-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#1e90ff]/5 parallax" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 parallax" />
        <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-[#1e90ff]/5 parallax" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1e90ff]/10 text-[#1e90ff] px-3 py-1 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            Protecting your digital life
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            The community for{' '}
            <span className="text-[#1e90ff]">cyber security</span> awareness
          </h1>

          <p className="text-xl text-[#717d8a] mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Connect with experts, share your experiences, and learn how to protect yourself in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link to="/register">
              <Button size="lg" className="gap-2 h-12 px-6" style={{ backgroundColor: '#1e90ff', color: '#f4f8fb' }}>
                Join the community
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/community">
              <Button size="lg" variant="outline" className="gap-2 h-12 px-6">
                Explore community
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-xl hover-scale hover:shadow-lg transition-all duration-300 animate-fade-in border border-gray-200 dark:border-gray-800`}
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e90ff] mt-0.5" />
                <span className="font-medium">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}