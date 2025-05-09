import React from 'react';
import { useLanguage } from './LanguageContext';
import { Facebook, MessageCircle, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-blue-400/60 text-black py-8 ${language === 'ar' ? 'font-cairo' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/d318ad80-e3b4-4b04-a85d-4f31b78b8fe7.png" 
                alt="أكاديمية لمار" 
                className="h-16 w-auto bg-white rounded-full p-2 shadow-md" 
              />
              <div className={`flex flex-col ${language === 'ar' ? 'items-end' : 'items-start'}`}>
                <h2 className="text-xl font-bold text-black">{t('site.title')}</h2>
                <p className="text-sm opacity-80 text-black">{t('site.slogan')}</p>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex flex-col gap-4 mt-4 w-full">
              <motion.a 
                href="https://www.facebook.com/share/1C57msGqtV/?mibextid=wwXIfr" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/40 backdrop-blur-sm p-3 rounded-lg hover:bg-white/60 transition-all duration-300 shadow"
              >
                <div className="bg-white p-2 rounded-full">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium text-black">تابعنا على فيسبوك</span>
              </motion.a>
              <motion.a 
                href="https://wa.me/201000570375" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/40 backdrop-blur-sm p-3 rounded-lg hover:bg-white/60 transition-all duration-300 shadow"
              >
                <div className="bg-white p-2 rounded-full">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium text-black">تواصل معنا على واتساب</span>
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div className={`text-center md:text-${language === 'ar' ? 'right' : 'left'}`}>
            <h3 className="text-xl font-bold mb-4 text-black">{t('nav.contact')}</h3>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black">تواصل معنا</h3>
              <div className="space-y-2">
                <a href="https://wa.me/201000570375" className="flex items-center gap-2 text-black hover:text-blue-700 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+201000570375</span>
                </a>
                <a href="https://www.facebook.com/share/1C57msGqtV/?mibextid=wwXIfr" className="flex items-center gap-2 text-black hover:text-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span>صفحتنا على فيسبوك</span>
                </a>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className={`text-center md:text-${language === 'ar' ? 'right' : 'left'}`}>
            <h3 className="text-xl font-bold mb-4 text-black">{t('address.title')}</h3>
            <ul className="space-y-4">
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-lg text-black">الفرع الأول</span>
                </div>
                <span className="bg-white/40 backdrop-blur-sm text-black p-3 rounded-lg text-right w-full shadow">📍 بنها - الفلل قبل كوبرى الفحص</span>
                <span className="bg-white/40 backdrop-blur-sm text-black p-3 rounded-lg text-right w-full shadow">🕒 من 11:00 ص الى 11:00 م</span>
                <span className="bg-white/40 backdrop-blur-sm text-black p-3 rounded-lg text-right w-full shadow">📞 01000570375</span>
              </li>
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-lg text-black">الفرع الثاني</span>
                </div>
                <span className="bg-white/40 backdrop-blur-sm text-black p-3 rounded-lg text-right w-full shadow">📍 بنها - الاهرام ورا نقابه الصيادله</span>
                <span className="bg-white/40 backdrop-blur-sm text-black p-3 rounded-lg text-right w-full shadow">🕒 من 11:00 ص الى 11:00 م</span>
                <span className="bg-white/40 backdrop-blur-sm text-black p-3 rounded-lg text-right w-full shadow">📞 01000570375</span>
              </li>
            </ul>
          </div>

          {/* Booking */}
          <div className={`text-center md:text-${language === 'ar' ? 'right' : 'left'}`}>
            <h3 className="text-xl font-bold mb-4 text-black">احجز معنا</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/201000570375?text=مرحباً، أود الحجز في أكاديمية اللغات%0Aالاسم: %0Aرقم الهاتف: %0Aالفرع: الفرع الأول"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-center text-black hover:text-blue-700 transition-colors"
              >
                حجز أكاديمية اللغات
              </a>
              <a
                href="https://wa.me/201000570375?text=مرحباً، أود الحجز في دورة البرمجة%0Aالاسم: %0Aرقم الهاتف: %0Aالفرع: الفرع الثاني"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-center text-black hover:text-blue-700 transition-colors"
              >
                حجز دورة البرمجة
              </a>
            </div>
          </div>
        </div>
        {/* حقوق النشر */}
        <div className="mt-8 pt-6 border-t border-black/20 text-center">
          <p className="text-black text-sm">
            جميع الحقوق محفوظة © {currentYear} أكاديمية لامار
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
