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
      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
        The MUNStar-1 project is a student lead satellite team that in charge of providing a satellite to the Canadian Space Agency for the Cubics innioative.
        MUN is one of the several Canadian universities taking part in this program, witch each satellite having their own unique payload. the MUNStar-1 satellite
        will be used by oceanographers to determine different ocean chararisitics such as sea ice levels and more
      </p>

      <div className="mb-6">
        <Image
          src="/images/munstar-1-remder.png"
          alt="MUNStar Communication Diagram"
          width={1000}
          height={600}
          className="rounded shadow-md"
        />
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
