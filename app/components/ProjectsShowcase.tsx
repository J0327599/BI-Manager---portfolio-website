"use client"

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

const projects = [
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
]

export default function ProjectsShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my most impactful business intelligence and data analytics projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

