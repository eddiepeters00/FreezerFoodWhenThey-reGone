"use client";
import { Permanent_Marker } from "next/font/google";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="m-20 text-center text-6xl h-44">
      <SocialMediaContainer />
      <h1
        className={`${permanentMarker.className} mt-10 text-purple-400 text text-shadow-inset`}
      >
        Freezer Food when They&apos;re Gone
      </h1>
    </header>
  );
}
