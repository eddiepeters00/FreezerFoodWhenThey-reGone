import Header from "./components/Header/Header";
import { images } from "./assets/images";
import Concerts from "./components/Concerts/Concerts";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${images.background.stage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="grid min-h-dvh"
    >
      <Header />
      <Concerts />
    </main>
  );
}
