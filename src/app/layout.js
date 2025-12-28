import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Qasim Nauman | DevOps Engineer",
  description: "DevOps Engineer skilled in AWS, Azure, Docker, Kubernetes, and Terraform. Building scalable, compliant cloud infrastructures.",
  keywords: "DevOps, Cloud Engineer, AWS, Azure, Kubernetes, Docker, Terraform, CI/CD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
