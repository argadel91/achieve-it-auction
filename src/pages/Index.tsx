
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import ProgramCard from '@/components/program/ProgramCard';
import TrainerCard from '@/components/trainer/TrainerCard';
import { MOCK_PROGRAMS, MOCK_TRAINERS } from '@/models/types';
import { ArrowRight, Dumbbell, Goal, Shield, Award } from 'lucide-react';

const Home = () => {
  const [featuredPrograms, setFeaturedPrograms] = useState(MOCK_PROGRAMS.slice(0, 3));
  const [featuredTrainers, setFeaturedTrainers] = useState(MOCK_TRAINERS.slice(0, 3));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark dark:text-white">
                Achieve Your <span className="text-brand-teal">Fitness Goals</span> with Accountability
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                Connect with expert trainers, bid on results-driven programs, and only pay when you achieve your goals.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/programs">Find Programs</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/trainers">Browse Trainers</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-brand-teal rounded-lg transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Fitness Achievement"
                  className="relative z-10 rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How AchieveIt Works</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A revolutionary approach to fitness coaching where you only pay for results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-brand-light dark:bg-gray-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <Dumbbell className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bid on Programs</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Find a program that matches your goals and bid what you're willing to pay when you achieve results.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                <ol className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">1</span>
                    <span>Browse programs by goal type</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">2</span>
                    <span>Place your bid amount</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</span>
                    <span>Get accepted by the trainer</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-brand-light dark:bg-gray-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <Goal className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow Your Program</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Work with your trainer and follow the personalized program, uploading progress as you go.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                <ol className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">1</span>
                    <span>Access your personalized plan</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">2</span>
                    <span>Track workouts and nutrition</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</span>
                    <span>Upload progress photos/videos</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-brand-light dark:bg-gray-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <Award className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verify Results</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                At the end, you, your trainer, and the platform verify if you've reached your goals.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                <ol className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">1</span>
                    <span>Submit final results</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">2</span>
                    <span>3-way verification process</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</span>
                    <span>Payment released based on results</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Programs</h2>
            <Button variant="link" asChild size="sm">
              <Link to="/programs" className="flex items-center text-brand-teal">
                View all programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrograms.map(program => {
              const trainer = MOCK_TRAINERS.find(t => t.id === program.trainerId);
              return (
                <ProgramCard 
                  key={program.id} 
                  program={program} 
                  trainerName={trainer?.name} 
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Top-Rated Trainers</h2>
            <Button variant="link" asChild size="sm">
              <Link to="/trainers" className="flex items-center text-brand-teal">
                View all trainers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTrainers.map(trainer => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-brand-light dark:bg-gray-800">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Trust & Security</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We've built safeguards into every step of the process to ensure security, fairness, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
              <div className="mb-4 text-center">
                <Shield className="h-12 w-12 mx-auto text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Escrow Payments</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Your payment is held securely in escrow until your program is complete and results are verified.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
              <div className="mb-4 text-center">
                <Award className="h-12 w-12 mx-auto text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Reputation System</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Our innovative reputation system tracks honest voting behavior and rewards integrity.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
              <div className="mb-4 text-center">
                <Goal className="h-12 w-12 mx-auto text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">3-Way Verification</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Final results are verified by you, your trainer, and our platform to ensure fairness.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/programs">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
