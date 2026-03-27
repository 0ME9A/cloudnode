"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChevronRight, Edit2, User } from "lucide-react";
import { useState } from "react";

type Props = {
  isActive: boolean;
  isCompleted: boolean;
  onNext: () => void;
  onEdit: () => void;
};

export default function AccountStep({
  isActive,
  isCompleted,
  onNext,
  onEdit,
}: Props) {
  const [isLogin, setIsLogin] = useState(false);

  if (isCompleted && !isActive) {
    return (
      <Card
        className="border-primary/20 bg-background/50 hover:bg-primary/5 transition-colors cursor-pointer shadow-sm"
        onClick={onEdit}
      >
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
              <Check className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Account Details</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                John Doe (john@example.com)
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <Edit2 className="size-4" /> Edit
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!isActive) {
    return (
      <Card className="border-border/40 opacity-50 shadow-none pointer-events-none">
        <div className="px-6 py-4 flex items-center gap-3">
          <div className="size-8 rounded-full bg-muted text-muted-foreground font-bold flex items-center justify-center shrink-0">
            2
          </div>
          <h2 className="text-xl font-semibold text-muted-foreground">
            Account Details
          </h2>
        </div>
      </Card>
    );
  }

  // Active view
  return (
    <Card className="border-primary/40 shadow-xl shadow-primary/5 overflow-hidden ring-1 ring-primary/20">
      <div className="bg-primary/10 px-6 py-4 border-b border-primary/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0">
            2
          </div>
          <h2 className="text-xl font-semibold">Account Details</h2>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsLogin(!isLogin)}
          className="text-xs h-8"
        >
          {isLogin ? "Create an Account" : "Existing User? Log In"}
        </Button>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <User className="size-5 text-primary" />
          <h3 className="font-medium text-lg">
            {isLogin ? "Welcome Back" : "Personal Information"}
          </h3>
        </div>

        {isLogin ? (
          // LOGIN FORM
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email Address</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <Input id="login-password" type="password" />
            </div>
            <Button size="lg" className="w-full mt-4" onClick={onNext}>
              Log In & Continue <ChevronRight className="size-4 ml-2" />
            </Button>
          </div>
        ) : (
          // SIGNUP FORM
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 9876543210" />
              </div>
            </div>

            <div className="space-y-2 max-w-[50%]">
              <Label htmlFor="password">Create Password</Label>
              <Input id="password" type="password" />
              <p className="text-xs text-muted-foreground mt-1">
                Must be at least 8 characters
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <Button size="lg" onClick={onNext}>
                Continue to Payment <ChevronRight className="size-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
