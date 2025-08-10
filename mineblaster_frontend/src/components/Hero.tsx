import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-mining.jpg";

export const Hero = () => {
  return (
    <section className="section-mining min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  AI-Powered Mining Safety
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Blast<span className="text-primary">Watcher</span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-light text-accent">
                Monitor. Predict. Protect.
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg">
                AI-powered blast analysis and safety insights for modern mines.
                Real-time monitoring and predictive analytics to keep your operations safe.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-6 font-semibold group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary/30 hover:border-primary/60 text-foreground hover:bg-primary/10"
              >
                <Shield className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Mines Protected</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="glass-card rounded-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Mining blast monitoring equipment" 
                className="rounded-xl w-full h-auto shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};