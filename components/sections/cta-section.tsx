"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BorderBeam } from "../ui/border-beam"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Play } from "lucide-react"
import { productConfig } from "@/config/product"
import { containerVariants, itemVariants } from "@/lib/framer-animations"
import HeroVideoDialog from "../ui/hero-video-dialog"
import { useState } from "react"

export default function CTASection() {
  const { cta } = productConfig
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="py-20 md:py-28 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <Card >
            <CardContent className="p-8 md:p-12 text-center">
              <motion.h2 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
                {cta.heading}
              </motion.h2>

              <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {cta.subheading}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
                <Button size="lg" asChild>
                  <Link href={cta.ctaUrl} target="_blank">
                    {cta.ctaText}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <div className="relative">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsVideoOpen(true)}
                  className="relative overflow-hidden"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {cta.secondaryCtaText}
                  <BorderBeam className="absolute pointer-events:none" size={60} />
                </Button>
              </div>
              </motion.div>

              {/* <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground"
              >
                {cta.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div> */}
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <HeroVideoDialog
              animationStyle="from-center"
              videoSrc={cta.videoUrl || "/placeholder-video.mp4"}
              isOpen={isVideoOpen}
              onClose={() => setIsVideoOpen(false)}
            />
    </section>
  )
}
