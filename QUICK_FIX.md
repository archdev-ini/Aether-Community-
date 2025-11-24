# Quick Fix for Supabase Migration - join/page.tsx

## Edit 1: Remove 2 old import lines (lines 37 and 39)

**DELETE Line 37:**
```tsx
import { generateAetherId } from '@/ai/flows/generate-aether-id';
```

**DELETE Line 39:**
```tsx
import { createMember } from '@/lib/airtable';
```

**ADD after line 38 (`import { useToast } from '@/hooks/use-toast';`):**
```tsx
import { createMember } from '@/lib/supabase-queries';
```

---

## Edit 2: Replace handleSubmit function (lines 184-217)

**FIND this entire function (starting line 184):**
```tsx
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // 1. Generate Aether ID
      const { aetherId } = await generateAetherId({
        fullName: formData.fullName,
        email: formData.email,
      });

      // 2. Prepare data for Airtable
      await createMember({
        AetherID: aetherId,
        FullName: formData.fullName,
        Email: formData.email,
        Location: formData.location,
        Journey: getJourneyLabel(formData.journey),
        Experience: formData.experience,
        Interests: formData.interests.join(', '),
        Contributions: formData.contributions.map(getContributionLabel).join(', '),
      });
      
      setIsSubmitted(true);
    } catch (error) {
        console.error('Failed to submit application:', error);
        toast({
            title: "Submission Failed",
            description: "There was an error submitting your application. Please try again.",
            variant: "destructive",
        })
    } finally {
        setIsSubmitting(false);
    }\n  };
```

**REPLACE WITH:**
```tsx
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Submit to Supabase
      const result = await createMember({
        full_name: formData.fullName,
        email: formData.email,
        location: formData.location,
        journey: getJourneyLabel(formData.journey),
        experience: formData.experience,
        interests: formData.interests.join(', '),
        contributions: formData.contributions.map(getContributionLabel).join(', '),
      });
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.error || 'Failed to submit');
      }
    } catch (error) {
        console.error('Failed to submit application:', error);
        toast({
            title: "Submission Failed",
            description: "There was an error submitting your application. Please try again.",
            variant: "destructive",
        })
    } finally {
        setIsSubmitting(false);
    }\n  };
```

---

## Summary

That's it! Just these 2 edits will fix all the errors. After making these changes, save the file and all lint errors should be resolved.
