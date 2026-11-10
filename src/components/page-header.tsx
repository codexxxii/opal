export default function PageHeader({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full h-40 flex justify-between items-center">
      <p className="text-5xl font-semibold tracking-tighter">{title}</p>
      {children}
    </div>
  );
}
