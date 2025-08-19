import AboutHero from '../components/sections/about/AboutHero';
import MissionVision from '../components/sections/about/MissionVision';
import Certificates from '../components/sections/about/Certificates';
import Section from '../components/common/Section';

const About = () => {
  return (
    <>
      <AboutHero />
      
      {/* Detaylı Bilgi */}
      <Section>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 mb-6">
            Hedefimiz; Enerji ve petrokimya sektörü başta olmak üzere, ulusal ve uluslararası projelerin 
            mekanik, inşaat, elektrik ve mühendislik dallarında, anahtar teslim yapım hizmeti ve malzeme 
            tedariki ile, müşterilerimizin ihtiyaçlarını hızlı ve sorunsuz bir şekilde çözen, iş yükünü 
            hafifleten, bunun yanında güvenilir, sağlam ve güçlü bir organizasyon olmaktır.
          </p>

          <p className="text-gray-600 mb-6">
            Kurulduğumuz günden bugüne dek, bu hedef doğrultusunda çalışmalarımız ve yatırımlarımız 
            aynı kararlılıkla devam etmektedir. Kısa zaman içerisinde, yüklenici ya da alt yüklenici olarak, 
            Türkiye'nin birçok farklı bölgesinde, doğal gaz boru hatlarında, termik santral ve jeotermal 
            enerji santrallerinde ve farklı sektörlerden birçok endüstriyel tesislerde malzeme tedariki, 
            projelendirme, mekanik & inşaat işleri ve endüstriyel izolasyon işlerini başarı ile bitirmiş 
            durumda olmak, hedeflerimiz doğrultusunda yaptığımız çalışmaların sonuçlarıdır.
          </p>
        </div>
      </Section>

      <MissionVision />
      <Certificates />
    </>
  );
};

export default About;
