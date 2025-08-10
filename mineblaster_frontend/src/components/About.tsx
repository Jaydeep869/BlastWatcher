import { Shield, Target, Users } from "lucide-react";
import blastImage from "@/assets/blast-analysis.jpg";

export const About = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Revolutionizing Mining Safety
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BlastWatcher combines cutting-edge AI technology with real-time monitoring 
                to transform how mining operations approach blast safety and analysis. Our 
                system provides unprecedented insights into blast patterns, environmental 
                impact, and potential risks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trusted by mining operators worldwide, BlastWatcher helps prevent accidents, 
                optimize operations, and ensure compliance with safety regulations through 
                intelligent automation and predictive analytics.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Enhanced Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Prevent accidents with predictive analysis
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Precision Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time blast pattern analysis
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-semibold text-foreground">Team Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Keep your workforce safe and informed
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-2xl p-4">
              <img 
                src={blastImage} 
                alt="Blast wave analysis visualization" 
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};