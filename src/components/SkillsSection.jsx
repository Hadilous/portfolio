import { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
    {name: "HTML", level: 95, category: "front-end"},
    {name: "css", level: 90, category: "front-end"},
    {name: "JavaScript", level: 85, category: "front-end"},
    {name: "React", level: 70, category: "front-end"},    
    {name: "three.js", level: 60, category: "front-end"},
    {name: "Node.js", level: 65, category: "back-end"},
    {name: "PostgreSQL", level: 80, category: "back-end"},
    {name: "MySQL", level: 85, category: "back-end"},
    {name: "SQLite", level: 65, category: "back-end"},
    {name: "PHP", level: 80, category: "back-end"},
    {name: "Python", level: 95, category: "back-end"},
    {name: "Git/GitHub", level: 70, category: "tools"},
    {name: "Docker", level: 70, category: "tools"},
    {name: "Figma", level: 90, category: "tools"},
    {name: "VS code", level: 95, category: "tools"},
    {name: "Python", level: 95, category: "languages"},
    {name: "C/C++", level: 90, category: "languages"},
    {name: "Java", level: 60, category: "languages"},
    {name: "Scilab", level: 80, category: "languages"},
    {name: "Blender", level: 85, category: "design"},
    {name: "Adobe XD", level: 85, category: "design"},
    {name: "Canva", level: 95, category: "design"},
    {name: "UI/UX", level: 95, category: "design"},    


];
const categories = ["all","front-end","back-end","tools", "languages", "design"];

export const SkillsSection = () => {
    const [activeCategory,setActiveCategory] = useState ("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return ( 
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) =>(
                        <button key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>
                        {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) =>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-wx card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skill.level + "%"}}>
                            </div>
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}