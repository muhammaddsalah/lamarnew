import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTA = () => {
  const { language, t } = useLanguage();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`bg-lamar-primary text-white py-16 ${language === 'ar' ? 'font-cairo' : ''} relative overflow-hidden`}>
      {/* إضافة تأثيرات الخلفية المتحركة */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full"
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full"
        animate={{ 
          x: [0, -50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('cta')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            className="bg-white text-lamar-primary hover:bg-lamar-light hover:text-lamar-primary transition-all"
            onClick={() => window.open('https://wa.me/201000570375?text=مرحباً، أود الحجز في أكاديمية لمار%0Aالاسم: %0Aرقم الهاتف: %0Aالفرع المفضل: %0Aالدورة المطلوبة:', '_blank')}
          >
            {t('btn.book')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
