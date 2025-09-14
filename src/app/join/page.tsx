
'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  GraduationCap,
  Building,
  DraftingCompass,
  Paintbrush,
  BookOpen,
  Send,
  User,
  Mail,
  Map,
  Check,
  Loader2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Logo from '@/components/logo';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { generateAetherId } from '@/ai/flows/generate-aether-id';
import { useToast } from '@/hooks/use-toast';

const steps = [
  {
    id: 1,
    title: 'Welcome to AETHER',
    description:
      'You’re about to enter AETHER — the creative ecosystem for architects and designers. Let’s start with your basic details.',
    fields: [
      { name: 'fullName', label: 'Full Name', icon: User, type: 'text' },
      { name: 'email', label: 'Email Address', icon: Mail, type: 'email' },
      { name: 'location', label: 'Country / City', icon: Map, type: 'text' },
    ],
  },
  {
    id: 2,
    title: 'Your Journey',
    description: 'Where are you right now in your design/architecture journey?',
  },
  {
    id: 3,
    title: 'Your Interests',
    description: 'What excites you most about joining AETHER?',
  },
  {
    id: 4,
    title: 'Contribution',
    description: 'Community is built by contribution. How would you like to plug in?',
  },
  {
    id: 5,
    title: 'Review & Submit',
    description: 'Please review your application details before submitting.',
  },
];

const journeyOptions = [
  { value: 'student', label: 'Architecture Student', icon: GraduationCap },
  { value: 'professional', label: 'Young Professional', icon: Building },
  { value: 'architect', label: 'Practicing Architect', icon: DraftingCompass },
  { value: 'designer', label: 'Designer', icon: Paintbrush },
  { value: 'enthusiast', label: 'Enthusiast / Researcher', icon: BookOpen },
];

const interestOptions = [
  'Design Education & Mentorship',
  'Software & Skill Building',
  'Research & Publications',
  'African Design Heritage',
  'Networking & Collaboration',
  'Career Growth & Opportunities',
  'Sustainability & Innovation',
];

const contributionOptions = [
  { value: 'share', label: 'Share knowledge / Write articles ✍️' },
  { value: 'volunteer', label: 'Volunteer for events 🤝' },
  { value: 'host', label: 'Host workshops / conversations 🎤' },
  { value: 'mentor', label: 'Mentor others 🌱' },
  { value: 'learn', label: 'Just here to learn & connect 👀' },
];

type FormData = {
  fullName: string;
  email: string;
  location: string;
  journey: string;
  experience: string;
  interests: string[];
  contributions: string[];
  agree: boolean;
};

const MultiSelectItem = ({
  value,
  label,
  isSelected,
  onToggle,
}: {
  value: string;
  label: string;
  isSelected: boolean;
  onToggle: (value: string) => void;
}) => (
  <Label
    htmlFor={value}
    className={cn(
      'flex w-full cursor-pointer items-center rounded-lg border p-4 text-left transition-all',
      isSelected ? 'border-primary bg-accent' : 'bg-secondary hover:bg-secondary/80'
    )}
  >
    <Checkbox
      id={value}
      checked={isSelected}
      onCheckedChange={() => onToggle(value)}
      className="mr-4 h-5 w-5 rounded-md"
    />
    {label}
  </Label>
);

