"use client"

import { Heart, Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "Working with Sambandharthi has been incredibly fulfilling. Seeing the direct impact of our educational programs on children's lives is truly rewarding.",
    name: "Priya Sharma",
    role: "Volunteer Teacher",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "The dedication of the team and the joy on children's faces make every moment worthwhile."
  },
  {
    quote: "The transformation we've witnessed in our community since Sambandharthi started their programs has been remarkable.",
    name: "Rajesh Kumar",
    role: "Community Leader",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "Their commitment to education and empowerment has brought hope to many families."
  },
  {
    quote: "Thanks to Sambandharthi's support, my daughter can now dream of a better future through education.",
    name: "Meena Devi",
    role: "Parent",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "The free education and support materials have made a huge difference in our lives."
  },
  {
    quote: "Supporting Sambandharthi has shown me how small contributions can create lasting change in communities.",
    name: "Amit Patel",
    role: "Regular Donor",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "Their transparency and dedication to the cause is truly inspiring."
  }
]

export default function Testimonials({ className = "" }: { className?: string }) {
  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true })

  return (
    <section className={`bg-orange-50/50 dark:bg-gray-900 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Voices of
            <span className="text-orange-600 dark:text-orange-400"> Impact</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hear from our community members, volunteers, and supporters about the
            difference we're making together.
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[plugin]}
            className="w-full max-w-6xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-orange-100 dark:border-orange-900 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 relative mb-4">
                        <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/50 rounded-full" />
                        <Heart className="w-8 h-8 text-orange-600 dark:text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      <div className="flex mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-orange-400 text-orange-400"
                          />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-auto">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-orange-600 dark:text-orange-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black h-12 w-12" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black h-12 w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
