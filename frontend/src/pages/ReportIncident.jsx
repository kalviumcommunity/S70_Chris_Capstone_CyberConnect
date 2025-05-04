import { useEffect } from 'react';

import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { IncidentForm } from '../components/incidents/IncidentForm';

const ReportIncident = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-20 py-16">
        <h1 className="text-4xl font-bold mb-8">Report Security Incident</h1>
        <IncidentForm />
      </main>
      <Footer />
    </div>
  );
};

export default ReportIncident;