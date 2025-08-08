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
    <div className="fixed top-0 left-0 w-full h-full z-50">
        <iframe src="https://tours.savitarrealty.in/embed/tour/576e9e57" 
         frameBorder="0" 
         scrolling="no" 
         className="w-full h-full"
         allowFullScreen
         allow="vr;xr-spatial-tracking;gyroscope;accelerometer;fullscreen;magnetometer;"
         title="Sahjanand Marigold">
                       </iframe>
           
    </div>


   
  )
}
