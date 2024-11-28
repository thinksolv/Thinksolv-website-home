import { FileSearch, Brain, Zap } from 'lucide-react';
import { Container } from '@/components/ui/container';
import AnimatedGradient from './AnimatedGradient';
import { FeatureCard } from './FeatureCard';

const HeroSection =()=> {
  return (
    
    <div className="relative isolate pt-14 pb-20 dark:bg-black">
      <AnimatedGradient />
      
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="animate-fade-up text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Transform Documents into
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent"> Intelligent Insights</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-black dark:text-white animate-fade-up animation-delay-100">
            Harness the power of AI to automatically process, analyze, and extract valuable information from your documents. Save time and reduce errors with our intelligent document processing solution.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-up animation-delay-200">
          <a
              href="#about"
              className="inline-flex px-4 py-2 text-lg"
            >
              <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                Learn More
              </button>
            </a>
            {/* <Button variant="secondary">
              Watch Demo
            </Button> */}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-up animation-delay-300 ">
          <FeatureCard
            icon={FileSearch}
            title="Smart Document Processing"
            description="Advanced OCR and machine learning algorithms to process any document format with high accuracy."
          />
          <FeatureCard
            icon={Brain}
            title="Intelligent Analysis"
            description="Extract key information and insights automatically using state-of-the-art AI models."
          />
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Process thousands of documents in minutes with our optimized cloud infrastructure."
          />
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;