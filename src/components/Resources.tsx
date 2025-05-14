import React from 'react';
import { FileText, Download, ExternalLink, Book, Video } from 'lucide-react';

type Resource = {
  id: number;
  title: string;
  description: string;
  type: 'document' | 'video' | 'publication' | 'website';
  link: string;
};

const Resources = () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: 'GIS2025 Policy Framework',
      description: 'Comprehensive overview of the summit\'s policy priorities and objectives.',
      type: 'document',
      link: '#',
    },
    {
      id: 2,
      title: 'Climate Action Blueprint',
      description: 'Strategic approaches to accelerating global climate initiatives.',
      type: 'publication',
      link: '#',
    },
    {
      id: 3,
      title: 'Digital Governance: Challenges and Opportunities',
      description: 'Analysis of emerging trends in technology regulation and governance.',
      type: 'document',
      link: '#',
    },
    {
      id: 4,
      title: 'GIS2023 Outcomes Report',
      description: 'Results and impact assessment from the previous Global Initiative Summit.',
      type: 'publication',
      link: '#',
    },
    {
      id: 5,
      title: 'Introduction to GIS2025',
      description: 'Short video presentation on the objectives and structure of this year\'s summit.',
      type: 'video',
      link: '#',
    },
    {
      id: 6,
      title: 'Nexus Policy Institute Research Portal',
      description: 'Access to research publications, data, and analysis from the Institute.',
      type: 'website',
      link: '#',
    },
    {
      id: 7,
      title: 'Economic Resilience Framework',
      description: 'Strategies for building inclusive and sustainable economic systems.',
      type: 'document',
      link: '#',
    },
    {
      id: 8,
      title: 'Policy Implementation Toolkit',
      description: 'Practical resources for translating policy into effective action.',
      type: 'publication',
      link: '#',
    },
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'publication':
        return <Book className="h-5 w-5" />;
      case 'website':
        return <ExternalLink className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getResourceTypeLabel = (type: string) => {
    switch (type) {
      case 'document':
        return 'Policy Document';
      case 'video':
        return 'Video Resource';
      case 'publication':
        return 'Publication';
      case 'website':
        return 'Website';
      default:
        return type;
    }
  };

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Knowledge Base</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Summit Resources
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Access key documents, publications, and multimedia resources related to GIS2025 and global policy initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4 text-blue-600">
                {getResourceIcon(resource.type)}
                <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1 ml-2">
                  {getResourceTypeLabel(resource.type)}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              
              <a 
                href={resource.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
              >
                {resource.type === 'document' || resource.type === 'publication' ? (
                  <>
                    <Download size={16} className="mr-1" />
                    Download
                  </>
                ) : (
                  <>
                    <ExternalLink size={16} className="mr-1" />
                    Access Resource
                  </>
                )}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Need Additional Resources?</h3>
          <p className="text-gray-700 mb-4">
            Registered participants gain access to our comprehensive digital library with additional reports, research papers, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="#register"
              className="inline-block bg-blue-600 text-white font-medium px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              Register for Full Access
            </a>
            <a 
              href="#"
              className="inline-block bg-white text-blue-600 font-medium px-5 py-2 rounded-md border border-blue-200 hover:bg-blue-50 transition-colors duration-200 text-center"
            >
              Browse Public Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;