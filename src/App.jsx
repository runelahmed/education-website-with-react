
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Programs from "./components/program/Programs";
import ShowCase from "./components/showcase/ShowCase";
// import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Testimonial from "./components/testimonial/Testimonial";
// import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
Footer
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Programs/>
    <ShowCase/>
    {/* <About/> */}
    <Gallery/>
    <Testimonial/>
    {/* <Contact/> */}
    <Footer/>
    </>
  )
}

export default App
