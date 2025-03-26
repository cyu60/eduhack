"use client"

import Image from "next/image"
import { useRef } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react"

export default function Projects() {
  const categories = [
    {
      name: "Web Development",
      projects: [
        { id: 1, title: "E-commerce Platform", description: "A fully responsive online store" },
        { id: 2, title: "Portfolio Website", description: "Showcase of creative works" },
        { id: 3, title: "Blog System", description: "Content management for writers" },
      ],
    },
    {
      name: "Mobile Apps",
      projects: [
        { id: 4, title: "Fitness Tracker", description: "Monitor your daily activities" },
        { id: 5, title: "Recipe Finder", description: "Discover new meals to cook" },
        { id: 6, title: "Language Learning", description: "Interactive lessons for learners" },
      ],
    },
    {
      name: "Data Science",
      projects: [
        { id: 7, title: "Stock Predictor", description: "AI-powered market analysis" },
        { id: 8, title: "Climate Change Visualizer", description: "Interactive global warming data" },
        { id: 9, title: "Social Media Sentiment", description: "Real-time opinion tracking" },
      ],
    },
  ]

  const featuredProject = {
    id: 0,
    title: "AI-Powered Smart Home",
    description:
      "Experience the future of living with our cutting-edge AI-driven smart home system. Control your entire house with voice commands, predictive automation, and unparalleled energy efficiency.",
    category: "Internet of Things",
  }

  const scrollRef = useRef<(HTMLDivElement | null)[]>([])

  const scroll = (direction: "left" | "right", index: number) => {
    if (scrollRef.current[index]) {
      const { current } = scrollRef
      if (direction === "left") {
        current[index]!.scrollLeft -= 200
      } else {
        current[index]!.scrollLeft += 200
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      <main className="flex-grow">
        <section className="relative h-[56.25vw] max-h-[80vh]">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Featured+Project"
            alt="Featured Project"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 space-y-4 max-w-2xl">
            <h1 className="text-5xl font-bold">{featuredProject.title}</h1>
            <p className="text-lg">{featuredProject.description}</p>
            <div className="space-x-4">
              <Button className="bg-white text-black hover:bg-gray-200">
                <Play className="mr-2 h-4 w-4" /> Play Demo
              </Button>
              <Button variant="outline">
                <Info className="mr-2 h-4 w-4" /> More Info
              </Button>
            </div>
          </div>
        </section>

        <div className="space-y-8">
          {" "}
          {/* Updated container */}
          <div className="flex justify-between items-center px-8">
            {" "}
            {/* New container for title and filter */}
            <h1 className="text-4xl md:text-5xl font-bold font-poppins tracking-tight">Projects</h1>
            {/* <DropdownMenu>
              {/* ... DropdownMenu content ... */}
            {/* </DropdownMenu> */}
          </div>
          {categories.map((category, index) => (
            <section key={category.name} className="py-8">
              <h2 className="text-2xl font-semibold mb-4 px-8">{category.name}</h2>
              <div className="relative">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50"
                  onClick={() => scroll("left", index)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div
                  ref={(el) => (scrollRef.current[index] = el)}
                  className="flex overflow-x-scroll scrollbar-hide space-x-4 px-8"
                >
                  {category.projects.map((project) => (
                    <Card
                      key={project.id}
                      className="flex-none w-64 bg-zinc-800 hover:scale-105 transition-transform duration-200"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={`/placeholder.svg?height=180&width=320&text=${project.title}`}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold truncate">{project.title}</h3>
                        <p className="text-sm text-gray-400 truncate">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50"
                  onClick={() => scroll("right", index)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

