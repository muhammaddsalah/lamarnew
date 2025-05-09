import React, { useEffect } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Analytics } from '@vercel/analytics/react';
import { injectSpeedInsights } from '@vercel/speed-insights';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // إضافة تأثير حركي للعناصر عند تحميل الصفحة
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }, 100 * index);
      });
    };
    
    animateElements();
    
    // تهيئة Speed Insights
    const { setRoute } = injectSpeedInsights();
    setRoute(window.location.pathname);
  }, []);

  return (
    <div 
      className={`min-h-screen ${language === 'ar' ? 'font-cairo text-right' : ''}`} 
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Navbar />
      <main>
        <Hero />
        <section id="courses">
          <Features />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
      <section id="address">
        <Footer />
      </section>
      <Analytics />
    </div>
  );
};

export default Index;
