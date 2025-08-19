import Section from '../components/common/Section';
import Button from '../components/common/Button';

const Contact = () => {
  return (
    <Section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h1>
          <p className="text-xl text-gray-600">Bizimle iletişime geçin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* İletişim Formu */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">İletişim Formu</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Gönder
              </Button>
            </form>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Merkez Ofis</h3>
              <p className="text-gray-600">
                İlkbahar Mah. 623. Sok. No: 15<br />
                Çankaya/Ankara<br />
                Tel: +90 312 390 01 01<br />
                E-posta: omc@omc.com.tr
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Atölye & Depo</h3>
              <p className="text-gray-600">
                Yeşilköy Mahallesi E-5 Karayolu<br />
                Caddesi No: 140<br />
                Dörtyol / Hatay<br />
                Tel: +90 312 390 01 01
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
