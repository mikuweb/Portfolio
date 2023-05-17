import { NextPage } from "next";
import Layout from "../../src/layout/Layout";
import Contact from "@/components/Contact";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>Hero</div>
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
