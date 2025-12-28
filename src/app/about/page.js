import Image from "next/image";
import Link from "next/link";
import ExperienceData from "@/data/experiences.json";
import SkillsData from "@/data/technicalskills.json";
import { CalendarDays, ChevronRight, Mail } from "lucide-react";
import { FaLinkedin, FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import ProfilesLink from "@/components/About/ProfilesLink";
import Experience from "@/components/About/Experience";
import TechnicalSkill from "@/components/About/TechnicalSkill";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="text-white flex flex-col w-[90%] mt-20 md:mt-30 mx-auto justify-center items-center mb-10"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-[90%] ">
          <div className="flex-shrink-0 md:w-[30%] h-24 ">
            <Image
              src="/assets/images/image.png"
              width={400}
              height={400}
              alt="Muhammad Qasim Nauman - DevOps Engineer"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 w-max items-center p-2 bg-[#b5c6e028] rounded-xl">
              <CalendarDays />
              <p className="font-poppins-medium">Schedule a Call</p>
              <Link
                href="https://cal.com/qasimnauman"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-[0.5px] hover:outline hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-300 "
              >
                <ChevronRight />
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-poppins-bold">
                  Muhammad Qasim Nauman
                </h1>
                <p className="text-xl md:text-2xl font-poppins-medium tracking-wide">
                  DevOps Engineer
                </p>
              </div>
            </div>
            <div className="w-max-[90%] flex flex-row flex-nowrap gap-2 sm:gap-3 justify-center md:justify-start">
              <ProfilesLink
                to="https://github.com/qasimnauman"
                icon={<FaGithub className="md:h-5 md:w-5 h-3 w-3 text-white" />}
                text="GitHub"
              />
              <ProfilesLink
                to="http://linkedin.com/in/mqasimnauman"
                icon={
                  <FaLinkedin className="md:h-5 md:w-5 h-3 w-3 text-white" />
                }
                text="LinkedIn"
              />
              <ProfilesLink
                to="https://x.com/qasim_nauman_"
                icon={
                  <FaSquareXTwitter className="md:h-5 md:w-5 h-3 w-3 text-white" />
                }
                text="X"
              />
              <ProfilesLink
                to="mailto:m.qasimnauman@gmail.com"
                icon={<Mail className="md:h-5 md:w-5 h-3 w-3 text-white" />}
                text="Email"
              />
            </div>
            <div className="font-poppins-regular leading-relaxed text-sm md:text-base">
              <p>
                DevOps Engineer skilled in AWS (EC2, VPC, RDS, Lambda, ECS, EKS,
                CloudWatch), Linux, Docker, and Terraform, with a focus on
                automating and optimizing IT operations for scalable,
                cost-effective solutions. Passionate about leveraging cloud
                technologies and best practices to drive efficiency and
                innovation. Open to connecting on DevOps, cloud solutions, and
                automation.
              </p>
            </div>
            <div className="flex flex-col mt-2 md:mt-10 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-poppins-semi-bold">
                  Work Experience
                </h2>
              </div>
              {ExperienceData.map((item, idx) => (
                <Experience key={idx} {...item} />
              ))}
            </div>
            <div className="flex flex-col mt-2 md:mt-10 gap-4 md:gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-poppins-semi-bold">Education</h2>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-poppins-semi-bold">
                    Air University
                  </h3>
                  <p className="text-sm font-poppins-light">
                    Bachelor&apos;s in Computer Science
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="font-poppins-light text-md">2022 - 2026</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-poppins-semi-bold">Coursera</h3>
                  <p className="text-sm font-poppins-light">
                    Self Taught DevOps using Courses from AWS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2 md:mt-10 gap-4 md:gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-poppins-semi-bold">
                  Technical Skills
                </h2>
              </div>
              {SkillsData.map((skill, idx) => (
                <TechnicalSkill key={idx} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
