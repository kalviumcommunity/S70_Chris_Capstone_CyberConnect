import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, MessageSquare, Shield, AlertTriangle, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

// Sample blog posts data
const posts = [
  {
    id: 1,
    title: 'How to protect yourself from phishing attacks',
    description: 'Learn the signs of phishing emails and how to avoid becoming a victim.',
    category: 'Security Tips',
    date: 'Mar 15, 2023',
    likes: 42,
    comments: 12,
    author: {
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    icon: AlertTriangle,
  },
  {
    id: 2,
    title: 'The rise of ransomware: What you need to know',
    description: 'Understand how ransomware works and the steps you can take to protect your data.',
    category: 'Threats',
    date: 'Apr 2, 2023',
    likes: 38,
    comments: 8,
    author: {
      name: 'Sarah Williams',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    icon: Shield,
  },
  {
    id: 3,
    title: 'Building a cyber-aware culture in your organization',
    description: 'Strategies for fostering security awareness among your team members.',
    category: 'Best Practices',
    date: 'Apr 18, 2023',
    likes: 27,
    comments: 5,
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    icon: Users,
  },
];

export function FeaturedPosts() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Insights</h2>
            <p className="text-[#717d8a]">
              The latest discussions and articles from our community
            </p>
          </div>
          <Link to="/community">
            <Button variant="outline" className="gap-1">
              View all
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`overflow-hidden transition-all duration-300 h-full hover-scale ${hoveredCard === post.id ? "border-[#1e90ff] shadow-lg" : ""}`}
              >
                <CardHeader className="pb-3 relative">
                  <div className="absolute -right-4 -top-4 w-16 h-16 flex items-center justify-center text-[#1e90ff]/10">
                    <post.icon className="w-12 h-12" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#1e90ff]/10 text-[#1e90ff]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#717d8a]">
                      {post.date}
                    </span>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between text-sm text-[#717d8a]">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}