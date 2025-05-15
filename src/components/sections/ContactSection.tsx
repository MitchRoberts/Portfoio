export default function ContactSection() {
  return (
    <section className="max-w-xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <p className="text-gray-300 mb-4">Reach out via email or LinkedIn — I&apos;d love to connect!</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:mcroberts@mun.ca" className="hover:underline text-blue-400">mcroberts@mun.ca</a>
        <a href="https://linkedin.com/in/YOUR_PROFILE" className="hover:underline text-blue-400" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
}
