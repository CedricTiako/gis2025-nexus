import React, { useEffect, useRef } from 'react';

type Speaker = {
  id: number;
  name: string;
  role: string;
  organization: string;
  image: string;
  category: string;
};

const Speakers = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const speakers: Speaker[] = [
    {
      id: 1,
      name: 'Dr. Elena Reyes',
      role: 'Secretary General',
      organization: 'United Nations Policy Forum',
      image: 'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Keynote',
    },
    {
      id: 2,
      name: 'Prof. James Chen',
      role: 'Director',
      organization: 'Global Policy Research Institute',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Panel',
    },
    {
      id: 3,
      name: 'Hon. Maria Rodriguez',
      role: 'Minister of Foreign Affairs',
      organization: 'Republic of Costa Rica',
      image: 'https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Panel',
    },
    {
      id: 4,
      name: 'Dr. Samuel Okafor',
      role: 'Chief Economist',
      organization: 'African Development Bank',
      image: 'https://images.pexels.com/photos/8459500/pexels-photo-8459500.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workshop',
    },
    {
      id: 5,
      name: 'Sarah Nakamura',
      role: 'Executive Director',
      organization: 'Climate Policy Alliance',
      image: 'https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Panel',
    },
    {
      id: 6,
      name: 'Ambassador Thomas Miller',
      role: 'Special Envoy',
      organization: 'EU Commission on Digital Governance',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Keynote',
    },
    {
      id: 7,
      name: 'Dr. Aisha Khan',
      role: 'Senior Researcher',
      organization: 'Center for International Health Policy',
      image: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workshop',
    },
    {
      id: 8,
      name: 'Prof. Raj Patel',
      role: 'Chair',
      organization: 'Sustainable Economics Forum',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Panel',
    },
  ];

  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Keynote', 'Panel', 'Workshop'];

  const filteredSpeakers = filter === 'All' 
    ? speakers 
    : speakers.filter(speaker => speaker.category === filter);

  return (
    <section 
      id="speakers" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Featured Speakers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Global Leaders & Experts
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="flex justify-center mb-10 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-white rounded-lg shadow-sm border border-gray-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSpeakers.map((speaker, index) => (
            <div 
              key={speaker.id}
              className="animate-on-scroll opacity-0 transition-all duration-500 transform hover:-translate-y-2 group"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {speaker.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-gray-700 mb-1">{speaker.role}</p>
                  <p className="text-gray-500 text-sm">{speaker.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-500">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            View all speakers
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speakers;