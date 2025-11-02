export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  points: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
