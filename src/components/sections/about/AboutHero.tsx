import Section from '../../../components/common/Section';

const AboutHero = () => {
  return (
    <Section bgColor="primary" className="pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            OMC YAPI Hakkında
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            OMC Ailesi olarak: İşimiz; memnuniyetiniz. Farklı sektörlerden müşterilerimizle olan çalışmalarımızdan ve yıllara dayanan teknik ve idari tecrübemiz ile kaliteli hizmet sunuyoruz.
          </p>
        </div>
        <div className="relative h-[400px]">
          {/* Buraya şirket görseli gelecek */}
          <div className="absolute inset-0 bg-gray-800/20 rounded-lg">
            <span className="text-gray-400">Şirket Görseli</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutHero;
