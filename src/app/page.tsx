"use client"
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center p-24">
     
     <div className="flex w-full justify-around items-center">
     <Button onClick={()=>alert("yollow")} size='sm' variant='secondary'>Button</Button>
      <Button onClick={()=>alert("yollow")} size='md'>Click Me</Button>

      <Button onClick={()=>alert("yollow")} size='lg' variant='danger'>Delete</Button>
      <Button onClick={()=>alert("yollow")} size='lg' variant='good'>Done</Button>
     </div>
    </main>
  );
}
