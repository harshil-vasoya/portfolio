import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <NotFoundSVG />
        <Button asChild className="mt-8">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}

function NotFoundSVG() {
  return (
    <svg
      className="w-full max-w-[300px] h-auto mx-auto"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="100"
        cy="100"
        r="96"
        fill="#F3F4F6"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <path
        d="M130 60H70C64.4772 60 60 64.4772 60 70V130C60 135.523 64.4772 140 70 140H130C135.523 140 140 135.523 140 130V70C140 64.4772 135.523 60 130 60Z"
        fill="#D1D5DB"
      />
      <path
        d="M110 80H90C84.4772 80 80 84.4772 80 90V110C80 115.523 84.4772 120 90 120H110C115.523 120 120 115.523 120 110V90C120 84.4772 115.523 80 110 80Z"
        fill="#9CA3AF"
      />
      <path
        d="M85 95L115 105M115 95L85 105"
        stroke="#F3F4F6"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
