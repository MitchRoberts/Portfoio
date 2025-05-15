const skills = [
  "C/C#/C++", "VHDL", "Python", "TypeScript", "React", "Next.js", "Firebase", "Tailwind CSS", "Git", "UART", 
];

export default function SkillsSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-600 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
