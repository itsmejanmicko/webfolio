import { ReactNode } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="text-white">
      <Header />

      <div className="pt-40"> 
        {children}
      </div>
      <Footer />
    </main>
  );
}
