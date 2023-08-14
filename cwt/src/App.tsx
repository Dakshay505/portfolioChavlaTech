import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/homePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactForm from './screen/contact';
import { ServicesPage } from './Pages/ServicesPage';
import { CaseStudiespage } from './Pages/CaseStudiespage';
import AnimatedCursor from "react-animated-cursor"



function App() {
  return (
    <><div className='bg-[#FAFAFA]'>

      <BrowserRouter>
      <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/CaseStudies" element={<CaseStudiespage />}   />

      </Routes>
      
    </BrowserRouter>
    <AnimatedCursor
      innerSize={11}
      outerSize={20}
      color='141, 268, 159'
      
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />

    </div>
    </>
  )
}

export default App
