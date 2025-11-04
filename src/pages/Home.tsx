import HeroCarousel from '../components/home/HeroCarousel';
import CompanyMission from '../components/home/CompanyMission';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesPreview from '../components/home/ServicesPreview';
import AttractSection from '../components/home/AttractSection';
import PaintsTechniques from '../components/home/PaintsTechniques';
import ContactCTA from '../components/home/ContactCTA';

function Home() {
  return (
    <>
      <HeroCarousel />
      <CompanyMission />
      <WhyChooseUs />
      <ServicesPreview />
      <AttractSection />
      <PaintsTechniques />
      <ContactCTA />
    </>
  );
}

export default Home;
