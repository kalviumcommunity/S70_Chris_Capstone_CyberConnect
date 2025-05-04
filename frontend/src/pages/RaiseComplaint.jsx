import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ComplaintForm } from '../components/complaints/ComplaintForm';

const RaiseComplaint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-10 py-16">
        <h1 className="text-4xl font-bold mb-8">Raise a Complaint</h1>
        <ComplaintForm />
      </main>
      <Footer />
    </div>
  );
};

export default RaiseComplaint;