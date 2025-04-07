import { Classes } from "@/components/Classes";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Instructors } from "@/components/Instructors";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Features />
      <Classes />
      <Gallery />
      <Instructors />
      <Testimonials />
      <Footer />
    </div>
  );
}
