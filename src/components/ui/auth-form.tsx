
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockIcon, UserIcon } from "lucide-react";

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg animate-fadeIn">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">{isLogin ? "Welcome back" : "Create account"}</h2>
        <p className="text-sm text-gray-500">
          {isLogin ? "Enter your credentials to access your account" : "Enter your information to create your account"}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="email"
              placeholder="m@example.com"
              type="email"
              required
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <LockIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="password"
              type="password"
              required
              className="pl-10"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-200"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-t-2 border-b-2 border-current rounded-full animate-spin" />
            </div>
          ) : isLogin ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
      <div className="text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
