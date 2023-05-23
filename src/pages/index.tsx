import { NextPage } from "next";
import Layout from "../../src/layout/Layout";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Layout>
       <Head >
        <title>Miku Kawata | Portfolio</title>
      </Head>
      <Hero />
      <Projects />
      <Skills />
      <About />
     <Contact />
    </Layout>
  );
};
export default Home;
