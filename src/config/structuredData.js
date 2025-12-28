/**
 * JSON-LD Structured Data Configuration
 * 
 * This file contains all Schema.org structured data for enhanced SEO
 * and rich snippets in search engine results.
 */

import { siteConfig } from "./seo";

// Person Schema - Primary entity
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  jobTitle: "DevOps Engineer",
  description: "Expert DevOps Engineer specializing in AWS, Azure, Kubernetes, CI/CD automation, and cloud security with PCI DSS, HIPAA, and SOC 2 compliance expertise",
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  image: `${siteConfig.url}/assets/images/image.png`,
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.twitter,
    siteConfig.social.medium
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.country
  },
  nationality: {
    "@type": "Country",
    name: "Pakistan"
  },
  knowsAbout: [
    "DevOps Engineering",
    "AWS Cloud Services",
    "Azure Cloud Platform",
    "Kubernetes Orchestration",
    "Docker Containerization",
    "Terraform Infrastructure as Code",
    "CI/CD Pipelines",
    "GitHub Actions",
    "Jenkins Automation",
    "Cloud Security",
    "PCI DSS Compliance",
    "HIPAA Compliance",
    "SOC 2 Compliance",
    "Microservices Architecture",
    "Container Orchestration",
    "Cloud Migration",
    "Infrastructure Monitoring",
    "High Availability Systems",
    "Prometheus & Grafana",
    "ELK Stack",
    "ArgoCD & GitOps",
    "Helm Charts",
    "Python Scripting",
    "Bash Scripting",
    "Database Administration"
  ],
  knowsLanguage: [
    {
      "@type": "Language",
      name: "English",
      alternateName: "en"
    },
    {
      "@type": "Language",
      name: "Urdu",
      alternateName: "ur"
    }
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's Degree",
      about: {
        "@type": "EducationalOccupationalProgram",
        name: "Computer Science"
      }
    }
  ],
  worksFor: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#cyberoide`,
    name: "Cyberoide Tech",
    url: "https://cyberoide.com",
    description: "Technology company specializing in software development and cloud solutions"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "COMSATS University Islamabad",
    url: "https://comsats.edu.pk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "Pakistan"
    }
  },
  memberOf: [
    {
      "@type": "Organization",
      name: "DevOps Professional Community"
    },
    {
      "@type": "Organization",
      name: "Cloud Native Computing Foundation Community"
    }
  ]
};

// Professional Service Schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#service`,
  name: `${siteConfig.name} - DevOps Consulting`,
  description: "Professional DevOps engineering and cloud infrastructure consulting services specializing in AWS, Azure, Kubernetes, and automated CI/CD pipelines",
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/images/logo.png`,
  image: `${siteConfig.url}/assets/images/image.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.location.coordinates.latitude,
    longitude: siteConfig.location.coordinates.longitude
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Global"
    }
  ],
  serviceType: "DevOps Engineering and Cloud Infrastructure",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "DevOps Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AWS Cloud Infrastructure",
          description: "Complete AWS cloud infrastructure design, implementation, migration, and optimization services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Azure Cloud Solutions",
          description: "Azure cloud architecture, migration, managed services, and infrastructure optimization"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kubernetes Orchestration",
          description: "Kubernetes cluster setup, management, optimization, and scaling for container workloads"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CI/CD Pipeline Development",
          description: "Automated CI/CD pipelines using GitHub Actions, Jenkins, GitLab CI, and other modern tools"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Infrastructure as Code",
          description: "Terraform, CloudFormation, and Ansible-based infrastructure automation and provisioning"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Security & Compliance",
          description: "PCI DSS, HIPAA, and SOC 2 compliant infrastructure implementation and security hardening"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Container Solutions",
          description: "Docker containerization, container orchestration, and microservices architecture implementation"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Monitoring & Observability",
          description: "Prometheus, Grafana, ELK stack implementation for comprehensive infrastructure monitoring"
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "15"
  }
};

// WebSite Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: `${siteConfig.name} - DevOps Engineer Portfolio`,
  description: "Professional portfolio showcasing DevOps engineering projects, cloud infrastructure case studies, and technical expertise",
  publisher: {
    "@id": `${siteConfig.url}/#person`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  inLanguage: "en-US"
};

// Organization Schema for Work Experience
export const cyberoideOrgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#cyberoide`,
  name: "Cyberoide Tech",
  url: "https://cyberoide.com",
  description: "Technology company specializing in software development and cloud solutions",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "Pakistan"
  },
  employee: {
    "@id": `${siteConfig.url}/#person`
  }
};

export const zpaydOrgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#zpayd`,
  name: "Zpayd Inc",
  url: "https://zpayd.com",
  description: "Fintech company providing payment processing solutions",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "Ontario",
    addressCountry: "Canada"
  },
  employee: {
    "@id": `${siteConfig.url}/#person`
  }
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url ? `${siteConfig.url}${item.url}` : undefined
  }))
});

// Home Page Breadcrumb
export const homeBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "" }
]);

// About Page Breadcrumb
export const aboutBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "" },
  { name: "About", url: "/about" }
]);

// Projects Page Breadcrumb
export const projectsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "" },
  { name: "Projects", url: "/projects" }
]);

// Contact Page Breadcrumb
export const contactBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "" },
  { name: "Contact", url: "/contact" }
]);

// FAQ Schema (for potential FAQ section)
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What DevOps services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I offer comprehensive DevOps services including AWS and Azure cloud infrastructure design, Kubernetes orchestration, CI/CD pipeline implementation, Infrastructure as Code with Terraform, container solutions with Docker, cloud security and compliance (PCI DSS, HIPAA, SOC 2), and monitoring/observability setup with Prometheus and Grafana."
      }
    },
    {
      "@type": "Question",
      name: "What cloud platforms do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I specialize in both AWS (Amazon Web Services) and Microsoft Azure cloud platforms. I have extensive experience with AWS services like EKS, EC2, S3, RDS, Lambda, and Azure services like AKS, Azure Functions, Blob Storage, and Azure DevOps."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide remote DevOps consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I provide remote DevOps consulting services globally. I have successfully worked with clients remotely on complex cloud infrastructure projects, ensuring seamless collaboration through modern communication and project management tools."
      }
    },
    {
      "@type": "Question",
      name: "What compliance standards do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I have experience implementing and maintaining infrastructure compliant with PCI DSS (Payment Card Industry Data Security Standard), HIPAA (Health Insurance Portability and Accountability Act), and SOC 2 (System and Organization Controls) standards."
      }
    },
    {
      "@type": "Question",
      name: "What is your experience with Kubernetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I have extensive experience with Kubernetes, including cluster setup and management on AWS EKS and Azure AKS, implementing Helm charts, GitOps with ArgoCD, service mesh configurations, autoscaling, and security best practices. I've successfully managed production Kubernetes clusters handling thousands of requests per minute."
      }
    }
  ]
};
