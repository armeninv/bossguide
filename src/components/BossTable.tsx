import type { Boss } from "@/data/bossData";

interface BossTableProps {
  boss: Boss;
  searchQuery: string;
  isAstraeos?: boolean;
}

const titanNames = ["Desert Titan", "Forest Titan", "Ice Titan"];

const BossTable = ({ boss, searchQuery, isAstraeos }: BossTableProps) => {
  const filteredRows = searchQuery
    ? boss.rows.filter((row) => {
        const text = [
          row.difficulty,
          row.level,
          row.artifacts,
          row.tributes,
          row.element,
          row.tekUnlocks,
        ]
          .join(" ")
          .toLowerCase();
        return text.includes(searchQuery.toLowerCase());
      })
    : boss.rows;

  if (searchQuery && filteredRows.length === 0) return null;

  const isTitanTable = boss.name === "The Titans";

  return (
    <section>
      <h3
        className={`text-xl font-bold mb-4 flex items-center gap-2 ${
          isAstraeos ? "text-indigo-400" : "text-foreground"
        }`}
      >
        <span className={`w-2 h-6 rounded-full ${boss.color}`} />
        {boss.name}
      </h3>

      {boss.note && (
        <div className="note-box">
          <strong>Note:</strong> {boss.note}
        </div>
      )}

      <div className="overflow-x-auto bg-card/40 rounded-xl border border-border shadow-2xl">
        <table className="data-table w-full text-left text-sm">
          <thead>
            <tr>
              {boss.headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, i) => {
              const showTitanName = isTitanTable && titanNames[i];
              return (
                <tr key={i}>
                  <td
                    className={`font-bold ${
                      isTitanTable
                        ? ""
                        : row.difficulty === "Gamma"
                        ? "difficulty-gamma"
                        : row.difficulty === "Beta"
                        ? "difficulty-beta"
                        : "difficulty-alpha"
                    }`}
                  >
                    {showTitanName || row.difficulty}
                  </td>
                  <td>{row.level}</td>
                  <td className="italic text-muted-foreground">
                    {row.artifacts}
                  </td>
                  <td
                    className={`text-xs ${
                      row.tributes === "-"
                        ? "text-muted-foreground"
                        : ""
                    }`}
                  >
                    {row.tributes}
                  </td>
                  {boss.headers.includes("Element") && (
                    <td>
                      {row.element ? (
                        <span className="element-pill">{row.element}</span>
                      ) : (
                        <span className="text-muted-foreground italic">-</span>
                      )}
                    </td>
                  )}
                  <td
                    className={`text-xs leading-relaxed ${
                      row.difficulty === "Alpha" ? "font-bold" : ""
                    }`}
                  >
                    {row.tekUnlocks}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BossTable;
