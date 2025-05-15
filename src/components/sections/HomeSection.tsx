export default function HomeSection() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Mitch Roberts</h1>
      <p className="text-xl md:text-2xl mb-6">Engineer | Web Developer | Space-Tech</p>
      <a
        href="/resume.pdf"
        className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
      >
        View Resume
      </a>
    </section>
  );
}
