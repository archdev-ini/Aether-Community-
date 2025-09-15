'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { eventCategories } from '@/app/events/lib/event-categories';
import { createEvent, NewEvent } from '@/lib/airtable';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2, Lock, ShieldCheck } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Please enter a valid date.',
  }),
  time: z.string().min(1, 'Time is required.'),
  location: z.string().min(2, 'Location is required.'),
  category: z.string().min(1, 'Please select a category.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  registrationUrl: z.string().url().optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

function AddEventForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      date: '',
      time: '',
      location: 'Online',
      category: '',
      description: '',
      registrationUrl: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      // The date from the input is treated as UTC. To compare it with today's date
      // correctly, we need to ensure we are comparing date parts only, without timezone interference.
      const eventDateUTC = new Date(data.date + 'T00:00:00Z');
      const today = new Date();
      // Get today's date in UTC
      const todayUTC = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));

      const newEvent: NewEvent = {
        Title: data.title,
        Date: data.date, // Format YYYY-MM-DD
        Time: data.time,
        Location: data.location,
        Category: data.category,
        Description: data.description,
        Status: eventDateUTC >= todayUTC ? 'Upcoming' : 'Past',
        RegistrationURL: data.registrationUrl,
      };

      await createEvent(newEvent);
      
      toast({
        title: 'Event Created!',
        description: 'The new event has been successfully added to Airtable.',
      });
      form.reset();
    } catch (error) {
      console.error('Failed to create event:', error);
      toast({
        title: 'Submission Failed',
        description: 'There was an error creating the event. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Add New Event</CardTitle>
        <CardDescription>
          Fill out the form to add a new event to the Aether Hub events list.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Sustainable Design Workshop" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 4:00 PM WAT" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Online" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an event category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {eventCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the event in detail..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registrationUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration URL (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://your-registration-link.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                'Add Event'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function AccessDenied() {
  return (
     <Card className="w-full max-w-md text-center">
      <CardHeader>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <Lock className="h-8 w-8 text-destructive" />
        </div>
        <CardTitle className="mt-4">Access Denied</CardTitle>
        <CardDescription>
          You do not have permission to view this page. Please provide the correct secret key in the URL.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

function AddMeContent() {
  const searchParams = useSearchParams();
  const secretKey = searchParams.get('key');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  // We use a state to avoid showing the form before the check is complete.
  // Directly using `process.env` in the render body is not reliable on the client.
  // Instead, we check it once and set state.
  useState(() => {
    setIsValid(secretKey === process.env.NEXT_PUBLIC_ADD_EVENT_SECRET_KEY);
  });

  if (isValid === null) {
    // Show a loading state until the client-side check is complete
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }
  
  return isValid ? <AddEventForm /> : <AccessDenied />;
}

export default function AddMePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 items-center justify-center p-4 py-24 sm:py-32">
        <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin" />}>
          <AddMeContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
