export default function CardLayout({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto">
      {children}
    </div>
  );
}