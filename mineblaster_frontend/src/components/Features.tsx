import { Activity, Brain, Building2, BarChart3, Radar, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-time Blast Monitoring",
    description: "Continuous monitoring of blast activities with instant alerts and detailed analytics.",
    color: "primary"
  },
  {
    icon: Brain,
    title: "AI-based Damage Prediction",
    description: "Advanced machine learning algorithms predict potential damage and safety risks.",
    color: "accent"
  },
  {
    icon: Building2,
    title: "Multi-mine Management",
    description: "Centralized dashboard to monitor and manage multiple mining operations simultaneously.",
    color: "warning"
  },
  {
    icon: BarChart3,
    title: "Interactive Dashboards",
    description: "Comprehensive data visualization with customizable charts and real-time metrics.",
    color: "primary"
  },
  {
    icon: Radar,
    title: "Seismic Analysis",
    description: "Advanced seismic monitoring to detect ground vibrations and structural impacts.",
    color: "accent"
  },
  {
    icon: AlertTriangle,
    title: "Safety Alerts",
    description: "Instant notifications for potential hazards and safety protocol recommendations.",
    color: "warning"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive blast monitoring and analysis tools designed for modern mining operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="glass-card feature-card rounded-xl p-6 space-y-4 h-full"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-${feature.color}/20`}>
                  <Icon className={`w-7 h-7 text-${feature.color}`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};