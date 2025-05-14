import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

type Event = {
  id: number;
  title: string;
  description: string;
  speakers: string[];
  time: string;
  location: string;
  type: 'keynote' | 'panel' | 'workshop' | 'networking';
};

type DaySchedule = {
  date: string;
  title: string;
  events: Event[];
};

const Schedule = () => {
  const scheduleData: DaySchedule[] = [
    {
      date: 'October 15, 2025',
      title: 'Day 1: Setting the Foundation',
      events: [
        {
          id: 1,
          title: 'Opening Ceremony',
          description: 'Official opening of GIS2025 with remarks from key global leaders.',
          speakers: ['Dr. Elena Reyes', 'Ambassador Thomas Miller'],
          time: '9:00 AM - 10:30 AM',
          location: 'Main Hall',
          type: 'keynote',
        },
        {
          id: 2,
          title: 'Global Challenges: A Comprehensive Overview',
          description: 'Expert panel discussing the most pressing policy challenges facing the international community.',
          speakers: ['Prof. James Chen', 'Hon. Maria Rodriguez', 'Sarah Nakamura'],
          time: '11:00 AM - 12:30 PM',
          location: 'Summit Room A',
          type: 'panel',
        },
        {
          id: 3,
          title: 'Luncheon & Networking',
          description: 'Opportunity to connect with fellow attendees and speakers.',
          speakers: [],
          time: '12:30 PM - 2:00 PM',
          location: 'Grand Terrace',
          type: 'networking',
        },
        {
          id: 4,
          title: 'Workshop: Data-Driven Policy Making',
          description: 'Interactive session on leveraging data for effective policy development.',
          speakers: ['Dr. Samuel Okafor', 'Dr. Aisha Khan'],
          time: '2:30 PM - 4:00 PM',
          location: 'Workshop Hall B',
          type: 'workshop',
        },
        {
          id: 5,
          title: 'Climate Action: Path Forward',
          description: 'Discussion on international climate policy and sustainable development goals.',
          speakers: ['Sarah Nakamura', 'Prof. Raj Patel'],
          time: '4:30 PM - 6:00 PM',
          location: 'Summit Room A',
          type: 'panel',
        },
      ],
    },
    {
      date: 'October 16, 2025',
      title: 'Day 2: Deepening Engagement',
      events: [
        {
          id: 6,
          title: 'Digital Governance in the Modern Era',
          description: 'Keynote address on the challenges and opportunities of technology in governance.',
          speakers: ['Ambassador Thomas Miller'],
          time: '9:00 AM - 10:00 AM',
          location: 'Main Hall',
          type: 'keynote',
        },
        {
          id: 7,
          title: 'Regional Perspectives on Global Cooperation',
          description: 'Panel discussion highlighting diverse regional approaches to shared challenges.',
          speakers: ['Hon. Maria Rodriguez', 'Dr. Samuel Okafor', 'Prof. James Chen'],
          time: '10:30 AM - 12:00 PM',
          location: 'Summit Room B',
          type: 'panel',
        },
        {
          id: 8,
          title: 'Luncheon & Networking',
          description: 'Continued networking opportunities with delegates and speakers.',
          speakers: [],
          time: '12:00 PM - 1:30 PM',
          location: 'Grand Terrace',
          type: 'networking',
        },
        {
          id: 9,
          title: 'Workshop: Building Resilient Institutions',
          description: 'Practical strategies for strengthening governance structures.',
          speakers: ['Prof. Raj Patel', 'Dr. Elena Reyes'],
          time: '2:00 PM - 3:30 PM',
          location: 'Workshop Hall A',
          type: 'workshop',
        },
        {
          id: 10,
          title: 'Global Health Security',
          description: 'Lessons learned and future preparedness in global health governance.',
          speakers: ['Dr. Aisha Khan', 'Sarah Nakamura'],
          time: '4:00 PM - 5:30 PM',
          location: 'Summit Room A',
          type: 'panel',
        },
      ],
    },
    {
      date: 'October 17, 2025',
      title: 'Day 3: Future Directions',
      events: [
        {
          id: 11,
          title: 'Economic Resilience in Uncertain Times',
          description: 'Strategies for building sustainable and inclusive economic systems.',
          speakers: ['Dr. Samuel Okafor', 'Prof. Raj Patel'],
          time: '9:00 AM - 10:30 AM',
          location: 'Summit Room B',
          type: 'panel',
        },
        {
          id: 12,
          title: 'Workshop: Collaborative Policy Implementation',
          description: 'Interactive session on translating summit outcomes into actionable policies.',
          speakers: ['Dr. Elena Reyes', 'Hon. Maria Rodriguez'],
          time: '11:00 AM - 12:30 PM',
          location: 'Workshop Hall B',
          type: 'workshop',
        },
        {
          id: 13,
          title: 'Luncheon & Networking',
          description: 'Final networking session with delegates and speakers.',
          speakers: [],
          time: '12:30 PM - 2:00 PM',
          location: 'Grand Terrace',
          type: 'networking',
        },
        {
          id: 14,
          title: 'The Path Forward: GIS2025 Declaration',
          description: 'Presentation of the summit outcomes and joint declaration.',
          speakers: ['Dr. Elena Reyes', 'Ambassador Thomas Miller', 'Prof. James Chen'],
          time: '2:30 PM - 4:00 PM',
          location: 'Main Hall',
          type: 'keynote',
        },
        {
          id: 15,
          title: 'Closing Ceremony',
          description: 'Official conclusion of GIS2025 with commitments to action.',
          speakers: ['Dr. Elena Reyes'],
          time: '4:30 PM - 5:30 PM',
          location: 'Main Hall',
          type: 'keynote',
        },
      ],
    },
  ];

  const [activeDay, setActiveDay] = useState<number>(0);

  const getEventTypeStyles = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'border-blue-500 bg-blue-50';
      case 'panel':
        return 'border-green-500 bg-green-50';
      case 'workshop':
        return 'border-orange-500 bg-orange-50';
      case 'networking':
        return 'border-purple-500 bg-purple-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'text-blue-700 bg-blue-100';
      case 'panel':
        return 'text-green-700 bg-green-100';
      case 'workshop':
        return 'text-orange-700 bg-orange-100';
      case 'networking':
        return 'text-purple-700 bg-purple-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Summit Agenda</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Program Schedule
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {scheduleData.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeDay === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {day.date}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {scheduleData[activeDay].title}
          </h3>
          
          <div className="space-y-6">
            {scheduleData[activeDay].events.map((event) => (
              <div 
                key={event.id} 
                className={`border-l-4 p-5 rounded-lg shadow-sm bg-white transition-all duration-300 hover:shadow-md ${getEventTypeStyles(event.type)}`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 ${getEventTypeColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                {event.speakers.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Speakers:</p>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, idx) => (
                        <span key={idx} className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Download Full Schedule (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;