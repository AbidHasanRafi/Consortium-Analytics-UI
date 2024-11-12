import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countries from "../../assets/countries.json"; // Import your local countries.json
import Select from "react-select";

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  // State to store country options
  const [countryOptions, setCountryOptions] = useState([]);

  // Options for data storage field (Snowflake, Amazon, Google, Databricks)
  const dataStorageOptions = [
    { value: "snowflake", label: "Snowflake" },
    { value: "amazon", label: "Amazon" },
    { value: "google", label: "Google" },
    { value: "databricks", label: "Databricks" },
  ];

  // Options for number of employees ranges
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

  // Use effect to process countries from the imported JSON
  useEffect(() => {
    const processCountries = () => {
      try {
        const countriesData = countries.data;
        const formattedCountries = Object.values(countriesData).map(
          (country) => ({
            value: country.country, // Use country name as value
            label: country.country, // Display country name as label
          })
        );
        setCountryOptions(formattedCountries);
      } catch (error) {
        console.error("Error processing country data:", error);
      }
    };

    processCountries();
  }, []);

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <section className="max-w-full bg-gray-900 px-40 mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-4xl font-abel font-bold text-center text-white mb-6">
        Request a demo
      </h2>
      <p className="text-lg text-center mb-8">
        Schedule a 20-minute meeting with our experts to understand how you can
        use spatial analysis in your organization.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-500">First Name*</label>
            <input
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              className="w-full bg-white text-black border p-2 rounded-lg"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-500">Last Name*</label>
            <input
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              className="w-full bg-white text-black border p-2 rounded-lg"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-gray-500">Work Email*</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-white text-black border p-2 rounded-lg"
              placeholder="Enter your work email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-500">Country</label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={countryOptions}
                  className="w-full text-neutral-600"
                  isLoading={countryOptions.length === 0} // Show loading spinner while data is being processed
                  placeholder="Select a country"
                />
              )}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-500">Phone Number</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country={"bd"}
                  inputClass="w-full p-2 rounded-lg border"
                />
              )}
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-gray-500">Job Title*</label>
            <input
              type="text"
              {...register("jobTitle", { required: "Job Title is required" })}
              className="w-full bg-white text-black border p-2 rounded-lg"
              placeholder="Enter your job title"
            />
            {errors.jobTitle && (
              <span className="text-red-500">{errors.jobTitle.message}</span>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-gray-500">Company Name*</label>
            <input
              type="text"
              {...register("companyName", {
                required: "Company Name is required",
              })}
              className="w-full bg-white text-black border p-2 rounded-lg"
              placeholder="Enter your company name"
            />
            {errors.companyName && (
              <span className="text-red-500">{errors.companyName.message}</span>
            )}
          </div>

          {/* Number of Employees */}
          <div>
            <label className="block text-gray-500">Number of Employees*</label>
            <Controller
              name="employees"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={employeeRanges}
                  className="w-full text-neutral-600"
                  placeholder="Select number of employees"
                />
              )}
            />
            {errors.employees && (
              <span className="text-red-500">{errors.employees.message}</span>
            )}
          </div>

          {/* Data Storage */}
          <div>
            <label className="block text-gray-500">
              Where do you store your geospatial data?*
            </label>
            <Controller
              name="dataStorage"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={dataStorageOptions}
                  className="w-full text-neutral-600"
                  placeholder="Select data storage"
                />
              )}
            />
            {errors.dataStorage && (
              <span className="text-red-500">{errors.dataStorage.message}</span>
            )}
          </div>

          {/* Geospatial Technology Usage */}
          <div className="col-span-1 md:col-span-3">
            <label className="block text-gray-500">
              Do you use geospatial technology already?*
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Yes"
                  {...register("usesGeospatial", {
                    required: "Please select an option",
                  })}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="No"
                  {...register("usesGeospatial")}
                  className="mr-2"
                />
                No
              </label>
            </div>
            {errors.usesGeospatial && (
              <span className="text-red-500">
                {errors.usesGeospatial.message}
              </span>
            )}
          </div>

          {/* Consent and Request Demo Button */}
          <div className="col-span-1 md:col-span-3 flex justify-between items-center pt-4 mt-4">
            <div className="flex-1">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("consent", {
                    required: "You must consent to proceed",
                  })}
                  className="mr-2"
                />
                I consent to receiving email marketing communications from
                Consortium Analytics.
              </label>
              {errors.consent && (
                <span className="text-red-500">{errors.consent.message}</span>
              )}
              <p className="text-sm font-light text-gray-400">
                By submitting my personal information I accept the Privacy
                Notice.
              </p>
            </div>
            <button
              type="submit"
              className="w-48 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
