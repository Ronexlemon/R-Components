"use client"
import { Button } from "@/components/ui/Button";
import Image from "next/image";

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
    </main>
  );
}
