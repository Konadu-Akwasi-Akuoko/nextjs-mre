export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-2 bg-slate-200 rounded-md ring-2 ring-blue-300 text-black">
      {children}
    </button>
  );
}
