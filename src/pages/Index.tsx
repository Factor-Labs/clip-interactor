
import { AuthForm } from "@/components/ui/auth-form";
import { Features } from "@/components/ui/features";
import { HeroSection } from "@/components/ui/hero-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <header className="absolute top-0 left-0 w-full z-10 py-4 px-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ea384c] to-[#1A1F2C] text-transparent bg-clip-text">
          VideoIndex
        </h1>
      </header>
      <main>
        <HeroSection />
        <Features />
        <section className="py-24 bg-gradient-to-b from-white to-secondary">
          <div className="container mx-auto px-4 flex items-center justify-center">
            <AuthForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
