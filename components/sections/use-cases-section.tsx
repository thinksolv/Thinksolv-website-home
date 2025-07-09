"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { productConfig } from "@/config/product"
import { containerVariants, itemVariants } from "@/lib/framer-animations"

export default function UseCasesSection() {
  const { useCases } = productConfig

  return (
    <section id="use-cases" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            {useCases.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {useCases.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {useCases.cases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm">
                      <useCase.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
