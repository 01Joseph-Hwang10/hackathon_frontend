export const normalize = ({
  x,
  xmin,
  xmax,
}: {
  x: number;
  xmin: number;
  xmax: number;
}): number => (x - xmin) / (xmax - xmin);
