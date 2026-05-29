'use client';

export default function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="section-title text-pink-700">Experiences & Leadership</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="card border-pink-100 hover:-translate-y-2 transition duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <p className="text-sm uppercase tracking-wider text-pink-500 mb-3">
              {item.year}
            </p>

            <h3 className="text-2xl font-bold mb-2 text-pink-700">{item.title}</h3>

            <p className="text-slate-600 leading-relaxed">
              {item.organization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
