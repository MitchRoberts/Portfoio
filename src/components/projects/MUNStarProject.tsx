'use client'

import Image from 'next/image';

type MUNStarProjectProps = {
  onBack: () => void;
};

export default function MUNStarProject({ onBack }: MUNStarProjectProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <button onClick={onBack} className="text-sm text-gray-400 hover:text-white mb-6">
        ← Back to Projects
      </button>

      <h2 className="text-4xl font-bold mb-4">MUNStar-1 Communications</h2>
      <div className="bg-gray-800/60 mb-10 p-6 rounded-xl shadow-lg border border-gray-700">
        <p className="text-gray-300 mb-2 text-lg leading-relaxed">
          The MUNStar-1 project is a student lead satellite team that in charge of providing a satellite to the Canadian Space Agency for the Cubics innioative.
          MUN is one of the several Canadian universities taking part in this program, witch each satellite having their own unique payload. the MUNStar-1 satellite
          will be used by oceanographers to determine different ocean chararisitics such as sea ice levels and more
        </p>
      </div>

      <div className="bg-gray-800/60 mb-10 p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Project Scope</h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-white mb-2">Full Satellite System</h4>
            <p className="text-gray-300">
              Power, Attitude Control, Communications, Payload, and Mission Control System.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-white mb-2">Cross-Subsystem Coordination</h4>
            <p className="text-gray-300">
              Collaborated with all subsystem team leads to ensure full system integration.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow hover:shadow-xl transition duration-300 md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-2">Ground-to-Satellite Communication</h4>
            <p className="text-gray-300">
              Custom protocols over UHF radio and SDR hardware for robust uplink/downlink handling.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Image
          src="/images/munstar-1-remder.png"
          alt="MUNStar Communication Diagram"
          width={1000}
          height={600}
          className="rounded z-9 relative shadow-md"
        />
      </div>

      <div className="bg-gray-800/60 mb-10 p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">My Role – Communications Subsystem Team Lead</h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {/* Internal Comms */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-white mb-2">Internal Communication Protocols</h4>
            <p className="text-gray-300">
              Designed and simulated a 9-bit UART protocol in VHDL for subsystem communication via RS-485.
              Developed reusable components for command parsing, register access, and module handshaking.
            </p>
          </div>

          {/* Onboard Integration */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-white mb-2">Onboard Software Integration</h4>
            <p className="text-gray-300">
              Implemented a C wrapper layer to allow the onboard computer to send standardized packets to the communication FPGA via UART.
            </p>
          </div>

          {/* External Radio Comms */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow hover:shadow-xl transition duration-300 md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-2">Ground-to-Satellite Communication</h4>
            <p className="text-gray-300">
              Built message structures and command layers for UHF communication. Developed and tested CRC32 and Hamming error detection and correction.
            </p>
          </div>

          {/* Testing */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-white mb-2">Hardware-in-the-Loop Testing</h4>
            <p className="text-gray-300">
              Performed loopback and integrated testing using ZedBoard and ESPS modules to validate all protocol layers under real conditions.
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-white mb-2">Cross-Team Collaboration</h4>
            <p className="text-gray-300">
              Coordinated closely with power, payload, and software teams to ensure consistent message standards and interface compatibility.
            </p>
          </div>
        </div>
      </div>


      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
        As the team lead for the communications subsystem of the MUNStar-1 CubeSat, I designed and implemented
        the satellite’s internal and external communication architecture. This included developing UART and
        RS-485-based interfaces between subsystems and creating reliable downlink protocols for ground communication.
      </p>

      <p className="text-gray-300 mb-6 text-lg">
        All firmware was developed in VHDL and C, tested using AMDs Vivado software, and deployed to ZedBoard prototypes.
        CRC32, erasure coding, and telemetry packetization were implemented to improve link reliability.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {["VHDL", "UART", "C", "RS-485", "Embedded Systems"].map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-sm bg-gray-800 border border-gray-700 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href="https://gitlab.com/killick1/munstars-group"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 hover:underline text-sm"
      >
        View on GitLab →
      </a>
    </section>
  );
}
