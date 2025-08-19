import Section from '../../../components/common/Section';

const MissionVision = () => {
  return (
    <Section bgColor="gray">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Misyon */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-primary">Misyon</h2>
          <p className="text-gray-600 leading-relaxed">
            Anahtar teslim taahhüdünü ya da malzemelerinin teminini üstlendiğimiz projelerin, 
            uluslararası standartlara uygun şekilde, etkin planlama ve profesyonel proje yönetimi ile 
            katma değer yaratarak, söz verdiğimiz tarihte ve kalitede teslim etmek. 
            Müşteri güveni ve sadakati oluşturmak.
          </p>
        </div>

        {/* Vizyon */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-primary">Vizyon</h2>
          <p className="text-gray-600 leading-relaxed">
            Enerji ve petrokimya sektörü başta olmak üzere, ulusal ve uluslararası projelerin 
            mekanik, inşaat, elektrik ve mühendislik projelerinde, anahtar teslim yapım hizmeti 
            ve malzeme tedariki ile, müşterilerimizin ihtiyaçlarını hızlı ve sorunsuz bir şekilde çözen, 
            işini bitiren, yükünü hafifleten, güvenilir, sağlam ve güçlü bir organizasyon olmak.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default MissionVision;
