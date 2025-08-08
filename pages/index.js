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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded shadow-lg">
         <iframe src="https://tours.savitarrealty.in/embed/tour/576e9e57" frameBorder="0" scrolling="no" height="100%" width="100%" allowFullScreen allow="vr;xr-spatial-tracking;gyroscope;accelerometer;fullscreen;magnetometer;"></iframe>

          </div>
    </div>
  )
}
