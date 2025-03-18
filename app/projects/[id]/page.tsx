import Link from "next/link"
import { ArrowLeft, Calendar, Tag, User } from "lucide-react"

// This would typically come from a database or API
const projectsData = {
  "sales-analytics-dashboard": {
    title: "Sales Analytics Dashboard",
    description: "Interactive dashboard providing real-time insights into sales performance across regions",
    fullDescription:
      "This comprehensive sales analytics dashboard was designed for a multinational retail corporation seeking to consolidate their sales data across 50+ global locations. The solution provides real-time monitoring of key performance indicators, regional comparisons, product category analysis, and predictive sales forecasting.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Power BI", "SQL", "Data Modeling", "DAX"],
    client: "Global Retail Inc.",
    date: "January 2023",
    duration: "3 months",
    role: "Lead BI Developer",
    challenges: [
      "Integrating disparate data sources from multiple regional systems",
      "Ensuring near real-time data refresh while maintaining performance",
      "Creating intuitive visualizations for complex sales relationships",
      "Implementing row-level security for regional management teams",
    ],
    solutions: [
      "Designed a star schema data model optimized for analytical queries",
      "Implemented incremental refresh patterns to balance freshness and performance",
      "Created custom visualizations using Power BI and R integration",
      "Developed comprehensive security roles with dynamic row-level security",
    ],
    results: [
      "Reduced reporting time from 2 days to 2 hours",
      "Increased sales team productivity by 25%",
      "Enabled identification of cross-selling opportunities worth $1.2M",
      "Improved forecast accuracy by 15%",
    ],
    testimonial: {
      quote:
        "The sales analytics dashboard transformed how we understand our business. We now have instant access to insights that used to take days to compile.",
      author: "Sarah Johnson",
      position: "VP of Sales, Global Retail Inc.",
    },
  },
  "customer-segmentation": {
    title: "Customer Segmentation Analysis",
    description: "Advanced clustering analysis to identify key customer segments for targeted marketing",
    fullDescription:
      "This project involved developing a sophisticated customer segmentation model for a financial services company looking to optimize their marketing campaigns and product offerings. Using machine learning techniques, we identified distinct customer segments based on behavioral patterns, transaction history, and demographic information.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Python", "Machine Learning", "Tableau", "K-means Clustering"],
    client: "FinServe Solutions",
    date: "August 2022",
    duration: "4 months",
    role: "Data Scientist & BI Consultant",
    challenges: [
      "Processing and cleaning large volumes of customer data",
      "Identifying meaningful variables for segmentation",
      "Creating interpretable segments for business users",
      "Developing actionable recommendations for each segment",
    ],
    solutions: [
      "Implemented advanced data preprocessing techniques using Python",
      "Applied feature selection and dimensionality reduction methods",
      "Used K-means clustering with silhouette analysis for optimal segmentation",
      "Created interactive Tableau dashboards for segment exploration",
    ],
    results: [
      "Identified 5 distinct customer segments with unique characteristics",
      "Increased marketing campaign conversion rates by 35%",
      "Reduced customer acquisition costs by 22%",
      "Developed tailored product offerings resulting in 18% revenue increase",
    ],
    testimonial: {
      quote:
        "The customer segmentation analysis provided invaluable insights into our customer base. We've completely transformed our marketing approach based on these findings.",
      author: "Michael Chen",
      position: "CMO, FinServe Solutions",
    },
  },
  "supply-chain-optimization": {
    title: "Supply Chain Optimization",
    description: "End-to-end supply chain analytics solution that reduced logistics costs by 15%",
    fullDescription:
      "This project involved developing a comprehensive supply chain analytics solution for a manufacturing company struggling with inventory management and logistics inefficiencies. The solution provided end-to-end visibility across the supply chain, from procurement to delivery, with predictive capabilities for demand forecasting and inventory optimization.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["ETL", "Power BI", "SQL", "Predictive Analytics"],
    client: "ManufactureTech Industries",
    date: "March 2022",
    duration: "6 months",
    role: "BI Solution Architect",
    challenges: [
      "Integrating data from multiple ERP and logistics systems",
      "Modeling complex supply chain relationships",
      "Developing accurate demand forecasting algorithms",
      "Creating actionable insights for inventory management",
    ],
    solutions: [
      "Designed a comprehensive ETL pipeline using SSIS and Azure Data Factory",
      "Implemented a snowflake schema optimized for supply chain analytics",
      "Developed time-series forecasting models for demand prediction",
      "Created interactive Power BI dashboards with drill-through capabilities",
    ],
    results: [
      "Reduced logistics costs by 15%",
      "Decreased inventory holding costs by 22%",
      "Improved on-time delivery rate from 82% to 96%",
      "Enhanced forecast accuracy by 30%",
    ],
    testimonial: {
      quote:
        "The supply chain analytics solution has transformed our operations. We now have complete visibility across our entire supply chain and can make data-driven decisions that have significantly reduced costs.",
      author: "Robert Martinez",
      position: "COO, ManufactureTech Industries",
    },
  },
  "financial-forecasting": {
    title: "Financial Forecasting Model",
    description: "Predictive analytics model for accurate financial forecasting and budget planning",
    fullDescription:
      "This project involved developing a sophisticated financial forecasting model for a healthcare organization to improve budget planning and financial decision-making. The solution combined historical financial data with operational metrics to create accurate predictions of revenue, expenses, and cash flow.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Excel", "Statistical Analysis", "Forecasting", "Power BI"],
    client: "HealthCare Partners",
    date: "November 2021",
    duration: "3 months",
    role: "Financial Analyst & BI Developer",
    challenges: [
      "Integrating financial data from multiple departments and systems",
      "Accounting for seasonal variations and irregular events",
      "Creating user-friendly interfaces for finance team members",
      "Developing accurate long-term forecasting models",
    ],
    solutions: [
      "Implemented advanced Excel models with Power Query for data integration",
      "Applied time-series analysis with seasonal decomposition",
      "Developed interactive dashboards with scenario analysis capabilities",
      "Created ensemble forecasting models combining multiple approaches",
    ],
    results: [
      "Improved forecast accuracy by 25%",
      "Reduced budget planning cycle from 6 weeks to 2 weeks",
      "Enabled scenario planning for strategic decision-making",
      "Identified $1.8M in potential cost savings",
    ],
    testimonial: {
      quote:
        "The financial forecasting model has revolutionized our budgeting process. We now have confidence in our projections and can make strategic decisions with much greater clarity.",
      author: "Jennifer Williams",
      position: "CFO, HealthCare Partners",
    },
  },
  "marketing-roi-analysis": {
    title: "Marketing ROI Analysis",
    description: "Comprehensive analysis of marketing campaign performance and return on investment",
    fullDescription:
      "This project involved developing a marketing analytics solution for an e-commerce company to measure and optimize the ROI of their digital marketing campaigns. The solution integrated data from multiple marketing platforms, website analytics, and sales systems to provide a holistic view of marketing performance.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Google Analytics", "Data Studio", "SQL", "Attribution Modeling"],
    client: "E-Shop Global",
    date: "July 2021",
    duration: "4 months",
    role: "Marketing Analytics Consultant",
    challenges: [
      "Integrating data from multiple marketing platforms (Google Ads, Facebook, etc.)",
      "Developing accurate attribution models for conversion tracking",
      "Creating meaningful KPIs for marketing performance",
      "Building user-friendly dashboards for marketing team members",
    ],
    solutions: [
      "Implemented a data warehouse for marketing data integration",
      "Developed multi-touch attribution models using SQL and Python",
      "Created custom KPIs aligned with business objectives",
      "Built interactive Data Studio dashboards with drill-down capabilities",
    ],
    results: [
      "Identified underperforming campaigns saving $300K annually",
      "Increased ROAS (Return on Ad Spend) by 45%",
      "Improved conversion rates by 28% through channel optimization",
      "Reduced customer acquisition costs by 22%",
    ],
    testimonial: {
      quote:
        "The marketing ROI analysis has transformed our approach to digital marketing. We now have clear visibility into what's working and what's not, allowing us to optimize our spending for maximum impact.",
      author: "David Thompson",
      position: "Marketing Director, E-Shop Global",
    },
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/projects" className="apple-button">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <Link
              href="/projects"
              className="inline-flex items-center text-white mb-6 hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-white/80 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/80 text-white text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Client</h3>
              </div>
              <p>{project.client}</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Timeline</h3>
              </div>
              <p>
                {project.date} • {project.duration}
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Tag className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Role</h3>
              </div>
              <p>{project.role}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>Overview</h2>
            <p>{project.fullDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Solutions</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="bg-primary/5 border border-primary/10 rounded-lg p-6">
                  <p className="font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="bg-background border border-border rounded-lg p-8 mb-12">
              <blockquote className="text-xl italic mb-4">"{project.testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-4">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{project.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <Link href="/contact" className="apple-button">
              Discuss a Similar Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

