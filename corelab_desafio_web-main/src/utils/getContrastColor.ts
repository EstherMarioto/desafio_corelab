export function getContrastColor(hexColor: string | undefined) {
  if (!hexColor) return;

  // Remove o símbolo # se ele estiver presente
  const hex = hexColor.replace('#', '');

  // Converte a cor hexadecimal para RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calcula a luminância aproximada da cor
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Se a luminância for menor que 0.5, a cor é considerada escura
  return luminance < 0.5 ? '#FFFFFF' : '#4F4F4D';
}
