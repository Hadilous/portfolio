import { useState } from "react";
import { ExternalLink } from "lucide-react";
import {cn} from "@/lib/utils";
import ThreeJSViewer from "./ThreeJSViewer";


const projects = [
{   id: 1, 
    title: "Book shop website", 
    description: "A responsive website for an online book shop where the user can find different books based on their categories and purchase them online , the user have an account to save his purchase history.", 
    image:"./projects/h.books.png", 
    tags: ["HTML","CSS","JavaScript","PHP"], 
    demoUrl: "https://hadilbookstore.netlify.app/", 
    category:"website" 
},
{   id: 2, 
    title: "Library manager website", 
    description: "an online university library manager where the students can search,save and borrow books/documents with their accounts, and the admin can add, remove, hide and edit books/documents or students.", 
    image:"./projects/lib.png", 
    tags: ["HTML","CSS","JavaScript","PHP"], 
    demoUrl: "https://al-libruary.netlify.app/", 
    category:"website" 
},
{   id: 3, 
    title: "Weather forecast website", 
    description: "a weather forecast website that shows the weather of the day and the week ahead based on the user's GPS location or based on searched location.", 
    image:"./projects/weather.png", 
    tags: ["HTML","CSS","JavaScript","PHP"], 
    demoUrl: "https://weathercastsite.netlify.app/", 
    category:"website" 
},
{   id: 4, 
    title: "Online Bakery website", 
    description: "an online bakery website where the client can look for goodies by categories and purchase them by filling in an order form that will be sent to the bakery official email.", 
    image:"./projects/cookies.png", 
    tags: ["HTML","CSS","JavaScript"], 
    demoUrl: "https://cookiesbakery.netlify.app/", 
    category:"website" 
},
{
  id: 6,
  title: "Bakery Scene",
  description: "A bakery scene (image) using blender.",
  image: "./projects/bakery.png",
  model: "./projects/bakery.png",
  tags: ["Blender"],
  demoUrl: "./projects/bakery.png",  
  category: "design"
},

{   id: 7, 
    title: "Bakery Scene Animated", 
    description: "A bakery scene with animation using blender.", 
    image:"./projects/coffee.png", 
    model: "./projects/coffee.mp4",
    tags: ["Blender"],
    demoUrl: "./projects/coffee.mp4", 
    category:"design" 
},
{   id: 8, 
    title: "Catering Service reopening notice", 
    description: "A Catering service will be open on a certain date in Setif.", 
    image:"./projects/Bear Catering Service.png", 
    tags: ["Canva"], 
    demoUrl: "./projects/Bear Catering Service.png", 
    category:"design" 
},
{   id: 9, 
    title: "Cafe reopening notice", 
    description: "A Cafe will be reopen on a certain date.", 
    image:"./projects/turtle cafe.png", 
    tags: ["Canva"], 
    demoUrl: "./projects/turtle cafe.png", 
    category:"design" 
},
{   id: 10, 
    title: "Solaire Scene", 
    description: "a solaire scene using three.js in an html file.", 
    image:"./projects/solaire.png", 
    tags: ["HTML","CSS","Three.js"], 
    demoUrl: "./projects/solaire.html", 
    category:"design" 
},
];

const categories = ["all", "website", "design"];

export const ProjectsSection = () => {
const [activeCategory, setActiveCategory] = useState("all");

const filteredProjects = projects.filter(project => activeCategory === "all" || project.category === activeCategory);  

return (  
    <section id="projects" className="py-24 px-4 relative">  
        <div className="container mx-auto max-w-5xl">  
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">  
                Featured <span className="text-primary">Projects</span>  
            </h2>  
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">  
                Here are some of my recent projects. Each project is crafted with attention to detail and user experience.  
            </p>  

            {/* Category Buttons */}  
            <div className="flex flex-wrap justify-center gap-4 mb-12">  
                {categories.map((cat) => (  
                    <button  
                        key={cat}  
                        onClick={() => setActiveCategory(cat)}  
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>  
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}  
                    </button>  
                ))}  
            </div>  

            {/* Projects Grid */}  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
                {filteredProjects.map((project) => (  
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">  
                        <div className="h-48 overflow-hidden">  
                           <img src={project.image} alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
  
                        </div>  
                        <div className="p-6">  
                            <div className="flex flex-wrap gap-2 mb-4">  
                                {project.tags.map((tag) => (  
                                    <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">  
                                        {tag}  
                                    </span>  
                                ))}  
                            </div>  
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>  
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>  
                            <div className="flex justify-between items-center">  
                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">  
                                    <ExternalLink size={20} />  
                                </a>  
                            </div>  
                        </div>  
                    </div>  
                ))}  
            </div>  
        </div>  
    </section>  
);  


};
