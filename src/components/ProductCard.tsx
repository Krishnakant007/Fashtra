// import Image from "next/image";
// import Link from "next/link";

// interface ProductProps {
//   name: string;
//   price: string;
//   image: string;
// }

// const ProductCard: React.FC<ProductProps> = ({ name, price, image }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-lg bg-white">
//       <Image src={image} alt={name} width={200} height={200} className="rounded-lg" />
//       <h2 className="text-xl font-semibold mt-2">{name}</h2>
//       <p className="text-lg font-bold">₹{price}</p>
//       <Link href="/checkout">
//         <button className="bg-black text-white px-4 py-2 mt-2 w-full">Buy Now</button>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;


// import Image from "next/image";
// import Link from "next/link";

// interface ProductProps {
//   id: string;
//   name: string;
//   price: string;
//   image: string;
// }

// const ProductCard: React.FC<ProductProps> = ({ id, name, price, image }) => {
//   return (
//     <Link href={`/product/${id}`}>
//       <div className="border rounded-lg p-4 shadow-lg bg-white cursor-pointer hover:scale-105 transition-transform">
//         <Image src={image} alt={name} width={200} height={200} className="rounded-lg" />
//         <h2 className="text-xl font-semibold mt-2">{name}</h2>
//         <p className="text-lg font-bold">₹{price}</p>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;



// import Image from "next/image";
// import Link from "next/link";

// interface ProductProps {
//   id: string;
//   name: string;
//   price: string;
//   image: string;
// }

// const ProductCard: React.FC<ProductProps> = ({ id, name, price, image }) => {
//   return (
//     <Link href={`/product/${id}`}>
//       <div className="border rounded-lg p-4 shadow-lg bg-white cursor-pointer hover:scale-105 transition-transform">
//         <Image src={image} alt={name} width={200} height={200} className="rounded-lg" />
//         <h2 className="text-xl font-semibold mt-2">{name}</h2>
//         <p className="text-lg font-bold">₹{price}</p>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;


import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg transition">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
        <h2 className="text-lg font-bold mt-2">{name}</h2>
        <p className="text-gray-600">₹{price}</p>
      </div>
    </Link>
  );
}
