import React, { useState } from "react";

const Form = ({ closeForm, openThankYou, addEntry }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "Female",
    language: ["English"],
    email: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "language") {
      setFormData((prev) => {
        const updated = prev.language.includes(value)
          ? prev.language.filter((l) => l !== value)
          : [...prev.language, value];
        return { ...prev, language: updated };
      });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";

    if (!formData.email) newErrors.email = "Email Address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email address is invalid";

    if (!formData.agreedToTerms) newErrors.agreedToTerms = "Please agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addEntry(formData);
    closeForm();
    openThankYou();
    
    setFormData({
      firstName: "",
      lastName: "",
      gender: "Female",
      language: ["English"],
      email: "",
      agreedToTerms: false,
    });
  };

  const inputClasses =
    "p-2 border-0 rounded-md bg-[#FFDEE287] text-[13px] font-normal placeholder-[#424242CC] focus:ring-2 focus:ring-pink-400";

  return (
    <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-5 md:p-6 relative">
      <button
        type="button"
        className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-gray-600"
        onClick={closeForm}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 className="mb-2 text-[#000000] font-bold text-[24px]">Get Started Today!</h2>
      <p className="text-[#424242] font-normal text-[18px] mb-6 pb-4">
        Fill in your details and take control of your tasks.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-[16px] font-normal text-[#000000]">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter first name" className={inputClasses} />
            {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
          </div>

          <div>
            <label className="text-[16px] font-normal text-[#000000]">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter last name" className={inputClasses} />
            {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        <fieldset className="mb-4">
          <legend className="text-[16px] font-normal text-[#000000]">Gender</legend>
          <div className="flex space-x-6 mt-2">
            {["Male", "Female"].map((g) => (
              <label key={g} className="flex items-center text-[#424242CC] text-[13px] bg-[#FFDEE287] px-4 py-2 space-x-2">
                <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} className="accent-[#FF3E54]" />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="text-[16px] font-normal text-[#000000]">Language</legend>
          <div className="space-y-2 mt-2">
            {["English", "Hindi", "Marathi"].map((lang) => (
              <label key={lang} className="flex items-center text-[#424242CC] text-[13px] bg-[#FFDEE287] px-4 py-2 space-x-2">
                <input type="checkbox" name="language" value={lang} checked={formData.language.includes(lang)} onChange={handleChange} className="accent-[#FF3E54]" />
                <span>{lang}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mb-4">
          <label className="text-[16px] font-normal text-[#000000]">Email Address</label>
          <input type="email" name="email" className={inputClasses} value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
          {errors.email && <p className="text-xs text-[#FF3E54] ">{errors.email}</p>}
        </div>

        <div className="flex items-start mb-4">
          <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} className="mt-1 accent-[#FF3E54]" />
          <label className="ml-2 text-sm">
            I agree to the{" "}
            <a className="text-[#FF3E54] cursor-pointer">terms and conditions</a>
          </label>
        </div>

        <button type="submit" className="w-full py-3 rounded-md bg-[#FF3E54] text-white font-medium hover:bg-[#ff3e54d7] transition">Done</button>
      </form>
    </div>
  );
};

export default Form;
