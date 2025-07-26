import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aiFeatures } from '@/config/page';
import { LucideIcon, Zap, ShieldCheck, Brain, Code, Globe, RefreshCw, Monitor, Database, Clock, Key, Sparkles, Shield, Filter } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  'shield-check': ShieldCheck,
  brain: Brain,
  code: Code,
  globe: Globe,
  'refresh-cw': RefreshCw,
  monitor: Monitor,
  database: Database,
  clock: Clock,
  key: Key,
  sparkles: Sparkles,
  shield: Shield,
  filter: Filter
};

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
      <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">AI-Powered Intelligence</Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Smart Automation That <span className="text-gradient">Adapts</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our machine learning algorithms continuously optimize your scraping operations, 
            reducing maintenance and improving success rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={feature.title} className={`feature-card fade-in-up stagger-delay-${index + 1} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 animate-pulse-glow">
                    {Icon && <Icon className="h-7 w-7 text-white" />}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>  
    </section>
 );
}   