
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ProgramCard from '@/components/program/ProgramCard';
import { MOCK_PROGRAMS, MOCK_TRAINERS, Program } from '@/models/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>(MOCK_PROGRAMS);
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>(MOCK_PROGRAMS);
  const [searchTerm, setSearchTerm] = useState('');
  const [goalType, setGoalType] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  
  useEffect(() => {
    let result = programs;
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(program => 
        program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply goal type filter
    if (goalType !== 'all') {
      result = result.filter(program => program.goal.type === goalType);
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(program => program.status === statusFilter);
    }
    
    setFilteredPrograms(result);
  }, [searchTerm, goalType, statusFilter, programs]);

  return (
    <Layout>
      <div className="max-container py-8">
        <h1 className="text-3xl font-bold mb-6">Find Your Perfect Program</h1>
        
        {/* Search and filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search programs..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select value={goalType} onValueChange={setGoalType}>
                <SelectTrigger className="min-w-[180px]">
                  <SelectValue placeholder="Goal Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Goal Type</SelectLabel>
                    <SelectItem value="all">All Goals</SelectItem>
                    <SelectItem value="weight_loss">Weight Loss</SelectItem>
                    <SelectItem value="strength_gain">Strength Gain</SelectItem>
                    <SelectItem value="endurance">Endurance</SelectItem>
                    <SelectItem value="flexibility">Flexibility</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="min-w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="auction">Open For Bids</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Program listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map(program => {
              const trainer = MOCK_TRAINERS.find(t => t.id === program.trainerId);
              return (
                <ProgramCard 
                  key={program.id} 
                  program={program} 
                  trainerName={trainer?.name} 
                />
              );
            })
          ) : (
            <div className="col-span-full p-8 text-center">
              <h3 className="text-xl font-semibold">No programs found</h3>
              <p className="text-gray-600 mt-2">
                Try adjusting your filters or search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Programs;
