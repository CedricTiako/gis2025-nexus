export interface Speaker {
  id: number;
  name: string;
  role: string;
  organization: string;
  image: string;
  category: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  speakers: string[];
  time: string;
  location: string;
  type: 'keynote' | 'panel' | 'workshop' | 'networking';
}

export interface DaySchedule {
  date: string;
  title: string;
  events: Event[];
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'document' | 'video' | 'publication' | 'website';
  link: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}