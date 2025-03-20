import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md text-center max-w-sm">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          ✅
        </div>
        <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-gray-700 mt-2">Your order has been placed.</p>
        <p className="text-gray-500">Expected delivery: 5-7 days.</p>
        <Link href="/history" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded">
          View Order History
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
