import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';
import { Button } from '@/components/ui/button';
import { Brain, Users, Award, Sparkles } from 'lucide-react';

const SpecialSkills = () => {
  const { language, t } = useLanguage();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-lamar-light to-white ${language === 'ar' ? 'font-cairo' : ''}`}>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lamar-primary/10 to-lamar-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-lamar-primary mb-6">
              قسم المهارات الخاصة
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              نقدم برامج متخصصة لتنمية المهارات الفردية وتطوير القدرات الذهنية والبدنية
            </p>
            <Button 
              size="lg"
              className="bg-lamar-primary hover:bg-lamar-secondary text-white"
              onClick={() => window.open('https://wa.me/201000570375?text=مرحباً، أود الحجز في قسم المهارات الخاصة%0Aالاسم: %0Aرقم الهاتف: %0Aالفرع: الفرع الثاني - بنها الاهرام', '_blank')}
            >
              احجز الآن
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              variants={fadeInUpVariants}
            >
              <Brain className="h-12 w-12 text-lamar-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">تنمية المهارات الذهنية</h3>
              <p className="text-gray-600">
                برامج متخصصة لتنمية الذكاء والتفكير الإبداعي وحل المشكلات
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              variants={fadeInUpVariants}
            >
              <Users className="h-12 w-12 text-lamar-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">المهارات الاجتماعية</h3>
              <p className="text-gray-600">
                تطوير مهارات التواصل والقيادة والعمل الجماعي
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              variants={fadeInUpVariants}
            >
              <Award className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">التميز الأكاديمي</h3>
              <p className="text-gray-600">
                برامج متقدمة للطلاب المتميزين وتنمية المهارات الأكاديمية
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-lamar-primary mb-4">لماذا تختارنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم برامج متخصصة ومتكاملة لتنمية المهارات الخاصة تحت إشراف نخبة من المتخصصين
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Sparkles className="h-6 w-6 text-lamar-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">برامج مخصصة</h3>
                <p className="text-gray-600">نقدم برامج تناسب كل طالب حسب قدراته واحتياجاته</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Sparkles className="h-6 w-6 text-lamar-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">خبراء متخصصون</h3>
                <p className="text-gray-600">فريق من الخبراء المتخصصين في تنمية المهارات الخاصة</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lamar-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">ابدأ رحلة التميز معنا اليوم</h2>
            <Button 
              size="lg"
              className="bg-white text-lamar-primary hover:bg-lamar-light"
              onClick={() => window.open('https://wa.me/201000570375?text=مرحباً، أود الحجز في قسم المهارات الخاصة%0Aالاسم: %0Aرقم الهاتف: %0Aالفرع: الفرع الثاني - بنها الاهرام', '_blank')}
            >
              احجز الآن
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpecialSkills; 