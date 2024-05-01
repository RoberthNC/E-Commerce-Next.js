"use client";
import clsx from "clsx";

interface Props {
  selectedSize?: string;
  availableSize: string[];
  onSizeChanged: (size: string) => void;
}

export const SizeSelector = ({
  selectedSize,
  availableSize,
  onSizeChanged,
}: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Available Sizes</h3>
      <div className="flex">
        {availableSize.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChanged(size)}
            className={clsx("mx-2 hover:underline text-lg", {
              underline: size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
