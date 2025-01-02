import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm'; // Укажите правильный путь к компоненту
const FrontendPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const technologies = [
    { category: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'Next.js'] },
    { category: 'Styling', items: ['Tailwind', 'SCSS', 'Styled Components', 'Framer Motion'] },
    { category: 'Tools', items: ['Git', 'Webpack', 'Vite', 'Jest'] }
  ];

  const projects = [
    {
      title: "E-Commerce App",
      description: "React + Next.js приложение с серверным рендерингом",
      tech: ["React", "Next.js", "TypeScript", "Redux"],
      metrics: ["99 Lighthouse Score", "2s Load Time", "90%+ Test Coverage"],
      link: "#"
    },
    {
      title: "Dashboard UI Kit",
      description: "Библиотека React компонентов с Storybook",
      tech: ["React", "TypeScript", "Styled Components", "Storybook"],
      metrics: ["100+ Components", "Atomic Design", "Zero Dependencies"],
      link: "#"
    },
    {
      title: "Real-time Analytics",
      description: "SPA для визуализации данных в реальном времени",
      tech: ["Vue 3", "D3.js", "WebSocket", "Vite"],
      metrics: ["60fps Animations", "SSE Integration", "PWA Support"],
      link: "#"
    }
  ];

  // Анимированный прелоадер в виде кода
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black font-mono">
        <div className="space-y-2 text-sm">
          {[
            "npm install portfolio",
            "importing components...",
            "compiling typescript...",
            "optimizing builds...",
            "starting development server..."
          ].map((text, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 400}ms` }}
            >
              <span className="text-green-500">$</span>
              <span className="text-white ml-2">{text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const CodeSnippet = ({ children }) => (
    <div className="font-mono bg-gray-900 p-4 rounded-lg text-sm relative group">
      <div className="absolute top-2 right-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
        <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full" />
        <span className="inline-block w-3 h-3 bg-green-500 rounded-full" />
      </div>
      {children}
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen font-mono">
      {/* Курсор */}
      <div
        className="fixed w-8 h-8 border border-white rounded-full mix-blend-difference pointer-events-none z-50 transition-transform duration-300"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Навигация */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl">
              <span className="text-green-500">const</span> developer = 
              <span className="text-purple-500">'frontend'</span>;
            </div>
            <div className="space-x-8">
              {['projects', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-green-500 transition-colors"
                >
                  {`<${item} />`}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-4xl w-full mx-4">
          <div className="mb-8">
            <CodeSnippet>
              <div className="text-blue-400">class</div> Developer {'{'}
              <div className="pl-4">
                <span className="text-purple-400">constructor</span>() {'{'}
                <div className="pl-4">
                  this.name = <span className="text-green-400">"Chingiz Sarmanov"</span>;
                  <br />
                  this.role = <span className="text-green-400">"Frontend Developer"</span>;
                  <br />
                  this.skills = [<span className="text-green-400">"React"</span>, <span className="text-green-400">"TypeScript"</span>, ...];
                </div>
                {'}'}
              </div>
              {'}'}
            </CodeSnippet>
          </div>
          <h1 className="text-5xl font-bold mb-6">Frontend Developer</h1>
          <p className="text-gray-400 text-xl">Создаю быстрые, красивые и доступные сайты</p>
        </div>
      </section>

      {/* Проекты */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="mb-32 last:mb-0 group"
            >
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-7">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-green-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-900 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.metrics.map((metric) => (
                        <li key={metric} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-span-5 h-[400px] bg-gray-900 rounded-lg overflow-hidden relative group-hover:scale-95 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Технологии */}
      <section id="skills" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16">Tech Stack</h2>
          <div className="grid grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div key={tech.category}>
                <h3 className="text-xl mb-6 text-green-500">{tech.category}</h3>
                <div className="space-y-4">
                  {tech.items.map((item) => (
                    <div
                      key={item}
                      className="p-4 bg-black rounded-lg hover:scale-105 transition-transform cursor-default"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-32">
        <div className="max-w-3xl mx-auto px-4">
          <CodeSnippet>
            <div className="text-blue-400">const</div> contact = {'{'}
            <div className="pl-4">
              email: <span className="text-green-400">"chingiz.sarmanov@mail.ru"</span>,
              <br />
              github: <span className="text-green-400">"github.com/ChingizSarmanov"</span>,
              <br />
              linkedin: <span className="text-green-400">"linkedin.com/in/ChingizSarmanov"</span>
            </div>
            {'};'}
          </CodeSnippet>
          <div className="mt-8">
          <button 
  onClick={() => window.location.href = 'mailto:chingiz.sarmanov@mail.ru'}
  className="w-full py-4 px-6 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors">
  Написать мне
</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontendPortfolio;
