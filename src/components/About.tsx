import React, { useEffect, useRef } from 'react';
import { Target, Users, Lightbulb, Globe } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Target className="h-12 w-12 text-purple-600" />,
      title: 'Leadership Development',
      description: 'Intensive training and mentorship from global leaders and industry experts.',
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: 'Global Network',
      description: 'Connect with passionate young leaders from over 100 countries.',
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-purple-600" />,
      title: 'Innovation Hub',
      description: 'Develop solutions for pressing global challenges through collaborative projects.',
    },
    {
      icon: <Globe className="h-12 w-12 text-purple-600" />,
      title: 'Sustainable Impact',
      description: 'Learn to create lasting change aligned with UN Sustainable Development Goals.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">About the Summit</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Shaping Tomorrow's Leaders
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Global Youth Leadership Summit 2025 is a transformative gathering designed for young visionaries aged 16-30. This premier event brings together emerging leaders, innovators, and changemakers to address global challenges through fresh perspectives and bold solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Through interactive workshops, mentorship sessions, and collaborative projects, participants will develop crucial leadership skills while working on real-world initiatives aligned with the UN Sustainable Development Goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="animate-on-scroll opacity-0 transition-all duration-1000 hover:shadow-lg p-6 rounded-lg border border-gray-100 hover:border-purple-100 bg-white group"
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;