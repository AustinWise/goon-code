import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  image: string;
  handle: string;
  link: string;
}
