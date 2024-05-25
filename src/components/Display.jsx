export default function Display({ previousNumber, currentNumber }) {
  return (
    <div className="flex flex-col gap-1 bg-slate-900 rounded-lg overflow-hidden">
      <span className="pt-2 px-4 text-sm font-semibold text-slate-300">{previousNumber}</span>
      <input
        type="text"
        value={currentNumber}
        className="py-2 px-4 text-2xl font-semibold border-0"
      />
    </div>
  );
}
