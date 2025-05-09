import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import FeatureCard from './FeatureCard';
import { Book, BookOpen, Code, GraduationCap, Languages, Users, Baby, School, BookText, BookMarked, Sparkles, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingForm from './BookingForm';

const Features = () => {
  const { t } = useLanguage();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleBookNow = (courseName: string) => {
    setSelectedCourse(courseName);
    setShowBookingForm(true);
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">دوراتنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من الدورات التعليمية لتنمية مهاراتك وتطوير قدراتك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<School className="h-12 w-12" />}
            title="سنتر الدكتور"
            description="دروس خصوصية لجميع المراحل التعليمية مع نخبة من المدرسين المتخصصين"
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('سنتر الدكتور')}
            buttonClassName="bg-indigo-600 hover:bg-indigo-700 text-white"
            color="bg-indigo-600"
          />
          <FeatureCard
            icon={<BookMarked className="h-12 w-12" />}
            title="قسم الكورسات"
            description="بالاشتراك مع سنتر الدكتور - كورسات متخصصة في اللغة العربية والإملاء والخط والفونيكس والجرامر الإنجليزي"
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('قسم الكورسات')}
            buttonClassName="bg-teal-600 hover:bg-teal-700 text-white"
            color="bg-teal-600"
          />
          <FeatureCard
            icon={<BookText className="h-12 w-12" />}
            title="قسم التأسيس"
            description="تأسيس قوي في المواد الأساسية للطلاب من جميع المراحل"
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('قسم التأسيس')}
            buttonClassName="bg-purple-600 hover:bg-purple-700 text-white"
            color="bg-purple-600"
          />
          <FeatureCard
            icon={<Baby className="h-12 w-12" />}
            title="قسم الحضانة"
            description="رعاية وتعليم الأطفال من سن 3 إلى 6 سنوات في بيئة آمنة ومحفزة"
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('قسم الحضانة')}
            buttonClassName="bg-pink-500 hover:bg-pink-600 text-white"
            color="bg-pink-500"
          />
          <FeatureCard
            icon={<Code className="h-12 w-12" />}
            title="دورة البرمجة"
            description={t('section.programming.desc')}
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('دورة البرمجة')}
            buttonClassName="bg-red-600 hover:bg-red-700 text-white"
            color="bg-lamar-primary"
          />
          <FeatureCard
            icon={<Languages className="h-12 w-12" />}
            title="أكاديمية اللغات"
            description={t('section.languages.desc')}
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('أكاديمية اللغات')}
            buttonClassName="bg-orange-500 hover:bg-orange-600 text-white"
            color="bg-lamar-secondary"
          />
          <FeatureCard
            icon={<BookOpen className="h-12 w-12" />}
            title="دورة القرآن الكريم"
            description={t('section.quran.desc')}
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('دورة القرآن الكريم')}
            buttonClassName="bg-lamar-primary hover:bg-lamar-secondary text-white"
            color="bg-green-600"
          />
          <FeatureCard
            icon={<Book className="h-12 w-12" />}
            title="دورة اللغة العربية"
            description={t('section.arabic.desc')}
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('دورة اللغة العربية')}
            buttonClassName="bg-lamar-primary hover:bg-lamar-secondary text-white"
            color="bg-amber-600"
          />
          <FeatureCard
            icon={<Users className="h-12 w-12" />}
            title="قسم المهارات الخاصة"
            description={t('section.special.desc')}
            buttonText={t('btn.book')}
            buttonAction={() => handleBookNow('قسم المهارات الخاصة')}
            buttonClassName="bg-lamar-primary hover:bg-lamar-secondary text-white"
            color="bg-red-600"
          />
          <FeatureCard 
            title="لماذا تختارنا؟"
            description={[
              t('why.reason1'), 
              t('why.reason2'),
              t('why.reason3'),
              t('why.reason4'),
              t('why.reason5')
            ].join('\n• ')}
            icon={<GraduationCap className="h-6 w-6 text-blue-600" />}
            color="bg-blue-600"
          />
          <FeatureCard 
            title="قصة نجاح"
            description="قصة طالب في الصف الخامس لم يكن يعرف القراءة والكتابة، ووالدته كانت مقررة تدخله دمج. لم نوافق واشتغلنا معاه تأسيس عربي وبيرايفت لكل المواد. الآن الطالب في الصف السادس يكتب ويقرأ بأمتياز. أي حد نفسه ابنه أو بنته يبقوا كده يتواصل معانا."
            icon={<Sparkles className="h-6 w-6 text-green-600" />}
            color="bg-green-600"
          />
          <FeatureCard 
            title="من خبراتنا"
            description={`جالنا طالب بالصف الخامس
لم يعرف القراءه والكتابه
ووالدته كانت مقرره تدخله دمج خلاص ..
طبعا لم نوافق واشتغلنا معاه تأسيس عربى وبيرايفيت لكل المواد
الان الطالب فى الصف السادس يكتب ويقرأ بأمتياز ...
اى حد نفسه ابنه أو بنته يبقوا كده يتواصل معانا

عاوز تبقى متميز فى تخصصات التحاليل الطبيه؟ تابعنا
عاوز تفتح مشروع ومش عارف تحسبها ازاى؟ تابعنا
عاوز تبنى مستقبل تعليم اولادك؟ تابعنا
محتاج كورس تسويق Marketing؟ تابعنا
نفسك تشتغل فى دعاية الادويه؟ تابعنا
عاوز تتعلم لغات؟ تابعنا`}
            icon={<BookOpen className="h-6 w-6 text-blue-600" />}
            color="bg-blue-600"
          />
        </div>
      </div>
      {showBookingForm && (
        <BookingForm
          courseName={selectedCourse}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </section>
  );
};

export default Features;
