import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Share Your
              <strong className="text-red-600"> Culinary </strong>
              Magic
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Discover amazing recipes from home cooks around the world. Share
              your favorite dishes and build a community around the love of
              food.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <p className="inline-block rounded border border-red-600 bg-red-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700">
                <Link to={"/Home"}>Browse Recipes</Link>
              </p>

              <p className="inline-block rounded  border-2 border-red-300 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900">
                <Link to={'/add'}>Share Your Recipes</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
