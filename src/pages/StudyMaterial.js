import React from "react";
import NccStudyMaterial from "../components/NccStudyMaterial";
import Navbar2 from "../components/navbar/Navbar2";

const StudyMaterial = () => {
  return (
    <div>
      <Navbar2 />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8">
          <NccStudyMaterial />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default StudyMaterial;
