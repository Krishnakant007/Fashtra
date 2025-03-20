"use client";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";

const CategoryPage = () => {
  const { category } = useParams();
  
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mt-6">{category === "male" ? "Men's Collection" : "Women's Collection"}</h1>
      <ProductList category={category as string} />
    </div>
  );
};

export default CategoryPage;
