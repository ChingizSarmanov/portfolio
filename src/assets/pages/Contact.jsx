import CodeSnippet from '../components/CodeSnippet';

const Contact = () => (
  <section className="py-32">
    <div className="max-w-3xl mx-auto px-4">
      <CodeSnippet>
        <div className="text-blue-400">const</div> contact = {'{'}
        <div className="pl-4">
          email: <span className="text-green-400">"chingiz.sarmanov@example.com"</span>,
          <br />
          github: <span className="text-green-400">"github.com/ChingizSarmanov"</span>,
          <br />
          linkedin: <span className="text-green-400">"linkedin.com/in/ChingizSarmanov"</span>
        </div>
        {'};'}
      </CodeSnippet>
      <div className="mt-8">
  <button 
    onClick={() => setIsContactFormOpen(true)}
    className="w-full py-4 px-6 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
  >
    Написать мне
  </button>
</div>
    </div>
  </section>
);

export default Contact;
