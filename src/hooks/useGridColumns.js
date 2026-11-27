import { useEffect, useState } from "react";

// Same breakpoints as the card grid: <768 = 1 col, 768-1023 = 2 cols, 1024+ = 3 cols.
const getColumns = () => {
  if (typeof window === "undefined") return 3;
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
};

export default function useGridColumns() {
  const [columns, setColumns] = useState(getColumns);

  useEffect(() => {
    const onResize = () => setColumns(getColumns());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return columns;
}
