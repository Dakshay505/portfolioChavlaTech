import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/homePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactForm from './screen/contact';

function App() {
  return (
    <><div className='bg-[#FAFAFA]'>

      <BrowserRouter>
      <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
