import { useState } from 'react';
import { Hash, ChevronDown, Plus, Settings, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/Button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const channelCategories = [
  {
    id: 'general',
    name: 'General',
    channels: [
      { id: 'welcome', name: 'welcome' },
      { id: 'announcements', name: 'announcements' },
      { id: 'introductions', name: 'introductions', unread: true },
    ],
  },
  {
    id: 'security-topics',
    name: 'Security Topics',
    channels: [
      { id: 'phishing', name: 'phishing', mentioned: true },
      { id: 'ransomware', name: 'ransomware' },
      { id: 'social-engineering', name: 'social-engineering' },
      { id: 'privacy', name: 'privacy' },
      { id: 'compliance', name: 'compliance' },
    ],
  },
  {
    id: 'help',
    name: 'Help & Support',
    channels: [
      { id: 'get-help', name: 'get-help', unread: true },
      { id: 'report-incident', name: 'report-incident' },
      { id: 'resources', name: 'resources' },
    ],
  },
];

function ChannelList({ activeChannel, onChannelSelect }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState(
    channelCategories.map(category => category.id)
  );

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Filter channels based on search query
  const filteredCategories = channelCategories.map(category => ({
    ...category,
    channels: category.channels.filter(channel =>
      channel.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.channels.length > 0);

  return (
    <div className="w-full h-full bg-[#f3f7f9] ">
      <div className="p-3 ">
        <div className="flex items-center gap-2 mx-1 my-1.5">
          <Search className="w-4 h-4 text-[#717d8a]" />
          <Input
            type="text"
            placeholder="Search channels"
            className="h-8 bg-[white]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100%-56px)] p-2">
        {filteredCategories.map(category => (
          <Collapsible
            key={category.id}
            open={openCategories.includes(category.id)}
            onOpenChange={() => toggleCategory(category.id)}
            className="mb-2"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-1 py-1.5 text-xs font-semibold text-black rounded group">
              <span className="flex items-center gap-1">
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openCategories.includes(category.id) ? "rotate-0" : "rotate-270"}`} />
                {category.name.toUpperCase()}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity "
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Add channel to ${category.name}`);
                }}
              >
                <Plus className="w-3.5 h-3.5" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1 space-y-0.5">
              {category.channels.map(channel => (
                <button
                  key={channel.id}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm group transition-colors  text-black 
                    ${activeChannel === channel.id ? "bg-[#1e90ff]/10 text-[#1e90ff]" : "hover:bg-[#a0a0a0]  text-[#e6f0f7]"}
                    ${channel.unread && "font-medium"}`}
                  onClick={() => onChannelSelect(channel.id)}
                >
                  <Hash className="w-4 h-4" />
                  <span className="truncate">{channel.name}</span>
                  {channel.unread && (
                    <div className="w-2 h-2 rounded-full bg-[#1e90ff] ml-auto"></div>
                  )}
                  {channel.mentioned && (
                    <div className="px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-[#1e90ff] text-[#f4f8fb] ml-auto">
                      @
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6 ml-auto opacity-0 group-hover:opacity-100 "
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`Settings for ${channel.name}`);
                    }}
                  >
                    <Settings className="w-3.5 h-3.5" />
                  </Button>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}

export { ChannelList };