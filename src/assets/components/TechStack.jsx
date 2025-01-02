const TechStack = ({ technologies }) => (
    <section className="py-32 bg-gray-900">
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
  );
  
  export default TechStack;
  