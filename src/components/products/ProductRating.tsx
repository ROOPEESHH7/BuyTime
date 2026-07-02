import { Star } from "lucide-react";

type Props = {
  rating: number;
};

export default function ProductRating({ rating }: Props) {
  return (
    <div className="mt-3 flex items-center gap-2">
      <Star
        size={18}
        className="fill-yellow-400 text-yellow-400"
      />

      <span className="text-white">
        {rating}
      </span>
    </div>
  );
}