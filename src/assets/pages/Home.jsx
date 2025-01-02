import CodeSnippet from '../components/CodeSnippet';

const Home = () => (
  <section className="min-h-screen flex items-center justify-center pt-16">
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
);

export default Home;
