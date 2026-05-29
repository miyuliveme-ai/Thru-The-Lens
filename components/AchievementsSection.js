'use client';

export default function AchievementsSection({ achievements }) {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-[2rem] p-10 shadow-2xl">
        <h2 className="text-4xl font-bold mb-8">Achievements & Advocacy</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition duration-300"
            >
              <div className="text-3xl mb-4">🏆</div>
              <p className="text-lg leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
