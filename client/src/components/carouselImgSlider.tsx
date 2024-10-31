"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const GalleryData = [
  {
    imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%201ST%20PHOTO.jpg",
    caption: "Hope for Tomorrow",
    description: "Every child deserves a chance to dream and learn",
  },
  {
    imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%202ND%20PHOTO.jpg",
    caption: "Community Spirit",
    description: "Together we create lasting change",
  },
  {
    imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%203RD%20PHOTO.jpg",
    caption: "Bright Futures",
    description: "Nurturing potential in every child",
  },
  {
    imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%204TH%20PHOTO.jpg",
    caption: "Learning Together",
    description: "Building strong foundations through education",
  },
  {
    imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%205TH%20PHOTO.jpg",
    caption: "Education in Action",
    description: "Creating opportunities for a better tomorrow",
  },
]

export default function Component({ className = "" }: { className?: string }) {
  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true })

  return (
    <section className={`bg-orange-50/50 dark:bg-gray-900 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Impact in
            <span className="text-orange-600 dark:text-orange-400"> Pictures</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Witness the transformation we're creating in our communities through education,
            empowerment, and endless possibilities.
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            plugins={[plugin]}
            className="w-full max-w-6xl"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {GalleryData.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center">
                  <div className="relative h-[300px] md:h-[400px] w-full max-w-[400px]">
                    <Image
                      src={item.imgSrc}
                      alt={item.caption}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{item.caption}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
