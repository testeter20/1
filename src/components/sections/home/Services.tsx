import Section from '../../../components/common/Section';

const Services = () => {
  const services = [
    {
      title: 'Çelik İmalat ve Montaj',
      description: 'Endüstriyel tesisler için özel çelik konstrüksiyon ve montaj hizmetleri.',
      icon: '🏗️' // Placeholder icon
    },
    {
      title: 'Endüstriyel Yalıtım',
      description: 'Enerji verimliliği için profesyonel endüstriyel yalıtım çözümleri.',
      icon: '🏭' // Placeholder icon
    },
    {
      title: 'Boru Hatları',
      description: 'Petrol ve doğalgaz boru hatları için mekanik ve inşaat işleri.',
      icon: '🔧' // Placeholder icon
    },
    {
      title: 'Kumlama Boyama',
      description: 'Endüstriyel tesisler için profesyonel kumlama ve boyama hizmetleri.',
      icon: '🎨' // Placeholder icon
    }
  ];

  return (
    <Section bgColor="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Endüstriyel tesisler için kapsamlı çözümler sunuyoruz
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
