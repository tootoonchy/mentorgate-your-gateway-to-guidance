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
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { label: "All", icon: LayoutGrid },
  { label: "Soft skills", icon: FileText },
  { label: "Content writing", icon: PenTool },
  { label: "Data Science", icon: BarChart3 },
  { label: "Design", icon: Palette },
  { label: "Engineering", icon: Code2 },
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
    <div className="flex items-center gap-2 overflow-x-auto pb-2 px-1 scrollbar-hide">
      <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium whitespace-nowrap shrink-0">
        <Sparkles className="h-4 w-4" />
        Filter
      </button>

      {categories.map((cat, i) => (
        <button
          key={`${cat.label}-${i}`}
          onClick={() => setActive(cat.label)}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all min-w-[72px] shrink-0 ${
            active === cat.label && i === categories.findIndex((c) => c.label === cat.label)
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          <cat.icon className="h-5 w-5" />
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
