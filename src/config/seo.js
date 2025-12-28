/**
 * SEO Configuration for Muhammad Qasim Nauman - DevOps Engineer Portfolio
 * 
 * This file contains all SEO metadata, keywords, and Open Graph configurations
 * for optimal search engine visibility and social media sharing.
 */

export const siteConfig = {
  name: "Muhammad Qasim Nauman",
  title: "Muhammad Qasim Nauman | DevOps Engineer - AWS, Azure, Kubernetes Expert",
  description: "DevOps Engineer specializing in AWS, Azure cloud infrastructure, Kubernetes orchestration, CI/CD automation, and PCI DSS compliant systems. Expert in Terraform, Docker, Jenkins, GitHub Actions with proven track record handling 15,000+ requests/10min.",
  url: "https://qasimnauman.com",
  ogImage: "/assets/images/og-image.png",
  twitterImage: "/assets/images/twitter-card.png",
  email: "m.qasimnauman@gmail.com",
  phone: "+92-300-0000000",
  location: {
    city: "Islamabad",
    country: "Pakistan",
    coordinates: {
      latitude: "33.6844",
      longitude: "73.0479"
    }
  },
  social: {
    linkedin: "https://linkedin.com/in/mqasimnauman",
    github: "https://github.com/qasimnauman",
    twitter: "https://x.com/qasim_nauman_",
    twitterHandle: "@qasim_nauman_",
    medium: "https://medium.com/@m.qasimnauman"
  }
};

// Comprehensive keywords for SEO optimization
export const seoKeywords = [
  // Core Skills
  "DevOps Engineer",
  "AWS Solutions Architect",
  "Azure Cloud Infrastructure",
  "Kubernetes Expert",
  "Docker Containerization",
  "Terraform Infrastructure as Code",
  "CI/CD Automation",
  "Jenkins Pipeline",
  "GitHub Actions",
  "Cloud Security",
  "PCI DSS Compliance",
  "HIPAA Compliance",
  "SOC 2 Compliance",
  
  // Architecture & Design
  "Microservices Architecture",
  "Scalable Cloud Infrastructure",
  "High Availability Systems",
  "Disaster Recovery Planning",
  "Cloud Architecture Design",
  "Distributed Systems",
  "Service Mesh",
  "API Gateway",
  
  // DevOps Services
  "DevOps Consultant",
  "Infrastructure Automation",
  "Cloud Migration Services",
  "Infrastructure Optimization",
  "Site Reliability Engineering",
  "SRE Practices",
  "DevOps Best Practices",
  
  // Kubernetes & Containers
  "Kubernetes Administration",
  "AWS EKS",
  "Azure AKS",
  "Helm Charts",
  "ArgoCD GitOps",
  "Container Orchestration",
  "Docker Swarm",
  "Container Security",
  
  // Monitoring & Observability
  "Prometheus Monitoring",
  "Grafana Dashboards",
  "ELK Stack",
  "Infrastructure Monitoring",
  "Log Management",
  "Distributed Tracing",
  "APM Tools",
  "Alert Management",
  
  // Cloud Platforms
  "AWS Cloud Services",
  "Azure Cloud Platform",
  "Multi-Cloud Strategy",
  "Hybrid Cloud Solutions",
  "Cloud Cost Optimization",
  "AWS Lambda",
  "Azure Functions",
  
  // Security & Compliance
  "DevSecOps",
  "Security Best Practices",
  "Vulnerability Management",
  "Infrastructure Security",
  "Network Security",
  "Secret Management",
  "IAM Policies",
  
  // Databases & Storage
  "Database Administration",
  "PostgreSQL",
  "MongoDB",
  "Redis Cache",
  "S3 Bucket Management",
  "Azure Blob Storage",
  
  // Networking
  "Load Balancing",
  "Auto Scaling",
  "VPC Configuration",
  "DNS Management",
  "CDN Integration",
  "CloudFront",
  
  // Automation & Scripting
  "Python Scripting",
  "Bash Scripting",
  "Ansible Automation",
  "Configuration Management",
  "Infrastructure as Code",
  
  // Deployment Strategies
  "Blue-Green Deployment",
  "Canary Deployment",
  "Rolling Updates",
  "Zero Downtime Deployment",
  "Release Management",
  
  // Industry & Work Style
  "Remote DevOps Engineer",
  "Freelance DevOps Consultant",
  "Fintech Infrastructure",
  "Healthcare Cloud Solutions",
  "Ecommerce Platform",
  
  // Technologies
  "Terraform Modules",
  "Jenkins Automation",
  "Git Version Control",
  "Nginx Configuration",
  "RabbitMQ",
  "AWS SQS",
  "Azure Service Bus",
  
  // Practices & Methodologies
  "Agile Methodologies",
  "Technical Leadership",
  "Production Support",
  "Incident Management",
  "Root Cause Analysis",
  "Capacity Planning",
  "Performance Tuning"
];

