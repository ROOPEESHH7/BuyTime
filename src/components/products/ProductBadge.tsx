type Props = {
  badge?: string;
};

export default function ProductBadge({ badge }: Props) {
  if (!badge) return null;

  return (
    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
      {badge}
    </span>
  );
}