const BASE_URL = "http://127.0.0.1:8000";

export async function getReport(employeeId: string) {
  const res = await fetch(`${BASE_URL}/report/${employeeId}`);
  if (!res.ok) throw new Error("Failed to fetch report");
  return res.json();
}

export async function getWeeklyReport(employeeId: string) {
  const res = await fetch(`${BASE_URL}/report/weekly/${employeeId}`);
  if (!res.ok) throw new Error("Failed to fetch weekly report");
  return res.json();
}

export async function getMonthlyReport(employeeId: string) {
  const res = await fetch(`${BASE_URL}/report/monthly/${employeeId}`);
  if (!res.ok) throw new Error("Failed to fetch monthly report");
  return res.json();
}

export async function getTodayMood(employeeId: string) {
  const res = await fetch(`${BASE_URL}/report/today/${employeeId}`);
  if (!res.ok) throw new Error("Failed to fetch today's mood");
  return res.json();
}