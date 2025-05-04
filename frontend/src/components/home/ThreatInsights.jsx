import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  AlertTriangle,
  Shield,
  LockKeyhole,
  Activity,
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import { Button } from '../ui/Button';



// Threats data
const threats = [
  {
    id: 1,
    title: 'Phishing Attacks',
    description: 'Deceptive attempts to steal sensitive information by impersonating trustworthy entities.',
    icon: AlertTriangle,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    percent: 65,
    trend: '+12% since last month',
    trendUp: true,
  },
  {
    id: 2,
    title: 'Ransomware',
    description: 'Malware that encrypts files and demands payment for decryption keys.',
    icon: LockKeyhole,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    percent: 72,
    trend: '+8% since last month',
    trendUp: true,
  },
  {
    id: 3,
    title: 'Data Breaches',
    description: 'Unauthorized access to sensitive, protected, or confidential data.',
    icon: Shield,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    percent: 58,
    trend: '-3% since last month',
    trendUp: false,
  },
  {
    id: 4,
    title: 'DDoS Attacks',
    description: 'Attempts to disrupt normal traffic of a targeted server by overwhelming it with a flood of traffic.',
    icon: Activity,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    percent: 43,
    trend: '+5% since last month',
    trendUp: true,
  },
];

export function ThreatInsights() {
  const [hoveredThreat, setHoveredThreat] = useState(null);


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1e90ff] to-blue-600">
              Latest Threat Insights
            </h2>
            <p className="text-[#717d8a]">
              Stay informed about the most prevalent cyber threats and learn how to protect yourself against them.
            </p>
          </div>
          <Link to="/threats">
            <Button variant="outline" className="gap-1 group hover:border-[#1e90ff]/70">
              View all threats
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Desktop grid view (removed mobile carousel logic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {threats.map((threat) => (
            <ThreatCard
              key={threat.id}
              threat={threat}
              hoveredThreat={hoveredThreat}
              setHoveredThreat={setHoveredThreat}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separated ThreatCard component for reusability
const ThreatCard = ({ threat, hoveredThreat, setHoveredThreat }) => {
  const isHovered = hoveredThreat === threat.id;

  const cardClasses = `rounded-xl p-6 transition-all duration-300 hover-scale ${threat.border} ${threat.bg} ${isHovered ? "shadow-lg" : "shadow-sm"} backdrop-blur-sm relative overflow-hidden`;
  const iconClasses = `w-12 h-12 rounded-full flex items-center justify-center mb-5 ${threat.bg}`;
  const lucideIconClasses = `w-6 h-6 ${threat.color}`;
  const trendClasses = `text-xs flex items-center gap-0.5 ${threat.trendUp ? "text-green-500" : "text-red-500"}`;
  const trendingUpClasses = `w-3 h-3 ${threat.trendUp ? "" : "rotate-180 transform"}`;
  const progressBarBg = threat.color.replace('text-', 'bg-');
  const buttonClasses = `w-full group ${threat.color} hover:bg-white/80 dark:hover:bg-black/20 transition-all`;

  return (
    <div
      className={cardClasses}
      onMouseEnter={() => setHoveredThreat(threat.id)}
      onMouseLeave={() => setHoveredThreat(null)}
    >

      <div className="absolute inset-0 opacity-5 pattern-grid -z-10" />

      <div className={iconClasses}>
        <threat.icon className={lucideIconClasses} />
      </div>

      <h3 className="text-xl font-semibold mb-3 flex items-center">{threat.title}</h3>
      <p className="text-[#717d8a] mb-5">{threat.description}</p>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium">Prevalence</span>
          <div className="flex items-center gap-2">
            <span className={`font-semibold ${threat.color}`}>{threat.percent}%</span>
            <span className={trendClasses}>
              <TrendingUp
                className={trendingUpClasses}
              />
              {threat.trend}
            </span>
          </div>
        </div>

      </div>

      <div className="mt-6">
        <Link to={`/threats/${threat.id}`}>
          <Button
            variant="ghost"
            size="sm"
            className={buttonClasses}
          >
            Learn how to protect yourself
            <ExternalLink className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

