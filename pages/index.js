import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import  { useState, useEffect }  from "react";

export default function Home() {

   const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [submitted, setSubmitted] = useState(false);

   useEffect(() => {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
  }, []);

   
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
    <div style="position:relative">
     
        <iframe src="https://tours.savitarrealty.in/embed/tour/576e9e57" 
         frameBorder="0" 
         scrolling="no" 
         height="100%" width="100%" allowFullScreen
         allow="vr;xr-spatial-tracking;gyroscope;accelerometer;fullscreen;magnetometer;"
         title="Sahjanand Marigold">
                       </iframe>
           
    </div>

   
  )
}
