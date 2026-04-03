import { useState } from "react";
import { Search } from "lucide-react";
import { mapsData } from "@/data/bossData";
import BossTable from "@/components/BossTable";

const Index = () => {
  const [activeMap, setActiveMap] = useState("island");
  const [search, setSearch] = useState("");

  const isSearching = search.length > 0;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground">
              ASA BOSS GUIDE
            </h1>
            <p className="text-muted-foreground text-sm">
              Comprehensive Requirements, Tributes & Tekgrams
            </p>
          </div>
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search artifacts, items, or unlocks..."
              className="w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring shadow-xl text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </header>

        {/* Map Tabs */}
        <nav className="flex flex-wrap gap-1 border-b border-border mb-8 pb-px overflow-x-auto whitespace-nowrap">
          {mapsData.map((map) => (
            <button
              key={map.id}
              onClick={() => setActiveMap(map.id)}
              className={`map-tab ${
                activeMap === map.id ? "tab-active" : ""
              } ${map.special ? "font-bold" : ""}`}
            >
              {map.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div>
          {mapsData
            .filter((map) => isSearching || map.id === activeMap)
            .map((map) => (
              <div key={map.id} className="space-y-12">
                {map.bosses.map((boss) => (
                  <BossTable
                    key={boss.name}
                    boss={boss}
                    searchQuery={search}
                    isAstraeos={map.special}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
