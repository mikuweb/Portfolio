import { NextPage } from "next";
import Layout from "../../src/layout/Layout";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <div>Skills</div>
      <div>About Me</div>
     <Contact />
    </Layout>
  );
};
export default Home;
