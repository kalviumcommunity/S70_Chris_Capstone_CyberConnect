import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

const stats = [
  { label: 'Active Members', value: '10,000+' },
  { label: 'Threats Identified', value: '5,200+' },
  { label: 'Success Rate', value: '98.3%' },
];

export function AlternativeHero() {
  const [activeCard, setActiveCard] = useState(0);

  // Auto-rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Detect Threats",
      description: "Stay ahead of cyber criminals with real-time threat intelligence and alerts",
      color: "from-blue-500/20 to-blue-400/20  border-blue-500/30",
      textColor: "text-blue-400",
    },
    {
      title: "Prevent Attacks",
      description: "Learn proven strategies to protect yourself from common cyber attacks",
      color: "from-green-500/20 to-green-400/20 border-green-500/30",
      textColor: "text-green-400 ",
    },
    {
      title: "Recover Quickly",
      description: "Get support and guidance if you've been compromised or attacked",
      color: "from-amber-500/20 to-amber-400/20 border-amber-500/30",
      textColor: "text-amber-400 ",
    },
  ];

  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1e90ff]/5 rounded-full opacity-70  -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1e90ff]/5 rounded-full opacity-70  translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4  lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content: Heading and CTA */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#1e90ff]/10 text-[#1e90ff] px-3 py-1 rounded-full text-sm font-medium animate-fade-in">
              <Shield className="w-4 h-4" />
              Cybersecurity for Everyone
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Your journey to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e90ff] to-blue-600 block">digital safety</span>
              starts here
            </h1>

            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
              Join our community of security experts and enthusiasts to learn,
              share experiences, and protect yourself in today's digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Link to="/register">
                <Button size="lg" className="gap-2 h-12 px-6 w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/community">
                <Button size="lg" variant="outline" className="gap-2 h-12 px-6 w-full sm:w-auto">
                  View Community
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#383e47]">{stat.value}</div>
                  <div className="text-sm text-[#717d8a]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content: Rotating Cards */}
          <div className="relative h-[500px] animate-fade-in" style={{ animationDelay: '500ms' }}>
  <div className="absolute inset-0 flex items-center justify-center">
    {cards.map((card, index) => (
      <div
        key={index}
        className={`absolute w-[300px] p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 ease-in-out bg-gradient-to-br ${card.color} ${
          index === activeCard
            ? "opacity-100 z-30 scale-100"
            : index === (activeCard + 1) % cards.length
            ? "opacity-70 z-20 scale-90 translate-x-20 translate-y-10 blur-sm " // Added blur-sm
            : "opacity-40 z-10 scale-80 -translate-x-20 translate-y-20 blur-sm  " // Added blur-md
        }`}
      >
        <h3 className={`text-xl font-bold mb-3 ${card.textColor}`}>{card.title}</h3>
        <p className="text-black">{card.description}</p>
        <div className="mt-6 flex justify-end">
          <Button variant="ghost" size="sm" className={`${card.textColor} gap-1`}>
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}