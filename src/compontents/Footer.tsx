export default function Footer(){
    return(
        <footer className="border-t border-white/10 bg-stone-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold text-brand-300">Restaurant Name</p>
            <p className="mt-2 text-sm text-stone-400">
              Best restaurant in Your City for lunch, dinner, private events, and memorable dining experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-stone-400">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#menu" className="transition hover:text-white">Menu</a>
            <a href="#events" className="transition hover:text-white">Events</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    );
}