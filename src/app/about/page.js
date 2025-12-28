import Image from "next/image";
import Link from "next/link";
import ExperienceData from "@/data/experiences.json";
import SkillsData from "@/data/technicalskills.json";
import { CalendarDays, ChevronRight, Mail } from "lucide-react";
import { FaLinkedin, FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import ProfilesLink from "@/components/About/ProfilesLink";
import Experience from "@/components/About/Experience";
import TechnicalSkill from "@/components/About/TechnicalSkill";
import Education from "@/components/About/Education";
import StructuredData from "@/components/SEO/StructuredData";
import { aboutPageSEO, openGraphConfig, twitterConfig, robotsConfig } from "@/config/seo";
import { personSchema, aboutBreadcrumb, cyberoideOrgSchema, zpaydOrgSchema } from "@/config/structuredData";

export const metadata = {
  title: aboutPageSEO.title,
  description: aboutPageSEO.description,
  keywords: aboutPageSEO.keywords,
  alternates: {
    canonical: aboutPageSEO.canonical,
  },
  openGraph: {
    ...openGraphConfig,
    title: aboutPageSEO.title,
    description: aboutPageSEO.description,
  },
  twitter: {
    ...twitterConfig,
    title: aboutPageSEO.title,
    description: aboutPageSEO.description,
  },
  robots: robotsConfig,
};

export default function About() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <StructuredData 
        data={[
          personSchema,
          aboutBreadcrumb,
          cyberoideOrgSchema,
          zpaydOrgSchema
        ]} 
      />
      
      <div className="min-h-screen bg-gradient-to-b from-transparent to-[#0a0a0a]/50">
      {/* Hero Section */}
      <div className="w-[90%] max-w-7xl mx-auto pt-20 md:pt-32 pb-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B5C6E0]/20 to-transparent rounded-full blur-xl"></div>
              <Image
                src="/assets/images/image.png"
                width={320}
                height={320}
                alt="Muhammad Qasim Nauman - DevOps Engineer"
                className="relative w-full h-full rounded-full object-cover border-4 border-[#B5C6E0]/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins-bold text-[#B5C6E0] mb-3">
                Muhammad Qasim Nauman
              </h1>
              <p className="text-2xl md:text-3xl font-poppins-semi-bold text-[#B5C6E0]/80 mb-6">
                DevOps Engineer
              </p>
              <p className="text-base md:text-lg font-poppins-regular text-[#B5C6E0]/70 leading-relaxed max-w-3xl">
                Full-stack DevOps and cloud engineer enabling product teams to deliver reliable fintech, 
                healthcare, and ecommerce experiences on scalable AWS/Azure platforms with Kubernetes and 
                automated CI/CD that cut failures and speed up releases.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="https://cal.com/qasimnauman"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-[#B5C6E0] text-[#0a0a0a] rounded-xl font-poppins-semi-bold hover:bg-[#B5C6E0]/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <CalendarDays className="h-5 w-5" />
                <span>Schedule a Call</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <ProfilesLink
                to="https://github.com/qasimnauman"
                icon={<FaGithub className="h-5 w-5 text-[#B5C6E0]" />}
                text="GitHub"
              />
              <ProfilesLink
                to="http://linkedin.com/in/mqasimnauman"
                icon={<FaLinkedin className="h-5 w-5 text-[#B5C6E0]" />}
                text="LinkedIn"
              />
              <ProfilesLink
                to="https://x.com/qasim_nauman_"
                icon={<FaSquareXTwitter className="h-5 w-5 text-[#B5C6E0]" />}
                text="X"
              />
              <ProfilesLink
                to="mailto:m.qasimnauman@gmail.com"
                icon={<Mail className="h-5 w-5 text-[#B5C6E0]" />}
                text="Email"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[90%] max-w-7xl mx-auto pb-20 space-y-16">
        {/* Work Experience */}
        <section>
          <h2 className="text-4xl md:text-5xl font-poppins-bold text-[#B5C6E0] mb-8 flex items-center gap-4">
            <span className="h-1 w-12 bg-gradient-to-r from-[#B5C6E0] to-transparent rounded-full"></span>
            Work Experience
          </h2>
          <div className="space-y-8">
            {ExperienceData.map((item, idx) => (
              <Experience key={idx} {...item} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-4xl md:text-5xl font-poppins-bold text-[#B5C6E0] mb-8 flex items-center gap-4">
            <span className="h-1 w-12 bg-gradient-to-r from-[#B5C6E0] to-transparent rounded-full"></span>
            Education
          </h2>
          <Education />
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-4xl md:text-5xl font-poppins-bold text-[#B5C6E0] mb-8 flex items-center gap-4">
            <span className="h-1 w-12 bg-gradient-to-r from-[#B5C6E0] to-transparent rounded-full"></span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SkillsData.map((skill, idx) => (
              <TechnicalSkill key={idx} {...skill} />
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
