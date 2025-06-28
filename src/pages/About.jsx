import React from "react";
import ProfileImage from "../assets/images/image.png";
import ExperienceData from "../data/experiences.json";
import { CalendarDays, ChevronRight, Globe } from "lucide-react";
import { FaLinkedin, FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProfilesLink from "../components/About/ProfilesLink";
import OrganizationLink from "../components/About/OrganizationLink";
import Experience from "../components/About/Experience";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="text-[#B5C6E0] flex flex-col w-[90%] mt-30 mx-auto justify-center items-center mb-10"
      >
        <div className="flex flex-row gap-20 w-[90%] ">
          <div className="flex-shrink-0 w-[30%] h-24 ">
            <img
              src={ProfileImage}
              className="h-full w-full rounded-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 w-max items-center p-2 bg-[#b5c6e028] rounded-xl">
              <CalendarDays />
              <p className="font-poppins-medium">Schedule a Call</p>
              <Link
                to="https://cal.com/qasimnauman"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-[0.5px] hover:outline hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-300 "
              >
                <ChevronRight />
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h1 className="text-5xl font-poppins-bold">
                  Muhammad Qasim Nauman
                </h1>
                <p className="text-2xl font-poppins-medium tracking-wide">
                  DevOps Engineer
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <ProfilesLink
                to="http://linkedin.com/in/mqasimnauman"
                icon={<FaLinkedin className="h-5 w-5" />}
                text="LinkedIn"
              />
              <ProfilesLink
                to="https://x.com/qasim_nauman_"
                icon={<FaSquareXTwitter className="h-5 w-5" />}
                text="Twitter"
              />
              <ProfilesLink
                to="https://github.com/qasimnauman"
                icon={<FaGithub className="h-5 w-5" />}
                text="GitHub"
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
            <div className="flex flex-col mt-10 gap-6">
              <div>
                <h2 className="text-5xl font-poppins-semi-bold">
                  Work Experience
                </h2>
              </div>
              {ExperienceData.map((item, idx) => (
                <Experience key={idx} {...item} />
              ))}
            </div>
            <div className="flex flex-col mt-20 gap-9">
              <div>
                <h2 className="text-5xl font-poppins-semi-bold">Education</h2>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-poppins-semi-bold">
                    Air University
                  </h3>
                  <p className="text-sm font-poppins-light">
                    Bachelor's in Computer Science
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
            <div className="flex flex-col mt-20 gap-9">
              <div>
                <h2 className="text-5xl font-poppins-semi-bold">
                  Technical Skills
                </h2>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-poppins-semi-bold">
                    Cloud Providers
                  </h3>
                  <p className="text-md font-poppins-light">AWS, Azure</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-poppins-semi-bold">CI/CD</h3>
                  <p className="text-md font-poppins-light">
                    GitHub Actions, Jekins, GitLab CI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
