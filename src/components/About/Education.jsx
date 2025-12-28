import educationData from "@/data/education.json";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="bg-[#b5c6e015] p-6 md:p-8 rounded-2xl border border-[#b5c6e020] hover:border-[#b5c6e050] hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-1 p-2 bg-[#B5C6E0]/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-[#B5C6E0]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins-bold text-[#B5C6E0] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-poppins-semi-bold text-[#B5C6E0]/80 mb-3">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 text-sm text-[#B5C6E0]/70 ml-14">
                <div className="flex items-center gap-2 bg-[#b5c6e010] px-3 py-1.5 rounded-lg w-fit">
                  <MapPin className="h-4 w-4" />
                  <span className="font-poppins-regular">{edu.location}</span>
                </div>
              </div>
              {edu.description && (
                <p className="mt-4 text-sm font-poppins-regular text-[#B5C6E0]/70 leading-relaxed ml-14">
                  {edu.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
