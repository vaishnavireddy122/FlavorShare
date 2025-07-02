import food from '../assets/Foood.jpeg'

export default function AboutUs() {
  return (
    <div className="min-h-screen rounded-xl bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 py-12 px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
          About Us 🍴
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          At <span className="font-semibold">Flavor Share</span>, we believe
          food is meant to be shared. 🌍
        </p>

        <img src={food} className="w-screen h-130 rounded-4xl" alt="" />
        <p className="text-lg text-gray-600 mb-4">
          Our platform is a space where home cooks, food enthusiasts, and
          creators come together to post, save, and explore recipes from every
          corner of the world. 🥘✨
        </p>
        <p className="text-lg text-gray-600 mb-4">
          We’ve designed a clean, easy-to-use interface so you can focus on what
          matters: discovering dishes you love and sharing your own kitchen
          stories. 📖
        </p>
        <p className="text-lg text-gray-600 mb-4">
          No ads. No clutter. Just real food and real people. 😊
        </p>
        <p className="text-lg text-gray-600">
          Whether you’re searching for inspiration or sharing your family’s
          favorite recipe, <span className="font-semibold">Flavor Share</span>{" "}
          is built to make cooking more connected. 🤝
        </p>
      </div>
    </div>
  );
}
