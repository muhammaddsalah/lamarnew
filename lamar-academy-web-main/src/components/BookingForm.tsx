import React, { useState } from 'react';

interface BookingFormProps {
  courseName: string;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ courseName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'الفرع الأول - بنها'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً، أود الحجز في ${courseName}%0Aالاسم: ${formData.name}%0Aرقم الهاتف: ${formData.phone}%0Aالفرع: ${formData.branch}`;
    const whatsappUrl = `https://wa.me/201000570375?text=${message}`;
    
    // فتح الواتساب في نافذة جديدة
    const newWindow = window.open(whatsappUrl, '_blank');
    if (newWindow) {
      newWindow.focus();
    }
    
    // إغلاق النموذج بعد فتح الواتساب
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-right">نموذج الحجز</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-right mb-1">الاسم</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded text-right"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-right mb-1">رقم الهاتف</label>
            <input
              type="tel"
              required
              className="w-full p-2 border rounded text-right"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-right mb-1">الفرع</label>
            <select
              className="w-full p-2 border rounded text-right"
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
            >
              <option value="الفرع الأول - بنها">الفرع الأول - بنها</option>
              <option value="الفرع الثاني - كفر الجزار">الفرع الثاني - كفر الجزار</option>
              <option value="الفرع الثالث - بطا">الفرع الثالث - بطا</option>
              <option value="الفرع الرابع - شارع الكوبرى ببنها">الفرع الرابع - شارع الكوبرى ببنها</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              تأكيد الحجز
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm; 