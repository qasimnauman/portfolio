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
          {/* <div className="text-lg md:text-2xl text-center font-poppins-semi-bold text-[#B5C6E0]/80 mb-4">
            Junior DevOps Engineer
          </div> */}
          <div className="md:text-7xl text-4xl text-center mt-2 leading-normal md:leading-tight md:tracking-wider text-[#B5C6E0] font-poppins-bold">
            Building Secure, Scalable, & Compliant Cloud Infrastructures
          </div>
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

      <div className="w-[85%] md:w-[65%] mx-auto my-8 md:my-10 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-[#B5C6E0]">
        <div className="md:w-[40%]">
          <h2 className="text-3xl md:text-4xl font-poppins-semi-bold">
            Building Scalable Architecture for Zpayd
          </h2>
        </div>
        <div className="md:w-[60%] flex flex-col gap-4">
          <p className="font-poppins-regular text-sm">
            Architected PCI DSS-compliant Kubernetes infrastructure handling 10,000+ requests within 3 minutes using GitHub Actions CI/CD pipelines.
          </p>
          <Link href="/work/scalable-architecture-for-zpayd">
            <div className="flex flex-row items-center">
              <p className="font-poppins-regular text-sm relative inline-block after:ml-1 pb-0.5 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-px before:bg-white hover:before:w-full before:transition-all before:duration-300">
                Read Case Study
              </p>
              <ChevronRight className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-[85%] md:w-[68%] mx-auto my-8 md:my-20 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-4 md:gap-8 text-[#B5C6E0]">
        <div className="w-full sm:w-[80%] md:w-[50%] flex flex-row items-center justify-start group">
          <Minus className="transition-transform duration-400 rotate-90 group-hover:rotate-0 h-5 w-5 text-[#B5C6E0]" />
          <Link
            href="https://medium.com/@m.qasimnauman/understanding-microservices-a-beginners-guide-to-kubernetes-48a616e29876"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col ml-2 group-hover:translate-x-2 transition-transform duration-300"
          >
            <h3 className="font-poppins-semi-bold text-xl text-[#B5C6E0]">
              Kubernetes made easy for beginners
            </h3>
            <p className="font-poppins-light text-sm text-[#B5C6E0]">
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
            className="flex flex-col ml-2 group-hover:translate-x-2 transition-transform duration-300"
          >
            <h3 className="font-poppins-semi-bold text-xl text-[#B5C6E0]">
              Terraform workspaces, key player in IaC
            </h3>
            <p className="font-poppins-light text-sm text-[#B5C6E0]">
              Aug 28, 2024
            </p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
