export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Vue",
        "Angular",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "PHP",
        "Java",
        "C#",
        "Django",
        "Flask",
        "Laravel",
        "Spring Boot",
        "REST API",
        "GraphQL",
        "JWT Authentication",
      ],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "npm",
        "Yarn",
        "Webpack",
        "Vite",
        "Docker",
        "CI/CD",
      ],
    },
    {
      title: "Others",
      skills: [
        "Debugging",
        "Problem Solving",
        "Performance Optimization",
        "Testing",
        "HTTP/HTTPS",
        "Deployment",
        "DevOps Basics",
      ],
    },
    {
      title: "Bonus",
      skills: [
        "AWS",
        "Azure",
        "Google Cloud",
        "WebSockets",
        "Microservices",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-3xl text-center mb-10 text-white">
          Skills
        </h2>

        {/* GRID (KEEP CARDS ONLY) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-5 shadow-md 
              hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300"
            >
              {/* TITLE */}
              <h3 className="text-base md:text-lg font-semibold mb-3 text-white border-b border-gray-700 pb-2">
                {category.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 md:px-3 py-1 bg-gray-700 rounded-full text-[10px] md:text-xs 
                    hover:bg-blue-500 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}