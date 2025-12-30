import { Code } from "lucide-react";
import { User } from "lucide-react";
import {Briefcase} from "lucide-react";

export const AboutSection = () =>{
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md-text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> ME</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate web developer</h3>
                    <p className="text-muted-foreground">
                        I am a dedicated web developer with a strong academic 
                        background in web technologies and data engineering. 
                        I enjoy working with modern frameworks like React and 
                        building interfaces that are both functional and visually
                        appealing. I’m always learning new tools, 
                        improving my skills, and exploring better ways to create 
                        meaningful digital experiences. My goal is to become a full-stack
                         developer and contribute to impactful tech projects.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href=".\CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p>
                                    Creating responsive websites and web applications with 
                                    modern framework.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p>
                                    Designing intuitive user interfaces and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p>
                                    I manage projects with clear planning, organized tasks, and efficient execution to ensure smooth and successful results.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
    );
} ;