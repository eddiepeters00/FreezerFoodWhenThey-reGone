export default function ConcertItem() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 items-center px-6 py-4 bg-[#242322] text-white border-b-[1px]">
      <div className="grid place-content-start sm:place-content-start">
        <span>JUN 4, 2024</span>
        <span>Plan B</span>
        <span>w/Playboy Manababy and Dogbreath</span>
      </div>
      <div className="grid place-content-start sm:place-content-center">
        <span>Malmö, Sweden</span>
      </div>
      <div className="grid place-items-center sm:place-items-end mt-4 sm:mt-0">
        <button className="bg-purple-800 px-4 py-2 rounded-full">
          Tickets
        </button>
      </div>
    </div>
  );
}
