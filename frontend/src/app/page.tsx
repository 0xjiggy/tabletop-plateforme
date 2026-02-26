export default function Home() {
  const techStack = [
    'Next.js',
    'NestJS',
    'Socket.io',
    'PostgreSQL',
    'Redis',
    'OpenAI',
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 bg-slate-950">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Hero */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-yellow-400">
            Tabletop Plateforme
          </h1>
          <p className="text-2xl font-medium text-cyan-400">
            Cyber Crisis Simulation Platform
          </p>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Simulate real-world cyber crisis tabletop exercises, track team
            decisions in real-time, and generate AI-powered After-Action
            Reports.
          </p>
        </div>

        {/* CTA */}
        <div>
          <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold rounded-lg transition-colors">
            Get Started
          </button>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-800 text-cyan-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
