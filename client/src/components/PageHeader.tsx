/*
 * PageHeader — Academic Editorial Design
 * Full-bleed navy header with amber accent and dot-grid texture
 */
interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHeader({ label, title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <div
      className="relative pt-32 pb-20 overflow-hidden"
      style={{
        background: bgImage
          ? `linear-gradient(to bottom, rgba(15,32,68,0.82) 0%, rgba(15,32,68,0.92) 100%), url('${bgImage}') center/cover no-repeat`
          : "var(--navy)",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 dot-grid opacity-30"
        style={{ pointerEvents: "none" }}
      />
      {/* Amber accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(to right, var(--amber), transparent)" }}
      />

      <div className="container relative z-10">
        <div className="section-label mb-4">{label}</div>
        <h1
          className="font-bold leading-tight mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--ivory)",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="max-w-2xl leading-relaxed"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(250,250,247,0.75)",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
