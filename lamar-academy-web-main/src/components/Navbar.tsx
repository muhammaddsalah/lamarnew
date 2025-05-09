import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X, Facebook, MessageCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const courseOptions = {
  'سنتر الدكتور': [
    { id: '1', name: 'المرحلة الابتدائية العامة', price: '150-500' },
    { id: '2', name: 'الصف السادس' },
    { id: '3', name: 'المرحلة الإعدادية العامة', price: 570 },
    { id: '4', name: 'المرحلة الثانوية العامة', price: 300 },
    { id: '5', name: 'اللغات والتجريبي والانترناشيونال', price: 380 },
    { id: '7', name: 'المرحلة الثانوية برايفت', price: '(تواصل مع السنتر)' },
    { id: '11', name: 'دروس', price: 570 }
  ],
  'قسم الكورسات': [
    { id: '8', name: 'كورس الإملاء', price: 500, description: 'شهرياً' },
    { id: '9', name: 'كورس النحو', price: 450, description: 'شهرياً' },
    { id: '10', name: 'كورس الخط', price: 500, description: 'شهرياً' },
    { id: '6', name: 'كورس الفونيكس أو جرامر', price: 427.5 },
    { id: '26', name: 'كورس الجرامر الإنجليزي', price: 450, bookPrice: 400 }
  ],
  'قسم التأسيس': [
    { id: '20', name: 'تأسيس اللغة العربية (مجموعات)', price: 200 },
    { id: '21', name: 'تأسيس اللغة العربية (بيرايفت)', price: 500 },
    { id: '22', name: 'تأسيس الماث (مجموعات)', price: 300 },
    { id: '23', name: 'تأسيس الماث (بيرايفت)', price: 550 },
    { id: '24', name: 'تأسيس اللغة الإنجليزية (مجموعات)', price: 300 },
    { id: '25', name: 'تأسيس اللغة الإنجليزية (بيرايفت)', price: 600 }
  ],
  'قسم الحضانة': [
    { id: '8', name: 'الحضانة', price: 850 }
  ],
  'دورة البرمجة': [
    { id: '9', name: 'برمجة للأطفال', price: 1500 },
    { id: '10', name: 'برمجة للكبار', price: 2500 }
  ],
  'أكاديمية اللغات': [
    { id: '11', name: 'اللغة الإنجليزية للأطفال (من 5 سنوات)', price: 450, bookPrice: 400, description: 'منهج الفونيكس' },
    { id: '12', name: 'اللغة الفرنسية للأطفال', price: 450, bookPrice: 400 },
    { id: '13', name: 'اللغة الألمانية للأطفال', price: 450, bookPrice: 400 },
    { id: '14', name: 'اللغة الإنجليزية للكبار', price: 1500 },
    { id: '15', name: 'اللغة الإيطالية للكبار', price: 3000 },
    { id: '16', name: 'اللغة الألمانية للكبار', price: 2500 },
    { id: '17', name: 'اللغة الصينية للكبار', price: 3000 }
  ],
  'دورة القرآن الكريم': [
    { id: '18', name: 'تحفيظ القرآن (مجموعات)', price: 250, description: 'حصتين أسبوعياً' },
    { id: '19', name: 'تحفيظ القرآن (بيرايفت)', price: 550, description: 'حصتين أسبوعياً' }
  ],
  'دورة اللغة العربية': [
    { id: '15', name: 'قواعد اللغة العربية' },
    { id: '16', name: 'البلاغة والنصوص' }
  ],
  'قسم المهارات الخاصة': [
    { id: '17', name: 'تنمية المهارات' },
    { id: '18', name: 'تطوير الذات' }
  ]
};

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{section: string, course: any}>>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results: Array<{section: string, course: any}> = [];
    Object.entries(courseOptions).forEach(([section, courses]) => {
      courses.forEach(course => {
        if (course.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({ section, course });
        }
      });
    });

    setSearchResults(results);
    setShowResults(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setShowResults(false);
    }
  };

  return (
    <motion.header 
      className={`w-full py-2 bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-full p-2 shadow-md">
              <img 
                src="/lovable-uploads/d318ad80-e3b4-4b04-a85d-4f31b78b8fe7.png" 
                alt="Lamar Academy Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-white" 
              />
            </div>
          </motion.div>
          <div className="flex flex-col">
            <motion.h1 
              className="text-sm md:text-lg font-bold text-lamar-primary"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {t('site.title')}
            </motion.h1>
            <motion.p 
              className="text-xs md:text-sm text-gray-600"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {t('site.slogan')}
            </motion.p>
          </div>
        </motion.div>

        {/* شريط البحث */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 relative" ref={searchRef}>
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن الدورات..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.trim() === '') {
                    setShowResults(false);
                  } else {
                    handleSearch(e as any);
                  }
                }}
                className="w-full bg-gray-100 text-gray-900 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </form>
          
          {/* نتائج البحث */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
              {searchResults.map((result, index) => (
                <div 
                  key={index}
                  className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  onClick={() => {
                    scrollToSection(result.section.toLowerCase().replace(/\s+/g, '-'));
                    setShowResults(false);
                  }}
                >
                  <div className="font-medium text-gray-900">{result.course.name}</div>
                  <div className="text-sm text-gray-600">{result.section}</div>
                  {result.course.price && (
                    <div className="text-sm text-blue-600">
                      {typeof result.course.price === 'string' ? result.course.price : `${result.course.price} ج.م`}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollToSection('courses')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
          >
            {t('nav.courses')}
          </button>
          <button
            onClick={() => window.open('https://wa.me/201000570375?text=مرحباً، أود التواصل مع أكاديمية لمار', '_blank')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
          >
            تواصل معنا
          </button>
          <button
            onClick={() => scrollToSection('address')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
          >
            {t('address.title')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-lamar-primary rounded-md"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <motion.div 
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg overflow-y-auto"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-lamar-primary">القائمة</h2>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>

                {/* شريط البحث للموبايل */}
                <div className="mb-4" ref={searchRef}>
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="ابحث عن الدورات..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          if (e.target.value.trim() === '') {
                            setShowResults(false);
                          } else {
                            handleSearch(e as any);
                          }
                        }}
                        className="w-full bg-gray-100 text-gray-900 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                    </div>
                  </form>
                  
                  {/* نتائج البحث للموبايل */}
                  {showResults && searchResults.length > 0 && (
                    <div className="mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <div 
                          key={index}
                          className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                          onClick={() => {
                            scrollToSection(result.section.toLowerCase().replace(/\s+/g, '-'));
                            setIsMenuOpen(false);
                            setShowResults(false);
                          }}
                        >
                          <div className="font-medium text-gray-900">{result.course.name}</div>
                          <div className="text-sm text-gray-600">{result.section}</div>
                          {result.course.price && (
                            <div className="text-sm text-blue-600">
                              {typeof result.course.price === 'string' ? result.course.price : `${result.course.price} ج.م`}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection('courses')}
                    className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {t('nav.courses')}
                  </button>
                  <button
                    onClick={() => scrollToSection('address')}
                    className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {t('address.title')}
                  </button>
                  <button
                    onClick={() => window.open('https://wa.me/201000570375?text=مرحباً، أود التواصل مع أكاديمية لمار', '_blank')}
                    className="block w-full text-right px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-4"
                  >
                    تواصل معنا
                  </button>
                </div>
                <div className="mt-8 space-y-4 border-t pt-4">
                  <a 
                    href="https://wa.me/201000570375" 
                    target="_blank" 
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors px-4 py-2 rounded-md hover:bg-green-50"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">واتساب</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1C57msGqtV/?mibextid=wwXIfr" 
                    target="_blank" 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors px-4 py-2 rounded-md hover:bg-blue-50"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="font-medium">فيسبوك</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
