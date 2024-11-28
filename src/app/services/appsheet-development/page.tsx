"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/Common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedGradient from '../document-ai/HeroSection/AnimatedGradient';
import AnimatedTestimonialsDemo from "@/components/Testimonials";
import { Database, Workflow, Zap, Bot, LineChart, Shield, Smartphone, Users, Wand2, CheckCircle2, ClipboardCheck, Code, FileSearch, Rocket } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.02
    }
  }
};

const itemVariants = {
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

const features = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Leverage AI-powered automation to handle complex business processes efficiently."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in security features ensuring your data remains protected and compliant."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Access your automated workflows anywhere, anytime with mobile optimization."
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "Gain valuable insights with real-time reporting and analytics dashboards."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enable seamless collaboration with role-based access and sharing."
  },
  {
    icon: Wand2,
    title: "No-Code Solutions",
    description: "Create powerful applications without writing a single line of code."
  }
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Reduce manual work by up to 80% through automated workflows",
    metrics: "80%"
  },
  {
    title: "Cost Savings",
    description: "Lower operational costs with streamlined processes",
    metrics: "40%"
  },
  {
    title: "Time Saved",
    description: "Faster task completion and reduced processing time",
    metrics: "60%"
  },
  {
    title: "Error Reduction",
    description: "Minimize human errors in data entry and processing",
    metrics: "95%"
  }
];

const steps = [
  {
    icon: FileSearch,
    title: "Discovery & Analysis",
    description: "We analyze your current workflows and identify automation opportunities."
  },
  {
    icon: Code,
    title: "Solution Design",
    description: "Our experts design a custom AppSheet solution tailored to your needs."
  },
  {
    icon: ClipboardCheck,
    title: "Implementation",
    description: "We build and configure your automation solution with careful attention to detail."
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Seamless deployment with ongoing support and optimization."
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      
      <Header />  
      <Hero />
      <Features />
      <Benefits />
      {/* <Process /> */}
      <AnimatedTestimonialsDemo />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background ">
      <div className="relative isolate pt-14 pb-20 dark:bg-black">
      <AnimatedGradient />
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(var(--black-rgb), 0.1) 0%, transparent 70%)"
        }}
      /> */}

      <div className="container mx-auto px-4">
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
            Elevate Your Business with
            <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent"> Appsheet Automation</span>
          </h1>
          </div>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Streamline workflows, boost productivity, and drive innovation with our professional AppSheet automation services.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className=""
          >
            <a href="#features">
                <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                Explore
              </button></a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Zap,
              title: "Rapid Development",
              description: "Build and deploy custom apps in days, not months",

            },
            {
              icon: Workflow,
              title: "Smart Automation",
              description: "Automate repetitive tasks and complex workflows",
             
            },
            {
              icon: Database,
              title: "Data Integration",
              description: "Seamlessly connect with existing data sources",
            }
          ].map((feature, index) => (
            <motion.div
              className="group relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-black dark:border-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 dark:bg-black"
            >
              <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 dark:bg-white `}>
                <feature.icon className="h-6 w-6 dark:text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>  
    </section>
  );
}

function Features () {
  return (
    <>
      <section className="py-16 bg-white dark:bg-black" id="features">
        <SectionHeader
          headerInfo={{
            title: "Features",
            subtitle: "Explore Our Advanced Solutions",
            description:
              "Our services cater to various use cases that streamline complex processes and enhance productivity.",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex justify-center"
              >
                <Card className="group relative w-full max-w-sm bg-white bg-card border-black shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-black rounded-full text-white group-hover:bg-blue-600 group-hover:text-white dark:bg-white dark:text-black">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

function Benefits() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Business Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the tangible benefits of AppSheet automation
          </p>
        </motion.div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="group relative p-6 rounded-xl bg-card border border-black h-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-black mb-4 dark:text-white group-hover:text-blue-600">
                  {benefit.metrics}
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// function Process() {
//     return (
//       <section className="py-24 bg-background">
//         <div className="container mx-auto px-4">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Our Implementation Process
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               A proven methodology to deliver successful automation solutions
//             </p>
//           </motion.div>
  
//           {/* Steps Section */}
//           <div className="relative">
//             {/* Vertical Line */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black/20 hidden md:block"></div>
  
//             {/* Steps */}
//             <div className="flex flex-col relative space-y-16 ">
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   className="flex items-center"
//                 >
//                   {/* Step Content */}
//                   <div
//                     className={`w-1/2 ${
//                       index % 2 === 0 ? "text-right pr-6" : "text-left pl-6"
//                     }`}
//                   >
//                     <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all inline-block max-w-md justify-right">
//                       <step.icon
//                         className={`h-12 w-12 mb-4 text-black dark:text-white${
//                           index % 2 === 0 ? "ml-auto" : ""
//                         }`}
//                       />
//                       <h3 className="text-xl font-semibold mb-3 dark:text-white">{step.title}</h3>
//                       <p className="text-muted-foreground">{step.description}</p>
//                     </div>
//                   </div>
  
//                   {/* Step Number */}
//                   <div className="relative flex justify-center items-center w-1/12 ">
//                     <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold z-10 dark:text-white">
//                       {index + 1}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
  