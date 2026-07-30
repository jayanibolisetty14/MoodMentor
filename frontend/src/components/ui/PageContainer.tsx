import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#0F172A] px-8 py-8">
      {children}
    </div>
  );
}