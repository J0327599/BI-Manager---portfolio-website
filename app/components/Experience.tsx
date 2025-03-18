"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Senior BI Manager",
    company: "TechCorp Global",
    period: "2020 - Present",
    description:
      "Lead a team of 8 BI developers and data analysts. Implemented enterprise-wide data strategy resulting in 30% faster decision-making and $2M cost savings through process optimization.",
    achievements: [
      "Developed executive dashboard suite that increased C-suite data adoption by 65%",
      "Led migration from legacy systems to modern cloud-based BI platform",
      "Established data governance framework and best practices",
    ],
  },
  {
    title: "BI Analyst",
    company: "DataDrive Solutions",
    period: "2017 - 2020",
    description:
      "Designed and implemented business intelligence solutions for Fortune 500 clients across retail, healthcare, and financial services sectors.",
    achievements: [
      "Created automated reporting system that saved 20+ hours of manual work weekly",
      "Developed predictive models for customer churn with 85% accuracy",
      "Optimized ETL processes reducing data processing time by 40%",
    ],
  },
  {
    title: "Data Analyst",
    company: "AnalyticsFirst Inc.",
    period: "2015 - 2017",
    description:
      "Performed data analysis and created visualizations to support business decision-making across marketing, sales, and operations departments.",
    achievements: [
      "Built company's first marketing attribution model",
      "Implemented A/B testing framework for website optimization",
      "Created interactive dashboards for sales performance monitoring",
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="relative pl-8 border-l-2 border-primary/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-primary"></div>
              <div className="mb-2 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
              </div>
              <div className="mb-4 flex items-center text-muted-foreground">
                <span className="mr-4">{experience.company}</span>
                <span className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {experience.period}
                </span>
              </div>
              <p className="mb-4 text-foreground">{experience.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

