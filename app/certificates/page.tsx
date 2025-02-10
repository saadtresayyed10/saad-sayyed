import Certificates from "../_components/Certificates";
import { certificates } from "../data";

const CertificatePage = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-neutral-900 w-full text-white font-unbounded lg:px-20 px-8 min-h-screen">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:mt-20 mt-10 pb-10">
        {certificates.map((certificate, idx) => (
          <Certificates
            key={idx}
            grade={certificate.grade}
            link={certificate.link}
            name={certificate.name}
            provider={certificate.provider}
            time={certificate.time}
            year={certificate.year}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatePage;
