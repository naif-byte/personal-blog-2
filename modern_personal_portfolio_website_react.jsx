export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">
            MOSTAFA<span className="text-cyan-400">.</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Mostafa Naif
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              A passionate engineering student and developer creating modern,
              futuristic, and high-performance digital experiences.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-30 rounded-full"></div>

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="Profile"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-cyan-400/50 transition">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>

              <p className="text-gray-400 leading-relaxed text-lg">
                I am an enthusiastic learner and creator who enjoys building
                beautiful websites, solving engineering problems, and exploring
                technology. I focus on clean design, user experience, and modern
                web development.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-400/50 transition">
              <h3 className="text-2xl font-bold mb-4">My Vision</h3>

              <p className="text-gray-400 leading-relaxed text-lg">
                My goal is to combine creativity and engineering to create
                impactful digital experiences that stand out with elegance,
                performance, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Portfolio Website',
                desc: 'A futuristic portfolio website with modern UI and smooth animations.',
              },
              {
                title: 'Engineering Dashboard',
                desc: 'Interactive dashboard with data visualization and analytics.',
              },
              {
                title: 'AI Study Assistant',
                desc: 'Smart learning assistant for solving and understanding problems.',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-black/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition duration-500"
              >
                <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-3xl font-black text-white/20">
                  PROJECT
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-black transition font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'C++',
              'Python',
              'UI/UX Design',
              'Problem Solving',
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl py-8 hover:scale-105 hover:border-cyan-400 transition duration-300"
              >
                <p className="text-xl font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Contact <span className="text-purple-400">Me</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Interested in collaborating or working together? Feel free to reach
            out.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:yourmail@example.com"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-purple-400 hover:text-purple-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        <p>© 2026 Mostafa Naif. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
