"use client";
import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Code,
  Database,
  Layout,
  Terminal,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  links: Array<{
    name: string;
    url: string;
  }>;
  colorClass: string;
}

const RESOURCES: ResourceItem[] = [
  {
    id: "frontend",
    title: "Frontend Mastery",
    description: "Learn modern web development fundamentals",
    icon: Layout,
    category: "Frontend",
    colorClass: "bg-gradient-to-br from-primary/10 to-primary/20",
    links: [
      {
        name: "Chai aur HTML",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI",
      },
      {
        name: "CSS Guide",
        url: "https://www.youtube.com/watch?v=aLzfFJb8rWo",
      },
      {
        name: "Chai aur Javascript",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
      },
      {
        name: "Chai aur React",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Server-side programming and APIs",
    icon: Terminal,
    category: "Backend",
    colorClass: "bg-gradient-to-br from-secondary/10 to-secondary/20",
    links: [
      {
        name: "Chai aur Javascript Backend ",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",
      },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    description: "Learn database design and querying",
    icon: Database,
    category: "Database",
    colorClass: "bg-gradient-to-br from-accent/10 to-accent/20",
    links: [
      {
        name: "MongoDB Aggregation",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQ6CZCehxKy0rjkqhQ2Z88t",
      },
    ],
  },
  {
    id: "nextjs",
    title: "Next.js Ecosystem",
    description: "Modern React framework for production",
    icon: Code,
    category: "Framework",
    colorClass: "bg-gradient-to-br from-muted/10 to-muted/20",
    links: [
      {
        name: "Chai aur full stack NextJS",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq",
      },
    ],
  },
];

const ResourceCard: React.FC<{ resource: ResourceItem }> = ({ resource }) => {
  const IconComponent = resource.icon;

  return (
    <div
      className={cn(
        "rounded-xl",
        "border",
        "p-6",
        "space-y-4",
        "group",
        "hover:border-primary/50",
        "transition-all",
        "duration-300",
        "hover:shadow-lg",
        "hover:scale-[1.02]",
      )}
    >
      <div className="flex items-center space-x-4">
        <IconComponent
          className={cn(
            "w-10",
            "h-10",
            "text-foreground",
            "rounded-full",
            "p-2",
          )}
        />
        <h2 className="text-xl font-semibold text-foreground">
          {resource.title}
        </h2>
      </div>

      <p className="text-sm text-muted-foreground">{resource.description}</p>

      <div className="space-y-2">
        {resource.links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex",
              "items-center",
              "text-foreground",
              "hover:bg-secondary/20",
              "rounded-md",
              "p-2",
              "transition-colors",
              "text-primary",
            )}
          >
            <Youtube className="w-5 h-5 mr-2 text-destructive" />
            <span className="text-sm">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const WebDevResources: React.FC = () => {
  return (
    <div
      className={cn(
        "min-h-screen",
        "bg-white", // Explicitly set to white
        "py-16",
        "px-4",
      )}
    >
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1
            className={cn(
              "text-4xl",
              "font-extrabold",
              "text-foreground",
              "mb-4",
            )}
          >
            Chai Code Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            Curated resources to accelerate your journey
          </p>
        </header>

        <div
          className={cn(
            "grid",
            "grid-cols-1",
            "md:grid-cols-2",
            "lg:grid-cols-4",
            "gap-6",
          )}
        >
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevResources;
