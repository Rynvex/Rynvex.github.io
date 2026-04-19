"use client";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import DesignLab from "@/components/DesignLab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function LinearLayout() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <Sidebar />
        <main className="lg:py-24 pt-2 pb-20 space-y-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <DesignLab />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
