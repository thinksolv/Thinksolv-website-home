"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { productConfig } from "@/config/product"
import { containerVariants, itemVariants } from "@/lib/framer-animations"

export default function BenefitsSection() {
  const { benefits } = productConfig

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            {benefits.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {benefits.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.items.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all border border-primary/50 duration-300 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">{benefit.metric}</div>
                    <div className="text-sm text-muted-foreground">{benefit.metricLabel}</div>
                  </div>
                  <h3 className="font-heading text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
