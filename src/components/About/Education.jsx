import educationData from "@/data/education.json";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="bg-[#B5C6E0]/[0.08] p-6 md:p-8 rounded-2xl border border-[#B5C6E0]/20 hover:border-[#B5C6E0]/40 hover:bg-[#B5C6E0]/[0.12] hover:shadow-2xl hover:shadow-[#B5C6E0]/10 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-1 p-2 bg-[#B5C6E0]/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-[#B5C6E0]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins-bold text-[#E8EEF7] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-poppins-semi-bold text-[#D0DDF0]/90 mb-3">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 text-sm text-[#D0DDF0]/75 ml-14">
                <div className="flex items-center gap-2 bg-[#b5c6e010] px-3 py-1.5 rounded-lg w-fit">
                  <MapPin className="h-4 w-4" />
                  <span className="font-poppins-regular">{edu.location}</span>
                </div>
              </div>
              {edu.description && (
                <p className="mt-4 text-sm font-poppins-regular text-[#D0DDF0]/80 leading-relaxed ml-14">
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
