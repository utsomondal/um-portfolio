import Image from "next/image";

const variants = {
  0: {
    bars: [
      { x: 20, y: 44, w: 120, h: 8 },
      { x: 20, y: 58, w: 80, h: 6 },
    ],
    blockX: 20,
    blockY: 76,
    blockW: 208,
    blockH: 56,
  },
  1: {
    bars: [
      { x: 20, y: 44, w: 90, h: 8 },
      { x: 20, y: 58, w: 140, h: 6 },
    ],
    blockX: 124,
    blockY: 76,
    blockW: 104,
    blockH: 56,
    extraBlock: { x: 20, y: 76, w: 96, h: 56 },
  },
  2: {
    bars: [
      { x: 20, y: 44, w: 150, h: 8 },
      { x: 20, y: 58, w: 70, h: 6 },
    ],
    grid: true,
  },
};

export default function ProjectMockup({ image, alt = "Project preview", variant = 0 }) {
  // Image থাকলে সরাসরি Image দেখাবে
  if (image) {
    return (
      <div className="relative w-full aspect-[248/148] rounded-lg overflow-hidden bg-surface border border-border">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  // Image না থাকলে SVG Wireframe দেখাবে
  const v = variants[variant % 3];

  return (
    <div className="relative w-full aspect-[248/148] rounded-lg overflow-hidden bg-surface border border-border">
      <svg viewBox="0 0 248 148" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <line x1="0" y1="28" x2="248" y2="28" className="stroke-border" strokeWidth="1" />
        <circle cx="16" cy="14" r="3" className="fill-border" />
        <circle cx="26" cy="14" r="3" className="fill-border" />
        <circle cx="36" cy="14" r="3" className="fill-border" />

        {v.bars.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="3" className="fill-border" />
        ))}

        {v.grid ? (
          <>
            <rect x="20" y="76" width="62" height="56" rx="6" className="fill-accent/15" />
            <rect x="90" y="76" width="62" height="25" rx="4" className="fill-border" />
            <rect x="90" y="107" width="62" height="25" rx="4" className="fill-border" />
            <rect x="160" y="76" width="68" height="56" rx="6" className="fill-border" />
          </>
        ) : (
          <>
            <rect
              x={v.blockX}
              y={v.blockY}
              width={v.blockW}
              height={v.blockH}
              rx="6"
              className="fill-accent/15"
            />
            {v.extraBlock && (
              <rect
                x={v.extraBlock.x}
                y={v.extraBlock.y}
                width={v.extraBlock.w}
                height={v.extraBlock.h}
                rx="6"
                className="fill-border"
              />
            )}
          </>
        )}
      </svg>
    </div>
  );
}