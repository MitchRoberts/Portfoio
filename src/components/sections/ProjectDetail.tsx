import { Project } from '@/types/Project';

type ProjectDetailProps = {
  project: Project;
  onBack: () => void;
};

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <button onClick={onBack} className="text-sm text-gray-400 hover:text-white mb-6">
        ← Back to Projects
      </button>
      <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
      <p className="text-gray-300 mb-6">{project.details}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech && project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-sm bg-gray-800 border border-gray-700 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm hover:underline ${
          project.platform === 'gitlab' ? 'text-orange-400' : 'text-blue-400'
        }`}
      >
        View on {project.platform === 'gitlab' ? 'GitLab' : 'GitHub'} →
      </a>
    </section>
  );
}
