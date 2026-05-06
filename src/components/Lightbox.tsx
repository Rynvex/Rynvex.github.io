"use client";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLightbox } from "@/lib/lightbox";

export default function Lightbox() {
  const { open, items, index, close, next, prev } = useLightbox();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  if (!open || !items.length) return null;

  const item = items[index];
  const showNav = items.length > 1;

  return (
    <div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={close}
      style={{ background: "rgba(0, 0, 0, 0.88)", backdropFilter: "blur(4px)" }}
    >
      <button
        onClick={close}
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
      >
        <X size={20} />
      </button>

      {showNav && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {showNav && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div
        className="flex flex-col items-center gap-4 max-w-[min(92vw,1280px)] max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={item.src}
          src={item.src}
          alt={item.caption}
          className="rounded-lg shadow-2xl object-contain"
          style={{
            maxHeight: "calc(100vh - 12rem)",
            maxWidth: "100%",
          }}
        />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed max-w-2xl">
            {item.caption}
          </p>
          {showNav && (
            <span className="text-[11px] font-mono text-white/50">
              {index + 1} / {items.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
