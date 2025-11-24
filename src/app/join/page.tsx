
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
  Link as LinkIcon,
  HelpCircle,
  School,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Logo from '@/components/logo';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { createMember } from '@/lib/supabase-queries';

const steps = [
  {
    id: 1,
    title: 'Personal Info',
    description: 'Tell us who you are.',
    fields: [
      { name: 'fullName', label: 'Full Name', icon: User, type: 'text' },
      { name: 'email', label: 'Email Address', icon: Mail, type: 'email' },
      { name: 'school_university', label: 'School / University', icon: School, type: 'text' },
    ],
  },
  {
    id: 2,
    title: 'Background & Interests',
    description: 'Your interests help us match you with mentors.',
  },
  {
    id: 3,
    title: 'Portfolio & Referral',
    description: 'Share your portfolio and get ready to grow.',
  },
];

const levelOfStudyOptions = [
  { value: 'Undergraduate', label: 'Undergraduate' },
  { value: 'Graduate', label: 'Graduate' },
  { value: 'Recent Graduate', label: 'Recent Graduate' },
  { value: 'Other', label: 'Other' },
];

const interestOptions = [
  'Mentorship',
  'Skill Workshops (BIM, Revit, etc.)',
  'Design Challenges & Competitions',
  'Mental Wellness & Support',
  'Collaboration & Team Projects',
  'Innovation & Research',
];

const referralOptions = [
  'Social Media',
  'Friend',
  'School',
  'Event',
  'Other',
];

type FormData = {
  fullName: string;
  email: string;
  school_university: string;
  level_of_study: string;
  interests: string[];
  portfolio_url: string;
  referral_source: string;
  newsletter_opt_in: boolean;
};



// ... existing imports

export default function JoinPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    school_university: '',
    level_of_study: '',
    interests: [],
    portfolio_url: '',
    referral_source: '',
    newsletter_opt_in: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedAetherId, setGeneratedAetherId] = useState<string>('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await createMember({
        full_name: formData.fullName,
        email: formData.email,
        school_university: formData.school_university,
        level_of_study: formData.level_of_study,
        interests: formData.interests.join(', '),
        portfolio_url: formData.portfolio_url,
        referral_source: formData.referral_source,
        newsletter_opt_in: formData.newsletter_opt_in,
        location: '',
        journey: '',
        experience: '',
        contributions: '',
      });

      if (result.success && result.aetherId) {
        setGeneratedAetherId(result.aetherId);
        setIsSubmitted(true);
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const renderStep = () => {
    const step = steps[currentStep];
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            {step.fields?.map((field) => (
              <div key={field.name} className="relative">
                <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  name={field.name}
                  type={field.type}
                  placeholder={field.label}
                  value={formData[field.name as keyof FormData] as string}
                  onChange={handleInputChange}
                  className="pl-10"
                  required={field.name !== 'portfolio_url'}
                />
              </div>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Level of Study</Label>
              <Select
                value={formData.level_of_study}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, level_of_study: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your level of study" />
                </SelectTrigger>
                <SelectContent>
                  {levelOfStudyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Primary Interests</Label>
              <div className="grid gap-3 sm:grid-cols-2">
                {interestOptions.map((interest) => (
                  <Label
                    key={interest}
                    htmlFor={interest}
                    className={cn(
                      'flex cursor-pointer items-center rounded-lg border p-4 transition-all hover:bg-accent',
                      formData.interests.includes(interest) ? 'border-primary bg-accent' : 'bg-card'
                    )}
                  >
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleMultiSelectChange('interests', interest)}
                      className="mr-3"
                    />
                    <span className="text-sm font-medium">{interest}</span>
                  </Label>
                ))}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                name="portfolio_url"
                placeholder="Portfolio / Website (Optional)"
                value={formData.portfolio_url}
                onChange={handleInputChange}
                className="pl-10"
              />
            </div>

            <div className="space-y-2">
              <Label>How Did You Hear About Us?</Label>
              <Select
                value={formData.referral_source}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, referral_source: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {referralOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start space-x-2 pt-4">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter_opt_in}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter_opt_in: !!checked }))}
              />
              <label
                htmlFor="newsletter"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I’d like to receive updates, challenges, and workshops
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
        <main className="flex flex-1 items-center justify-center p-4 py-24">
          <div className="w-full max-w-4xl grid gap-8 md:grid-cols-2 items-center">
            <Card className="w-full text-center shadow-2xl h-full flex flex-col justify-center">
              <CardContent className="p-8 md:p-12">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50"
                >
                  <Check className="h-10 w-10 text-green-600 dark:text-green-400" strokeWidth={3} />
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight text-primary">Welcome to Aether! 🎉</h2>
                <p className="mt-4 text-lg text-foreground/80">
                  You are now an official member. Your digital ID has been generated.
                </p>

                <div className="mt-8 text-left space-y-2">
                  <h3 className="font-semibold">Next Steps:</h3>
                  <ul className="list-disc list-inside text-foreground/70 text-sm">
                    <li>Save your Aether ID (shown on the card).</li>
                    <li>Check your email for the welcome package.</li>
                    <li>Join the community chat to introduce yourself.</li>
                  </ul>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  <Button asChild size="lg" className="w-full">
                    <Link href="https://chat.whatsapp.com/Bvwdx1p9h5G9goxokoDDhl?mode=ems_copy_c" target="_blank">Join Community Chat</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link href="/">Return Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="text-center md:text-left w-full">
                <h3 className="text-xl font-bold mb-2">Membership Confirmed</h3>
                <p className="text-muted-foreground text-sm">
                  Your Aether ID is <span className="font-mono font-bold text-primary">{generatedAetherId}</span>.
                  Keep this for your records.
                </p>
              </div>
            </div>
          </div>
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
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Join Aether – Step by Step</h1>
            <p className="text-muted-foreground mt-2">Connect • Learn • Grow</p>
            <div className="mt-6">
              <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Step 1</span>
                <span>Step 2</span>
                <span>Step 3</span>
              </div>
            </div>
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
                <CardTitle className="font-sans text-2xl font-bold tracking-tight">
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
                        ← Back
                      </Button>
                    )}
                    <div className="flex-grow" />
                    {currentStep < steps.length - 1 && (
                      <Button type="button" onClick={handleNext}>
                        Next →
                      </Button>
                    )}
                    {currentStep === steps.length - 1 && (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Submit'}
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

