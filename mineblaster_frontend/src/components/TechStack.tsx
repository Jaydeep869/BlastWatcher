import { Code, Database, Cloud, Package } from "lucide-react";

const technologies = [
  {
    name: "React",
    icon: Code,
    description: "Modern frontend framework for interactive user interfaces",
    category: "Frontend"
  },
  {
    name: "Node.js",
    icon: Code,
    description: "Server-side JavaScript runtime for scalable applications",
    category: "Backend"
  },
  {
    name: "MongoDB",
    icon: Database,
    description: "NoSQL database for flexible data storage and retrieval",
    category: "Database"
  },
  {
    name: "Docker",
    icon: Package,
    description: "Containerization platform for consistent deployments",
    category: "DevOps"
  },
  {
    name: "AWS",
    icon: Cloud,
    description: "Cloud infrastructure for reliable and scalable hosting",
    category: "Cloud"
  }
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver reliable, scalable, and secure mining solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index}
                className="glass-card feature-card rounded-xl p-6 text-center space-y-4"
              >
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wide text-accent font-semibold">
                    {tech.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why These Technologies?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our technology stack is carefully chosen to provide maximum reliability, scalability, 
              and performance for mission-critical mining operations. Each component works together 
              to ensure BlastWatcher delivers real-time insights when they matter most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};