import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Şirket Bilgileri */}
          <div>
            <h3 className="text-xl font-bold mb-4">OMC YAPI</h3>
            <p className="text-gray-300 mb-4">
              Endüstriyel tesis projelerinde çözüm ortağınız.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-gray-300">
              <p>İlkbahar Mah. 623. Sok. No: 15</p>
              <p>Çankaya/Ankara</p>
              <p>Tel: +90 312 390 01 01</p>
              <p>E-posta: omc@omc.com.tr</p>
            </div>
          </div>

          {/* Atölye Adresi */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Atölye & Depo</h4>
            <div className="space-y-2 text-gray-300">
              <p>Yeşilköy Mahallesi E-5 Karayolu</p>
              <p>Caddesi No: 140</p>
              <p>Dörtyol / Hatay</p>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} OMC YAPI. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
