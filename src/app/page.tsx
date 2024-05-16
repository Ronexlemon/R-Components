"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import icon from "../../public/cake.jpeg"

import { Recipe } from "@/types/apiTypes";
import { recipes } from "@/helpers/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center p-24">
     
     <div className="flex w-full justify-around items-center">
     <Button onClick={()=>alert("yollow")} size='sm' variant='secondary'>Button</Button>
      <Button onClick={()=>alert("yollow")} size='md'>Click Me</Button>

      <Button onClick={()=>alert("yollow")} size='lg' variant='danger'>Delete</Button>
      <Button onClick={()=>alert("yollow")} size='lg' variant='good'>Done</Button>
      <Button onClick={()=>alert("yollow")} size='lg' variant='good'>Don</Button>
     </div>
     <div className="grid grid-cols-3 gap-8">
     {recipes.map((recipe: Recipe, index: number) => (
          <Card key={index} className="flex flex-col justify-between">
          <CardHeader className="flex-row gap-4 items-center">
          <Avatar>
  <AvatarImage src={recipe.image} />
  
</Avatar>

            <div>
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription>{recipe.time} mins to cook</CardDescription>
            
            </div>
           
          </CardHeader>
          <CardContent>
            {recipe.description}
          {/* <Image
                src={recipe.image}
                alt=""
                width={300}
                height={200}
              /> */}
          </CardContent>
          <CardFooter className="flex justify-between items-end">
           <Button variant='recipe'>View Recipe</Button>
           {recipe.vegan && <Badge variant="outline">Badge</Badge>
}
            
          </CardFooter>
        </Card>
        
        ))}
     </div>
     <div className="border border-black w-full">
     <Carousel className="w-full  ">
      <CarouselContent className="-mr-0 md:-mr-16">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4 pl-0 ">
            <div className="">
              <Card className="border border-black rounded-0 ">
                <CardContent className="flex aspect-square  items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
     </div>
     {/* new Item    
     *absolute remove an item from the grid/ the entire document ,no space is created for them other element will behave as if it does not exists
     */}
            <nav><h2>POSITIONING RELATIVE & ABSOLUTE</h2></nav>
     <div className=" container bg-black h-96 relative">
      <Card className="w-1/2 h-1/4  mt-5 bg-red-400   ">
        <CardHeader>Hello One</CardHeader>
        <CardContent>The great person ever</CardContent>
       
      </Card>
      <Card className="w-1/2 h-1/4  mt-5 bg-green-400 absolute  right-0  bottom-0  ">
        <CardHeader>Hello Two</CardHeader>
        <CardContent>Absolute position to its parent "relative"</CardContent>
       
      </Card>
      <Card className="w-1/2 h-1/4  mt-5 bg-blue-400 absolute  right-32  z-index:40   opacity-30 ">
        <CardHeader>Hello FOUR</CardHeader>
        <CardContent>Absolute position to its parent "relative"</CardContent>
       
      </Card>
      <Card className="w-1/2 h-1/4 bg-yellow-400    mt-5 ">
        <CardHeader>Hello Three</CardHeader>
        <CardContent>The great person ever</CardContent>
       
      </Card>


     </div>

     <div className="container bg-yellow-100 h-96 mt-5">
     <Card className="w-1/2 h-3/4  mt-5 bg-blue-400 relative text-white ">
        <CardHeader>Hello FOUR</CardHeader>
        <CardDescription>Child Absolute</CardDescription>
        <CardContent ><Image src={icon} className="absolute top-0 -z-1 opacity-30  right-14" alt=""/></CardContent>
       
      </Card>

     </div>
     <nav><h2>POSITIONING RELATIVE & STATIC</h2></nav>


    </main>
  );
}
