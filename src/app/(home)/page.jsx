import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container>
        <div className="h-screen">
          <h1>Home</h1>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
