import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h1 className="text-9xl font-extrabold text-primary">404</h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-base-content/60 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary btn-lg">
        🏠 Back to Home
      </Link>
    </div>
  );
}