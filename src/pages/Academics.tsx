
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Award, BookOpen, BriefcaseBusiness, Building2, CalendarDays, HandHeart } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Course");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Royal University of Phnom Penh ",
      degree: "Bachelor of Information Technology Engineering (ITE).",
      field: "Computer Science & Engineering (Specialization in AI & ML)",
      duration: "2024 - Present",
      location: "Phnom Penh, Cambodia",
      cgpa: "In Progress",
      details: [
        "Specializing in Software & Web Development",
        "Key courses include Data Structures and Algorithms, Machine Learning",
        "Actively participating in research projects related to Machine Learning and AI"
      ]
    },
    {
      id: 3,
      institution: "Kompong Speu High School",
      degree: "High School",
      field: "Science",
      duration: "2020 - 2023",
      location: "Kompong Speu, Cambodia",
      grade: "C",
      details: [
        "Strong foundation in Science",
        "Studied foundations of Mathematics"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Python Programming",
      issuer: "IT Center",
      date: "2024",
      description: "Comprehensive course covering Coding & Programming by Python.",
      category: "Course"
    },
    {
      id: 2,
      name: "C & C++ Programming",
      issuer: "Addbook",
      date: "2024",
      description: "In-depth course on C and C++ programming languages, focusing on concepts (OOP).",
      category: "Course"
    },
    {
      id: 3,
      name: "ASEAN Data Science Explorers",
      issuer: "ASEAN Foundation",
      date: "2025",
      description: "Enablement Session - SAP Analytics Cloud training Session .",
      category: "Course"
    },
    {
      id: 4,
      name: "Cambodia Robotics Olympiad 2025",
      issuer: "STEM",
      date: "",
      description: "",
      category: "Volunteer"
    },
    {
      id: 5,
      name: "Prompt Engineering Guide",
      issuer: "OpenAI",
      date: "2025",
      description: "The Prompt Engineering Guide is a project by DAIR.AI. It aims to educate researchers and practitioners about prompt engineering, context engineering, RAG, and AI Agents.",
      category: "Course"
    },
    {
      id: 6,
      name: "EU- Manpower 2025",
      issuer: "Team2",
      date: "",
      description: "",
      category: "volunteer"
    },
    {
      id: 7,
      name: "CamSTEMFest 2026",
      issuer: "STEM",
      date: "",
      description: "",
      category: "volunteer"
    },
    {
      id: 8,
      name: "ICIA 2026",
      issuer: "STEM",
      date: "",
      description: "",
      category: "volunteer"
    },
  ];

  const categories = ["Course", "Job", "Volunteer"];

  const categoryIcons = {
    Course: BookOpen,
    Job: BriefcaseBusiness,
    Volunteer: HandHeart,
  };

  const filteredCertifications = certifications.filter(
    cert => cert.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const courseHighlights = [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "Software Engineering",
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="hud-badge mb-4">
              Academics
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
              Education{""}
              <span className="inline-block border border-[#00d4ff]/55 bg-[#041321] text-[#00d4ff] px-3 py-1">Background</span>{" "}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                My academic journey, courses, and educational achievements that have shaped my technical expertise.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  duration={edu.duration}
                  location={edu.location}
                  cgpa={edu.cgpa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
            
            {/* Filter Buttons */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-wrap gap-3 bg-[#071220]/80 border border-[#00d4ff]/35 p-2">
                {categories.map((category) => (
                  (() => {
                    const Icon = categoryIcons[category as keyof typeof categoryIcons];
                    return (
                      <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 px-6 py-2 text-sm font-medium uppercase tracking-[0.1em] [font-family:'Share_Tech_Mono',monospace] transition-all [clip-path:polygon(0_7px,7px_0,calc(100%_-_7px)_0,100%_7px,100%_calc(100%_-_7px),calc(100%_-_7px)_100%,7px_100%,0_calc(100%_-_7px))] ${
                          selectedCategory === category
                            ? "bg-[#00ff88]/16 text-[#00ff88] border border-[#00ff88]/55"
                            : "text-muted-foreground border border-[#385070] hover:text-foreground hover:border-[#00d4ff]/50 hover:bg-[#0a1a2d]"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{category}</span>
                      </motion.button>
                    );
                  })()
                ))}
              </div>
            </div>
            
            {selectedCategory === "Volunteer" ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto border border-[#00d4ff]/20 bg-[#041321]/50 backdrop-blur-sm"
              >
                <div className="flex flex-col">
                  {filteredCertifications.map((cert) => (
                    <div 
                      key={cert.id} 
                      className="flex items-start gap-4 p-6 md:p-8 border-b border-[#00d4ff]/10 last:border-b-0 hover:bg-[#00d4ff]/[0.02] transition-colors"
                    >
                      <div className="border border-[#00ff88]/30 bg-[#00ff88]/10 p-2 shrink-0">
                        <Award className="h-5 w-5 text-[#00ff88]" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-foreground tracking-wide mb-2">
                          {cert.name}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground font-mono">
                          <span className="inline-flex items-center gap-1.5 hover:text-[#00d4ff] transition-colors">
                            <Building2 className="h-3.5 w-3.5" />
                            {cert.issuer}
                          </span>
                        </div>
                        
                        {cert.description && (
                          <p className="mt-4 text-sm text-foreground/70 leading-relaxed max-w-3xl">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCertifications.map((cert, index) => (
                  <CertificationCard 
                    key={cert.id}
                    name={cert.name}
                    issuer={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                    index={index}
                  />
                ))}
              </div>
            )}
            
            {filteredCertifications.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-muted-foreground"
              >
                No certifications found in this category.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
