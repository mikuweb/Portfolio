import { NextPage } from "next";
import Layout from "../../src/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>Hero</div>
      <div>Projects</div>
      <div>Technologies</div>
      <div>About Me</div>
      {/* <Section grid> */}
      {/* <Hero /> */}
      {/* <BgAnimation /> */}
      {/* </Section> */}
      {/* <Projects />
      <Technologies />
      <AboutMe />
   */}
    </Layout>
  );
};
export default Home;
