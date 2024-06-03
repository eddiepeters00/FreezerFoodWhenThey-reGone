import Image from "next/image";
import { images } from "../../assets/images";

export default function SocialMediaContainer() {
  return (
    <div className="flex items-center justify-center gap-10">
      <Image alt="Facebook" src={images.icons.facebook} />
      <Image alt="Instagram" src={images.icons.instagram} />
      <Image alt="Tiktok" src={images.icons.tiktok} />
      <Image alt="Youtube" src={images.icons.youtube} />
      <Image alt="Spotify" src={images.icons.spotify} />
    </div>
  );
}
