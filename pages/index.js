import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Project Title – 360° Virtual Tour</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .hero { padding: 2rem; background: #f5f5f5; text-align: center; }
    .form-container { display: flex; justify-content: center; padding: 2rem; }
    .form-container form { width: 100%; max-width: 400px; }
    .form-container input {
      width: 100%; padding: 0.8rem; margin-bottom: 1rem;
      border: 1px solid #ccc; border-radius: 4px;
    }
    .form-container button {
      padding: 0.8rem 1.5rem; border: none; border-radius: 4px;
      background: #007BFF; color: #fff; cursor: pointer;
      font-size: 1rem;
    }
    .tour-container { position: relative; width: 100%; height: 0; padding-bottom: 56.25%; /* 16:9 aspect ratio */ }
    .tour-container iframe {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Splendora 1 – Virtual Tour</h1>
    <p>Behind DMart, near Mercedes showroom, Ambli, Ahmedabad, Gujarat</p>
  </div>

  <div class="form-container">
    <form>
      <input type="text" name="name" placeholder="Enter your name" required />
      <input type="tel" name="mobile" placeholder="Enter your mobile number" required pattern="[0-9]{10}" />
      <button type="submit">Get Brochure</button>
    </form>
  </div>

  <div class="tour-container">
    <iframe src="YOUR_360_TOUR_EMBED_URL" allowfullscreen></iframe>
  </div>

  <script>
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add AJAX submission or integration logic here
      alert('Brochure request submitted!');
    });
  </script>
</body>
</html>

      </main>

      <Footer />
    </div>
  )
}
