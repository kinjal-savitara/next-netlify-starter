import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import  { useState, useEffect }  from "react";

export default function Home() {
 
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
 const [formData, setFormData] = useState({
    name: "",
    location:"",
    phone: "", 
    requirement: "",
    budget:"",
    projectName: "Sahajanand Marigold", // hidden field
  });
  const [loading, setLoading] = useState(false);

 // Google Apps Script Web App URL
   const scriptURL = 'https://script.google.com/macros/s/AKfycby61eqqZZq955xWNlNYwY1EX0PbzAaxWFrdDUKuMKyaFVRUpSLKpIfxPVXB9khsiSM5/exec';

  // Brochure PDF URL
  const brochureURL = "https://cdn.storage.teliportme.com/360-content-items-pdf/6492298/4cfc7be6-7434-11f0-bcdb-000d3a076e09.pdf";

   
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
            try {
              const params = new URLSearchParams(formData).toString();
              const res =  fetch(`${scriptURL}?${params}`);
 
             alert("Thank you our Agent call you soon!!  " + ( " "));
             setFormData({ ...formData, name: "", email: "", phone: "" });
             setShowForm(false)
             window.open(brochureURL);
              
            } catch (err) {
              console.error(err);
              alert("❌ Network error. Check Apps Script URL and deployment.");
            }        
            setLoading(false);               
  };
  
  return (
     <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
         {!showForm&& (<iframe
              src="https://tours.savitarrealty.in/embed/tour/767c68b9"
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="100%"
              allow="vr;xr-spatial-tracking;gyroscope;accelerometer;magnetometer;"
              title="Sahjanand Marigold"
              style={{ display: "block", border: "none" }}
            ></iframe>
             )}

    
       <button
           onClick={() => setShowForm(true)}
           style={{
             position: "absolute",
             left: "20px",
             top: "80%", 
             backgroundColor: "#25D366", // WhatsApp green
             color: "white", 
             padding: "16px 20px", 
             borderRadius: "8px",
             boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
             border: "none",
             cursor: "pointer",
             zIndex: 9999,
             fontWeight: "bold",
            fontSize: "18px",
           }}
         >
           📄  Download Brochure
         </button>

          {showForm && (
           <form
             onSubmit={handleSubmit}
             style={{
               maxWidth: "400px",
               margin: "20px auto",
               padding: "20px",
               border: "1px solid #ddd",
               borderRadius: "8px",
             }}
           >
             <h3>Fill this form to download brochure</h3>
   
             <label>Name</label>
             <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChange}
               required
               style={{ width: "100%", marginBottom: "15px" }}
             />
    
   
             <label>Mobile Number</label>
             <input
               type="tel"
               name="phone"
               value={formData.phone}
               onChange={handleChange}
               required
               style={{ width: "100%", marginBottom: "15px" }}
             />
              
              <label>Location (Please enter Area)</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        style={{ width: "100%", marginBottom: "15px" }}
                      />
            
                      <label>Requirement (2/3BHK)</label>
                      <input
                        type="text"
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        style={{ width: "100%", marginBottom: "15px" }}
                      />
            
                      <label>Budget (Please enter min. budget)</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        style={{ width: "100%", marginBottom: "15px" }}
                      />

   
             {/* Hidden field */}
             <input type="hidden" name="projectName" value={formData.projectName} />
   
             <button
               type="submit"
               disabled={loading}
               style={{
                 width: "100%",
                 padding: "10px",
                 backgroundColor: "#0070f3",
                 color: "#fff",
                 border: "none",
                 borderRadius: "5px",
                 cursor: "pointer",
               }}
             >
               {loading ? "Submitting..." : "Submit & Download"}
             </button>
   
               
           </form>
      )}

    </div>


   
  )
}
