"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  featured?: boolean
}

export default function ProjectCard({ id, title, description, image, tags, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-lg bg-background border border-border ${
        featured ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
      }`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90"></div>
      </div>

      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href={`/projects/${id}`} className="inline-flex items-center text-primary hover:underline">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

