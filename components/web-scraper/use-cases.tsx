"use client"

import { useCases } from "@/config/page"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function UseCases() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <Badge variant="outline" className="mb-4 dark:text-white">Use Cases</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Proven Use Cases Across Industries</h2>
          <p className="text-xl text-slate-600 max-w-3xl dark:text-gray-200 mx-auto">
            See how businesses like yours are leveraging our platform to gain competitive advantages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={useCase.id}
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden animate-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <Image
                  src={useCase.thumbnail || "/placeholder.svg"}
                  alt={useCase.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardContent className="p-6">
                {/* Tags */}
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {useCase.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-primary text-black dark:text-white  transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div> */}

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
