export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-16 text-white scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-xl w-full text-center">
        <h2 className="text-3xl md:text-4xl mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-10">
          Let’s build something together 🚀
        </p>

        {/* CONTACT CARDS STYLE */}
        <div className="space-y-4 text-left">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:shadow-blue-500/20 transition">
            📧 Email: kylponio@gmail.com
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:shadow-blue-500/20 transition">
            📱 Phone: +63 9054106544
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:shadow-blue-500/20 transition">
            💻 GitHub: github.com/kylponio
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:shadow-blue-500/20 transition">
            📘 Facebook: facebook.com/kylponio
          </div>
        </div>
      </div>
    </section>
  );
}