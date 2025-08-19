import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';

const Hero = () => {
  return (
    <Section bgColor="primary" className="min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Endüstriyel Tesis Projelerinde Çözüm Ortağınız
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            OMC YAPI olarak enerji ve petrokimya sektöründe ulusal ve uluslararası projelerde anahtar teslim çözümler sunuyoruz.
          </p>
          <div className="space-x-4">
            <Button variant="outline" size="lg">
              Hizmetlerimiz
            </Button>
            <Button variant="secondary" size="lg">
              İletişime Geçin
            </Button>
          </div>
        </div>
        <div className="relative h-[400px]">
          {/* Buraya hero görseli gelecek */}
          <div className="absolute inset-0 bg-gray-800/20 rounded-lg">
            <span className="text-gray-400">Hero Görseli</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
