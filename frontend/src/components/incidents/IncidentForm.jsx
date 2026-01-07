import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "../ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";
import api from "../../lib/api"; // 1. Import API helper

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  affectedSystems: z.string().min(2, "Please specify affected systems."),
  impact: z.string().min(2, "Please describe the impact."),
});

export function IncidentForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      affectedSystems: "",
      impact: "",
    },
  });

  async function onSubmit(values) {
    try {
      // 2. Get the current user from LocalStorage (saved during Login)
      // Note: You need to ensure your Login.jsx saves this: localStorage.setItem('user', JSON.stringify(response.data));
      const userString = localStorage.getItem("user");
      const user = userString ? JSON.parse(userString) : null;

      if (!user || !user._id) {
        toast({
          title: "Authentication Error",
          description: "You must be logged in to report an incident.",
          variant: "destructive",
        });
        return;
      }

      // 3. Send data to Backend
      // We combine form values with the user_id required by the backend
      const payload = {
        ...values,
        user_id: user._id, 
        // Note: If your backend requires a 'threat_id', you might need to handle that here or make it optional in the backend model.
      };

      await api.post("/incidents", payload);

      // 4. Success Handler
      toast({
        title: "Incident Reported",
        description: "Your security incident has been successfully reported.",
      });
      
      form.reset();

    } catch (error) {
      // 5. Error Handler
      console.error("Report failed:", error);
      toast({
        title: "Submission Failed",
        description: error.response?.data?.error || "Could not report incident.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Incident Title</FormLabel>
              <FormControl>
                <Input placeholder="Brief title describing the incident" {...field} />
              </FormControl>
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
                  placeholder="Detailed description of the incident"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="affectedSystems"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Affected Systems</FormLabel>
              <FormControl>
                <Input placeholder="List of affected systems or areas" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="impact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Impact</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the impact on business operations"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-auto" style={{ backgroundColor: '#dc2626', color: '#f4f8fb' }}>
          Submit Report
        </Button>
      </form>
    </Form>
  );
}