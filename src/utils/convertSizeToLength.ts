type Size = 'large' | 'medium' | 'small';

export default function convert(
  size: Partial<Size>
): (toLength: { [key in Size]?: number } & { unit?: string }) => string {
  return (toLength) => `${toLength[size] || 0}${toLength.unit || 'px'}`;
}
