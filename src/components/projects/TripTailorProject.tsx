'use client'

import Image from 'next/image';


type TripTailorProjectProps = {
  onBack: () => void;
};

export default function TripTailorProject({onBack} : TripTailorProjectProps) {
    return (
      <section className='max-w-5xl mx-auto px-6 py-20'>
				<button onClick={onBack} className="text-sm text-gray-400 hover:text-white mb-6">
					← Back to Projects
				</button>

				<h2 className='text-4xl font-bold font-inter mb-4'>TripTailor</h2>
				<div className="bg-gray-800/60 mb-10 p-6 z-20 rounded-xl shadow-lg border border-gray-700">
					
					<p className="text-gray-300 mb-2 text-lg leading-relaxed">
						TripTailor is a full-stack travel planning and sharing app sinpired by social media platgorms like
						Pintrest and Airbnb. It allows users to create, save, and explore various travel itineraries tailord to their interests.
						Users can browse destination boards, filter by preferences, and personalize their experience through dynamic feeds,
						all based on thse users profile interests.
					</p>
				</div>

				<div className="space-y-16">
					{/* Feature: Itinerary Builder */}
					<div className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-gray-700">
						<h4 className="text-2xl font-bold text-white mb-2">Itinerary Builder</h4>
						<p className="text-gray-300 mb-4">
							Users can add detailed trip events and metadata such as location, tags, and price.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-6">
							<img src="/images/CItin1.png" alt="First" className="h-[500px] object-cover rounded-lg shadow-md" />
							<img src="/images/CItin2.png" alt="Second" className="h-[500px] object-cover rounded-lg shadow-md" />
						</div>
					</div>

					{/* Feature: Smart Search */}
					<div className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-gray-700">
						<h4 className="text-2xl font-bold text-white mb-2">Smart Search</h4>
						<p className="text-gray-300 mb-4">
							Score-based query ranking using tokens and filters to help users find itineraries that match their preferences.
						</p>
						<div className="flex justify-center">
							<Image src="/images/srch.png" alt="Smart Search" width={1000} height={700} className="rounded-lg shadow-md" />
						</div>
					</div>

					{/* Feature: Custom Feed */}
					<div className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-gray-700">
						<h4 className="text-2xl font-bold text-white mb-2">Personalized Feed</h4>
						<p className="text-gray-300 mb-4">
							Each user gets a dynamically updated feed of itineraries based on tags selected in their profile.
						</p>
						<div className="flex justify-center">
							<Image src="/images/TTHome.png" alt="Custom Feed" width={1000} height={700} className="rounded-lg shadow-md" />
						</div>
					</div>

					{/* Feature: Authentication System */}
					<div className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-gray-700">
						<h4 className="text-2xl font-bold text-white mb-2">Authentication System</h4>
						<p className="text-gray-300 mb-4">
							Secure sign-up and sign-in with hashed passwords and token-based authentication.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-6">
							<img src="/images/login1.png" alt="Login Screen 1" className="h-[500px] object-cover rounded-lg shadow-md" />
							<img src="/images/login2.png" alt="Login Screen 2" className="h-[500px] object-cover rounded-lg shadow-md" />
						</div>
					</div>

					{/* Feature: Save Boards */}
					<div className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-gray-700">
						<h4 className="text-2xl font-bold text-white mb-2">Save Boards</h4>
						<p className="text-gray-300 mb-4">
							Users can create and manage boards of saved itineraries, just like Pinterest.
						</p>
						<div className="flex justify-center">
							<Image src="/images/Board.png" alt="Save Boards" width={1000} height={700} className="rounded-lg shadow-md" />
						</div>
					</div>
				</div>



				{/* Table with Tech Stack Here */}
				<h3 className="text-2xl mt-16 font-bold text-white"> Infromation about the Tech</h3>
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
								<td className="px-6 py-4">React.js, JavaScript, CSS</td>
								<td className="px-6 py-4">UI inspired by Airbnb and Pinterest with dynamic components and filters</td>
							</tr>
							<tr>
								<td className="px-6 py-4 font-bold text-white">Backend</td>
								<td className="px-6 py-4">Go, Gin</td>
								<td className="px-6 py-4">Microservices for auth, profile, itinerary, feed, and more</td>
							</tr>
							<tr>
								<td className="px-6 py-4 font-bold text-white">Database</td>
								<td className="px-6 py-4">PostgreSQL, Docker</td>
								<td className="px-6 py-4">Containerized with persistent storage and schema management</td>
							</tr>
							<tr>
								<td className="px-6 py-4 font-bold text-white">Testing</td>
								<td className="px-6 py-4">CI/CD, Regression Tests</td>
								<td className="px-6 py-4">Enforced pipeline with dev data seeding and manual verification</td>
							</tr>
						</tbody>
					</table>
				</div>
				<a
					href="https://github.com/jordyob03/TripTailor"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:underline text-sm"
				>
					View on GitHub →
				</a>

      </section>
    )
}