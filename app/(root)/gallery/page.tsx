// import ThemeToggle from "@/components/ThemeToggle";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { category } from "@/public/assets/assets";
// import Image from "next/image";
// import Link from "next/link";

// const Gallery = () => {
//   return (
//     <>
//       <h1>Gallery</h1>
//       <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
//         <div className="container flex h-16 items-center">
//           <h1 className="text-foreground font-semibold">Logo</h1>
//           <nav className="ml-auto flex gap-4">
//             <ThemeToggle />
//             <Button variant="ghost">Home</Button>
//             <Button variant="ghost">About</Button>
//             <Button>Get Started</Button>
//           </nav>
//         </div>
//       </nav>
//       <section className="bg-background py-20">
//         <div className="container text-center">
//           <h1 className="text-4xl font-bold text-foreground mb-4">
//             Welcome to Our Platform
//           </h1>
//           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Build amazing things with our design system
//           </p>
//           <div className="flex gap-4 justify-center">
//             <Button size="lg">Get Started</Button>
//             <Button variant="outline" size="lg">
//               Learn More
//             </Button>
//           </div>
//         </div>
//       </section>
//       <section className="py-16 bg-muted/30">
//         <div className="container">
//           <div className="grid md:grid-cols-3 gap-8">
//             {category.map((feature, index) => (
//               <Card
//                 key={feature.id}
//                 className="hover:shadow-lg transition-shadow"
//               >
//                 <CardHeader>
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
//                     <Image
//                       src={feature.image}
//                       alt={`${feature.name} Service image`}
//                       className="w-6 h-6 text-primary"
//                     />
//                   </div>
//                   <CardTitle>{feature.name}</CardTitle>
//                   <CardDescription>{feature.description}</CardDescription>
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Button className="bg-primary text-primary-foreground">
//         Save Changes
//       </Button>

//       <Button variant="secondary">Cancel</Button>

//       <Card className="bg-card text-card-foreground border-border">
//         <CardContent>Content here</CardContent>
//       </Card>

//       <p className="text-muted-foreground">This is a subtitle</p>
//       <hr />
//       <Button className="bg-blue-500">Save</Button>

//       <div className="bg-primary text-secondary-foreground">Bad contrast</div>

//       <div className="bg-gray-100">Use bg-muted instead</div>
//       <hr />
//       <Button>Primary Action</Button>

//       <Button variant="secondary">Secondary</Button>

//       <Button variant="ghost">Tertiary</Button>

//       <Button variant="destructive">Delete</Button>

//       <Button variant="outline">Outlined</Button>
//       <hr />
//       <div className="hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors rounded-md p-2">
//         Interactive Item
//       </div>

//       <div className="bg-accent text-accent-foreground">Active Item</div>

//       <Button disabled className="opacity-50 cursor-not-allowed">
//         Disabled
//       </Button>
//       <hr />
//       <h1 className="text-4xl font-bold text-foreground">Main Title</h1>
//       <h2 className="text-3xl font-semibold text-foreground">Section Title</h2>
//       <h3 className="text-2xl font-semibold text-foreground">Subsection</h3>
//       <h4 className="text-xl font-medium text-foreground">Card Title</h4>
//       <hr />
//       <p className="text-foreground">Main content text</p>

//       <p className="text-muted-foreground">Descriptions, captions</p>

//       <span className="text-sm text-muted-foreground">Helper text</span>

//       <Link href="#" className="text-primary hover:underline">
//         Link text
//       </Link>
//     </>
//   );
// };
// Gallery.theme = "dark";
// export default Gallery;
