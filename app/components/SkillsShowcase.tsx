"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  PieChart,
  LineChart,
  Database,
  Server,
  Code,
  Layers,
  Workflow,
  TrendingUp,
  PresentationIcon as PresentationChart,
  FileSpreadsheet,
  Lightbulb,
} from "lucide-react"

const skills = [
  {
    category: "Data Visualization",
    items: [
      { name: "Power BI", icon: <PresentationChart className="h-6 w-6" />, level: 95 },
      { name: "Tableau", icon: <PieChart className="h-6 w-6" />, level: 90 },
      { name: "D3.js", icon: <BarChart className="h-6 w-6" />, level: 75 },
      { name: "Google Data Studio", icon: <LineChart className="h-6 w-6" />, level: 85 },
    ],
  },
  {
    category: "Data Management",
    items: [
      { name: "SQL", icon: <Database className="h-6 w-6" />, level: 95 },
      { name: "ETL Processes", icon: <Workflow className="h-6 w-6" />, level: 90 },
      { name: "Data Warehousing", icon: <Server className="h-6 w-6" />, level: 85 },
      { name: "Data Modeling", icon: <Layers className="h-6 w-6" />, level: 80 },
    ],
  },
  {
    category: "Analytics",
    items: [
      { name: "Statistical Analysis", icon: <TrendingUp className="h-6 w-6" />, level: 85 },
      { name: "Python", icon: <Code className="h-6 w-6" />, level: 80 },
      { name: "Excel Advanced", icon: <FileSpreadsheet className="h-6 w-6" />, level: 95 },
      { name: "Predictive Analytics", icon: <Lightbulb className="h-6 w-6" />, level: 75 },
    ],
  },
]

export default function SkillsShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Expertise
        </motion.h2>

        <div className="space-y-16">
          {skills.map((category, categoryIndex) => (
            <div key={category.category}>
              <motion.h3
                className="text-2xl font-semibold mb-8 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                {category.category}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-3 text-primary">{skill.icon}</div>
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2.5">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                      ></motion.div>
                    </div>
                    <div className="mt-2 text-right text-sm text-muted-foreground">{skill.level}%</div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

