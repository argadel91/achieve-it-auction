
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Award } from "lucide-react";

interface ReputationBadgeProps {
  points: number;
  className?: string;
  showTooltip?: boolean;
}

export function ReputationBadge({
  points,
  className,
  showTooltip = true
}: ReputationBadgeProps) {
  const getBadgeColor = () => {
    if (points >= 90) return "bg-emerald-100 text-emerald-800 border-emerald-300";
    if (points >= 70) return "bg-green-100 text-green-800 border-green-300";
    if (points >= 50) return "bg-blue-100 text-blue-800 border-blue-300";
    if (points >= 30) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };

  const getBadgeText = () => {
    if (points >= 90) return "Elite";
    if (points >= 70) return "Trusted";
    if (points >= 50) return "Respected";
    if (points >= 30) return "Promising";
    return "Beginner";
  };

  const badge = (
    <div className={cn(
      "flex items-center space-x-1 rounded-full px-2 py-0.5 text-xs font-medium border",
      getBadgeColor(),
      className
    )}>
      <Award className="h-3 w-3" />
      <span>{getBadgeText()}</span>
      <span className="font-bold">({points})</span>
    </div>
  );

  if (!showTooltip) {
    return badge;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badge}
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">Reputation score of {points}/100</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
