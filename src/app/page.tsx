"use client"
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center p-24">
     <div>Reusable Components</div>
     <div className="flex w-full justify-around items-center">
      <Button onClick={()=>alert("yollow")}>Click Me</Button>
      <Button onClick={()=>alert("yollow")}>Delete</Button>
     </div>
    </main>
  );
}
