import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>© 2025 Fashtra.com</p>
      <div className="mt-2 flex justify-center gap-4">
        <Link href="/terms">Terms</Link>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/refund-policy">Refund Policy</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </footer>
  );
}
