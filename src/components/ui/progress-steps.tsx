
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface ProgressStepItem {
  id: string | number;
  label: string;
  description?: string;
}

interface ProgressStepsProps {
  steps: ProgressStepItem[];
  currentStep: number;
  className?: string;
}

export function ProgressSteps({ steps, currentStep, className }: ProgressStepsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <div 
              key={step.id} 
              className={cn(
                "flex flex-col items-center relative z-10",
                index === 0 ? "text-left" : index === steps.length - 1 ? "text-right" : "text-center"
              )}
            >
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center border-2",
                  isCompleted ? "bg-primary border-primary text-primary-foreground" : 
                  isCurrent ? "bg-white border-primary text-primary" : 
                  "bg-white border-gray-300 text-gray-400"
                )}
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <div className="mt-2">
                <p 
                  className={cn(
                    "text-xs font-semibold",
                    isCompleted ? "text-primary" : 
                    isCurrent ? "text-gray-900" : "text-gray-500"
                  )}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-xs text-gray-500 mt-1 max-w-[100px] md:max-w-none">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
        
        {/* Progress bar */}
        <div 
          className="absolute top-4 left-0 transform -translate-y-1/2 h-0.5 bg-gray-200 w-full -z-10"
        />
        <div 
          className="absolute top-4 left-0 transform -translate-y-1/2 h-0.5 bg-primary -z-10"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