export default function JoinPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    location: '',
    journey: '',
    experience: '',
    interests: [],
    contributions: [],
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();


  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (group: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[group] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...prev, [group]: newValues };
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await generateAetherId({
        fullName: formData.fullName,
        email: formData.email,
      });
      setIsSubmitted(true);
    } catch (error) {
        console.error('Failed to generate Aether ID:', error);
        toast({
            title: "Submission Failed",
            description: "There was an error submitting your application. Please try again.",
            variant: "destructive",
        })
    } finally {
        setIsSubmitting(false);
    }
  };
  
  const getJourneyLabel = (value: string) => {
    return journeyOptions.find(j => j.value === value)?.label || '';
  }

  const getContributionLabel = (value: string) => {
    return contributionOptions.find(c => c.value === value)?.label || '';
  }

  const renderStep = () => {
    const step = steps[currentStep];
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            {step.fields.map((field) => (
              <div key={field.name} className="relative">
                <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  name={field.name}
                  type={field.type}
                  placeholder={field.label}
                  value={formData[field.name as keyof Omit<FormData, 'interests' | 'contributions' | 'agree'>]}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
             <RadioGroup
              value={formData.journey}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, journey: value }))}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {journeyOptions.map((option) => (
                <Label
                  key={option.value}
                  htmlFor={option.value}
                  className={`flex items-center gap-4 rounded-lg border p-4 transition-all cursor-pointer hover:bg-accent ${formData.journey === option.value ? 'bg-accent border-primary' : ''}`}
                >
                  <option.icon className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                    <span className="font-semibold">{option.label}</span>
                  </div>
                </Label>
              ))}
            </RadioGroup>
            <Input
              name="experience"
              placeholder="Year of Study / Years of Experience"
              value={formData.experience}
              onChange={handleInputChange}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-wrap gap-3">
            {interestOptions.map((interest) => (
              <Label
                key={interest}
                htmlFor={interest}
                className={cn(
                  'cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  formData.interests.includes(interest)
                    ? 'border-transparent bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80'
                )}
              >
                <Checkbox
                  id={interest}
                  checked={formData.interests.includes(interest)}
                  onCheckedChange={() => handleMultiSelectChange('interests', interest)}
                  className="sr-only"
                />
                {interest}
              </Label>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="space-y-3">
            {contributionOptions.map((option) => (
              <MultiSelectItem
                key={option.value}
                value={option.value}
                label={option.label}
                isSelected={formData.contributions.includes(option.value)}
                onToggle={() => handleMultiSelectChange('contributions', option.value)}
              />
            ))}
          </div>
        );
    case 4:
      return (
        <div className="space-y-6 text-sm">
            <div className="space-y-4 rounded-lg border p-4">
                <h4 className="font-semibold">Basic Details</h4>
                <p><strong>Full Name:</strong> {formData.fullName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Location:</strong> {formData.location}</p>
            </div>
             <div className="space-y-2 rounded-lg border p-4">
                <h4 className="font-semibold">Your Journey</h4>
                <p><strong>Role:</strong> {getJourneyLabel(formData.journey)}</p>
                <p><strong>Experience:</strong> {formData.experience}</p>
            </div>
            <div className="space-y-2 rounded-lg border p-4">
                <h4 className="font-semibold">Interests</h4>
                <ul className="list-disc list-inside">
                  {formData.interests.map(interest => <li key={interest}>{interest}</li>)}
                </ul>
            </div>
            <div className="space-y-2 rounded-lg border p-4">
                <h4 className="font-semibold">Contributions</h4>
                 <ul className="list-disc list-inside">
                  {formData.contributions.map(c => <li key={c}>{getContributionLabel(c)}</li>)}
                </ul>
            </div>
            <div className="flex items-center space-x-2 pt-4">
                <Checkbox id="agree" checked={formData.agree} onCheckedChange={(checked) => setFormData(prev => ({...prev, agree: !!checked}))} />
                <label
                    htmlFor="agree"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                   I agree to AETHER’s community guidelines.
                </label>
            </div>
        </div>
      );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <header className="fixed top-0 z-50 w-full bg-transparent">
                <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                    <Link href="/">
                    <Logo />
                    </Link>
                </div>
            </header>
            <main className="flex flex-1 items-center justify-center p-4">
                <Card className="w-full max-w-2xl text-center shadow-2xl">
                    <CardContent className="p-8 md:p-12">
                        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                                <span className="text-4xl">🎉</span>
                            </div>
                        </motion.div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary">Application Received!</h2>
                        <p className="mt-4 text-lg text-foreground/80">
                            Thanks, {formData.fullName.split(' ')[0]}. You’re officially in the pipeline.
                        </p>
                        <div className="mt-8 rounded-lg bg-secondary p-6">
                            <p className="text-base text-foreground/70">
                                Your Aether ID is being generated and will be sent to your email soon. This ID is your unique access key into AETHER — connecting you to events, archives, and conversations across Africa’s creative ecosystem.
                            </p>
                        </div>
                        <div className="mt-8 text-left">
                            <h3 className="font-semibold">What's next?</h3>
                            <ul className="mt-2 list-disc list-inside text-foreground/70">
                                <li>Check your email soon for your Aether ID.</li>
                                <li>While you wait, join our socials and explore what’s coming up.</li>
                            </ul>
                        </div>
                         <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild size="lg">
                                <Link href="https://chat.whatsapp.com/Bvwdx1p9h5G9goxokoDDhl?mode=ems_copy_c" target="_blank">Join Community Chat</Link>
                            </Button>
                            <Button asChild variant="secondary" size="lg">
                                <Link href="/events">Explore Events</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
       <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <Card className="w-full max-w-2xl overflow-hidden shadow-2xl">
          <div className="p-8">
            <Progress value={((currentStep + 1) / steps.length) * 100} className="mb-4 h-2" />
            <p className="text-center text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader className="text-center px-4 sm:px-6">
                <CardTitle className="font-sans text-3xl font-bold tracking-tight">
                  {steps[currentStep].title}
                </CardTitle>
                <CardDescription className="text-base text-foreground/70">
                  {steps[currentStep].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-8 pb-8">
                <form onSubmit={handleSubmit}>
                    <div className="min-h-[250px]">
                        {renderStep()}
                    </div>
                    <div className="mt-8 flex justify-between">
                    {currentStep > 0 && (
                        <Button type="button" variant="secondary" onClick={handleBack} disabled={isSubmitting}>
                        Back
                        </Button>
                    )}
                    <div className="flex-grow" />
                    {currentStep < steps.length - 1 && (
                        <Button type="button" onClick={handleNext}>
                        Continue →
                        </Button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <Button type="submit" disabled={!formData.agree || isSubmitting}>
                         {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : <><Send className="mr-2 h-4 w-4" /> Submit Application</>}
                        </Button>
                    )}
                    </div>
                </form>
              </CardContent>
            </motion.div>
          </AnimatePresence>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
