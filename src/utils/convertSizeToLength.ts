type Size = 'large' | 'medium' | 'small';

export default function convert(
  size: Size
): (toLength: { [key in Size]: number } & { unit?: string }) => string {
  return (length) => `${length[size] || 0}${length.unit || 'px'}`;
}
