'use client';

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
          Student Leader • Photojournalist • Volunteer
        </p>

        <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          Building Stories Through Leadership & Service
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          I am NICA ALTHEA LLAGUNO, a passionate photojournalist and creative storyteller
          dedicated to storytelling, youth empowerment, and community engagement.
          Through leadership roles and campus journalism, I continue to develop skills
          in communication, creativity, and public service.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="btn-primary"
          >
            Contact Me
          </a>

          <a
            href="#experience"
            className="btn-secondary"
          >
            View Experiences
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-80 h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center hover:shadow-3xl transition duration-300">
          <div className="text-center px-8">
            <div className="w-28 h-28 mx-auto rounded-full bg-white/70 flex items-center justify-center text-5xl mb-6 shadow-inner">
              📸
            </div>

            <h3 className="text-2xl font-bold">NICA ALTHEA LLAGUNO</h3>
            <p className="text-slate-700 mt-2">
              Chief Photojournalist & Community Volunteer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
