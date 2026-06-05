import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}) {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-gray-50">

        <AdminSidebar />

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

      <Footer />
    </>
  );
}