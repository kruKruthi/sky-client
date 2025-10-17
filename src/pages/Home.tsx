import React from "react";
import Button from "../components/ui/Button";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to React + Tailwind + TypeScript 🎉
      </h1>
      <div className="space-x-4">
        <Button
          label="Primary"
          variant="primary"
          onClick={() => alert("Primary Clicked!")}
        />
        <Button
          label="Secondary"
          variant="secondary"
          onClick={() => alert("Secondary Clicked!")}
        />
        <Button
          label="Danger"
          variant="danger"
          onClick={() => alert("Danger Clicked!")}
        />
      </div>
    </div>
  );
};

export default Home;
