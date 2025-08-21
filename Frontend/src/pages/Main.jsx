import react from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Section from "../components/section";
import Know from "../components/know";
import Why from "../components/why";
import Numbers from "../components/Numbers";
import Testimonials from "../components/testimonial";
export const Main=() =>{


  return (
    <>
      <Navbar/>
      <Header/>
      <Know/>
      <Numbers/>
      <Why/>
      <Section/>
      <Testimonials/>
      <Footer/>


    </>
  );
};

export default Main;
