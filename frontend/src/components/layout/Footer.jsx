import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-[#1e90ff]" />
              <span className="text-lg font-semibold">Cyber Connect</span>
            </Link>
            <p className="text-sm text-[#717d8a] max-w-md">
              Cyber Connect is a platform dedicated to connecting cybersecurity professionals,
              enthusiasts, and victims of cyber attacks. Share knowledge, get support, and stay safe online.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-[#1e90ff] transition-colors" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#1e90ff] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#1e90ff] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider text-[#383e47]">PLATFORM</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-[#717d8a] hover:text-[#1e90ff] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-[#717d8a] hover:text-[#1e90ff] transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/raise-complaint" className="text-sm text-[#717d8a] hover:text-[#1e90ff] transition-colors">
                  Raise Complaint
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-[#717d8a] hover:text-[#1e90ff] transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-[#717d8a] hover:text-[#1e90ff] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider text-[#383e47]">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-sm text-[#717d8a] hover:text-[#1e90ff] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-[#717d8a] hover:text-[#1e90ff] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-sm text-[#717d8a] hover:text-[#1e90ff] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-[#717d8a]">
            &copy; {currentYear} Cyber Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}