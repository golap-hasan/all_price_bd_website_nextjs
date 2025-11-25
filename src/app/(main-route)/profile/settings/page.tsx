import React from 'react';
import { KeyRound, Mail, MoonStar, Smartphone, UserCog } from "lucide-react";

import { ProfilePageHeader } from "@/components/profile/ProfilePageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfileSettingsPage() {
  return (
    <div className="space-y-6">
      <ProfilePageHeader
        title="Profile settings"
        description="Update account details, manage security preferences, and configure notifications."
        actions={
          <Button size="sm" className="rounded-full">
            Save changes
          </Button>
        }
      />

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card className="border-border/60 bg-card/95 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <UserCog className="h-4 w-4 text-primary" /> Profile information
              </CardTitle>
              <CardDescription>Keep your contact and display information up to date.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" defaultValue="Rafi Khan" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" defaultValue="+880 1711-000000" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Short bio</Label>
                <Input id="bio" placeholder="Tell buyers about yourself" defaultValue="Trusted tech seller since 2018." />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="rounded-full">
                Update profile
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-border/60 bg-card/95 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Mail className="h-4 w-4 text-primary" /> Email preferences
              </CardTitle>
              <CardDescription>Control what we send to your inbox.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-xl border border-border/40 bg-muted/30 p-4 dark:bg-muted/20">
                <div>
                  <p className="font-medium text-foreground">Product updates</p>
                  <p className="text-xs text-muted-foreground">Stay informed about new features and offers.</p>
                </div>
                <Switch defaultChecked aria-label="Toggle product updates" />
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border/40 bg-muted/30 p-4 dark:bg-muted/20">
                <div>
                  <p className="font-medium text-foreground">Weekly newsletter</p>
                  <p className="text-xs text-muted-foreground">Tips to sell faster and highlight your ads.</p>
                </div>
                <Switch defaultChecked aria-label="Toggle weekly newsletter" />
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border/40 bg-muted/30 p-4 dark:bg-muted/20">
                <div>
                  <p className="font-medium text-foreground">Buyer messages</p>
                  <p className="text-xs text-muted-foreground">Email me when buyers message me.</p>
                </div>
                <Switch defaultChecked aria-label="Toggle buyer messages" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card className="border-border/60 bg-card/95 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <KeyRound className="h-4 w-4 text-primary" /> Password & login
              </CardTitle>
              <CardDescription>Set a strong password and manage device access.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current password</Label>
                <Input id="current-password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New password</Label>
                <Input id="new-password" type="password" placeholder="Create a strong password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input id="confirm-password" type="password" placeholder="Repeat your new password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="rounded-full">
                Change password
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-border/60 bg-card/95 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Smartphone className="h-4 w-4 text-primary" /> Two-factor authentication
              </CardTitle>
              <CardDescription>Secure your account using SMS or authenticator apps.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-border/40 bg-muted/30 p-4 dark:bg-muted/20">
                <div>
                  <p className="font-medium text-foreground">SMS verification</p>
                  <p className="text-xs text-muted-foreground">Send a code to +880 1711-000000</p>
                </div>
                <Switch defaultChecked aria-label="Toggle SMS verification" />
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border/40 bg-muted/30 p-4 dark:bg-muted/20">
                <div>
                  <p className="font-medium text-foreground">Authenticator app</p>
                  <p className="text-xs text-muted-foreground">Scan QR to use Google Authenticator or Authy.</p>
                </div>
                <Switch aria-label="Toggle authenticator app" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-xs text-muted-foreground">
              <span>Trusted device: Windows Chrome · last login 2 hours ago</span>
              <Button variant="ghost" size="sm" className="rounded-full">
                View activity log
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="border-border/60 bg-card/95 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <MoonStar className="h-4 w-4 text-primary" /> Notification schedule
              </CardTitle>
              <CardDescription>Set quiet hours so you only receive alerts when it suits you.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="quiet-start">Quiet hours start</Label>
                <Input id="quiet-start" type="time" defaultValue="22:00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quiet-end">Quiet hours end</Label>
                <Input id="quiet-end" type="time" defaultValue="07:00" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="rounded-full">
                Update schedule
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-border/60 bg-card/95 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Mail className="h-4 w-4 text-primary" /> Channel preferences
              </CardTitle>
              <CardDescription>Choose how we reach you for buyer messages and alerts.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/40 bg-muted/30 p-4 text-sm text-muted-foreground dark:bg-muted/20">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">Email alerts</p>
                  <Switch defaultChecked aria-label="Toggle email alerts" />
                </div>
                <p className="mt-2 text-xs">Important updates, buyer messages, and promotions.</p>
              </div>
              <div className="rounded-xl border border-border/40 bg-muted/30 p-4 text-sm text-muted-foreground dark:bg-muted/20">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">SMS alerts</p>
                  <Switch aria-label="Toggle SMS alerts" />
                </div>
                <p className="mt-2 text-xs">Get instant notifications for high priority messages.</p>
              </div>
              <div className="rounded-xl border border-border/40 bg-muted/30 p-4 text-sm text-muted-foreground dark:bg-muted/20">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">Push notifications</p>
                  <Switch defaultChecked aria-label="Toggle push notifications" />
                </div>
                <p className="mt-2 text-xs">Real-time alerts on the mobile app.</p>
              </div>
              <div className="rounded-xl border border-border/40 bg-muted/30 p-4 text-sm text-muted-foreground dark:bg-muted/20">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">WhatsApp updates</p>
                  <Switch aria-label="Toggle WhatsApp updates" />
                </div>
                <p className="mt-2 text-xs">Reply to buyers and manage ads via WhatsApp.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}