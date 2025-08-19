import Section from '../../../components/common/Section';

const WhyUs = () => {
  const reasons = [
    {
      title: 'Uzmanlık',
      description: 'Yıllara dayanan teknik ve idari tecrübemiz ile sektörde öncüyüz.',
      icon: '🏆' // Placeholder icon
    },
    {
      title: 'Kalite',
      description: 'ISO 9001:2015 kalite yönetim sistemine uygun hizmet sunuyoruz.',
      icon: '✨' // Placeholder icon
    },
    {
      title: 'Güvenilirlik',
      description: 'Projelerimizi zamanında ve eksiksiz teslim ediyoruz.',
      icon: '🤝' // Placeholder icon
    }
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Neden OMC?</h2>
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-4xl">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[400px]">
          {/* Buraya neden biz görseli gelecek */}
          <div className="absolute inset-0 bg-gray-100 rounded-lg">
            <span className="text-gray-400">Neden Biz Görseli</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyUs;
