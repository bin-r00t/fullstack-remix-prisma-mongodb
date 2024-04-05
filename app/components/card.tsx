export function Card({
  children,
  className = "",
}: {
  className?: String;
  children: React.ReactNode;
}) {
  return (
    <div className={` rounded-lg p-5 flex flex-col ` + className}>
      {children}
    </div>
  );
}
