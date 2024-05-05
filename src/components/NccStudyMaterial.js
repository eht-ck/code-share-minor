import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import "./NCCStudyMaterial.css"; // Import your CSS file

const NCCStudyMaterial = () => {
  const [certificates] = useState([
    {
      id: 1,
      type: "A",
      name: "Certificate A Papers",
      description: "",
      downloadLink:
        "https://drive.google.com/file/d/1S_hiodzkTAWLHycJNA4U4amBNR8mjel5/view?usp=sharing",
    },
    {
      id: 2,
      type: "B",
      name: "Certificate B Papers",
      description: "",
      downloadLink:
        "https://drive.google.com/file/d/1S_hiodzkTAWLHycJNA4U4amBNR8mjel5/view",
    },
    {
      id: 3,
      type: "C",
      name: "Certificate C Papers",
      description: "",
      downloadLink:
        "https://drive.google.com/file/d/1S_hiodzkTAWLHycJNA4U4amBNR8mjel5/view",
    },
  ]);

  const handleDownloadCertificate = (certificate) => {
    window.location.href = certificate.downloadLink;
  };

  const handleDownloadHandbook = () => {
    // Add link for downloading NCC mini handbook
    window.location.href = "https://example.com/ncc-handbook.pdf";
  };

  return (
    <div className="ncc-study-material">
      <header>{/* Header content (logo, title, etc.) */}</header>
      <main>
        <h1>NCC Study Material</h1>
        <p>{/* Brief description about NCC and study materials */}</p>
        <section className="certificates-section">
          <h2>Download Certificates Papers</h2>
          <div className="certificate-cards">
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onDownload={handleDownloadCertificate}
              />
            ))}
          </div>
        </section>
        <section className="handbook-section">
          <h2>Download NCC Mini Handbook</h2>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1UwaW96rpVVY1YMhOApX3JBN7IqoaP9-M/view?usp=sharing",
                "_blank"
              )
            }
          >
            Download Handbook
          </button>
        </section>

        {/* Additional sections (information about certificates, resources) */}
      </main>
      <footer>{/* Footer content (NCC contact, copyright, etc.) */}</footer>
    </div>
  );
};

export default NCCStudyMaterial;
