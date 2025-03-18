import ContactForm from "../components/ContactForm"
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Have a project in mind or want to discuss how data analytics can help your business? I'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4 text-primary">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Email</h3>
              <a href="mailto:alex@bimanager.com" className="text-primary hover:underline">
                alex@bimanager.com
              </a>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4 text-primary">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Phone</h3>
              <a href="tel:+15551234567" className="text-primary hover:underline">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4 text-primary">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">Connect With Me</h2>

          <div className="flex justify-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}

