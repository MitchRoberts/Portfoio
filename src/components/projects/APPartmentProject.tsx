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

			<p className="text-gray-300 mb-6 text-lg leading-relaxed">
			  APPartment is a responsive web platform designed to streamline rental property management. Landlords can create listings
				with photos, set rental details, and view tenant applications. Tenants can browse nearby properties, request viewing appointments,
				and communicate with landlords via an integrated messaging system.
			</p>
			<p className="text-gray-300 mb-6 text-lg leading-relaxed">
				The app includes user authentication, role-based dashboards, tenant-landlord assignment, appointment scheduling,
				rating/review systems, and Firebase-backed real-time updates. Future expansions include push notifications and mobile app support.
			</p>
			<p className="text-gray-300 mb-6 text-lg leading-relaxed">
				Currently, the websit is still under development, but the core features are implemented, and has been deployed for internal testing with
				potential investors. Constructive feedback will be given, and implemented to improve user experience, functionality, and look of the website.
			</p>
			
		</section>
	)
}