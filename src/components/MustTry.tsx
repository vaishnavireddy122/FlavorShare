import mutton from '../assets/zufrani2.jpg'
import dosa from "../assets/dosa.jpg";
import butter from '../assets/butter chicken.jpg'
import chickendbiryani from "../assets/chickenbiryani(1).jpg";
import kaddu from '../assets/kadhu ki kheer.jpg'
import fish from '../assets/fishfry.jpg'

export default function MustTry() {
  const dishes = [
    {
      name: "Butter Chicken",
      description:
        "North India’s iconic curry—creamy, tangy, and soul-satisfying.Perfectly spiced chicken in a rich tomato-butter sauce.",
      image: butter,
    },
    {
      name: "Masala Dosa",
      description:
        "Thin, crisp, and golden—this South Indian classic never fails.Light, tangy, and perfectly paired with chutney and sambar.",
      image: dosa,
    },
    {
      name: " Chicken Biryani",
      description:
        "A rich, spiced rice dish layered with marinated chicken and herbs.Every bite is a burst of flavor, warmth, and tradition.",
      image: chickendbiryani,
    },
  
    {
      name: "Zafrani Mutton Biryani",
      description:
        "A luxurious biryani infused with saffron and slow-cooked mutton.Deep, royal flavors with a melt-in-the-mouth texture.",
      image: mutton,
    },
    {
      name: "Kadhu ki Kheer",
      description:
        "A comforting dessert made with pumpkin, milk, and cardamom.Sweet, smooth, and garnished with crunchy nuts.",
      image: kaddu,
    },
    {
        name: "Fish Fry",
        description : 
        " Fish FryCrispy, golden fish fillets marinated in spices and shallow-fried to perfection.A simple yet bold dish that’s crunchy outside, tender inside.",
        image : fish,

    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Must-Try Indian Food Dishes
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the vibrant flavors of India with these iconic dishes, from
          creamy curries to tangy street foods, each offering a unique taste of
          the country’s diverse culinary heritage.
        </p>
      </div>


      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {dish.name}
              </h2>
              <p className="mt-2 text-gray-600">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
