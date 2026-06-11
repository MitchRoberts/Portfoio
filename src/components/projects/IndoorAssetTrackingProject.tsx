'use client'

import Image from 'next/image';

type IndoorAssetTrackingProjectProps = {
  onBack: () => void;
};

const ProjectImage = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) => (
  <figure>
    <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-700 bg-white shadow-md">
      <Image src={src} alt={alt} fill className="object-contain" sizes="(min-width: 768px) 50vw, 100vw" />
    </div>
    <figcaption className="mt-3 text-center text-sm text-gray-400">{label}</figcaption>
  </figure>
);

const DashboardImage = () => (
  <figure className="mx-auto max-w-xl">
    <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-700 bg-white shadow-md">
      <Image
        src="/images/floor.png"
        alt="SafeTrack live tracking dashboard showing the asset directory and hospital floor plan"
        fill
        className="object-contain"
        sizes="(min-width: 768px) 576px, 100vw"
      />
    </div>
    <figcaption className="mt-3 text-center text-sm text-gray-400">
      SafeTrack live floor map and asset directory
    </figcaption>
  </figure>
);

export default function IndoorAssetTrackingProject({ onBack }: IndoorAssetTrackingProjectProps) {
  const technologies = [
    'BLE 5.1',
    'nRF52833',
    'Zephyr RTOS',
    'C',
    'MQTT',
    'React',
    'Node.js',
    'Tailwind CSS',
    'Konva',
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <button onClick={onBack} className="mb-6 text-sm text-gray-400 hover:text-white">
        &larr; Back to Projects
      </button>

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        Embedded Systems / Real-Time Location System
      </p>
      <h2 className="mb-4 text-4xl font-bold">SafeTrack: Indoor Asset Tracking for Hospitals</h2>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        {[
          ['Problem', 'Nurses can lose roughly an hour per shift searching for equipment such as IV pumps, stretchers, and monitors.'],
          ['Approach', 'BLE tags, fixed antenna-array locators, and a web dashboard provide live, room-level location data.'],
          ['Result', 'Our three-person team delivered a successful end-to-end prototype with location updates every two seconds.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-lg">
            <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
            <p className="leading-relaxed text-gray-300">{text}</p>
          </div>
        ))}
      </div>

      <div className="mb-10 rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-lg">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-2 font-semibold text-blue-300">More time for patient care</h4>
            <p className="leading-relaxed text-gray-300">
              Hospital equipment often has no real-time location tracking, forcing staff to
              manually search rooms and storage areas. The system makes tracked equipment easy
              to locate and shows whether it is available or currently in use.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-blue-300">Faster emergency response</h4>
            <p className="leading-relaxed text-gray-300">
              Wearable tags include a distress button. When pressed, the dashboard immediately
              alerts support staff and displays the nurse&apos;s location so help can arrive sooner.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10 rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-lg">
        <h3 className="mb-6 text-2xl font-bold text-white">How the System Works</h3>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['1. Tags transmit', 'BLE tags attached to equipment or worn by staff broadcast Constant Tone Extension packets.'],
            ['2. Locators listen', 'Fixed 12-antenna arrays collect signal and in-phase/quadrature data throughout each room.'],
            ['3. Data is processed', 'An edge computer filters the data and estimates bearing using a modified MUSIC algorithm.'],
            ['4. Staff monitor', 'Location and status updates reach the web application over MQTT for live visualization.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-gray-700 bg-gray-900 p-5">
              <h4 className="mb-2 font-semibold text-white">{title}</h4>
              <p className="text-sm leading-relaxed text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-lg">
        <h3 className="mb-2 text-2xl font-bold text-white">Prototype Hardware</h3>
        <p className="mb-6 leading-relaxed text-gray-300">
          We developed the prototype around Nordic nRF52833 development kits running Zephyr
          RTOS. The tags support equipment-status and emergency buttons, while the locator uses
          a switched 12-antenna patch array to estimate the direction of each signal.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectImage
            src="/images/nrf_board.png"
            alt="Nordic nRF52833 development board used as a BLE tracking tag"
            label="nRF52833 Board Used for Prototype Tags"
          />
          <ProjectImage
            src="/images/locator_board.jpg"
            alt="Nordic 12-antenna locator array used for BLE Angle of Arrival"
            label="12-Antenna Locator Array"
          />
        </div>
      </div>

      <div className="mb-10 rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-lg">
        <h3 className="mb-2 text-2xl font-bold text-white">Monitoring Application</h3>
        <p className="mb-6 leading-relaxed text-gray-300">
          The web application receives real-time location data from the processing computer over
          MQTT. It includes a live floor map, an asset directory, equipment availability,
          emergency alerts, data summaries, and tools for creating floor layouts.
        </p>
        <DashboardImage />
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-lg">
          <h3 className="mb-3 text-xl font-bold text-white">Design Constraints</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Room-level accuracy in a noisy RF environment</li>
            <li>Attachments that do not interfere with medical equipment</li>
            <li>Hardware that can be sanitized to medical standards</li>
            <li>A simple interface requiring little to no training</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-lg">
          <h3 className="mb-3 text-xl font-bold text-white">Privacy by Design</h3>
          <p className="leading-relaxed text-gray-300">
            Staff tracking creates real privacy concerns. We designed the prototype to use staff
            location only for live safety monitoring, avoid storing staff movement history, and
            allow wearable tags to be powered off. These choices help prevent the system from
            becoming a productivity-monitoring tool.
          </p>
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-lg">
        <h3 className="mb-3 text-2xl font-bold text-white">What We Learned</h3>
        <p className="leading-relaxed text-gray-300">
          The prototype proved that affordable indoor BLE tracking is practical, but also showed
          where the next iteration should improve. Custom compact tag PCBs would make the
          wearables suitable for lanyards, and multiple calibrated locators per room would enable
          triangulation and improve accuracy beyond the current bearing-and-RSSI approach.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-200"
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}
