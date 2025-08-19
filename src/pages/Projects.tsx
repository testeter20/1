import Section from '../components/common/Section';

const Projects = () => {
  const completedProjects = [
    {
      title: "Sasa Polyester Fabrikası İzolasyon İşleri",
      location: "Adana",
      date: "2016 - 2017",
      description: "SASA Polyester Fabrikası İzolasyon Bakım Onarım Yapım İşleri"
    },
    {
      title: "Türkerler Jeotermal Enerji Santrali",
      location: "Manisa",
      date: "2018 - 2019",
      description: "Türkerler Jeotermal Enerji Santrali-3 Projesi Üretim Boru Hattı Mekanik İmalat ve Montaj İşleri"
    },
    {
      title: "Yeniköy & Kemerköy Termik Santralleri",
      location: "Milas-Muğla",
      date: "2018 - 2019",
      description: "Yeniköy & Kemerköy Termik Santralleri Otomatik Yangın Algılama ve Söndürme İşi"
    }
  ];

  const ongoingProjects = [
    {
      title: "BOTAŞ Dörtyol-Ceyhan Projesi",
      location: "Dörtyol-Ceyhan",
      date: "2020 - Devam Ediyor",
      description: "Dörtyol-Ceyhan Pompa İstasyonu ve Ham Petrol Boru Hattı Yapım İşi"
    },
    {
      title: "Lubpart Madeni Yağ Üretim Tesisi",
      location: "Aliağa-İzmir",
      date: "2021 - Devam Ediyor",
      description: "Lubpart Madeni Yağ Üretim-Depolama Tankları İmalatı ve Anahtar Teslim Montajı"
    }
  ];

  return (
    <>
      <Section bgColor="primary" className="py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Projelerimiz</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Tamamlanan ve devam eden projelerimiz ile endüstriyel çözümler sunuyoruz.
          </p>
        </div>
      </Section>

      <Section className="py-20">
        <h2 className="text-3xl font-bold mb-12">Tamamlanan Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Tamamlandı
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="text-sm text-gray-500 mb-4">
                <p>{project.location}</p>
                <p>{project.date}</p>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20" bgColor="gray">
        <h2 className="text-3xl font-bold mb-12">Devam Eden Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Devam Ediyor
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="text-sm text-gray-500 mb-4">
                <p>{project.location}</p>
                <p>{project.date}</p>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Projects;
