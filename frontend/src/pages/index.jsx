import { useEffect } from 'react';
import Header from '../components/layout/Header';
import { AlternativeHero } from '../components/home/AlternativeHero';
import { ThreatInsights } from '../components/home/ThreatInsights';
import { ScrollingTestimonials } from '../components/home/ScrollingTestimonials';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Lock, BarChart3 } from 'lucide-react';

const Index = () => {
  // Smooth scroll for hash links
  useEffect(() => {
    const handleHashLinkClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    return () => document.removeEventListener('click', handleHashLinkClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      <main className="flex-1">
        {/* Alternative Hero Section */}
        <AlternativeHero />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#f4f3f3] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white text-[#1e90ff] px-3 py-1 rounded-full text-sm font-medium mb-2">
                  <Shield className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Empowering everyone to navigate cybersecurity with confidence</h2>
                <p className="text-muted-foreground">
                  At Cyber Connect, we believe that cybersecurity knowledge shouldn't be confined to experts.
                  Our community-driven platform makes it accessible for everyone to learn, share, and protect themselves in today's digital world.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    "Expert-verified security guides and tutorials",
                    "Real-time threat alerts from our community",
                    "Personalized security recommendations",
                    "Support for cybercrime victims"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1e90ff] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link to="/about">
                    <Button variant="outline" size="lg" className="gap-2">
                      Learn more about our mission
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 grid grid-cols-2 gap-4 ">
                <div className="bg-white from-[#1e90ff] to-[#1e90ff] p-6 rounded-xl border border-[#1e90ff]/10 hover-scale">
                  <Shield className="w-10 h-10 text-[#1e90ff] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
                  <p className="text-muted-foreground">Stay informed about the latest cybersecurity threats and vulnerabilities.</p>
                </div>

                <div className="bg-gradient-to-br from-[#1e90ff]/5 to-[#1e90ff]/10 p-6 rounded-xl border border-[#1e90ff]/10 hover-scale mt-6">
                  <Lock className="w-10 h-10 text-[#1e90ff] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Privacy Protection</h3>
                  <p className="text-muted-foreground">Learn best practices for safeguarding your personal information online.</p>
                </div>

                <div className="bg-gradient-to-br from-[#1e90ff]/5 to-[#1e90ff]/10 p-6 rounded-xl border border-[#1e90ff]/10 hover-scale">
                  <BarChart3 className="w-10 h-10 text-[#1e90ff] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
                  <p className="text-muted-foreground">Evaluate your digital security posture and identify areas for improvement.</p>
                </div>

                <div className="bg-gradient-to-br from-[#1e90ff]/5 to-[#1e90ff]/10 p-6 rounded-xl border border-[#1e90ff]y/10 hover-scale mt-6">
                  <CheckCircle2 className="w-10 h-10 text-[#1e90ff] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Recovery Support</h3>
                  <p className="text-muted-foreground">Get help recovering from cyber attacks and preventing future incidents.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Insights Section */}
        <ThreatInsights />

        {/* Testimonials Section */}
        <ScrollingTestimonials />

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e90ff]/90 to-[#1e90ff] -z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] opacity-10 mix-blend-overlay -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to secure your digital life?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of individuals and organizations who trust Cyber Connect
              to stay protected in an increasingly complex digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 font-medium bg-white text-[#1e90ff] hover:bg-white/90"
                >
                  Join our community for free
                </Button>
              </Link>
              <Link to="/community">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 font-medium border-white text-white hover:bg-white/10"
                >
                  Explore community
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Header/>
    </div>
  );
};

export default Index;