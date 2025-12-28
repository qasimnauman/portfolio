import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Muhammad Qasim Nauman - DevOps Engineer | AWS & Azure Cloud Specialist",
  description: "Junior DevOps Engineer specializing in AWS, Azure, Kubernetes, and CI/CD automation. Building secure, scalable, PCI DSS & HIPAA-compliant cloud infrastructures with 15K+ requests/10min capacity.",
  keywords: "DevOps Engineer, AWS, Azure, Kubernetes, Docker, Terraform, CI/CD, Cloud Security, PCI DSS, HIPAA, Infrastructure as Code, Jenkins, GitHub Actions",
  authors: [{ name: "Muhammad Qasim Nauman" }],
  openGraph: {
    title: "Muhammad Qasim Nauman - DevOps Engineer",
    description: "Building secure, scalable, compliant cloud infrastructures on AWS & Azure",
    url: "https://qasimnauman.com",
    siteName: "Muhammad Qasim Nauman Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Qasim Nauman - DevOps Engineer",
    description: "Building secure, scalable cloud infrastructures | AWS & Azure Specialist",
    creator: "@qasim_nauman_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Qasim Nauman",
    jobTitle: "Junior DevOps Engineer",
    description: "DevOps Engineer specializing in AWS, Azure, Kubernetes, and cloud security",
    url: "https://qasimnauman.com",
    email: "m.qasimnauman@gmail.com",
    sameAs: [
      "https://linkedin.com/in/mqasimnauman",
      "https://github.com/qasimnauman",
      "https://x.com/qasim_nauman_",
      "https://medium.com/@m.qasimnauman"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Cyberoide Tech",
      url: "https://cyberoide.tech"
    },
    alumniOf: {
      "@type": "Organization",
      name: "The Islamia University of Bahawalpur"
    },
    knowsAbout: [
      "AWS",
      "Azure",
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD",
      "Cloud Security",
      "DevOps",
      "Infrastructure as Code"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
