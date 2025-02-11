
import { AuthForm } from "@/components/ui/auth-form";
import { Features } from "@/components/ui/features";
import { HeroSection } from "@/components/ui/hero-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
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
