"use client"

import { motion } from "framer-motion"
import { Database, PieChart, Users, Award } from "lucide-react"

const stats = [
  {
    label: "Projects Completed",
    value: "50+",
    icon: <PieChart className="h-8 w-8" />,
    description: "Successful BI implementations",
  },
  {
    label: "Data Points Analyzed",
    value: "1B+",
    icon: <Database className="h-8 w-8" />,
    description: "Across various industries",
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: <Users className="h-8 w-8" />,
    description: "Based on client feedback",
  },
  {
    label: "Industry Recognition",
    value: "12",
    icon: <Award className="h-8 w-8" />,
    description: "Awards for excellence",
  },
]

export default function DataStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-background border border-border rounded-xl p-6 shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
              <motion.div
                className="text-4xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              >
                {stat.value}
              </motion.div>
              <h3 className="text-lg font-medium text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

