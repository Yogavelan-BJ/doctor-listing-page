import React from "react";

const DoctorCard = ({ doctor, index }) => {
  return (
    <div
      key={index}
      className="bg-white shadow rounded-xl p-4 flex justify-between items-start max-w-4xl w-full m-2"
    >
      {/* Left - Doctor Image */}
      <div className="flex-shrink-0">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      {/* Middle - Doctor Details */}
      <div className="flex-1 px-4">
        <h2 className="font-bold text-lg">{doctor.name}</h2>
        <p className="text-sm text-gray-600">
          {doctor.specialities?.[0]?.name}
        </p>
        <p className="text-sm text-gray-700 mt-1">
          {doctor.doctor_introduction?.split(",").slice(1).join(", ").trim()}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {doctor.experience || "Experience not listed"}
        </p>

        <div className="mt-2 text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            🏥 {doctor.clinic?.name || "Clinic not listed"}
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            📍 {doctor.clinic?.address?.locality || "Location not listed"}
          </div>
        </div>
      </div>

      {/* Right - Fee & Action */}
      <div className="text-right">
        <p className="font-bold text-black mb-4">{doctor.fees || "₹ N/A"}</p>
        <button className="px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
