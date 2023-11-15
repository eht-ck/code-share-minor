import React from "react";
import Navbar from "../components/navbar/Navbar";

const Eligibility = () => {
  return (
    <>
    <Navbar/>
      <div class="bg-blue-500 text-white text-2xl font-semibold p-4 rounded-t-lg">
        Eligibility{" "}
      </div>{" "}
      <div class="bg-white text-black p-4">
        <ul class="list-disc pl-6">
          <li>
            <strong> Citizen Requirements: </strong>{" "}
            <ul class="list-disc pl-6">
              <li> Be a citizen of India or a subject of Nepal. </li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            <strong> Character Requirements: </strong>{" "}
            <ul class="list-disc pl-6">
              <li> Have good moral character. </li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            <strong> Academic Requirements: </strong>{" "}
            <ul class="list-disc pl-6">
              <li>
                Be a student of NITJ or any Institute under 2 KAR ENGR COY NCC.{" "}
              </li>{" "}
              <li> Should be a student in NITJ for the coming 3 years. </li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            <strong> Medical Requirements: </strong>{" "}
            <ul class="list-disc pl-6">
              <li> Satisfy medical requirements. </li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            <strong> Age Requirement: </strong>{" "}
            <ul class="list-disc pl-6">
              <li> Be below 26 years. </li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div class="bg-blue-500 text-white text-2xl font-semibold p-4">
        Vacancies Available{" "}
      </div>{" "}
      <div class="bg-white text-black p-4">
        <p>
          2 KAR ENGR COY NCC has an authorized strength of{" "}
          <strong> 105 SDs and 55 SWs. </strong> The vacancy available for
          enrollment depends on the number of second and third - year cadets in
          NCC.{" "}
        </p>{" "}
      </div>{" "}
      <div class="bg-blue-500 text-white text-2xl font-semibold p-4">
        Selection{" "}
      </div>{" "}
      <div class="bg-white text-black p-4">
        <p>
          Only on successful completion of the Selection Process(Interviews,
          Physical Tests, etc.) can an applicant qualify for enrollment in the 2
          KAR ENGR COY NCC.{" "}
        </p>{" "}
        <p class="text-sm italic text-gray-600">
          Please Note: The Selection Procedure is decided by the OC and ANO’ s,
          it may be subject to change every year.{" "}
        </p>{" "}
      </div>{" "}
    </>
  );
};

export default Eligibility;
