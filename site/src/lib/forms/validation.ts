import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-()+ ]+$/, 'Please enter a valid phone number'),
  company: z.string().max(100).optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export const quoteFormSchema = z.object({
  // Step 1
  service: z.string().min(1, 'Please select a service'),
  // Step 2
  propertyType: z.string().min(1, 'Please select a property type'),
  squareFootage: z.string().min(1, 'Please enter approximate square footage'),
  additionalDetails: z.string().max(1000).optional(),
  // Step 3
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-()+ ]+$/, 'Please enter a valid phone number'),
  company: z.string().max(100).optional(),
  preferredDate: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

// Step-specific schemas for multi-step validation
export const quoteStep1Schema = quoteFormSchema.pick({ service: true });
export const quoteStep2Schema = quoteFormSchema.pick({
  propertyType: true,
  squareFootage: true,
  additionalDetails: true,
});
export const quoteStep3Schema = quoteFormSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  company: true,
  preferredDate: true,
});
