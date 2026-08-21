import { Suspense } from "react";
import MainComponent from "@/components/mainPage/MainComponent.jsx";

export default function Home() {
  return (
    <Suspense>
      <MainComponent />
    </Suspense>
  );
}