
import { Search, Clock, MessageSquare, Sparkles } from "lucide-react";

const features = [
  {
    name: "Smart Search",
    description: "Find any moment in your videos with natural language search.",
    icon: Search,
  },
  {
    name: "Time Savings",
    description: "Skip hours of manual video scanning with AI-powered navigation.",
    icon: Clock,
  },
  {
    name: "Interactive Summaries",
    description: "Get instant summaries and key points from any video segment.",
    icon: MessageSquare,
  },
  {
    name: "AI Analysis",
    description: "Extract insights and patterns with advanced AI analysis.",
    icon: Sparkles,
  },
];

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="relative group p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-gray-900/10 hover:shadow-lg hover:ring-gray-900/20 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-primary/30 text-primary-foreground group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
