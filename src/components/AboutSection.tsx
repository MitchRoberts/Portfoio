export default function AboutSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I'm Mitch, a Computer Engineering student at Memorial University with a passion for embedded systems,
          space technology, and full-stack web development. I led the communication subsystem for the MUNStar-1
          satellite and am currently building futuristic platforms like APPartment and robertsmitch.com.
        </p>
        <p className="text-lg mt-6">
          Whether I'm building VHDL UART modules or Firebase-backed web apps, I love solving complex problems through code.
        </p>
      </div>
    </section>
  );
}
