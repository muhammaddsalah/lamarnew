import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={`bg-gradient-to-b from-lamar-light to-white py-16 ${language === 'ar' ? 'font-cairo' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className={`md:w-1/2 text-center md:text-${language === 'ar' ? 'right' : 'left'}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-lamar-primary">
              {t('welcome.title')}
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              {t('welcome.desc')}
            </p>
            <Button 
              size="lg" 
              className="bg-lamar-primary hover:bg-lamar-secondary text-white transform hover:scale-105 transition-all"
              onClick={() => window.open('https://wa.me/201000570375?text=مرحباً، أود الحجز في أكاديمية لمار%0Aالاسم: %0Aرقم الهاتف: %0Aالفرع المفضل: %0Aالدورة المطلوبة:', '_blank')}
            >
              {t('btn.book')}
            </Button>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-lamar-primary to-lamar-secondary rounded-lg blur opacity-30"></div>
              <motion.div 
                className="relative bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <h2 className="text-3xl font-bold text-lamar-primary mb-4 text-center">
                  {t('site.slogan')}
                </h2>
                <p className="text-lg">
                  {t('welcome.desc')}
                </p>
                <motion.ul 
                  className="mt-4 space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li className="flex items-center" variants={itemVariants}>
                    <span className="bg-lamar-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                    {t('why.reason1')}
                  </motion.li>
                  <motion.li className="flex items-center" variants={itemVariants}>
                    <span className="bg-lamar-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                    {t('why.reason2')}
                  </motion.li>
                  <motion.li className="flex items-center" variants={itemVariants}>
                    <span className="bg-lamar-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                    {t('why.reason3')}
                  </motion.li>
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
