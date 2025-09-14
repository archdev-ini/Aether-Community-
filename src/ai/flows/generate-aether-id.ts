'use server';

/**
 * @fileOverview A function for generating a unique Aether ID for new members.
 *
 * - generateAetherId - A function that generates a unique Aether ID.
 * - GenerateAetherIdInput - The input type for the generateAetherId function.
 * - GenerateAetherIdOutput - The return type for the generateAetherId function.
 */

import { z } from 'zod';

const GenerateAetherIdInputSchema = z.object({
  fullName: z.string().describe("The new member's full name."),
  email: z.string().email().describe("The new member's email address."),
});
export type GenerateAetherIdInput = z.infer<typeof GenerateAetherIdInputSchema>;

const GenerateAetherIdOutputSchema = z.object({
  aetherId: z.string().describe('The generated unique Aether ID.'),
});
export type GenerateAetherIdOutput = z.infer<
  typeof GenerateAetherIdOutputSchema
>;

// This is a placeholder for a database or persistent counter.
// In a real application, you would fetch and increment this from a database to ensure uniqueness.
let sequentialNumber = 0;

async function getNextSequentialNumber(): Promise<number> {
  // Simulate fetching and incrementing a counter from a database.
  sequentialNumber += 1;
  return Promise.resolve(sequentialNumber);
}

/**
 * Generates a unique Aether ID for a new member.
 * @param input - The new member's details.
 * @returns An object containing the generated Aether ID.
 */
export async function generateAetherId(
  input: GenerateAetherIdInput
): Promise<GenerateAetherIdOutput> {
  // Validate input
  GenerateAetherIdInputSchema.parse(input);

  const year = new Date().getFullYear();
  
  // In a real application, you'd want to ensure this number is unique,
  // perhaps by querying a database. For now, we'll simulate it.
  const nextId = await getNextSequentialNumber();

  const sequentialId = nextId.toString().padStart(3, '0');
  const aetherId = `AID-${year}-${sequentialId}`;

  // Here you would typically save the user details and the new ID to your database.
  console.log(`Generated Aether ID ${aetherId} for ${input.fullName} (${input.email})`);

  return { aetherId };
}
