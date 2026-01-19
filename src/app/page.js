import Link from "next/link";
import {
  Minus,
  ChevronRight,
  CalendarDays,
  CircleUserRound,
  CircleChevronRight,
} from "lucide-react";
import NavigationCard from "@/components/Home/NavigationCards";
import ImpactMetrics from "@/components/Home/ImpactMetrics";
import StructuredData from "@/components/SEO/StructuredData";
import { homePageSEO, openGraphConfig, twitterConfig, robotsConfig } from "@/config/seo";
import { 
  personSchema, 
  professionalServiceSchema, 
  websiteSchema,
  homeBreadcrumb 
} from "@/config/structuredData";

export const metadata = {
  title: homePageSEO.title,
  description: homePageSEO.description,
  keywords: homePageSEO.keywords,
  alternates: {
    canonical: homePageSEO.canonical,
  },
  openGraph: {
    ...openGraphConfig,
    title: homePageSEO.title,
    description: homePageSEO.description,
  },
  twitter: {
    ...twitterConfig,
    title: homePageSEO.title,
    description: homePageSEO.description,
  },
  robots: robotsConfig,
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <StructuredData 
        data={[
          personSchema,
          professionalServiceSchema,
          websiteSchema,
          homeBreadcrumb
        ]} 
      />
      
      <div className="w-full md:w-[90%] mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-center mt-24 px-8 md:py-16 gap-12">
        <div className="w-full md:w-[70%] flex flex-col">
          <div className="text-lg md:text-xl text-center font-poppins-semi-bold text-[#D0DDF0]/90 mb-4">
            DevOps Engineer
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-2 leading-snug md:leading-tight text-[#E8EEF7] font-poppins-bold">
            Building Secure, Scalable, & Compliant Cloud Infrastructures
          </h1>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:items-center">
            <div>
              <NavigationCard
                to="/about"
                icon1={<CircleUserRound className="h-8 w-8" />}
                icon2={<CircleChevronRight className="h-5 w-5" />}
                text="More About Me"
              />
            </div>
            <div>
              <NavigationCard
                to="https://cal.com/qasimnauman"
                icon1={<CalendarDays className="h-8 w-8" />}
                icon2={<CircleChevronRight className="h-5 w-5" />}
                text="Schedule a Consultation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics Section */}
      {/* <ImpactMetrics /> */}

      <div className="w-[85%] md:w-[65%] mx-auto my-16 md:my-24 flex flex-col md:flex-row justify-center gap-6 md:gap-10">
        <div className="md:w-[40%]">
          <h2 className="text-2xl md:text-3xl font-poppins-semi-bold text-[#E8EEF7]">
            Building Scalable Architecture for Zpayd
          </h2>
        </div>
        <div className="md:w-[60%] flex flex-col gap-4">
          <p className="font-poppins-regular text-base text-[#D0DDF0]/90 leading-relaxed">
            Architected PCI DSS-compliant Kubernetes infrastructure handling 10,000+ requests within 3 minutes using GitHub Actions CI/CD pipelines.
          </p>
          <Link href="/work/scalable-architecture-for-zpayd">
            <div className="flex flex-row items-center group">
              <p className="font-poppins-medium text-base text-[#D0DDF0] relative inline-block pb-0.5 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-[#B5C6E0] group-hover:before:w-full before:transition-all before:duration-300 group-hover:text-[#E8EEF7]">
                Read Case Study
              </p>
              <ChevronRight className="h-5 w-5 text-[#B5C6E0] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-[85%] md:w-[68%] mx-auto my-16 md:my-24 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-6 md:gap-10">
        <div className="w-full sm:w-[80%] md:w-[50%] flex flex-row items-center justify-start group">
          <Minus className="transition-transform duration-400 rotate-90 group-hover:rotate-0 h-5 w-5 text-[#B5C6E0]" />
          <Link
            href="https://medium.com/@m.qasimnauman/understanding-microservices-a-beginners-guide-to-kubernetes-48a616e29876"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col ml-3 group-hover:translate-x-2 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#B5C6E0] rounded-lg p-2 -m-2"
          >
            <h3 className="font-poppins-semi-bold text-lg text-[#E8EEF7]">
              Kubernetes made easy for beginners
            </h3>
            <p className="font-poppins-regular text-sm text-[#D0DDF0]/70">
              Jul 23, 2024
            </p>
          </Link>
        </div>
        <div className="w-full sm:w-[80%] md:w-[50%] flex flex-row items-center justify-start group">
          <Minus className="transition-transform duration-400 rotate-90 group-hover:rotate-0 h-5 w-5 text-[#B5C6E0]" />
          <Link
            href="https://medium.com/@m.qasimnauman/terraform-workspaces-8cb20d8965fa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col ml-3 group-hover:translate-x-2 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#B5C6E0] rounded-lg p-2 -m-2"
          >
            <h3 className="font-poppins-semi-bold text-lg text-[#E8EEF7]">
              Terraform workspaces, key player in IaC
            </h3>
            <p className="font-poppins-regular text-sm text-[#D0DDF0]/70">
              Aug 28, 2024
            </p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
