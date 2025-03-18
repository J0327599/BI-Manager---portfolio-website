import ProjectCard from "../components/ProjectCard"

const allProjects = [
  {
    id: "sales-analytics-dashboard",
    title: "Sales Analytics Dashboard",
    description: "Interactive dashboard providing real-time insights into sales performance across regions",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Power BI", "SQL", "Data Modeling"],
    featured: true,
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation Analysis",
    description: "Advanced clustering analysis to identify key customer segments for targeted marketing",
    image: "/placeholder.svg?height=600&width=600",
    tags: ["Python", "Machine Learning", "Tableau"],
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization",
    description: "End-to-end supply chain analytics solution that reduced logistics costs by 15%",
    image: "/placeholder.svg?height=600&width=600",
    tags: ["ETL", "Power BI", "SQL"],
  },
  {
    id: "financial-forecasting",
    title: "Financial Forecasting Model",
    description: "Predictive analytics model for accurate financial forecasting and budget planning",
    image: "/placeholder.svg?height=600&width=600",
    tags: ["Excel", "Statistical Analysis", "Forecasting"],
  },
  {
    id: "marketing-roi-analysis",
    title: "Marketing ROI Analysis",
    description: "Comprehensive analysis of marketing campaign performance and return on investment",
    image: "/placeholder.svg?height=600&width=600",
    tags: ["Google Analytics", "Data Studio", "SQL"],
  },
  {
    id: "hr-analytics-platform",
    title: "HR Analytics Platform",
    description: "Employee performance and engagement analytics platform for data-driven HR decisions",
    image: "/placeholder.svg?height=600&width=600",
    tags: ["Power BI", "Python", "SQL"],
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    description: "Real-time inventory tracking and optimization system with predictive restocking",
    image: "/placeholder.svg?height=600&width=600",
    tags: ["Tableau", "SQL", "ETL"],
  },
  {
    id: "executive-kpi-dashboard",
    title: "Executive KPI Dashboard",
    description: "C-suite dashboard providing holistic view of business performance with drill-down capabilities",
    image: "/placeholder.svg?height=600&width=600",
    tags: ["Power BI", "DAX", "Data Modeling"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A showcase of my business intelligence and data analytics work across various industries and use cases.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div key={project.id} className={project.featured ? "lg:col-span-2" : ""}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  featured={project.featured}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

