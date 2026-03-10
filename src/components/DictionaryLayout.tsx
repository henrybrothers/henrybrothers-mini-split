import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DictionaryLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-vintage-cream">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DictionaryLayout;
