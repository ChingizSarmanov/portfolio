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

export default CodeSnippet;
