//import Image from 'next/image';

type APPartmentProjectProps = {
  onBack: () => void;
};

export default function APPartmentProject({ onBack }: APPartmentProjectProps) {
	return (
		<section className='max-w-5xl mx-auto px-6 py-20'>
			<button onClick={onBack} className="text-sm text-gray-400 hover:text-white mb-6">
        ← Back to Projects
      </button>

			<h2 className='text-4xl font-bold mb-4'>APPartment Rental Management Hub</h2>
			
		</section>
	)
}