import { Suspense } from "react";
import MainComponent from "@/components/mainPage/MainComponent.jsx";

export default function Home() {
  return (
    <div className="w-full">
      <Suspense>
        <MainComponent />
      </Suspense>
    </div>
  );
}