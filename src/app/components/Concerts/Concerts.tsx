import ConcertItem from "./ConcertItem";

export default function Concerts() {
  return (
    <section className="mt-[80dvh] my-40">
      <h3 className="grid place-content-center m-6 text-purple-400 text-shadow-inset text-2xl font-semibold">
        Concerts
      </h3>
      <div className="grid bg-[#242322]">
        <ConcertItem />
        <ConcertItem />
        <ConcertItem />
        <ConcertItem />
      </div>
    </section>
  );
}
