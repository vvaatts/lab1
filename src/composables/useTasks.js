export function getDaysUntilDeadline(deadline) {
  if (!deadline) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const targetDate = new Date(deadline);
  targetDate.setHours(0, 0, 0, 0);
  const diffTime = targetDate - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Функція для демонстрації MOCK (імітації зовнішнього сервісу)
export function checkTaskStatus(taskId, apiService) {
  const status = apiService.fetchStatus(taskId); // ми імітуємо виклик API
  return `Task ${taskId} is ${status}`;
}