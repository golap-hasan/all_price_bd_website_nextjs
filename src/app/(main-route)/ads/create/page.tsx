"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { 
  Smartphone, 
  Laptop, 
  Home, 
  Car, 
  Shirt, 
  Book, 
  MoreHorizontal, 
  ChevronRight, 
  Upload, 
  X,
  Building
} from "lucide-react"

import PageLayout from "@/tools/PageLayout"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Categories with icons and subcategories
const categories = [
  { 
    id: "mobiles", 
    label: "Mobiles", 
    icon: Smartphone,
    subcategories: [
      { id: "mobile-phones", label: "Mobile Phones" },
      { id: "mobile-accessories", label: "Mobile Accessories" },
      { id: "wearables", label: "Wearables" },
      { id: "sim-cards", label: "SIM Cards" },
    ]
  },
  { 
    id: "electronics", 
    label: "Electronics", 
    icon: Laptop,
    subcategories: [
      { id: "desktop-computers", label: "Desktop Computers" },
      { id: "laptops", label: "Laptops" },
      { id: "tvs", label: "TVs" },
      { id: "cameras", label: "Cameras" },
      { id: "audio", label: "Audio & Sound Systems" },
    ]
  },
  { 
    id: "home-living", 
    label: "Home & Living", 
    icon: Home,
    subcategories: [
      { id: "furniture", label: "Furniture" },
      { id: "home-appliances", label: "Home Appliances" },
      { id: "decor", label: "Home Decor" },
      { id: "kitchen", label: "Kitchen & Dining" },
    ]
  },
  { 
    id: "vehicles", 
    label: "Vehicles", 
    icon: Car,
    subcategories: [
      { id: "cars", label: "Cars" },
      { id: "motorbikes", label: "Motorbikes" },
      { id: "bicycles", label: "Bicycles" },
      { id: "trucks", label: "Trucks" },
      { id: "auto-parts", label: "Auto Parts & Accessories" },
    ]
  },
  { 
    id: "property", 
    label: "Property", 
    icon: Building,
    subcategories: [
      { id: "houses-sale", label: "Houses for Sale" },
      { id: "apartments-sale", label: "Apartments for Sale" },
      { id: "houses-rent", label: "Houses for Rent" },
      { id: "apartments-rent", label: "Apartments for Rent" },
      { id: "land", label: "Land" },
      { id: "commercial", label: "Commercial Property" },
    ]
  },
  { 
    id: "others", 
    label: "Others", 
    icon: MoreHorizontal,
    subcategories: [
      { id: "sports", label: "Sports & Fitness" },
      { id: "hobbies", label: "Hobbies & Interests" },
      { id: "pets", label: "Pets & Animals" },
      { id: "musical-instruments", label: "Musical Instruments" },
      { id: "office-equipment", label: "Office Equipment" },
    ]
  },
]

const formSchema = z.object({
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  condition: z.enum(["used", "new"], {
    error: "Please select the condition.",
  }),
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  price: z.number().min(1, {
    message: "Price must be a positive number.",
  }),
  negotiable: z.boolean(),
  images: z.any(), // We'll handle images manually for now or refine this
  name: z.string().min(2, {
    message: "Name is required.",
  }),
  phone: z.string().min(11, {
    message: "Phone number is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
})

export default function AdCreatePage() {
  const [step, setStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      title: "",
      description: "",
      price: 0,
      negotiable: false,
      condition: "used",
      images: [],
      name: "",
      phone: "",
      email: "",
    },
  })

  function onCategorySelect(categoryId: string) {
    setSelectedCategory(categoryId)
    setStep(2)
  }

  function onSubCategorySelect(subCategoryId: string) {
    setSelectedSubCategory(subCategoryId)
    form.setValue("category", subCategoryId)
    setStep(3)
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    alert("Ad posted successfully! (Check console)")
  }

  return (
    <PageLayout paddingSize="small" className="screen-height">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Post an Ad</h1>
          <p className="text-muted-foreground">Sell your items quickly and easily.</p>
        </div>

        {step === 1 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Select a Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => onCategorySelect(category.id)}
                    className="flex items-center p-4 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-left"
                  >
                    <category.icon className="w-6 h-6 mr-3 text-primary" />
                    <span className="font-medium">{category.label}</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="mr-2">
                  <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Back
                </Button>
                <h2 className="text-xl font-semibold">Select a Subcategory</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories
                  .find((c) => c.id === selectedCategory)
                  ?.subcategories.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => onSubCategorySelect(sub.id)}
                      className="flex items-center p-4 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-left"
                    >
                      <span className="font-medium">{sub.label}</span>
                      <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
                    </button>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Category:</span>
                    <span className="ml-2">
                      {categories.find(c => c.id === selectedCategory)?.label} 
                      <span className="mx-2 text-muted-foreground">/</span>
                      {categories.find(c => c.id === selectedCategory)?.subcategories.find(s => s.id === selectedSubCategory)?.label}
                    </span>
                    <Button 
                      variant="link" 
                      className="h-auto p-0 ml-4 text-primary"
                      onClick={() => setStep(1)}
                    >
                      Change
                    </Button>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    
                    {/* Condition */}
                    <FormField
                      control={form.control}
                      name="condition"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Condition</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="used" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Used
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="new" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  New
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Separator />

                    {/* Item Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Item Details</h3>
                      
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Keep it short and distinct" {...field} />
                            </FormControl>
                            <FormDescription>
                              Mention the key features of your item (e.g. brand, model, age, type)
                            </FormDescription>
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
                                placeholder="More details = more responses!" 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price (Tk)</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="Pick a good price" 
                                  {...field} 
                                  value={Number.isNaN(field.value) ? "" : field.value}
                                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="negotiable"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mt-8">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Negotiable
                                </FormLabel>
                                <FormDescription>
                                  Price can be negotiated with the buyer.
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Photos */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Add Photos</h3>
                      <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-accent/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-primary/10 p-4 rounded-full mb-4">
                            <Upload className="w-8 h-8 text-primary" />
                          </div>
                          <p className="font-medium mb-1">Click to upload photos</p>
                          <p className="text-sm text-muted-foreground">
                            Add up to 5 photos. Use real photos of your product, not catalogs.
                          </p>
                        </div>
                        <Input 
                          type="file" 
                          multiple 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => {
                            // Handle file upload logic here
                            console.log(e.target.files)
                          }}
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Contact Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Contact Details</h3>
                      
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="017..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-6">
                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Post Ad
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
