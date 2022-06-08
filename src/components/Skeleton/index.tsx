import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

interface Props {
  lines: number;
  padding?: number;
}
const CustomSkeleton = ({ lines, padding }: Props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      ...(padding && { padding }),
    }}
  >
    {Array(lines)
      .fill(0)
      .map(() => (
        <Skeleton />
      ))}
  </div>
);
export default CustomSkeleton;
