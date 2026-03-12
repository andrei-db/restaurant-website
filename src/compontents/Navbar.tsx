export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="#" className="text-2xl font-bold tracking-wide text-brand-300">Restaurant Name</a>

                <nav className="hidden gap-8 md:flex">
                    <a href="#about" className="text-sm text-stone-300 transition hover:text-white">About</a>
                    <a href="#menu" className="text-sm text-stone-300 transition hover:text-white">Menu</a>
                    <a href="#experience" className="text-sm text-stone-300 transition hover:text-white">Experience</a>
                    <a href="#events" className="text-sm text-stone-300 transition hover:text-white">Events</a>
                    <a href="#reviews" className="text-sm text-stone-300 transition hover:text-white">Reviews</a>
                    <a href="#contact" className="text-sm text-stone-300 transition hover:text-white">Contact</a>
                </nav>

                <a
                    href="#reservation"
                    className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-400"
                >
                    Reserve a Table
                </a>
            </div>
        </header>
    );
}