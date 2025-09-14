'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting topics for the knowledge archive based on trending themes and user interests.
 *
 * - suggestArchiveTopics - A function that suggests topics for the knowledge archive.
 * - SuggestArchiveTopicsInput - The input type for the suggestArchiveTopics function.
 * - SuggestArchiveTopicsOutput - The return type for the suggestArchiveTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestArchiveTopicsInputSchema = z.object({
  trendingThemes: z
    .string()
    .describe('Trending themes in architecture and design in Africa.'),
  userInterests: z
    .string()
    .describe('Summarized user interests within the Aether Hub community.'),
  numberOfTopics: z
    .number()
    .default(3)
    .describe('The number of topic suggestions to generate.'),
});
export type SuggestArchiveTopicsInput = z.infer<typeof SuggestArchiveTopicsInputSchema>;

const SuggestArchiveTopicsOutputSchema = z.object({
  suggestedTopics: z.array(z.string()).describe('A list of suggested topics for the knowledge archive.'),
});
export type SuggestArchiveTopicsOutput = z.infer<typeof SuggestArchiveTopicsOutputSchema>;

export async function suggestArchiveTopics(input: SuggestArchiveTopicsInput): Promise<SuggestArchiveTopicsOutput> {
  return suggestArchiveTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestArchiveTopicsPrompt',
  input: {schema: SuggestArchiveTopicsInputSchema},
  output: {schema: SuggestArchiveTopicsOutputSchema},
  prompt: `You are an AI assistant helping a content curator for Aether Hub, a creative ecosystem for architects and designers in Africa. Your task is to suggest topics for the knowledge archive based on trending themes and user interests.

Trending Themes:
{{trendingThemes}}

User Interests:
{{userInterests}}

Please suggest {{numberOfTopics}} topics that would be relevant and engaging for the Aether Hub community. Ensure that the suggestions are specific, actionable, and aligned with the archive's goal of preserving and sharing knowledge about African design, research, and case studies. Return a numbered list of suggested topics.

Output the topic names only, one suggestion per line, without any extra preamble or description.
`,
});

const suggestArchiveTopicsFlow = ai.defineFlow(
  {
    name: 'suggestArchiveTopicsFlow',
    inputSchema: SuggestArchiveTopicsInputSchema,
    outputSchema: SuggestArchiveTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
