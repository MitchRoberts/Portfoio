'use client'

type INCOMINGProjectProps = {
  onBack: () => void;
};

export default function INCOMINGProject({onBack} : INCOMINGProjectProps) {
    return (
      <section className='max-w-5xl mx-auto px-6 py-20'>
				<button onClick={onBack} className="text-sm text-gray-400 hover:text-white mb-6">
					← Back to Projects
				</button>

				<h2 className='text-4xl font-bold mb-4'>INCOMING! Game</h2>
			<div className="bg-gray-800/60 p-6 rounded-xl mb-10 shadow-lg border border-gray-700">
				<p className="text-gray-300 mb-2 text-lg leading-relaxed">
					INCOMING! is a turn based, artillery shooter game developed within Unity, and coded in C#.
					It uses real time networking with custom made UDP / TCP protocols. In the game,
					Players are entered in a moving phase, where over a randomly generated 2D terrain,
					they are able to move how they would like. Then once both players are finished moving,
					They must then angle their barrel, and pick which type of ammunition they would like to use.
					They can then adjust the power and angle, and then fire! The game has destructible
					terrain, and take inspiration from classic games like Worms or ShellShock Live.
				</p>
			</div>
			<div className="bg-gray-800/60 p-6 rounded-xl mb-10 shadow-lg border border-gray-700">
				<table className="w-full text-left text-gray-300">
						<thead className="bg-gray-800 text-white text-lg">
							<tr>
								<th className="px-6 py-4 font-semibold">Key Features</th>
								<th className="px-6 py-4 font-semibold">Description</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-700 bg-gray-900">
							<tr>
								<td className="px-6 py-4 font-bold text-white">Built in Unity with C#</td>
								<td className="px-6 py-4">Learned and Developed in Unity with C# using Unity engine 2022.3.20f1</td>
							</tr>
							<tr>
								<td className="px-6 py-4 font-bold text-white">Custom UDP/TCP Protocols</td>
								<td className="px-6 py-4">Custom code was written to support LAN and remote matches, even between different operating systems</td>
							</tr>
							<tr>
								<td className="px-6 py-4 font-bold text-white">Game Features</td>
								<td className="px-6 py-4">Includes basic player-side prediction, and custom physics for each different projectile type</td>
							</tr>
							<tr>
								<td className="px-6 py-4 font-bold text-white">UI and Artwork</td>
								<td className="px-6 py-4">All artwork used was either built from scratch or used from open source resources</td>
							</tr>
						</tbody>
					</table>
			</div>
			<div className="bg-gray-800/60 p-6 rounded-xl mb-10 shadow-lg border border-gray-700">
				<p className="text-gray-300 mb-2 text-lg leading-relaxed">
					Unfortunately due to INCOMING! being produced on an out of date Unity engine, and the game not being properly upgraded
					along the way, it is not possible at this time to showcase the exciting gameplay that was created at this time. But
					Please check out the code on the GitHub link below!
				</p>
			</div>
				<a
					href="https://github.com/MiguelPond/INCOMING"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:underline text-sm"
				>
					View on GitHub →
				</a>
      </section>
    )
}