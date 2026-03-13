import Navbar from "@/compontents/Navbar";
import Footer from "@/compontents/Footer";
const menuSections = [
  {
    title: "Starters",
    items: [
      {
        name: "Bruschetta",
        description: "Toasted bread, tomatoes, basil, olive oil.",
        price: "$9",
      },
      {
        name: "Soup of the Day",
        description: "Fresh seasonal soup prepared daily.",
        price: "$8",
      },
    ],
  },
  {
    title: "Main Dishes",
    items: [
      {
        name: "Grilled Ribeye Steak",
        description: "Premium ribeye with roasted vegetables and house sauce.",
        price: "$28",
      },
      {
        name: "Fresh Seafood Pasta",
        description: "Handmade pasta with seafood, garlic, herbs, white wine sauce.",
        price: "$22",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Chef’s Dessert",
        description: "Seasonal dessert prepared daily by our pastry chef.",
        price: "$9",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold">Our Menu</h1>
        <p className="mt-4 max-w-2xl text-lg text-stone-300">
          Discover a carefully crafted menu built around quality, flavor, and consistency.
        </p>

        <div className="mt-14 space-y-12">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-3xl font-semibold text-orange-300">{section.title}</h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-orange-300">{item.price}</span>
                    </div>
                    <p className="mt-3 text-stone-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}