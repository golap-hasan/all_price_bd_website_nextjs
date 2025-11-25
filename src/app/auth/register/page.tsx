"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const registerSchema = z
  .object({
    role: z.enum(["USER", "VENDOR"]),
    fullname: z.string().min(1, { message: "Full name is required." }),
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Invalid email address." }),
    phone: z.string().min(1, { message: "Phone number is required." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    tradeLicence: z.instanceof(File).nullable().optional(),
    storeImage: z.instanceof(File).nullable().optional(),
    location: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.role === "VENDOR") {
      if (!(data.tradeLicence instanceof File)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["tradeLicence"],
          message: "Trade licence image is required.",
        });
      }

      if (!(data.storeImage instanceof File)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["storeImage"],
          message: "Store image is required.",
        });
      }
    }
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () =>
    setShowPassword((previous) => !previous);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "USER",
      fullname: "",
      email: "",
      phone: "",
      password: "",
      tradeLicence: null,
      storeImage: null,
      location: "",
    },
  });
  const role = useWatch({ control: form.control, name: "role" }) ?? "USER";

  const onSubmit = () => {
    // TODO: Implement registration API call
    // Example payload structure:
    // const basePayload = {
    //   name: data.fullname,
    //   email: data.email,
    //   phone: data.phone,
    //   password: data.password,
    //   confirmPassword: data.password,
    // };
    // const payload = data.role === "VENDOR"
    //   ? { ...basePayload, role: "VENDOR", tradeLicence: data.tradeLicence, storeImage: data.storeImage, location: data.location }
    //   : { ...basePayload, role: "USER" };
    // register(payload);
  };

  return (
    <div className="relative w-full overflow-hidden bg-linear-to-br from-background via-secondary/10 to-background">
      <div className="pointer-events-none absolute bottom-24 left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <Card className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/5 opacity-60" />
          <CardContent className="relative z-10">
            <div className="flex items-center justify-between gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Link href="/auth/login">
                  <ArrowLeft className="size-4" />
                </Link>
              </Button>
              <Link
                href="/support/faqs"
                className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground transition hover:text-primary"
              >
                Need help?
              </Link>
            </div>

            <div className="mt-6 space-y-3 text-center">
              <Badge className="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Join Recycle Mart
              </Badge>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Create your account
              </h2>
              <p className="text-sm text-muted-foreground">
                Choose buyer or vendor mode, then share the essentials so we can tailor your experience.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-8 space-y-6"
              >
                <Tabs defaultValue="USER" className="w-full" onValueChange={(value) => form.setValue("role", value as "USER" | "VENDOR")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="USER" className="text-sm font-medium">Buyer</TabsTrigger>
                    <TabsTrigger value="VENDOR" className="text-sm font-medium">Vendor</TabsTrigger>
                  </TabsList>

                  <TabsContent value="USER" className="space-y-6 mt-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Full name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Rahman" className="h-11 rounded-2xl px-4" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="student@example.com" className="h-11 rounded-2xl px-4" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Phone number
                            </FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="01XXXXXXXXX" className="h-11 rounded-2xl px-4" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Password
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Create a secure password"
                                  className="h-11 rounded-2xl px-4 pr-12"
                                  {...field}
                                />
                                <button
                                  type="button"
                                  className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground transition hover:text-primary"
                                  onClick={togglePasswordVisibility}
                                  aria-label={
                                    showPassword ? "Hide password" : "Show password"
                                  }
                                >
                                  {showPassword ? (
                                    <EyeOff className="size-5" />
                                  ) : (
                                    <Eye className="size-5" />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="VENDOR" className="space-y-6 mt-6">
                    <div className="rounded-2xl border border-border/60 bg-muted/10 p-4 text-sm text-muted-foreground">
                      Provide your business details so buyers can trust and find you easily.
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Full name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Rahman" className="h-11 rounded-2xl px-4" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="student@example.com" className="h-11 rounded-2xl px-4" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Phone number
                            </FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="01XXXXXXXXX" className="h-11 rounded-2xl px-4" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Password
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Create a secure password"
                                  className="h-11 rounded-2xl px-4 pr-12"
                                  {...field}
                                />
                                <button
                                  type="button"
                                  className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground transition hover:text-primary"
                                  onClick={togglePasswordVisibility}
                                  aria-label={
                                    showPassword ? "Hide password" : "Show password"
                                  }
                                >
                                  {showPassword ? (
                                    <EyeOff className="size-5" />
                                  ) : (
                                    <Eye className="size-5" />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tradeLicence"
                        render={({
                          field: { onChange, onBlur, name, ref },
                        }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Trade licence (image upload)
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept="image/*"
                                className="h-11 rounded-2xl"
                                onChange={(event) => onChange(event.target.files?.[0] ?? null)}
                                onBlur={onBlur}
                                name={name}
                                ref={ref}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="storeImage"
                        render={({
                          field: { onChange, onBlur, name, ref },
                        }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Storefront image
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept="image/*"
                                className="h-11 rounded-2xl"
                                onChange={(event) => onChange(event.target.files?.[0] ?? null)}
                                onBlur={onBlur}
                                name={name}
                                ref={ref}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                              Store location (optional)
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Area, city (optional)" className="h-11 rounded-2xl px-4" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <Button
                  type="submit"
                  className="w-full rounded-full py-4 text-xs font-semibold uppercase tracking-[0.35em] sm:py-5 sm:text-sm"
                >
                  {role === "VENDOR" ? "Create vendor account" : "Create buyer account"}
                </Button>
              </form>
            </Form>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
