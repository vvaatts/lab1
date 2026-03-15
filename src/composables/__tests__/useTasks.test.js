import { describe, it, expect, vi } from 'vitest';
import { getDaysUntilDeadline, checkTaskStatus } from '../useTasks';

describe('Система керування завданнями (MVP)', () => {
  
  // --- UNIT ТЕСТИ (Вимога: 5-7 тестів з Assertions) ---
  
  it('1. Має повертати 0, якщо дедлайн сьогодні', () => {
    const today = new Date();
    expect(getDaysUntilDeadline(today)).toBe(0);
  });

  it('2. Має повертати 2, якщо дедлайн післязавтра', () => {
    const target = new Date();
    target.setDate(target.getDate() + 2);
    expect(getDaysUntilDeadline(target)).toBe(2);
  });

  it('3. Має повертати від’ємне число, якщо дедлайн минув', () => {
    const past = new Date();
    past.setDate(past.getDate() - 5);
    expect(getDaysUntilDeadline(past)).toBeLessThan(0);
  });

  it('4. Має повертати позитивне число для майбутніх дат', () => {
    const future = new Date();
    future.setDate(future.getDate() + 10);
    expect(getDaysUntilDeadline(future)).toBeGreaterThan(0);
  });

  it('5. Має повертати null, якщо дата не передана (валідація)', () => {
    expect(getDaysUntilDeadline(null)).toBeNull();
  });

  it('6. Має повертати ціле число (Math.ceil)', () => {
    const tomorrow = new Date();
    tomorrow.setHours(23, 59, 59); // майже кінець дня
    const result = getDaysUntilDeadline(tomorrow);
    expect(Number.isInteger(result)).toBe(true);
  });

  // --- ТЕСТ З MOCK-ОБ’ЄКТОМ (Вимога: Практика з Mock-об'єктами) ---

  it('7. Має коректно працювати з Mock API сервісом', () => {
    // Створюємо Mock-об'єкт, який імітує зовнішній сервер
    const mockApiService = {
      fetchStatus: vi.fn().mockReturnValue('Completed')
    };

    const result = checkTaskStatus(101, mockApiService);

    // Перевіряємо, чи викликався метод API
    expect(mockApiService.fetchStatus).toHaveBeenCalledWith(101);
    // Перевіряємо результат
    expect(result).toBe('Task 101 is Completed');
  });
});