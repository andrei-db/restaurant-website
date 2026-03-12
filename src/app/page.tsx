import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-stone-950"></div>

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1 text-sm text-brand-200">
              Best Restaurant in Your City
            </span>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Authentic Dining Experience in the Heart of Your City
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              Fresh ingredients, signature dishes, and a warm atmosphere designed for memorable lunches,
              romantic dinners, and special celebrations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#reservation"
                className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                View Menu
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-stone-300">
              <div>
                <p className="text-2xl font-bold text-white">4.9/5</p>
                <p>Guest rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Fresh</p>
                <p>Locally sourced ingredients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">7 Days</p>
                <p>Open for lunch & dinner</p>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Quick Reservation</p>
              <h2 className="mt-3 text-2xl font-bold">Book your table in seconds</h2>
              <p className="mt-2 text-stone-300">
                Ideal for date nights, family dinners, business lunches, and celebrations.
              </p>

              <form id="reservation" className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-stone-300">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-stone-500 focus:border-brand-400 focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="date" className="mb-2 block text-sm text-stone-300">Date</label>
                    <input
                      id="date"
                      type="date"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="mb-2 block text-sm text-stone-300">Guests</label>
                    <select
                      id="guests"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                    >
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-stone-300">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+40 700 000 000"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-stone-500 focus:border-brand-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400"
                >
                  Confirm Reservation
                </button>

                <p className="text-xs text-stone-400">
                  By booking, you agree to be contacted regarding your reservation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-stone-900/60">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Fresh Ingredients</h3>
            <p className="mt-3 text-stone-300">
              We select high-quality seasonal ingredients to ensure every dish is full of flavor and freshness.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Warm Atmosphere</h3>
            <p className="mt-3 text-stone-300">
              A stylish, welcoming space for romantic dinners, family meals, and memorable gatherings.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Easy Reservations</h3>
            <p className="mt-3 text-stone-300">
              Book a table quickly online and enjoy a smooth dining experience from arrival to dessert.
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">About Us</span>
            <h2 className="mt-4 text-4xl font-bold">More than just a meal</h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              At <strong>Restaurant Name</strong>, we believe dining should be an experience. Our menu combines
              traditional inspiration with modern creativity, bringing together fresh ingredients, refined flavors,
              and beautiful presentation.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              Whether you visit for a casual lunch, an elegant dinner, or a special occasion, our team is here to
              make every moment feel exceptional.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Chef-crafted menu</p>
                <p className="mt-2 text-sm text-stone-300">Balanced dishes made with skill, passion, and creativity.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Ideal for celebrations</p>
                <p className="mt-2 text-sm text-stone-300">Birthdays, anniversaries, business dinners, and private events.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop"
              alt="Restaurant interior with elegant dining tables"
              className="h-72 w-full rounded-3xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop"
              alt="Chef plating a gourmet dish"
              className="h-72 w-full rounded-3xl object-cover sm:mt-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
