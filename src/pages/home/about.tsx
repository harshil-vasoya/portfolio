export default function About() {
  return (
    <section id="about" className="sm:py-14 p-7">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        About Me
      </h2>
      <div className="mt-4 w-full flex flex-col-reverse md:flex-row">
        <div className="w-full flex flex-col justify-center">
          <p className="mt-4 text-lg text-muted-foreground">
          I'm a computer science student with a passion for technology and software development. I love creating software that solves real-world problems and makes a positive impact on people's lives. When I'm not coding, you'll find me exploring the world, playing video games, or enjoying a game of chess.
          </p>
        </div>
      </div>
    </section>
  );
}
