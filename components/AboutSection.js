'use client';

export default function AboutSection({ skills }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <div className="card">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-slate-600 leading-8 text-lg">
              As an active student leader and publication member, I believe that
              leadership is not only about guiding people but also about inspiring
              positive change within the community. My experiences in journalism,
              volunteer work, and student organizations helped me strengthen my
              confidence, communication skills, and dedication to public service.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-slate-100 rounded-2xl px-4 py-5 text-center font-medium shadow-sm hover:shadow-md hover:bg-slate-200 transition duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
