import RecruiterSidebar from "@/components/RecruiterSidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RecruiterLayout({
  children,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black">

      <Navbar />

      <div className="flex flex-1">

        <RecruiterSidebar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>

      </div>

      <Footer />

    </div>
  );
}