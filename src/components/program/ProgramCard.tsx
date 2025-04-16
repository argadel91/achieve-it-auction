
import { Link } from 'react-router-dom';
import { Program } from '@/models/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { BadgeRating } from '@/components/ui/badge-rating';
import { Countdown } from '@/components/ui/countdown';
import { Badge } from '@/components/ui/badge';
import { UsersIcon, TrendingUp, Award, Clock } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface ProgramCardProps {
  program: Program;
  trainerName?: string;
}

export default function ProgramCard({ program, trainerName }: ProgramCardProps) {
  const statusColors = {
    draft: 'bg-gray-100 text-gray-800',
    auction: 'bg-amber-100 text-amber-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const getSlotText = () => {
    const { limit, filled } = program.slots;
    if (limit === 'unlimited') {
      return `${filled} enrolled`;
    }
    return `${filled}/${limit} slots`;
  };

  const getGoalText = () => {
    const { goal } = program;
    return `${goal.metric}: ${goal.target} ${goal.unit}`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-1">
          <Badge variant="outline" className={statusColors[program.status]}>
            {program.status === 'auction' ? 'Bidding Open' : 
             program.status === 'in_progress' ? 'In Progress' :
             program.status === 'completed' ? 'Completed' :
             program.status === 'draft' ? 'Draft' : 'Cancelled'}
          </Badge>
          {program.successRate && (
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-brand-teal" />
              <span>{program.successRate}% Success</span>
            </div>
          )}
        </div>
        <Link to={`/programs/${program.id}`} className="text-lg font-semibold hover:text-brand-teal transition-colors">
          {program.title}
        </Link>
        {trainerName && (
          <div className="text-sm text-muted-foreground flex items-center">
            <Award className="h-3 w-3 mr-1" />
            <span>by {trainerName}</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="pb-4 flex-grow">
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {program.description}
        </p>
        
        <div className="grid grid-cols-2 gap-2 text-xs mb-4">
          <div className="flex items-center space-x-1 text-gray-600">
            <Clock className="h-3.5 w-3.5" />
            <span>{program.duration} days</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <UsersIcon className="h-3.5 w-3.5" />
            <span>{getSlotText()}</span>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-3 mb-1">
          <div className="font-medium text-xs mb-1">Program Goal</div>
          <Badge variant="secondary" className="text-xs">
            {getGoalText()}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex justify-between items-center border-t border-gray-100">
        {program.status === 'auction' && program.endDate ? (
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Bidding ends in:</span>
            <Countdown endDate={program.endDate} />
          </div>
        ) : (
          <div className="text-sm">
            {program.status === 'in_progress' ? 'Program in progress' : 
             program.status === 'completed' ? 'Program completed' : ''}
          </div>
        )}
        
        <div className="text-right">
          <div className="text-xs text-gray-500">Starting bid</div>
          <div className="font-semibold text-brand-teal">
            {formatCurrency(program.minBid)}
          </div>
          {program.currentHighestBid && (
            <div className="text-xs text-gray-500">
              Current high: {formatCurrency(program.currentHighestBid)}
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
