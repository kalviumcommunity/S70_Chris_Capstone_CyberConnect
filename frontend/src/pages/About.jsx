import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-10 py-16">
        <h1 className="text-4xl font-bold mb-8">About Cyber Connect</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              Cyber Connect is dedicated to building a safer digital world by empowering individuals and organizations
              to defend against cybersecurity threats through community collaboration, education, and advanced threat intelligence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg mb-4">
              Founded in 2023 by a team of cybersecurity experts, Cyber Connect has grown into a thriving
              community platform that connects security professionals, organizations, and everyday users who
              want to protect their digital assets and privacy.
            </p>
            <p className="text-lg">
              Our team combines decades of experience across various cybersecurity domains including threat
              intelligence, incident response, security awareness training, and privacy protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#cceaff]   p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Threat Intelligence</h3>
                <p>Real-time updates on emerging cybersecurity threats and vulnerabilities affecting individuals and organizations.</p>
              </div>
              <div className="bg-[#cceaff]  p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Community Support</h3>
                <p>A vibrant community of security experts and enthusiasts ready to help with your cybersecurity challenges.</p>
              </div>
              <div className="bg-[#cceaff]  p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Incident Reporting</h3>
                <p>Easy-to-use tools for reporting and tracking security incidents to improve collective awareness.</p>
              </div>
              <div className="bg-[#cceaff]  p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">AI-Powered Analysis</h3>
                <p>Advanced artificial intelligence algorithms that analyze threat patterns and provide actionable insights.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;