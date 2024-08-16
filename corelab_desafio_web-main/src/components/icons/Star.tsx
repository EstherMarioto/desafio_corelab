import { ComponentProps } from "react";

interface StarProps extends ComponentProps<"svg"> {
  fillColor?: string;
  strokeColor?: string;
}

export const StarIcon = ({ fillColor, strokeColor, ...rest }: StarProps) => {
  return (
    <svg
      {...rest}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15.27L16.18 19L14.54 12.97L19 8.63L12.81 8.13L10 2.5L7.19 8.13L1 8.63L5.46 12.97L3.82 19L10 15.27Z"
        fill={fillColor || "#FFFFFF"}
        stroke={strokeColor || "#455A64"}
        strokeWidth="1"
      />
    </svg>
  );
};
