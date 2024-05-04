import React, { useState } from "react";
import "./CertificateCard.css"; // Import your CSS file for styling

const CertificateCard = ({ certificate, onDownload }) => {
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);

  const handleShowEligibility = () => {
    setIsEligibilityOpen(!isEligibilityOpen);
  };

  let title = "";
  let requirements = [];

  if (certificate.type === "A") {
    title = "ELIGIBILITY";
    requirements = [
      "The Cadet must have attended a minimum of 75% of total training periods laid down in the syllabus for the first and second years of Junior Division/Wing NCC (All Wings).",
      "In order to count his previous tenure, the break in the NCC Training Tenure of the cadet prior to his appearing in the exam should not exceed more than 12 months at one time.",
      "If the break exceeds 12 months and the cadet has been on the unit rolls for a minimum of two years before his discharge and had attended 75% of the total periods during his NCC Tenure, he will need another 36 periods of training to become eligible to appear for Certificate A examination.",
      "In all other cases, where the above conditions are not fulfilled, the cadet must attend a minimum of 75% periods of the first and second years of training.",
      "Must have attended one Annual Training Camp.",
    ];
  } else if (certificate.type === "B") {
    title = "ELIGIBILITY";
    requirements = [
      "The cadet must have attended a minimum of 75% of total training periods laid down in the syllabus for the first and second years for Senior Division/Wing NCC (All Wings).",
      "Break in the NCC Training Tenure of the cadet SD/ SW prior to appearing in the exam should not exceed more than 18 months at one time after his discharge to count his tenure for Certificate B Examination.",
      "If the break exceeds 18 months and the cadet had been on the unit rolls for a minimum of two years before his discharge and had attended 75% of the total periods during his NCC Tenure, he will need another 36 periods of training to become eligible to appear for Certificate B Examination.",
      "In all other cases where the above conditions are not fulfilled, the cadet must attend a minimum of 75% periods of the first & second years of training.",
      "Must have attended one Annual Training Camp /NIC /COC / RDC / Attachment with Regular Army/Navy/Air Force.",
      "Cadets possessing Certificate A will be awarded 10 bonus marks.",
    ];
  } else if (certificate.type === "C") {
    title = "ELIGIBILITY";
    requirements = [
      "The cadet must be in possession of Certificate B.",
      "The cadet must be in the third year of Senior Division/Senior Wing NCC Training.",
      // Add more requirements as necessary
    ];
  }

  return (
    <div className="certificate-card">
      <h3>{certificate.name}</h3>
      <p>{certificate.description}</p>
      <button onClick={() => window.open(certificate.downloadLink)}>
        Download
      </button>
      <button onClick={handleShowEligibility} style={{ marginLeft: "10px" }}>
        {isEligibilityOpen ? "Hide Eligibility" : "View Eligibility"}
      </button>
      {isEligibilityOpen && (
        <div className="eligibility-details">
          <h4 className="title">{title}</h4>
          <ul className="requirements">
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
