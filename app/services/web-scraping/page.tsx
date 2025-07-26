import  HeroSection  from "@/components/web-scraper/hero-section"
import { Features } from "@/components/web-scraper/features"
import { UseCases } from "@/components/web-scraper/use-cases"
import HowItWorks  from "@/components/web-scraper/how-it-works"
import { FAQ } from "@/components/web-scraper/faq"
// import { PricingSection } from "@/components/web-scraper/pricing-section"

export default function WebScrapingPage() {
  return(
    <>
      <HeroSection />
      <Features />
      <UseCases />
      <HowItWorks />
      {/* <PricingSection /> */}
      <FAQ />
    </>
  )
};