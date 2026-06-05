import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularServices from "@/components/PopularServices";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PopularServices />
    </main>
  );
}