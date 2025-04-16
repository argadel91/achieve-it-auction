
import { Link } from 'react-router-dom';
import { TrainerProfile } from '@/models/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BadgeRating } from '@/components/ui/badge-rating';
import { ReputationBadge } from '@/components/ui/reputation-badge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, TrendingUp } from 'lucide-react';

interface TrainerCardProps {
  trainer: TrainerProfile;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-brand-light">
            <AvatarImage src={trainer.avatarUrl} alt={trainer.name} />
            <AvatarFallback className="bg-brand-teal text-white">
              {getInitials(trainer.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <Link to={`/trainers/${trainer.id}`} className="text-lg font-semibold hover:text-brand-teal transition-colors">
              {trainer.name}
            </Link>
            <div className="flex items-center mt-1">
              <BadgeRating rating={trainer.successRate / 20} className="mr-3" />
              <ReputationBadge points={trainer.reputation} />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {trainer.bio}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {trainer.specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center space-x-1.5 text-gray-700">
            <TrendingUp className="h-4 w-4 text-brand-teal" />
            <span>{trainer.successRate}% Success rate</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-700">
            <Award className="h-4 w-4 text-brand-teal" />
            <span>{trainer.completedPrograms} Programs</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <Button variant="outline" asChild>
          <Link to={`/trainers/${trainer.id}`}>View Profile</Link>
        </Button>
        <Button asChild>
          <Link to={`/trainers/${trainer.id}/programs`}>See Programs</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
