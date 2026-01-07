import { useEffect, useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { IncidentsList } from '../components/incidents/IncidentsList';
import api from '../lib/api'; // 1. Import API helper

const IncidentsDashboard = () => {
  const [incidents, setIncidents] = useState([]); // 2. State to store incidents
  const [loading, setLoading] = useState(true);   // 3. State to handle loading status

  useEffect(() => {
    window.scrollTo(0, 0);

    // 4. Function to fetch data from Backend
    const fetchIncidents = async () => {
      try {
        const response = await api.get('/incidents');
        setIncidents(response.data); // Store the backend data
      } catch (error) {
        console.error("Failed to fetch incidents:", error);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-20 py-16">
        <h1 className="text-4xl font-bold mb-8">Incidents Dashboard</h1>
        
        {/* 5. Show loading state or the list with real data */}
        {loading ? (
          <div className="flex justify-center p-8">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          /* We pass the data as a prop: 'incidents={incidents}' */
          <IncidentsList incidents={incidents} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default IncidentsDashboard;