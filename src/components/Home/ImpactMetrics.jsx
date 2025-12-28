"use client";

export default function ImpactMetrics() {
  const metrics = [
    {
      value: "15,000+",
      label: "Requests/10min",
      description: "Supported by AKS cluster with HPA",
      color: "from-blue-500 to-cyan-500"
    },
    {
      value: "40%",
      label: "Faster Detection",
      description: "Vulnerability remediation time reduced",
      color: "from-green-500 to-emerald-500"
    },
    {
      value: "30%",
      label: "Cost Savings",
      description: "Resource utilization improved",
      color: "from-purple-500 to-pink-500"
    },
    {
      value: "0",
      label: "Downtime",
      description: "AWS to Azure migrations",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="w-[85%] md:w-[80%] mx-auto my-16">
      <h2 className="text-3xl md:text-4xl font-poppins-bold text-[#B5C6E0] mb-8 text-center">
        Impact & Results
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#b5c6e015] p-6 rounded-xl border border-[#b5c6e020] hover:border-[#b5c6e050] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className={`text-5xl md:text-6xl font-poppins-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-3`}>
              {metric.value}
            </div>
            <p className="text-lg md:text-xl font-poppins-semi-bold text-[#B5C6E0] mb-2">
              {metric.label}
            </p>
            <p className="text-xs md:text-sm font-poppins-light text-[#B5C6E0]/70">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
