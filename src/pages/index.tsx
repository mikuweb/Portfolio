import { NextPage } from "next";
import Layout from "../../src/layout/Layout";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <div>Projects</div>
      <div>Skills</div>
      <div>About Me</div>
      {/* <Section grid> */}
      {/* <Hero /> */}
      {/* </Section> */}
      {/* <Projects />
      <Skills />
      <AboutMe />
   */}
      <Contact />
    </Layout>
  );
};
export default Home;
