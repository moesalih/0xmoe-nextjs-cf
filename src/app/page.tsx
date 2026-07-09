import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-[640px] px-6 py-10">
        <div className="mb-12">
          <div className="text-6xl font-bold tracking-tight">MOΞ</div>
          <div className="text-zinc-500 mt-1">Software Designer &amp; Engineer</div>
        </div>

        <section className="flex flex-col gap-1 mb-12">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-3 text-inherit no-underline rounded-lg px-2 -mx-2 transition-colors"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded text-2xl overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.name} className="object-cover" />
                ) : (
                  project.emoji
                )}
              </div>
              <div>
                <div className="text-xl font-medium text-black dark:text-white">{project.name}</div>
                <div className="text-sm text-zinc-500">{project.desc}</div>
                {project.time && <div className="text-xs text-zinc-500">{project.time}</div>}
              </div>
            </a>
          ))}
        </section>

        <footer className="flex gap-5 text-zinc-500 text-xs">
          <a href="mailto:hi@0xMoe.com" className="hover:text-black dark:hover:text-white transition-colors">
            email
          </a>
          <a
            href="https://twitter.com/0xMoe_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            twitter
          </a>
          <a
            href="https://github.com/moesalih"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            github
          </a>
        </footer>
      </main>
    </div>
  )
}
