'use client'

import Image from 'next/image';

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

			<div className="bg-gray-800/60 p-6 mb-10 rounded-xl shadow-lg border border-gray-700">
				<p className="text-gray-300 mb-2 text-lg leading-relaxed">
					APPartment is a responsive web platform designed to streamline rental property management. Landlords can create listings
					with photos, set rental details, and view tenant applications. Tenants can browse nearby properties, request viewing appointments,
					and communicate with landlords via an integrated messaging system.
				</p>
			</div>

			<div className="bg-gray-800/60 p-6 mb-10 rounded-xl shadow-lg border border-gray-700">
			<h4 className="text-2xl font-bold text-white mb-2">Role Bassed Access</h4>
				<p className="text-gray-300 mb-2 text-lg leading-relaxed">
					APPartment features Role Based Access, and can sign up as either a landlord or a tenant! Depending on the users role, the website behaves differently,
					with different dashabords and functionalities.
				</p>
				<div className="flex justify-center">
					<Image src="/images/APP2.png" alt="Feed" width={400} height={700} className="rounded-lg shadow-md" />
				</div>
			</div>

			<div className="bg-gray-800/60 p-6 mb-10 rounded-xl shadow-lg border border-gray-700">
				<h4 className="text-2xl font-bold text-white mb-2">Rental Listings</h4>
				<p className="text-gray-300 mb-4">
					Landlords are able to list their rental properties with detailed information:
				</p>
				<div className="flex justify-center">
					<Image src="/images/APP1.png" alt="Feed" width={1000} height={700} className="rounded-lg shadow-md" />
				</div>
			</div>

			<div className="bg-gray-800/60 p-6 mb-10 rounded-xl shadow-lg border border-gray-700">
				<h4 className="text-2xl font-bold text-white mb-2">Map Integration</h4>
				<p className="text-gray-300 mb-4">
					In the APPartment App, you are able to view all listings on an interactive map. Rentals display the approximate distance from the tenants current location.
					Filters are also available to furthur narrow down search results.
				</p>
				<div className="flex justify-center">
					<Image src="/images/APP3.png" alt="Feed" width={1000} height={700} className="rounded-lg shadow-md" />
				</div>
			</div>

			<div className="bg-gray-800/60 p-6 mb-10 rounded-xl shadow-lg border border-gray-700">
				<h4 className="text-2xl font-bold text-white mb-2">Map Integration</h4>
				<p className="text-gray-300 mb-4">
					Tenants can request viewings directly froml istings, by simply clicking on them! Landlords can manage their requests on a seperate page,
					and they are notified when a new request is submitted. There is also an optional chat feature that opens when requesting, to clarify appointment details.
				</p>
				<div className="flex justify-center">
					<Image src="/images/APP4.png" alt="Feed" width={1000} height={700} className="rounded-lg shadow-md" />
				</div>
			</div>

			<div className="bg-gray-800/60 p-6 mb-10 rounded-xl shadow-lg border border-gray-700">
				<h4 className="text-2xl font-bold text-white mb-2">Itinerary Builder</h4>
				<p className="text-gray-300 mb-4">
					Tenants and Landlords can message eachother with secure in app messaging. New message notifications appear, and they are there for follow ups with appointments,
					and for rental price negotiations. Once a price is secured in here, landlords are then able to send the offer through the app, and once the tenant accepts, they are assigned
					to eachother, and see their rental dashboard, which shows vital information about the property.
				</p>
				<div className="flex flex-col items-center gap-6">
					<img
						src="/images/APP51.png"
						alt="Form Input"
						className="w-[600px] h-auto rounded-lg shadow-md"
					/>
					<img
						src="/images/APP52.png"
						alt="Itinerary Output"
						className="w-[600px] h-auto rounded-lg shadow-md"
					/>
				</div>
			</div>

			<div className="bg-gray-800/60 p-6 mb-10 rounded-xl shadow-lg border border-gray-700">
				<h4 className="text-2xl font-bold text-white mb-2">Features Road Map</h4>
				<p className="text-gray-300 mb-4">
					There are many features that are currently being worked on, such as implementing ratings and reviews for both tenants and landlords after they the tenant finished renting. Here they are able to rate cleanliess, respnsiveness,a nd much more.
					Users will also be able to edit their profiles, including their roles, profile picture, and will be able to view their ratings from here. There is also a mobile friendly UI being worked on, and soon completed.
				</p>
			</div>
			
			{/* <div className="bg-gray-800/60 p-6 mb-10 rounded-xl shadow-lg border border-gray-700">
				<p className="text-gray-300 mb-2 text-lg leading-relaxed">
					Currently, the website is still under development, but the core features are implemented, and has been deployed for internal testing with
					potential investors. Constructive feedback will be given, and implemented to improve user experience, and functionality. The UI is in a prototype phase,
					and will be greatly improved on before commercial deployment.
				</p>
			</div> */}

			<h3 className="text-2xl mt-16 font-bold text-white">Techn Stack</h3>
			<div className="mt-4 border border-gray-700 mb-10 rounded-lg overflow-hidden">
				<table className="w-full text-left text-gray-300">
					<thead className="bg-gray-800 text-white text-lg">
						<tr>
							<th className="px-6 py-4 font-semibold">Layer</th>
							<th className="px-6 py-4 font-semibold">Tech Stack</th>
							<th className="px-6 py-4 font-semibold">Details</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-700 bg-gray-900">
						<tr>
							<td className="px-6 py-4 font-bold text-white">Frontend</td>
							<td className="px-6 py-4">Next.js, React, Tailwind CSS</td>
							<td className="px-6 py-4">Responsive interface with dynamic routing, conditional UI based on user roles</td>
						</tr>
						<tr>
							<td className="px-6 py-4 font-bold text-white">Backend</td>
							<td className="px-6 py-4">Firebase Firestore, Firebase Auth</td>
							<td className="px-6 py-4">Real-time database and authentication system for users, roles, and access control</td>
						</tr>
						<tr>
							<td className="px-6 py-4 font-bold text-white">Storage</td>
							<td className="px-6 py-4">Firebase Storage</td>
							<td className="px-6 py-4">Used for uploading and managing rental photos and profile images</td>
						</tr>
						<tr>
							<td className="px-6 py-4 font-bold text-white">Maps & Geo</td>
							<td className="px-6 py-4">MapBox, GeoFirestore</td>
							<td className="px-6 py-4">Autocomplete, coordinates, and location-based filtering for rentals</td>
						</tr>
						<tr>
							<td className="px-6 py-4 font-bold text-white">Deployment</td>
							<td className="px-6 py-4">Vercel</td>
							<td className="px-6 py-4">Automated deployments with preview URLs and production hosting</td>
						</tr>
						<tr>
							<td className="px-6 py-4 font-bold text-white">State & Forms</td>
							<td className="px-6 py-4">React Hooks, useState, useEffect</td>
							<td className="px-6 py-4">Interactive forms, modals, conditional rendering, and panel control</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	)
}