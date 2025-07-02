import { ChefHat } from "lucide-react";

export default function Footer() {
  return (
    <>
      <h1 className=" text-white bg-slate-700 text-center justify-center flex font-bold text-2xl py-5">
        <ChefHat size={31} />
        FlavorShare
      </h1>
      <h1 className=" text-white bg-slate-700 text-center px-20 py-6">
        Bringing food lovers together, one recipe at a time. Share your culinary
        creations and discover new favorites. Stay connected — follow us for
        tasty updates and tips.
      </h1>
    </>
  );
}
