import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    'site.title': 'أكاديمية لمار التعليمية',
    'site.slogan': 'نعلّم جيلًا... نبني مستقبلًا',
    'nav.home': 'الرئيسية',
    'nav.courses': 'الدورات',
    'nav.languages': 'اللغات',
    'nav.programming': 'البرمجة',
    'nav.quran': 'تحفيظ القرآن',
    'nav.arabic': 'النحو والإملاء',
    'nav.special': 'مهارات خاصة',
    'nav.contact': 'تواصل معنا',
    'welcome.title': 'مرحبًا بكم في أكاديمية لمار التعليمية',
    'welcome.desc': 'منصتكم الشاملة للتعلّم والتطوير من مرحلة التأسيس وحتى الثانوية العامة، بالإضافة إلى برامج متكاملة في اللغات، البرمجة، وتحفيظ القرآن، بإشراف أمهر المعلمين والمتخصصين. نحن نؤمن بأن كل طالب لديه القدرة على التميز، ونسعى جاهدين لمساعدته في تحقيق أقصى إمكاناته. قصة نجاحنا مع طالب الصف الخامس الذي لم يكن يعرف القراءة والكتابة، والآن في الصف السادس يقرأ ويكتب بأمتياز، هي شهادة على فعالية برامجنا التعليمية.',
    'address.title': 'مقراتنا',
    'address.1': 'بنها - الفلل قبل كوبرى الفحص',
    'address.2': 'بنها - الاهرام - أمام نقابة الصيادلة',
    'address.3': 'كفر الجزار',
    'address.4': 'شارع الكوبرى ببنها',
    'section.programming': 'تعلم البرمجة',
    'section.programming.desc': 'ابدأ رحلتك في عالم التكنولوجيا من الصفر!',
    'section.languages': 'أكاديمية اللغات',
    'section.languages.desc': 'برامج احترافية لتعلم الإنجليزية، الفرنسية، والإيطالية بدءًا من سن 5 سنوات، مع أنشطة تفاعلية وألعاب تعليمية بإشراف معلمين متخصصين.',
    'section.quran': 'كورس تحفيظ القرآن الكريم',
    'section.quran.desc': 'نُحفّظ أبناءنا القرآن الكريم بأسلوب محبب وتفاعلي، مع المراجعة والمتابعة المستمرة.',
    'section.arabic': 'كورس النحو والإملاء',
    'section.arabic.desc': 'نقوّي مهارات الكتابة والفهم باللغة العربية، بأسلوب بسيط يلائم مختلف المراحل الدراسية.',
    'section.special': 'قسم الأطفال – المهارات الخاصة',
    'section.special.desc': 'دورات متخصصة في التخاطب وفرط الحركة وتشتت الانتباه (ADHD) بإشراف مختصين مؤهلين لمساعدة الأطفال على النمو والتعلم بثقة.',
    'why.title': 'لماذا تختار أكاديمية لمار؟',
    'why.reason1': 'تعليم متميز من التأسيس إلى الثانوية مع برامج تأسيس قوية في جميع المواد',
    'why.reason2': 'مدربون معتمدون وأكفاء مع خبرة في التعامل مع مختلف الحالات',
    'why.reason3': 'برامج تعليمية شاملة ومتجددة تتناسب مع احتياجات كل طالب',
    'why.reason4': 'دعم نفسي وتربوي للطلاب وأولياء الأمور',
    'why.reason5': 'بيئة تعليمية مشجعة وآمنة تساعد على تحقيق أفضل النتائج',
    'cta': 'انضم إلينا اليوم وابدأ رحلتك التعليمية معنا!',
    'btn.book': 'احجز الآن',
  },
  en: {
    'site.title': 'Lamar Educational Academy',
    'site.slogan': 'Teaching a Generation... Building a Future',
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.languages': 'Languages',
    'nav.programming': 'Programming',
    'nav.quran': 'Quran Memorization',
    'nav.arabic': 'Arabic Grammar',
    'nav.special': 'Special Skills',
    'nav.contact': 'Contact Us',
    'welcome.title': 'Welcome to Lamar Educational Academy',
    'welcome.desc': 'Your comprehensive platform for learning and development from foundation to high school, with integrated programs in languages, programming, and Quran memorization, supervised by skilled teachers and specialists.',
    'address.title': 'Our Locations',
    'address.1': 'Benha - Before El-Fahs Bridge - Villas',
    'address.2': 'Benha - Al-Ahram - In front of the Pharmacy Syndicate',
    'section.programming': 'Learn Programming',
    'section.programming.desc': 'Start your journey in the world of technology from scratch!',
    'section.languages': 'Languages Academy',
    'section.languages.desc': 'Professional programs for learning English, French, and Italian starting from age 5, with interactive activities and educational games supervised by specialized teachers.',
    'section.quran': 'Quran Memorization Course',
    'section.quran.desc': 'We help our children memorize the Quran in an engaging and interactive way, with continuous review and follow-up.',
    'section.arabic': 'Grammar and Spelling Course',
    'section.arabic.desc': 'We strengthen writing and comprehension skills in Arabic, with a simple approach suitable for different educational stages.',
    'section.special': 'Children\'s Section - Special Skills',
    'section.special.desc': 'Specialized courses in speech therapy and attention deficit hyperactivity disorder (ADHD) supervised by qualified specialists to help children grow and learn with confidence.',
    'why.title': 'Why Choose Lamar Academy?',
    'why.reason1': 'Distinguished education from foundation to high school',
    'why.reason2': 'Certified and competent trainers',
    'why.reason3': 'Comprehensive and renewable educational programs',
    'why.reason4': 'Psychological and educational support for students',
    'why.reason5': 'Encouraging and safe learning environment',
    'cta': 'Join us today and start your educational journey with us!',
    'btn.book': 'Book Now',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