// Page-specific SEO metadata
export const homePageSEO = {
  title: "Muhammad Qasim Nauman | DevOps Engineer - AWS, Azure, Kubernetes Expert",
  description: "DevOps Engineer specializing in AWS, Azure cloud infrastructure, Kubernetes orchestration, CI/CD automation, and PCI DSS compliant systems. Expert in Terraform, Docker, Jenkins, GitHub Actions with proven track record handling 15,000+ requests/10min.",
  keywords: seoKeywords.slice(0, 50).join(", "), // Top 50 keywords for home page
  canonical: "https://qasimnauman.com"
};

export const aboutPageSEO = {
  title: "About Muhammad Qasim Nauman | DevOps Engineer Profile & Experience",
  description: "Learn about Muhammad Qasim Nauman's DevOps engineering expertise with Cyberoide Tech and Zpayd. Specialized in AWS, Azure, Kubernetes, CI/CD automation, and cloud security compliance (PCI DSS, HIPAA, SOC 2).",
  keywords: [
    "DevOps Engineer Profile",
    "AWS Expert",
    "Azure Specialist",
    "Kubernetes Professional",
    "Cloud Infrastructure Engineer",
    "DevOps Experience",
    "Cyberoide Tech",
    "Zpayd Infrastructure",
    "Remote DevOps Engineer Pakistan",
    "Cloud Security Expert",
    ...seoKeywords.slice(0, 40)
  ].join(", "),
  canonical: "https://qasimnauman.com/about"
};

export const projectsPageSEO = {
  title: "DevOps Projects Portfolio | Cloud Infrastructure Case Studies",
  description: "Explore Muhammad Qasim Nauman's DevOps projects: PCI DSS-compliant Kubernetes infrastructure, AWS/Azure migrations, CI/CD pipelines, and scalable cloud architectures for fintech and healthcare platforms.",
  keywords: [
    "DevOps Projects",
    "Cloud Infrastructure Case Studies",
    "Kubernetes Projects",
    "AWS Case Studies",
    "Azure Implementation",
    "CI/CD Pipeline Examples",
    "Infrastructure as Code Projects",
    "Terraform Projects",
    "Docker Implementation",
    ...seoKeywords.slice(0, 30)
  ].join(", "),
  canonical: "https://qasimnauman.com/projects"
};

export const contactPageSEO = {
  title: "Contact Muhammad Qasim Nauman | DevOps Consulting Services",
  description: "Get in touch with Muhammad Qasim Nauman for DevOps consulting, cloud infrastructure design, AWS/Azure solutions, Kubernetes implementation, and CI/CD automation services. Schedule a consultation today.",
  keywords: [
    "DevOps Consulting",
    "Cloud Infrastructure Consulting",
    "AWS Consulting Services",
    "Azure Consulting",
    "Kubernetes Consulting",
    "DevOps Services",
    "Hire DevOps Engineer",
    "Cloud Migration Consulting",
    "Infrastructure Automation Services",
    ...seoKeywords.slice(0, 20)
  ].join(", "),
  canonical: "https://qasimnauman.com/contact"
};

// Open Graph configuration
export const openGraphConfig = {
  type: "website",
  locale: "en_US",
  url: siteConfig.url,
  siteName: `${siteConfig.name} - DevOps Portfolio`,
  images: [
    {
      url: `${siteConfig.url}${siteConfig.ogImage}`,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} - DevOps Engineer Portfolio`,
      type: "image/png"
    }
  ]
};

// Twitter Card configuration
export const twitterConfig = {
  card: "summary_large_image",
  site: siteConfig.social.twitterHandle,
  creator: siteConfig.social.twitterHandle,
  images: [`${siteConfig.url}${siteConfig.twitterImage}`]
};

// Robots configuration
export const robotsConfig = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1
  }
};

// Additional SEO tags
export const additionalMetaTags = [
  {
    name: "author",
    content: siteConfig.name
  },
  {
    name: "language",
    content: "English"
  },
  {
    name: "revisit-after",
    content: "7 days"
  },
  {
    name: "distribution",
    content: "global"
  },
  {
    name: "rating",
    content: "general"
  },
  {
    name: "theme-color",
    content: "#B5C6E0"
  },
  {
    name: "mobile-web-app-capable",
    content: "yes"
  },
  {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  },
  {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }
];
