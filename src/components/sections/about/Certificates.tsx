import Section from '../../../components/common/Section';

const Certificates = () => {
  const certificates = [
    {
      title: 'ISO 9001:2015',
      description: 'Kalite Yönetim Sistemi Sertifikası',
      icon: '🏆' // Placeholder icon
    },
    {
      title: 'ISO 14001:2015',
      description: 'Çevre Yönetim Sistemi',
      icon: '🌿' // Placeholder icon
    },
    {
      title: 'ISO 18001:2014',
      description: 'İş Sağlığı ve Güvenliği Sistemi',
      icon: '⚡' // Placeholder icon
    },
    {
      title: 'EPDK Sertifikası',
      description: 'Doğal gaz piyasası yapım ve hizmet sertifikası',
      icon: '📜' // Placeholder icon
    }
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Belgelerimiz</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Kalite ve güvenilirliğimizi uluslararası standartlarla belgelendiriyoruz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-4xl mb-4">{cert.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
            <p className="text-gray-600">{cert.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Tüm sertifikalarımız ve belgelerimiz TÜRKAK tarafından onaylanmıştır.
        </p>
      </div>
    </Section>
  );
};

export default Certificates;
