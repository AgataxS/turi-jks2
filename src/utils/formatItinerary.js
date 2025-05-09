export function formatItinerary(raw = []) {
    if (!raw.length) return [];
  
   
    if ("time" in raw[0]) return raw;
  
  
    const rows = [];
    raw.forEach((d) => {
      rows.push({ time: d.day, activity: d.title });
      d.activities.forEach((a) => rows.push({ time: "•", activity: a }));
    });
    return rows;
  }
  