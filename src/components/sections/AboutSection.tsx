import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative z-10 bg-transparent text-white py-20 px-6 md:px-20" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="flex justify-center mb-4 min-h-[70px]">
          <Image
            src={'/images/me.jpg'}
            alt={'Image of Mitch Roberts'}
            width={200}
            height={200}
            className="object-contain"
            style={{
              objectFit: "cover",
              borderRadius: "80px",
            }}
          />
        </div>
        <div className="bg-gray-800/60 p-6 rounded-xl mb-10 shadow-lg border border-gray-700">
          <p className="text-gray-300 mb-2 text-lg leading-relaxed">
            I&apos;m Mitch, a Computer Engineering student at Memorial University with a passion for embedded systems,
            space technology, and full-stack web development. I led the communication subsystem for the MUNStar-1
            satellite and am currently building futuristic platforms like RightRenter and robertsmitch.com.
          </p>
			  </div>
        
        <div className="bg-gray-800/60 p-6 rounded-xl mb-10 shadow-lg border border-gray-700">
          <p className="text-gray-300 mb-2 text-lg leading-relaxed">
            I also love all things sports! I am a huge hockey fan and have played since I was only 4 years old. I&apos;ve been a die hard Pittsburgh
            my whole life, and would one day love to go see a game in person.
          </p>
			  </div>
      </div>
    </section>
  );
}
