import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering!");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background text-foreground p-8">
          <h1 className="text-4xl font-bold text-center">
            Chinmayi B - Portfolio
          </h1>
          <p className="text-center mt-4 text-lg">
            App is loading successfully! 🎉
          </p>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;