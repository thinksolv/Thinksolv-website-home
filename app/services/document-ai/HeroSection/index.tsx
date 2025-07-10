import { FileSearch, Brain, Zap, Cpu, Database, BarChartIcon as ChartBar, } from 'lucide-react';
import { Container } from '../../../../components/ui/container';
import AnimatedGradient from './AnimatedGradient';
import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';

const HeroSection =()=> {
  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.02
      }
    }
  };
  
  const itemVariants : Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    
    <div className="relative isolate pt-14 pb-20 dark:bg-black">
      <AnimatedGradient />
      
      <Container>
      <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1 
            variants={itemVariants}
            >
              <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="animate-fade-up text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Transform Your Documents with
            <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent"> Intelligent Insights</span>
          </h1>
          </div>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Unlock insights, automate processes, and enhance decision-making with our professional Document AI services.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className=""
          >
            <a href="#usecases">
                <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                Explore
              </button></a>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-up animation-delay-300 mt-18">
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
          <FeatureCard
            icon={ChartBar}
            title="Insights Generation"
            description="Generate actionable insights by identifying patterns and trends in the data."
          />
          <FeatureCard
            icon={Cpu}
            title="AI Processing"
            description="Analyze documents using AI techniques like NLP, OCR, and machine learning for accurate extraction."
          />
          <FeatureCard
            icon={Database}
            title="Data Structuring"
            description="Organize extracted data into structured formats for easy analysis and integration."
          />
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;