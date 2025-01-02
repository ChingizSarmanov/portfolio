const Loader = () => (
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

export default Loader;
