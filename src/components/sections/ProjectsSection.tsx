import { Project } from '@/types/Project';

type ProjectsSectionProps = {
  project: Project[];
  onProjectClick: (slug: string) => void;
};

export default function ProjectsSection({ project, onProjectClick }: ProjectsSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {project.map((proj) => (
          <button
            key={proj.slug}
            onClick={() => onProjectClick(proj.slug)}
            className="text-left bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-2 hover:underline cursor-pointer">{proj.title}</h3>
            <p className="text-gray-400 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {proj.tech && proj.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-gray-800 border border-gray-700 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
