'use client';

export default function CommunitySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-bold mb-6">Passion for Photojournalism</h2>

          <p className="text-slate-600 leading-8 text-lg">
            Photography became more than just capturing moments — it became a way
            to tell stories, express emotions, and preserve meaningful experiences.
            As a photojournalist, I strive to create visuals that speak beyond words,
            highlighting authenticity, creativity, and the emotions behind every frame.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-600 rounded-[2rem] p-10 shadow-xl text-white flex flex-col justify-center hover:shadow-2xl transition duration-300">
          <h2 className="text-3xl font-bold mb-6">Personal Vision</h2>

          <p className="text-lg leading-8 text-slate-100">
            My goal is to continue growing as a visual storyteller and creative
            individual who can inspire people through photography, journalism,
            and meaningful narratives that leave lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
