import Experience from "../components/Experience"
import { GraduationCap, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A passionate Business Intelligence Manager with over 8 years of experience transforming data into actionable
            insights.
          </p>
          <div className="flex justify-center">
            <img
              src="/about-pictures/profile.jpg"
              alt="Stanton Edwards"
              className="rounded-full h-64 w-64 object-cover border-4 border-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">My Journey</h2>
          <div className="prose prose-lg max-w-none text-foreground">
            <p>
              I'm Stanton Edwards, a Business Intelligence Manager with a passion for transforming complex data into clear,
              actionable insights. My journey in the world of data began over 8 years ago, and I've been fascinated by
              the power of information ever since.
            </p>
            <p>
              Throughout my career, I've worked with organizations across various industries—from retail and finance to
              healthcare and technology—helping them leverage their data assets to drive strategic decision-making and
              operational excellence.
            </p>
            <p>
              My approach combines technical expertise with business acumen. I believe that effective BI isn't just
              about building dashboards or running reports—it's about understanding the business questions that need
              answering and designing solutions that deliver real value.
            </p>
            <p>
              When I'm not immersed in data, you'll find me hiking in the mountains, experimenting with new cooking
              recipes, or mentoring aspiring data professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Education & Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Education & Certifications</h2>

          <div className="space-y-8">
            <div className="flex">
              <div className="mr-4 text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Master of Science in Data Analytics</h3>
                <p className="text-muted-foreground">Stanford University, 2015</p>
                <p className="mt-2">Specialized in Business Intelligence and Statistical Analysis</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">MIT, 2013</p>
                <p className="mt-2">Minor in Business Administration</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-primary">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Certifications</h3>
                <ul className="mt-2 space-y-2">
                  <li>Microsoft Certified: Power BI Data Analyst Associate</li>
                  <li>Tableau Desktop Specialist</li>
                  <li>AWS Certified Data Analytics - Specialty</li>
                  <li>Google Professional Data Engineer</li>
                  <li>Certified Business Intelligence Professional (CBIP)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Beyond Data</h2>

          <div className="flex">
            <div className="mr-4 text-primary">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Personal Interests</h3>
              <p className="mt-2">
                While data is my professional passion, I believe in maintaining a well-rounded life. I'm an avid hiker
                and have summited several peaks in the Pacific Northwest. I also enjoy cooking (especially experimenting
                with fusion cuisines), playing chess, and volunteering with local STEM education programs to inspire the
                next generation of data professionals.
              </p>
              <p className="mt-2">
                I'm also committed to continuous learning and regularly participate in data science competitions and
                hackathons to keep my skills sharp and explore new techniques in the rapidly evolving field of data
                analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

