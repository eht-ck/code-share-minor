import React from "react";
//import logo from "../images/1.jpg"
const Form = () => {
  return (
    <>
      <div>
        <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4"> Registration Form </h2>{" "}
          <form>
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name{" "}
              </label>{" "}
              <input
                type="text"
                id="name"
                name="name"
                class="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your name"
              />
            </div>{" "}
            <div class="mb-4">
              <label
                for="branch"
                class="block text-sm font-medium text-gray-700"
              >
                Branch{" "}
              </label>{" "}
              <select
                id="branch"
                name="branch"
                class="mt-1 p-2 w-full border rounded-md"
              >
                <option value="NONE"> Select your branch </option>{" "}
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
            <div class="mb-4">
              <label for="year" class="block text-sm font-medium text-gray-700">
                Year{" "}
              </label>{" "}
              <input
                type="text"
                id="year"
                name="year"
                class="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your year"
              />
            </div>{" "}
            <div class="mb-4">
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700"
              >
                Phone Number{" "}
              </label>{" "}
              <input
                type="tel"
                id="phone"
                name="phone"
                class="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your phone number"
              />
            </div>{" "}
            <button
              type="submit"
              class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Register{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Form;
