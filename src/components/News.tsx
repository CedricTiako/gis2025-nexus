import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'GIS2025 Registration Opens with Record Interest',
      excerpt: 'Over 2,000 delegates registered in the first 48 hours as anticipation builds for the summit.',
      date: 'June 15, 2025',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Announcement',
    },
    {
      id: 2,
      title: 'Major Policy Initiatives to be Unveiled at GIS2025',
      excerpt: 'Several global organizations plan to launch new frameworks at this year\'s summit.',
      date: 'June 8, 2025',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Preview',
    },
    {
      id: 3,
      title: 'Spotlight: How GIS is Reshaping International Cooperation',
      excerpt: 'Analysis of the growing impact of the Global Initiative Summit on policy development.',
      date: 'May 27, 2025',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Analysis',
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Latest Updates</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            News & Announcements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <a 
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50 transition-colors duration-200"
          >
            View All News & Updates
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;