'use client';
import Image from 'next/image';

const skills = [
  {
    name: 'React',
    icon: '/images/React.png',
    description: 'Built responsive apps with hooks, context, and router.',
    level: 80,
  },
  {
    name: 'Next.js',
    icon: '/images/Nextjs.png',
    description: 'Used App Router and SSR to build full-stack web apps.',
    level: 80,
  },
  {
    name: 'TypeScript',
    icon: '/images/Typescript.png',
    description: 'Used in large-scale React/Next.js projects for type safety and maintainability.',
    level: 80,
  },
  {
    name: 'JavaScript',
    icon: '/images/JavaScript.png',
    description: 'Core language for all frontend functionality and UI behaviors in my web platforms.',
    level: 80,
  },
  {
    name: 'Firebase',
    icon: '/images/Firebase.png',
    description: 'Auth, Firestore, Storage & role-based systems.',
    level: 80,
  },
  {
    name: 'VHDL',
    icon: '/images/VHDL.png',
    description: 'UART/RS-485 architecture for satellite comms.',
    level: 95,
  },
  {
    name: 'Python',
    icon: '/images/Python.png',
    description: 'Built mock telemetry decoding and scheduling subsystems for satellite testing.',
    level: 90,
  },
  {
    name: 'C/C++',
    icon: '/images/CC++.png',
    description: 'Embedded systems, low-level memory, and drivers.',
    level: 90,
  },
  {
    name: 'Tailwind CSS',
    icon: '/images/Tailwind.png',
    description: 'Fast utility-first styling for every screen size.',
    level: 80,
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-14">My Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col justify-between h-full"
          >
          <div>
            <div className="flex justify-center mb-4 min-h-[70px]">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1 min-h-[32px]">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4 min-h-[60px]">
              {skill.description}
            </p>
          </div>
          <div className="text-left mt-auto">
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <p className="text-sm text-gray-400">{skill.level}% comfortable</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}
