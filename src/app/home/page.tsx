export default function HomePage() {
    return (
      <main>
        <section id="hero" className="p-8 text-center">
          <h1 className="text-4xl font-bold">Welcome to SG Dev</h1>
          <p className="mt-4 text-lg">Your go-to solution for web development.</p>
        </section>
        <section id="about" className="p-8">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-2">
            We are a team of passionate developers building amazing web experiences.
          </p>
        </section>
      </main>
    );
  }