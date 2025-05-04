import { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChannelList } from '../components/community/ChannelList';
import { ChatArea } from '../components/community/ChatArea';
import { Users, InfoIcon } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Community = () => {
  const [activeChannel, setActiveChannel] = useState('welcome');
  const { toast } = useToast();

  const handleChannelSelect = (channelId) => {
    setActiveChannel(channelId);

    // Only show toast for first channel change (demo purposes)
    if (channelId !== 'welcome' && activeChannel === 'welcome') {
      toast({
        title: "Channel changed",
        description: `You've joined #${channelId}`,
      });
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <div className="h-full flex flex-col">
          {/* Community Banner */}
          <div className="bg-[#1e90ff]/10 ">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e90ff]/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#1e90ff]" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Cyber Connect Community</h1>
                  <p className="text-sm text-[#717d8a]">Join the conversation about cybersecurity</p>
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                <InfoIcon className="w-5 h-5 text-[#717d8a]" />
              </button>
            </div>
          </div>

          {/* Community Chat Layout */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-[280px_1fr] h-[calc(100vh-172px)]">
            <ChannelList activeChannel={activeChannel} onChannelSelect={handleChannelSelect} />
            <ChatArea channelId={activeChannel} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;