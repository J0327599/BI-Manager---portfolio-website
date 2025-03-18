import SkillsShowcase from "../components/SkillsShowcase"
import { Code, BookOpen, Users, Lightbulb } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">My Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive overview of my technical and professional capabilities in business intelligence and data
            analytics.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <SkillsShowcase />

      {/* Soft Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Professional Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Leadership & Team Management</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Leading cross-functional BI and analytics teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mentoring junior analysts and developers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Agile project management and sprint planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Resource allocation and capacity planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Problem Solving & Strategy</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Translating business questions into analytical frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Data-driven decision making and strategic planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Root cause analysis and solution design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Process optimization and efficiency improvements</span>
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Technical Proficiency</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Data architecture and warehouse design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>ETL pipeline development and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Advanced SQL and database management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cloud infrastructure for BI (AWS, Azure, GCP)</span>
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Communication & Training</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Translating technical concepts for non-technical audiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Data storytelling and executive presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Developing and delivering BI training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Technical documentation and knowledge sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Methodologies & Approaches</h2>

          <div className="space-y-6">
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">Data-Driven Decision Making Framework</h3>
              <p>
                I've developed and implemented a structured approach to data-driven decision making that helps
                organizations move from intuition-based to evidence-based strategies. This framework includes problem
                definition, data collection, analysis, insight generation, and action planning.
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">Agile BI Development</h3>
              <p>
                I apply agile methodologies to BI projects, enabling faster delivery of value through iterative
                development cycles. This approach allows for continuous feedback and adaptation, ensuring that solutions
                remain aligned with evolving business needs.
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">Data Governance & Quality Management</h3>
              <p>
                I establish robust data governance frameworks that ensure data quality, security, and compliance. This
                includes data dictionaries, quality metrics, access controls, and stewardship processes that maintain
                the integrity of organizational data assets.
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">Self-Service BI Enablement</h3>
              <p>
                I design and implement self-service BI environments that empower business users to access and analyze
                data independently. This includes creating intuitive interfaces, pre-built data models, and training
                programs that democratize data access while maintaining governance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

