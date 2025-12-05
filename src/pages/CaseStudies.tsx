import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/servicesData";

const categories = ["All", "Data Engineering", "AI/ML", "Cloud", "Software", "Cyber Security", "Application"];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((study) => study.category === activeCategory);

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            badge="Our Work"
            title="Case Studies"
            description="Explore how we've helped businesses transform and grow with our technology solutions"
          />
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
