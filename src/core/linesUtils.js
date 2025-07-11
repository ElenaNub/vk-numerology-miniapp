export function calcLines(counts) {
  const sum = (...arr) => arr.reduce((acc, d) => acc + counts[d], 0);
  return {
    h123: sum(1, 2, 3),  // Самооценка
    h456: sum(4, 5, 6),  // Материальный успех
    h789: sum(7, 8, 9),  // Талант и творчество

    v147: sum(1, 4, 7),  // Трудолюбие
    v258: sum(2, 5, 8),  // Семейность и эмоциональность
    v369: sum(3, 6, 9),  // Стабильность и материальность

    d159: sum(1, 5, 9),  // Духовность
    d357: sum(3, 5, 7)   // Темперамент и страсть
  };
}