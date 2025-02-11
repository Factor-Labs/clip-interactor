
import { PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/20 to-transparent pt-16 pb-32">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="inline-block px-4 py-1.5 bg-primary/30 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            Revolutionizing Video Interaction
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Navigate Videos with
            <span className="block text-primary-foreground">AI Intelligence</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Transform how you interact with long-form videos. Search, analyze, and extract insights instantly with our advanced AI technology.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl mt-16 animate-slideIn">
          <div className="aspect-video rounded-2xl bg-gray-900/5 p-8 ring-1 ring-inset ring-gray-900/10 lg:p-4">
            <div className="relative aspect-video rounded-lg bg-white/90 backdrop-blur shadow-2xl ring-1 ring-gray-900/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-primary-foreground opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
