import React, { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import countries from "../../assets/countries.json";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: null,
    phone: "",
    dataStorage: null,
    jobTitle: "",
    companyName: "",
    employees: null,
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [countryOptions, setCountryOptions] = useState([]);

  const dataStorageOptions = [
    { value: "excel", label: "Excel" },
    { value: "postgresql", label: "PostgreSQL" },
    { value: "mysql", label: "MySQL" },
    { value: "mongodb", label: "MongoDB" },
    { value: "others", label: "Others" },
  ];

  const employeeRanges = [
    { value: "1-5", label: "1-5" },
    { value: "5-25", label: "5-25" },
    { value: "25-50", label: "25-50" },
    { value: "50-100", label: "50-100" },
    { value: "100-500", label: "100-500" },
    { value: "500-1000", label: "500-1000" },
    { value: "1000-10000", label: "1000-10,000" },
    { value: "10000-100000", label: "10,000-100,000" },
    { value: "100000+", label: "100,000+" },
  ];

  useEffect(() => {
    const processCountries = () => {
      try {
        const countriesData = countries.data;
        const formattedCountries = Object.values(countriesData).map(
          (country) => ({
            value: country.country,
            label: country.country,
          })
        );
        setCountryOptions(formattedCountries);
      } catch (error) {
        console.error("Error processing country data:", error);
      }
    };

    processCountries();
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.dataStorage)
      newErrors.dataStorage = "Data storage selection is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.employees)
      newErrors.employees = "Number of employees is required";
    if (!formData.consent) newErrors.consent = "You must consent to proceed"; // Add consent validation

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    if (field === "consent") {
      setFormData((prev) => ({ ...prev, consent: value }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
    }
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#1a202c",
      color: "white",
      borderColor: state.isFocused ? "#2d3748" : "#ffffff",
      boxShadow: state.isFocused ? "0 0 0 1px #2d3748" : "none",
      "&:hover": {
        borderColor: "#ffffff",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#1a202c",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#2d3748" : "#1a202c",
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#a0aec0",
    }),
  };

  return (
    <section className="max-w-full bg-gray-900 font-inter px-6 sm:px-12 lg:px-40 mx-auto p-6 py-16 lg:py-32 shadow-md">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
        Request a Demo
      </h2>
      <p className="text-lg text-white text-center mb-8">
        Schedule a 20-minute meeting with our experts to understand how you can
        use spatial analysis in your organization.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {/* Standard Input Fields */}
          {[
            { id: "firstName", label: "First Name*", type: "text" },
            { id: "lastName", label: "Last Name*", type: "text" },
            { id: "email", label: "Work Email*", type: "email" },
            { id: "jobTitle", label: "Job Title*", type: "text" },
            { id: "companyName", label: "Company Name*", type: "text" },
          ].map(({ id, label, type }) => (
            <div key={id} className="relative">
              <input
                type={type}
                value={formData[id]}
                onChange={(e) => handleChange(id, e.target.value)}
                className={`peer w-full bg-gray-900 text-white border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder=" "
              />
              <label
                className={`absolute left-3 text-white text-sm transition-all duration-200
            transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:opacity-100
            peer-focus:top-2 peer-focus:scale-90 peer-focus:opacity-100 peer-focus:text-gray-600
            peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:opacity-100`}
              >
                {label}
              </label>
              {errors[id] && (
                <span className="text-red-500 mt-1 text-sm">{errors[id]}</span>
              )}
            </div>
          ))}

          {/* Dropdown Fields */}
          {/* Country Selection */}
          <div className="flex flex-col">
            <Select
              value={formData.country}
              onChange={(value) => handleChange("country", value)}
              options={countryOptions}
              classNamePrefix="custom-select"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1a202c",
                  borderColor: "white",
                  color: "white",
                  borderRadius: "0.3rem",
                  height: "45px",
                  padding: "0.1rem",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#000", // Black text for selected value
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#fff",
                  color: "#000", // Black text for menu items
                }),
                menuList: (base) => ({
                  ...base,
                  color: "#000", // Black text for menu items
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "white",
                  fontSize: "0.85rem",
                }),
              }}
              placeholder="Select a country"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col">
            <PhoneInput
              value={formData.phone}
              onChange={(value) => handleChange("phone", value)}
              country={"bd"}
              inputClass="bg-gray-900 text-white border p-3 rounded-sm"
              inputStyle={{
                backgroundColor: "#1a202c",
                color: "white",
                border: "1px solid white",
                borderRadius: "0.3rem",
                height: "45px",
                width: "100%",
              }}
              buttonStyle={{
                backgroundColor: "#1a202c",
                border: "1px solid white",
              }}
              dropdownStyle={{
                backgroundColor: "#fff",
                color: "#000",
              }}
            />
          </div>

          {/* Geospatial Data Storage */}
          <div className="flex flex-col">
            <Select
              value={formData.dataStorage}
              onChange={(value) => handleChange("dataStorage", value)}
              options={dataStorageOptions}
              classNamePrefix="custom-select"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1a202c",
                  borderColor: "white",
                  color: "white",
                  borderRadius: "0.3rem",
                  height: "45px",
                  padding: "0.1rem",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "white",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#fff",
                  color: "#000", // Black text for menu items
                }),
                menuList: (base) => ({
                  ...base,
                  color: "#000", // Black text for menu items
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "white",
                  fontSize: "0.85rem",
                }),
              }}
              placeholder="Where do you store your geospatial data?*"
            />
          </div>

          {/* Number of Employees */}
          <div className="flex flex-col">
            <Select
              value={formData.employees}
              onChange={(value) => handleChange("employees", value)}
              options={employeeRanges}
              classNamePrefix="custom-select"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1a202c",
                  borderColor: "white",
                  color: "white",
                  borderRadius: "0.3rem",
                  height: "45px",
                  padding: "0.1rem",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "white",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#fff",
                  color: "#000", // Black text for menu items
                }),
                menuList: (base) => ({
                  ...base,
                  color: "#000", // Black text for menu items
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "white",
                  fontSize: "0.85rem",
                }),
              }}
              placeholder="Number of Employees*"
            />
          </div>
        </div>

        {/* Geospatial Technology Usage */}
        <div className="col-span-1 md:col-span-3">
          <label className="block text-white">
            Do you use geospatial technology already?*
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="Yes"
                checked={formData.usesGeospatial === "Yes"}
                onChange={() => handleChange("usesGeospatial", "Yes")}
                className="mr-2"
              />
              <span className="text-white">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="No"
                checked={formData.usesGeospatial === "No"}
                onChange={() => handleChange("usesGeospatial", "No")}
                className="mr-2"
              />
              <span className="text-white">No</span>
            </label>
          </div>
          {errors.usesGeospatial && (
            <span className="text-red-500">
              {errors.usesGeospatial.message}
            </span>
          )}
        </div>

        {/* Consent and Submit */}
        <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row justify-between items-center pt-2">
          <div className="flex-1 mb-4 md:mb-0">
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => handleChange("consent", e.target.checked)}
                className="mr-2"
              />
              I consent to receiving email marketing communications from
              Consortium Analytics.
            </label>
            {errors.consent && (
              <span className="text-red-500">{errors.consent}</span>
            )}
            <p className="text-sm font-light text-white">
              By submitting my personal information I accept the Privacy Notice.
            </p>
          </div>
          <button
            type="submit"
            className="w-full md:w-48 bg-blue-600 text-white p-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Request a Demo
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
