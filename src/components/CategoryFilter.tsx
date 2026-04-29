import {
  LayoutGrid,
  FileText,
  PenTool,
  BarChart3,
  Palette,
  Code2,
  Megaphone,
  Braces,
  Search,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { label: "All", icon: LayoutGrid },
  { label: "Soft skills", icon: FileText },
  { label: "Content writing", icon: PenTool },
  { label: "Data Science", icon: BarChart3 },
  { label: "Design", icon: Palette },
  { label: "Enginneering", icon: Code2 },
  { label: "Marketing", icon: Megaphone },
  { label: "No/Low Code", icon: Braces },
  { label: "Product Research", icon: Search },
  { label: "Sale/BD", icon: Briefcase },
  { label: "Product Research", icon: Search },
  { label: "Marketing", icon: Megaphone },
];

const CategoryFilter = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex items-center gap-1 w-full">
      {/* Scrollable categories */}
      <div className="flex items-center gap-1 flex-1 overflow-x-auto scrollbar-hide">
        {categories.map((cat, i) => {
          const isActive = active === cat.label && i === categories.findIndex((c) => c.label === cat.label);
          if (cat.label === "All") {
            return (
              <button
                key={`${cat.label}-${i}`}
                onClick={() => setActive(cat.label)}
                className={`flex items-center justify-center gap-2 rounded-full whitespace-nowrap shrink-0 transition-all ${
                  isActive ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted"
                }`}
                style={{ width: "82px", height: "62px" }}
              >
                <div className="flex flex-col items-center gap-1">
                  <cat.icon className="h-5 w-5" strokeWidth={1.75} />
                  <span className="text-xs font-medium">{cat.label}</span>
                </div>
              </button>
            );
          }
          return (
            <button
              key={`${cat.label}-${i}`}
              onClick={() => setActive(cat.label)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all min-w-[82px] shrink-0 ${
                isActive ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <cat.icon className="h-5 w-5" strokeWidth={1.75} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Filter button on the right */}
      <button
        className="flex items-center gap-2 px-5 rounded-full bg-foreground text-background text-sm font-medium whitespace-nowrap shrink-0 ml-2"
        style={{ height: "48px" }}
      >
        <Sparkles className="h-4 w-4" />
        Filter
      </button>
    </div>
  );
};

export default CategoryFilter;
