import { LucideIcon } from 'lucide-react';

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
