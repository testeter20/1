import Section from '../components/common/Section';

const Services = () => {
  const services = [
    {
      title: 'Çelik İmalat ve Montaj',
      description: 'Endüstriyel tesisler için özel çelik konstrüksiyon ve montaj hizmetleri sunuyoruz. CNC tezgahlarda hassas üretim.',
      image: '/placeholder.jpg' // Burada gerçek görseli kullanabilirsiniz
    },
    {
      title: 'Endüstriyel Yalıtım',
      description: 'Enerji verimliliği için profesyonel endüstriyel yalıtım çözümleri. ISO standartlarına uygun uygulama.',
      image: '/placeholder.jpg'
    },
    {
      title: 'Boru Hatları',
      description: 'Petrol ve doğalgaz boru hatları için mekanik ve inşaat işleri. BOTAŞ onaylı uygulamalar.',
      image: '/placeholder.jpg'
    },
    {
      title: 'Kumlama Boyama',
      description: 'Endüstriyel tesisler için profesyonel kumlama ve boyama hizmetleri. Uluslararası standartlarda uygulama.',
      image: '/placeholder.jpg'
    }
  ];

  return (
    <>
      <Section bgColor="primary" className="py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Hizmetlerimiz</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Endüstriyel tesisler için kapsamlı çözümler sunuyoruz.
          </p>
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-64 bg-gray-200">
                {/* Görsel yer tutucu */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Görsel
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;
