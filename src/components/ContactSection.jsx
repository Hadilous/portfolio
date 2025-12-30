import { Facebook, Mail, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
    const form = useRef(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current) return;

        setLoading(true);

        emailjs.sendForm(
            "service_smy1pde",   
            "template_ppsicjb",  
            form.current,
            "l1WFaSAT6YzrYHnzX"    
        )
        .then(
            (result) => {
                console.log(result.text);
                setSuccess(true);
                setLoading(false);
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                setLoading(false);
                alert("Failed to send message. Please try again.");
            }
        );
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch!</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? 
                    Feel free to reach out. I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">Contact Informations</h3>

                        <div className="space-y-6 justify-center ml-48">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:adimihadi26@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        adimihadi26@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="tel:+213554098230" className="text-muted-foreground hover:text-primary transition-colors">
                                        +213554098230
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <p className="text-muted-foreground">El-Eulma, Setif, Algeria</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/adimi-hadil-399a06353/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.facebook.com/share/16WbXxQ3DJ/" target="_blank">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Adimi Hadil" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="name@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea name="message" id="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Your message" />
                            </div>

                            <button type="submit" disabled={loading} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {loading ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                            {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
