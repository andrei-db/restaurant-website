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
      <section id="menu" className="bg-stone-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Our Menu</span>
            <h2 className="mt-4 text-4xl font-bold">Signature dishes your guests will remember</h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Our menu is built around quality, flavor, and consistency. From premium meats to handmade pasta and
              seasonal desserts, every plate is prepared with care.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=900&auto=format&fit=crop"
                alt="Grilled ribeye steak with vegetables"
                className="h-48 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold">Grilled Ribeye Steak</h3>
              <p className="mt-3 text-stone-300">
                Premium ribeye cooked to perfection, served with roasted vegetables and house sauce.
              </p>
              <p className="mt-4 text-brand-300">$28</p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop"
                alt="Seafood pasta with herbs"
                className="h-48 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold">Fresh Seafood Pasta</h3>
              <p className="mt-3 text-stone-300">
                Handmade pasta with fresh seafood, garlic, herbs, and a delicate white wine sauce.
              </p>
              <p className="mt-4 text-brand-300">$22</p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop"
                alt="Signature burger with fries"
                className="h-48 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold">Signature Burger</h3>
              <p className="mt-3 text-stone-300">
                Juicy beef burger, cheddar cheese, caramelized onions, and our house-made signature sauce.
              </p>
              <p className="mt-4 text-brand-300">$16</p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=900&auto=format&fit=crop"
                alt="Chef dessert plated beautifully"
                className="h-48 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold">Chef’s Dessert</h3>
              <p className="mt-3 text-stone-300">
                A seasonal dessert crafted daily to end your dining experience on a perfect note.
              </p>
              <p className="mt-4 text-brand-300">$9</p>
            </article>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Request Full Menu
            </a>
          </div>
        </div>
      </section>
      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">The Experience</span>
            <h2 className="mt-4 text-4xl font-bold">Designed for memorable moments</h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              From the ambiance to the service, every detail is designed to create an inviting and elevated dining
              experience. Our restaurant is perfect for date nights, business meetings, family lunches, and
              celebrations with friends.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Romantic Dinners</h3>
                <p className="mt-2 text-sm text-stone-300">Warm lighting, elegant plates, and intimate seating.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Business Lunches</h3>
                <p className="mt-2 text-sm text-stone-300">Professional service and a comfortable environment.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Family Gatherings</h3>
                <p className="mt-2 text-sm text-stone-300">A welcoming atmosphere for all ages and occasions.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Special Celebrations</h3>
                <p className="mt-2 text-sm text-stone-300">Perfect for anniversaries, birthdays, and milestone evenings.</p>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
            alt="Guests enjoying dinner in a stylish restaurant"
            className="h-[520px] w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>
      <section id="events" className="bg-stone-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Private Events & Catering</span>
              <h2 className="mt-4 text-4xl font-bold">Host your next event with us</h2>
              <p className="mt-6 text-lg leading-8 text-stone-300">
                Planning a birthday, anniversary, corporate dinner, or private gathering? We offer tailored dining
                experiences, flexible event options, and attentive service to make your event seamless and memorable.
              </p>

              <ul className="mt-8 space-y-4 text-stone-300">
                <li>• Private dining spaces for intimate and group events</li>
                <li>• Custom food and drink menus</li>
                <li>• Support for corporate dinners and special celebrations</li>
                <li>• Catering available for select local events</li>
              </ul>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400"
                >
                  Request an Event Offer
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=900&auto=format&fit=crop"
                alt="Restaurant private event setup"
                className="h-64 w-full rounded-3xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=900&auto=format&fit=crop"
                alt="Elegant catering table"
                className="h-64 w-full rounded-3xl object-cover sm:mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Testimonials</span>
          <h2 className="mt-4 text-4xl font-bold">What our guests say</h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            Great dining experiences build trust. These testimonials help turn visitors into customers by showing
            the quality of your food, service, and atmosphere.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-brand-300">★★★★★</div>
            <p className="mt-4 text-stone-300">
              “One of the best restaurants in the city. Amazing food, beautiful atmosphere, and excellent service.”
            </p>
            <p className="mt-5 font-semibold text-white">— Sarah M.</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-brand-300">★★★★★</div>
            <p className="mt-4 text-stone-300">
              “Perfect place for a dinner date. The steak was incredible and the staff made everything feel special.”
            </p>
            <p className="mt-5 font-semibold text-white">— Daniel R.</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-brand-300">★★★★★</div>
            <p className="mt-4 text-stone-300">
              “We celebrated a birthday here and everything was outstanding. Highly recommended for special occasions.”
            </p>
            <p className="mt-5 font-semibold text-white">— Elena T.</p>
          </article>
        </div>
      </section>
      <section className="bg-stone-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">SEO Content</span>
            <h2 className="mt-4 text-4xl font-bold">Blog topics that can bring local traffic</h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Add articles like these to attract people searching for restaurants, food experiences, and event venues
              in your area.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Best Places for Dinner in Your City</h3>
              <p className="mt-3 text-stone-300">
                A local guide to where people can enjoy quality food, ambiance, and service.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">How to Choose the Perfect Restaurant for a Date Night</h3>
              <p className="mt-3 text-stone-300">
                Helpful content that targets romantic dinner and special-occasion searches.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Top Private Event Restaurants in Your City</h3>
              <p className="mt-3 text-stone-300">
                Strong local-intent content for birthdays, business dinners, and private celebrations.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Contact</span>
            <h2 className="mt-4 text-4xl font-bold">Visit us or get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Ready to reserve a table, plan an event, or ask about our menu? Contact us and our team will help you.
            </p>

            <div className="mt-8 space-y-5 text-stone-300">
              <p><span className="font-semibold text-white">Address:</span> 123 Main Street, Your City</p>
              <p><span className="font-semibold text-white">Phone:</span> +40 700 000 000</p>
              <p><span className="font-semibold text-white">Email:</span> hello@yourrestaurantwebsite.com</p>
              <p><span className="font-semibold text-white">Hours:</span> Mon–Thu 12:00–22:00 | Fri–Sun 12:00–23:00</p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-stone-300">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-stone-500 focus:border-brand-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm text-stone-300">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-stone-500 focus:border-brand-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm text-stone-300">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your reservation, event, or question..."
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-stone-500 focus:border-brand-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-2xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      
    </>
  );
}
