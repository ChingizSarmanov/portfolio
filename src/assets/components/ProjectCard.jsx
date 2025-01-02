const ProjectCard = ({ title, description, tech, metrics }) => (
  <div className="mb-32 last:mb-0 group">
    <div className="grid grid-cols-12 gap-8 items-center">
      <div className="col-span-7">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-green-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((techItem) => (
              <span
                key={techItem}
                className="px-3 py-1 bg-gray-900 text-sm rounded-full"
              >
                {techItem}
              </span>
            ))}
          </div>
          <ul className="text-sm text-gray-400 space-y-1">
            {metrics.map((metric) => (
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
);

export default ProjectCard;
