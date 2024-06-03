import Header from "./components/Header/Header";
import { images } from "./assets/images";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${images.background.moldywall.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="grid min-h-dvh"
    >
      <Header />
    </main>
  );
}
