import { NextPage } from "next";
import Layout from "../../src/layout/Layout";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <About />
     <Contact />
    </Layout>
  );
};
export default Home;
