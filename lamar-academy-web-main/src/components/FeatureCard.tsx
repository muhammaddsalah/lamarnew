import React, { useState } from 'react';
import { Book, BookOpen, Code, GraduationCap, Languages, Users, Baby, School, Percent } from 'lucide-react';
import BookingForm from './BookingForm';
import { useLanguage } from './LanguageContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  buttonText?: string;
  buttonAction?: () => void;
  buttonClassName?: string;
}

const courseOptions = {
  'سنتر الدكتور': [
    { 
      id: '1', 
      name: 'المرحلة الابتدائية العامة',
      type: 'special',
      options: {
        حضوري: {
          subjects: ['عربي', 'حساب', 'ماث', 'انجليزي'],
          prices: {
            عربي: {
              students: [
                { count: 5, price: 250 },
                { count: 10, price: 200 },
                { count: 20, price: 170 }
              ]
            },
            حساب: {
              students: [
                { count: 5, price: 250 },
                { count: 10, price: 200 },
                { count: 20, price: 170 }
              ]
            },
            ماث: {
              price: 350
            },
            انجليزي: {
              price: 400
            }
          }
        },
        برايفت: {
          subjects: ['عربي', 'حساب', 'ماث', 'انجليزي'],
          price: 500
        }
      }
    },
    { 
      id: '2', 
      name: 'الصف السادس',
      type: 'special',
      options: {
        حضوري: {
          subjects: ['عربي', 'حساب', 'ماث', 'انجليزي'],
          price: 250
        },
        برايفت: {
          subjects: ['عربي', 'حساب', 'ماث', 'انجليزي'],
          price: 600
        }
      }
    },
    { id: '3', name: 'المرحلة الإعدادية العامة', price: 1000 },
    { 
      id: '4', 
      name: 'المرحلة الثانوية العامة',
      type: 'special',
      options: {
        حضوري: {
          subjects: ['عربي', 'حساب', 'ماث', 'انجليزي'],
          grades: [
            { name: 'أولى ثانوي', price: 300 },
            { name: 'أولى ثانوي رياضة', price: 350 },
            { name: 'ثانية ثانوي', price: 400 },
            { name: 'ثالثة ثانوي', price: 450 }
          ]
        }
      }
    },
    { id: '5', name: 'اللغات والتجريبي والانترناشيونال', price: 400 }
  ],
  'قسم الكورسات': [
    { id: '8', name: 'كورس الإملاء', price: 500, description: 'شهرياً' },
    { id: '9', name: 'كورس النحو', price: 450, description: 'شهرياً' },
    { id: '10', name: 'كورس الخط', price: 500, description: 'شهرياً' },
    { id: '26', name: 'كورس الجرامر الإنجليزي', price: 450, bookPrice: 400 },
    { id: '27', name: 'كورس التسويق', price: 1200 },
    { id: '28', name: 'كورس تحاليل طبية', price: 850 }
  ],
  'قسم التأسيس': [
    { id: '20', name: 'تأسيس اللغة العربية (مجموعات)', price: 200 },
    { id: '21', name: 'تأسيس اللغة العربية (بيرايفت)', price: 500 },
    { id: '22', name: 'تأسيس الماث (مجموعات)', price: 350 },
    { id: '23', name: 'تأسيس الماث (بيرايفت)', price: 550 },
    { id: '24', name: 'تأسيس اللغة الإنجليزية (مجموعات)', price: 400 },
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

const FeatureCard = ({ icon, title, description, color, buttonText, buttonAction, buttonClassName }: FeatureCardProps) => {
  const [showCourseOptions, setShowCourseOptions] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedType, setSelectedType] = useState<'حضوري' | 'برايفت' | undefined>(undefined);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStudents, setSelectedStudents] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { t } = useLanguage();

  const handleBookNowClick = () => {
    setShowCourseOptions(!showCourseOptions);
  };

  const handleOrderNow = (courseName: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedCourse(courseName);
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  const handleTypeSelect = (type: 'حضوري' | 'برايفت') => {
    setSelectedType(type);
    setSelectedSubject('');
    setSelectedStudents('');
    setShowConfirmation(false);
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setShowConfirmation(true);
    setSelectedStudents('');
    setSelectedGrade('');
  };

  const handleStudentsSelect = (count: number, price: number) => {
    setSelectedStudents(`${count} طلاب - ${price} ج.م`);
    setShowConfirmation(true);
    setSelectedSubject('');
    setSelectedGrade('');
  };

  const handleGradeSelect = (grade: string, price: number) => {
    setSelectedGrade(`${grade} - ${price} ج.م`);
    setShowConfirmation(true);
    setSelectedSubject('');
    setSelectedStudents('');
  };

  const handleConfirmSelection = () => {
    setShowBookingForm(true);
  };

  const getButtonColor = (title: string) => {
    switch (title) {
      case 'سنتر الدكتور':
        return 'bg-indigo-600 hover:bg-indigo-700';
      case 'قسم الحضانة':
        return 'bg-pink-500 hover:bg-pink-600';
      case 'دورة البرمجة':
        return 'bg-red-600 hover:bg-red-700';
      case 'أكاديمية اللغات':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'دورة القرآن الكريم':
        return 'bg-green-600 hover:bg-green-700';
      case 'دورة اللغة العربية':
        return 'bg-amber-600 hover:bg-amber-700';
      case 'قسم المهارات الخاصة':
        return 'bg-red-600 hover:bg-red-700';
      default:
        return `${color} hover:opacity-90`;
    }
  };
  
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden hover:scale-105 transition-transform"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-10 rounded-full -mr-16 -mt-16`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {title !== 'لماذا تختارنا؟' && (
          <div className="flex items-center gap-2 mb-4">
            <Percent className="h-5 w-5 text-green-600" />
            <span className="text-green-600 font-medium">خصم 5% على جميع الدورات</span>
          </div>
        )}
        <div className="flex gap-2">
          {title === 'لماذا تختارنا؟' ? (
            <button
              onClick={() => window.open('https://wa.me/201000570375?text=مرحباً، أود التواصل مع أكاديمية لمار', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              تواصل معنا
            </button>
          ) : (
            <button
              onClick={handleBookNowClick}
              className={`${getButtonColor(title)} text-white px-4 py-2 rounded-lg transition-colors`}
            >
              {showCourseOptions ? 'إخفاء الخيارات' : 'احجز الآن'}
            </button>
          )}
        </div>
      </div>

      {showCourseOptions && courseOptions[title] && (
        <div className="mt-4 space-y-4">
          {courseOptions[title].map(course => (
            <div key={course.id} className="flex flex-col p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{course.name}</h4>
                {course.type === 'special' ? (
                  <button
                    onClick={() => handleTypeSelect('حضوري')}
                    className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors"
                  >
                    اختر
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleOrderNow(course.name, e)}
                    className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors"
                  >
                    اطلب الآن
                  </button>
                )}
              </div>
              
              {course.type === 'special' && !selectedType && (
                <div className="mt-2 space-y-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleTypeSelect('حضوري')}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                    >
                      حضوري
                    </button>
                    <button
                      onClick={() => handleTypeSelect('برايفت')}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
                    >
                      برايفت
                    </button>
                  </div>
                </div>
              )}

              {course.type === 'special' && selectedType === 'حضوري' && course.name === 'المرحلة الابتدائية العامة' && (
                <div className="mt-2 space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <h5 className="font-medium mb-2">اختر المادة:</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.options.حضوري.subjects.map(subject => (
                        <button
                          key={subject}
                          onClick={() => handleSubjectSelect(subject)}
                          className={`px-3 py-1 rounded transition-colors ${
                            selectedSubject === subject
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {selectedSubject && (
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h5 className="font-medium mb-2">السعر:</h5>
                      {selectedSubject === 'عربي' || selectedSubject === 'حساب' ? (
                        <div className="flex flex-wrap gap-2">
                          {course.options.حضوري.prices[selectedSubject].students.map(student => (
                            <button
                              key={student.count}
                              onClick={() => handleStudentsSelect(student.count, student.price)}
                              className={`px-3 py-1 rounded transition-colors ${
                                selectedStudents === `${student.count} طلاب - ${student.price} ج.م`
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-200 hover:bg-gray-300'
                              }`}
                            >
                              {`${student.count} طلاب - ${student.price} ج.م`}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div>
                          <div className="text-center">
                            <span className="text-xl font-bold">
                              {course.options.حضوري.prices[selectedSubject].price} ج.م
                            </span>
                          </div>
                          <p className="text-green-700">عدد الطلاب: {selectedStudents}</p>
                          <button
                            onClick={handleConfirmSelection}
                            className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                          >
                            تأكيد الاختيار
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {course.type === 'special' && selectedType === 'حضوري' && course.name === 'الصف السادس' && (
                <div className="mt-2 space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <h5 className="font-medium mb-2">اختر المادة:</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.options.حضوري.subjects.map(subject => (
                        <button
                          key={subject}
                          onClick={() => handleSubjectSelect(subject)}
                          className={`px-3 py-1 rounded transition-colors ${
                            selectedSubject === subject
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  </div>

                  {showConfirmation && selectedSubject && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-800 mb-2">تفاصيل الاختيار:</h5>
                      <p className="text-green-700">المادة: {selectedSubject}</p>
                      <p className="text-green-700">السعر: {course.options.حضوري.price} ج.م</p>
                      <button
                        onClick={handleConfirmSelection}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        تأكيد الاختيار
                      </button>
                    </div>
                  )}
                </div>
              )}

              {course.type === 'special' && selectedType === 'حضوري' && course.name === 'المرحلة الثانوية العامة' && (
                <div className="mt-2 space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <h5 className="font-medium mb-2">اختر الصف:</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.options.حضوري.grades.map(({ name, price }) => (
                        <button
                          key={name}
                          onClick={() => handleGradeSelect(name, price)}
                          className={`px-3 py-1 rounded transition-colors ${
                            selectedGrade === `${name} - ${price} ج.م`
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {name} - {price} ج.م
                        </button>
                      ))}
                    </div>
                  </div>

                  {showConfirmation && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-800 mb-2">تفاصيل الاختيار:</h5>
                      <p className="text-green-700">الصف: {selectedGrade}</p>
                      <button
                        onClick={handleConfirmSelection}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        تأكيد الاختيار
                      </button>
                    </div>
                  )}
                </div>
              )}

              {course.type === 'special' && selectedType === 'برايفت' && course.name === 'الصف السادس' && (
                <div className="mt-2 space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <h5 className="font-medium mb-2">اختر المادة:</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.options.برايفت.subjects.map(subject => (
                        <button
                          key={subject}
                          onClick={() => handleSubjectSelect(subject)}
                          className={`px-3 py-1 rounded transition-colors ${
                            selectedSubject === subject
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  </div>

                  {showConfirmation && selectedSubject && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-800 mb-2">تفاصيل الاختيار:</h5>
                      <p className="text-green-700">المادة: {selectedSubject}</p>
                      <p className="text-green-700">السعر: {course.options.برايفت.price} ج.م</p>
                      <button
                        onClick={handleConfirmSelection}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        تأكيد الاختيار
                      </button>
                    </div>
                  )}
                </div>
              )}

              {course.type === 'special' && selectedType === 'برايفت' && course.name === 'المرحلة الابتدائية العامة' && (
                <div className="mt-2 space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <h5 className="font-medium mb-2">اختر المادة:</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.options.برايفت.subjects.map(subject => (
                        <button
                          key={subject}
                          onClick={() => handleSubjectSelect(subject)}
                          className={`px-3 py-1 rounded transition-colors ${
                            selectedSubject === subject
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  </div>

                  {showConfirmation && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-800 mb-2">تفاصيل الاختيار:</h5>
                      <p className="text-green-700">المادة: {selectedSubject}</p>
                      <p className="text-green-700">السعر: {course.options.برايفت.price} ج.م</p>
                      <button
                        onClick={handleConfirmSelection}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        تأكيد الاختيار
                      </button>
                    </div>
                  )}
                </div>
              )}

              {course.type === 'special' && selectedType === 'برايفت' && course.name === 'المرحلة الثانوية العامة' && (
                <div className="mt-2 space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <h5 className="font-medium mb-2">اختر الصف:</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.options.حضوري.grades.map(({ name, price }) => (
                        <button
                          key={name}
                          onClick={() => handleGradeSelect(name, price)}
                          className={`px-3 py-1 rounded transition-colors ${
                            selectedGrade === `${name} - ${price} ج.م`
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {name} - {price} ج.م
                        </button>
                      ))}
                    </div>
                  </div>

                  {showConfirmation && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-800 mb-2">تفاصيل الاختيار:</h5>
                      <p className="text-green-700">الصف: {selectedGrade}</p>
                      <button
                        onClick={handleConfirmSelection}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        تأكيد الاختيار
                      </button>
                    </div>
                  )}
                </div>
              )}

              {course.description && (
                <p className="text-sm text-gray-600 mb-2">{course.description}</p>
              )}
              {course.price && !course.type && (
                <div className="flex flex-col gap-1">
                  <p className="text-lamar-primary">الاشتراك الشهري: {course.price} ج.م</p>
                  {course.bookPrice && (
                    <p className="text-lamar-primary">سعر كتاب المستوى: {course.bookPrice} ج.م</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showBookingForm && (
        <BookingForm
          courseName={selectedCourse}
          onClose={handleCloseBookingForm}
        />
      )}
    </div>
  );
};

export default FeatureCard;