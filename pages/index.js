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
     <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
      <iframe
        src="https://tours.savitarrealty.in/embed/tour/767c68b9"
        frameBorder="0"
        scrolling="no"
        width="100%"
        height="100%"
        allow="vr;xr-spatial-tracking;gyroscope;accelerometer;magnetometer;"
        title="Sahjanand Marigold"
        style={{ display: "block", border: "none" }}
      ></iframe>
    </div>


   
  )
}
