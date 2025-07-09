"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { productConfig } from "@/config/product"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUpVariant, staggerContainer, listItemVariant } from "@/lib/framer-animations"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            variants={fadeUpVariant}
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {productConfig.testimonials.heading}
          </motion.h2>
          <motion.p 
            variants={fadeUpVariant}
            className="mt-4 text-lg text-muted-foreground"
          >
            {productConfig.testimonials.subheading}
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {productConfig.testimonials.testimonialList.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={listItemVariant}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <blockquote className="mb-4">
                      <p className="text-lg italic">"{testimonial.quote}"</p>
                    </blockquote>
                    <footer>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </footer>
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