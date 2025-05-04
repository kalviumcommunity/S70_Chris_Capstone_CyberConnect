import { useState, useRef, useEffect } from 'react';
import { Send, Smile, PlusCircle, AtSign, Hash, Users, HelpCircle, AlertCircle, Shield } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { useToast } from '../../hooks/use-toast';

const channelDetails = {
  'welcome': {
    name: 'welcome',
    description: 'Welcome to the Cyber Connect community! Say hello and introduce yourself.',
    icon: Users
  },
  'announcements': {
    name: 'announcements',
    description: 'Important updates and announcements from the team.',
    icon: AlertCircle
  },
  'introductions': {
    name: 'introductions',
    description: 'Introduce yourself to the community and tell us about your cybersecurity journey.',
    icon: AtSign
  },
  'phishing': {
    name: 'phishing',
    description: 'Discuss phishing attacks, share examples, and learn how to identify them.',
    icon: AlertCircle
  },
  'ransomware': {
    name: 'ransomware',
    description: 'Learn about ransomware attacks and how to protect yourself.',
    icon: Shield
  },
  'social-engineering': {
    name: 'social-engineering',
    description: 'Discuss social engineering attacks and how they work.',
    icon: Users
  },
  'privacy': {
    name: 'privacy',
    description: 'Discuss privacy concerns, tools, and best practices.',
    icon: Shield
  },
  'compliance': {
    name: 'compliance',
    description: 'Talk about cybersecurity compliance and regulations.',
    icon: Shield
  },
  'get-help': {
    name: 'get-help',
    description: 'Ask questions and get help with cybersecurity issues.',
    icon: HelpCircle
  },
  'report-incident': {
    name: 'report-incident',
    description: 'Report cybersecurity incidents you\'ve experienced or observed.',
    icon: AlertCircle
  },
  'resources': {
    name: 'resources',
    description: 'Share helpful resources, articles, and tools related to cybersecurity.',
    icon: HelpCircle
  },
};

// Generate sample messages
const generateSampleMessages = (channelId) => {
  const users = [
    { id: '1', name: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?img=1', role: 'admin' },
    { id: '2', name: 'Sarah Williams', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?img=3', role: 'moderator' },
    { id: '4', name: 'Emma Davis', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: '5', name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?img=5' },
  ];

  const messages = {
    'welcome': [
      'Welcome to the Cyber Connect community! This is a safe space to discuss cybersecurity topics and get help.',
      'Hi everyone! Excited to be part of this community.',
      'Welcome! Make sure to check out our guidelines in the pinned post.',
      'Glad to see this community growing so quickly!',
    ],
    'phishing': [
      'I received a suspicious email claiming to be from my bank. The URL looked strange though.',
      'Always check the sender\'s email address carefully. Phishers often use similar-looking domains.',
      'Here\'s a tip: hover over links before clicking to see the actual URL destination.',
      'I\'ve noticed an increase in phishing attempts via SMS lately. Anyone else experiencing this?',
      'Yes, smishing (SMS phishing) is becoming more common. Never click links from unknown senders.',
    ],
    'get-help': [
      'I think my accounts have been compromised. What should I do first?',
      'Start by changing your passwords on any accounts that share the same password, using a different device if possible.',
      'Also enable two-factor authentication wherever available.',
      'And make sure to check your email for any password reset notifications you didn\'t request.',
      'Consider using a password manager to generate and store strong, unique passwords for each account.',
    ],
  };

  // Default messages for channels that don't have specific messages
  const defaultMessages = [
    'This channel is ready for discussion.',
    'Feel free to start a conversation on this topic.',
    'Looking forward to engaging discussions here!',
  ];

  const channelMessages = messages[channelId] || defaultMessages;

  return channelMessages.map((content, index) => ({
    id: `msg-${channelId}-${index}`,
    content,
    timestamp: new Date(Date.now() - (channelMessages.length - index) * 1000 * 60 * 15),
    user: users[index % users.length],
  }));
};

function ChatArea({ channelId }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  // Load sample messages when channel changes
  useEffect(() => {
    setMessages(generateSampleMessages(channelId));
  }, [channelId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Simulate adding a new message
    const newMessage = {
      id: `msg-${Date.now()}`,
      content: message,
      timestamp: new Date(),
      user: {
        id: 'me',
        name: 'You',
        avatar: 'https://i.pravatar.cc/150?img=7',
      },
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate response (only for the 'get-help' channel for demo)
    if (channelId === 'get-help') {
      setTimeout(() => {
        const responseMessage = {
          id: `msg-${Date.now() + 1}`,
          content: 'Thanks for your question! One of our team members will help you shortly.',
          timestamp: new Date(),
          user: {
            id: '1',
            name: 'Alex Johnson',
            avatar: 'https://i.pravatar.cc/150?img=1',
            role: 'admin',
          },
        };

        setMessages(prev => [...prev, responseMessage]);

        toast({
          title: 'New message',
          description: 'Alex Johnson just replied to your message',
        });
      }, 2000);
    }
  };

  const channel = channelDetails[channelId] || {
    name: channelId,
    description: 'A discussion channel',
    icon: Hash
  };
  const ChannelIcon = channel.icon;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Channel header */}
      <div className="flex items-center p-4 ">
        <div className="mr-3 bg-[#1e90ff]/10 p-2 rounded-md">
          <ChannelIcon className="w-5 h-5 text-[#1e90ff]" />
        </div>
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            #{channel.name}
          </h2>
          <p className="text-sm text-[#717d8a]">{channel.description}</p>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex animate-fade-in">
            <img
              src={msg.user.avatar}
              alt={msg.user.name}
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{msg.user.name}</span>
                {msg.user.role && (
                  <span className={`px-1.5 py-0.5 text-[10px] rounded-full ${msg.user.role === 'admin' ? "bg-[#1e90ff] text-[#f4f8fb]" : "bg-orange-500 text-white"}`}>
                    {msg.user.role}
                  </span>
                )}
                <span className="text-xs text-[#717d8a]">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="mt-1 text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <div className="p-4 ">
        <div className="relative flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="absolute left-2">
                  <PlusCircle className="w-5 h-5 text-[#717d8a]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add attachment</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder={`Message #${channel.name}`}
            className="pl-12 pr-12 py-6 bg-white "
          />

          <div className="absolute right-2 flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Smile className="w-5 h-5 text-[#717d8a]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Add emoji</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handleSendMessage}>
                    <Send className="w-5 h-5 text-[#717d8a]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Send message</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ChatArea };