import { notFound } from "next/navigation";
import { products } from "../../../data/products"; // adjust path
import TypeUI from "../../components/TypeUI"; // 👈 new client component
import Footer from "@/app/components/footer";


// ✅ Server Component (async allowed)
export default async function TypePage({ params }) {
  const { id, typeId } = await params; // no need to await

  const product = products[id];
  if (!product) return notFound();

  const type = product.types[typeId];
  if (!type) return notFound();

  return (
    <>
      <TypeUI type={type} /><div className=" h-auto flex flex-col items-center justify-center bg-[#09090A] px-4 pt-20 pb-20">
        <h1 className="text-3xl md:text-3xl font-bold text-white mb-6 text-center tracking-tight">
          Need Engine Solution?
        </h1>
        <p className="text-md md:text-md text-neutral-300 mb-12 text-center max-w-xl">
          Call our experts for personalized solutions
        </p>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 font-semibold text-sm px-8 py-3 rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
          type="button"
        >
          CONTACT US
        </button>
      </div> <Footer /></>) // ✅ Pass data to client component
}
