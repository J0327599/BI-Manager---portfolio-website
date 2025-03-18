"use client"

import { motion } from "framer-motion"
import { BarChart3, Database, LineChart, PieChart } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Alex Morgan</span>
          </motion.h1>
          <motion.p
            className="mt-2 text-2xl text-primary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Business Intelligence Manager
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming complex data into actionable insights. Specializing in data visualization, dashboard
            development, and strategic analytics to drive business growth.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/projects" className="apple-button">
              View My Projects
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-foreground">
              Contact Me <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
            <div className="absolute top-1/4 left-1/4 bg-primary/20 p-4 rounded-lg shadow-lg">
              <BarChart3 size={48} className="text-primary" />
            </div>
            <div className="absolute top-1/3 right-1/6 bg-secondary/20 p-4 rounded-lg shadow-lg">
              <PieChart size={48} className="text-secondary" />
            </div>
            <div className="absolute bottom-1/4 left-1/6 bg-accent/20 p-4 rounded-lg shadow-lg">
              <LineChart size={48} className="text-accent" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 bg-muted/20 p-4 rounded-lg shadow-lg">
              <Database size={48} className="text-muted-foreground" />
            </div>
            <div className="h-[200px] w-[200px] rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <div className="text-2xl font-bold text-primary">BI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

