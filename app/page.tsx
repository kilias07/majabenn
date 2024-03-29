export default function Home() {
  return (
    <main className="relative h-svh">
      <div className="flex *:w-full h-full">
        <div className="bg-[#F5F0F6] flex justify-center flex-col md:pr-10 pr-4">
          <h1 className="text-3xl tracking-[-0.02em] md:text-5xl font-display text-[#0C1B33] text-right">
            Maja Benn
          </h1>
          <p className="text-right text-base md:text-lg mt-4">
            <a
              href="mailto:kontakt@majabenn.pl"
              className="text-[#0C1B33] hover:text-[#9D9171]"
            >
              kontakt@majabenn.pl
            </a>
          </p>
        </div>

        <div className="bg-[#0C1B33] flex items-center">
          <ul className="pl-4 md:pl-10 text-gray-400 text-sm md:text-lg flex flex-col gap-2 relative after:contet-[''] after:absolute after:w-[140%] after:h-1 after:-left-[70%] after:-bottom-4 after:bg-[#9D9171] after:rounded-2xl">
            <li>Konsultacje psychogeriatryczne</li>
            <li>Doradztwo psychologiczne</li>
            <li>Treningi funkcji poznawczych</li>
            <li>Psychoedukacja i szkolenia</li>
          </ul>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 text-center">
        <h2 className="text-lg md:text-4xl inline-block p-10 text-white">
          Strona w budowie
        </h2>
      </div>
    </main>
  );
}
