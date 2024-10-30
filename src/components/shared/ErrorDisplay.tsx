import React from "react";

const ErrorDisplay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-500/75">
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <h2 className="text-lg font-bold text-red-600">Oops!</h2>
        <p className="text-gray-700">
          We&apos;ve encountered a problem. We&apos;ll be back soon!
        </p>
      </div>
    </div>
  );
};

export default ErrorDisplay;
