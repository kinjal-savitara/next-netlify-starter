import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import  { useState } from "react";

export default function Home() {

   const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual API call or logic
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };
  
  return (
     <div className="min-h-screen bg-gray-100">
      <div className="text-center py-10 bg-white shadow">
        <h1 className="text-3xl font-bold">Splendora 1 – Virtual Tour</h1>
        <p className="text-gray-600 mt-2">
          Behind DMart, near Mercedes showroom, Ambli, Ahmedabad, Gujarat
        </p>
      </div>

      <div className="flex justify-center py-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            required
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Get Brochure
          </button>
          {submitted && (
            <p className="text-green-600 mt-4">Request submitted successfully!</p>
          )}
        </form>
      </div>

      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <iframe
          src="YOUR_360_TOUR_EMBED_URL"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          title="360° Virtual Tour"
        ></iframe>
      </div>
    </div>
  )
}
