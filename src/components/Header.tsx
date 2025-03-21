
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition">
        Fashtra
      </Link>

      {/* Navigation Links */}
      <div className="space-x-8 text-lg">
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
        <Link href="/category/male" className="hover:text-gray-300 transition">Men</Link>
        <Link href="/category/female" className="hover:text-gray-300 transition">Women</Link>
        <Link href="/history" className="hover:text-gray-300 transition">👜Orders</Link>
      </div>
    </nav>
  );
};

export default Header;
