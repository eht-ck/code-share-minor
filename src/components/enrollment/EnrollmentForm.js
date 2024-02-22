import React, { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    year: "",
    phone: "",
    email: "",
    rollNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validations
    const emailRegex = /^[a-zA-Z0-9._%+-]+@nitj\.ac\.in$/;
    const rollNumberRegex = /^\d{8}$/;
    const semesterRegex = /^[1-8]$/;
    const phoneRegex = /^\d{1,10}$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid NITJ email address (ending with @nitj.ac.in).");
      return;
    }

    if (!rollNumberRegex.test(formData.rollNumber)) {
      alert("Please enter an eight-digit roll number.");
      return;
    }

    if (!semesterRegex.test(formData.year)) {
      alert("Please enter a valid semester (1 to 8).");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number (up to 10 digits).");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          name: "",
          branch: "",
          year: "",
          phone: "",
          email: "",
          rollNumber: "",
        });
      } else {
        alert("Registration failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight px-100 py-40 bg-black text-white md:text-5xl lg:text-6xl">
        ENROLLMENT{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          IS OPEN ..
        </span>
      </div>
      <div className="px-10 text-center text-blue-600 text-2xl font-medium"></div>{" "}
      <div>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name{" "}
              </label>{" "}
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />{" "}
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email{" "}
              </label>{" "}
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your College Email-ID"
                value={formData.email}
                onChange={handleInputChange}
              />{" "}
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="branch"
                className="block text-sm font-medium text-gray-700"
              >
                Branch{" "}
              </label>{" "}
              <select
                id="branch"
                name="branch"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.branch}
                onChange={handleInputChange}
              >
                <option value=""> Select your branch </option>{" "}
                <option value="Biotechnology"> Bio Technology </option>{" "}
                <option value="ChemicalEngineering">
                  Chemical Engineering{" "}
                </option>{" "}
                <option value="CivilEngineering"> Civil Engineering </option>{" "}
                <option value="ComputerScienceEngineering">
                  Computer Science and Engineering{" "}
                </option>{" "}
                <option value="ElectricalEngineering">
                  Electrical Engineering{" "}
                </option>{" "}
                <option value="ElectronicsCommunicationEngineering">
                  Electronics and Communication Engineering{" "}
                </option>{" "}
                <option value="IndustrialProductionEngineering">
                  Industrial and Production Engineering{" "}
                </option>{" "}
                <option value="InformationTechnology">
                  Information Technology{" "}
                </option>{" "}
                <option value="InstrumentalControlEngineering">
                  Instrumental and Control Engineering{" "}
                </option>{" "}
                <option value="MechanicalEngineering">
                  Mechanical Engineering{" "}
                </option>{" "}
                <option value="TextileTechnology"> Textile Technology </option>{" "}
              </select>{" "}
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="rollNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Roll Number{" "}
              </label>{" "}
              <input
                type="text"
                id="rollNumber"
                name="rollNumber"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your Roll Number"
                value={formData.rollNumber}
                onChange={handleInputChange}
              />{" "}
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700"
              >
                Semester{" "}
              </label>{" "}
              <input
                type="text"
                id="year"
                name="year"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your Semester(1,2,3,4)"
                value={formData.year}
                onChange={handleInputChange}
              />{" "}
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number{" "}
              </label>{" "}
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />{" "}
            </div>{" "}
            <div className="mb-4 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-16 rounded-md hover:bg-blue-600"
              >
                Register{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default EnrollmentForm;
