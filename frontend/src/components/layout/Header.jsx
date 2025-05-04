import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import {
  Shield,
  Menu,
  X,
  User,
  MessageCircle,
  AlertCircle,
  Home,
  Info,
  Lock,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Community', path: '/community', icon: MessageCircle },
  { name: 'Raise Complaint', path: '/raise-complaint', icon: AlertCircle },
  { name: 'About', path: '/about', icon: Info },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-3 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
        >
          <Shield className="w-8 h-8 text-[#1e90ff]" />
          <span className="text-xl font-semibold tracking-tight">Cyber Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium link-underline transition-colors ${
                location.pathname === item.path
                  ? "text-[#1e90ff]"
                  : "text-[#383e47]/80 hover:text-[#383e47]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="gap-1.5 hover:bg-black hover:text-white hover:scale-106">
              <Lock className="w-4 h-4" />
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="default" size="sm" className="hover:bg-black hover:scale-106 gap-1.5">
              <User className=" w-4 h-4" />
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 animate-fade-in">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-[#1e90ff]/10 text-[#1e90ff]"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
            <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-2" />
            <Link
              to="/login"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Lock className="w-5 h-5" />
              Login
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-3 p-3 rounded-lg bg-[#1e90ff] text-white  hover:bg-[#1e90ff]/90 transition-colors"
            >
              <User className="w-5 h-5" />
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
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

export default Header;