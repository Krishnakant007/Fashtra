import ProductCard from "./ProductCard";
import products from "@/data/products";

interface ProductListProps {
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const filteredProducts = category ? products.filter((p) => p.category === category) : products;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {filteredProducts.map((product) => (
       <ProductCard key={product.id} {...product} price={Number(product.price)} />

      ))}
    </div>
  );
};

export default ProductList;
