import Section from '../components/common/Section';
import { motion } from 'framer-motion';

const References = () => {
  const companies = [
    'Sasa',
    'Lubpart',
    'Atlas',
    'Varaka - Albayrak',
    'Tefirom',
    'Beştepeler Enerji',
    'AKSA Akrilik',
    'Konya Şeker',
    'İGSAS',
    'ASOS',
    'Toros Tarim',
    'Çevik Grup',
    'Balküpü',
    'Türk Traktör'
  ];

  return (
    <Section className="py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Referanslarımız</h1>
        <p className="text-xl text-gray-600">Güvenilir iş ortaklarımız</p>
      </div>
      
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="text-lg font-medium text-gray-800">{company}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default References;
