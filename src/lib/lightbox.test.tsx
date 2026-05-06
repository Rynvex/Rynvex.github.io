import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LightboxProvider, useLightbox, type LightboxItem } from "./lightbox";

const items: LightboxItem[] = [
  { src: "/a.webp", caption: "A" },
  { src: "/b.webp", caption: "B" },
  { src: "/c.webp", caption: "C" },
];

const wrap = ({ children }: { children: React.ReactNode }) => (
  <LightboxProvider>{children}</LightboxProvider>
);

describe("LightboxProvider", () => {
  it("starts closed with no items", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    expect(result.current.open).toBe(false);
    expect(result.current.items).toHaveLength(0);
    expect(result.current.index).toBe(0);
  });

  it("openGallery() opens with items at index 0 by default", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items));
    expect(result.current.open).toBe(true);
    expect(result.current.items).toEqual(items);
    expect(result.current.index).toBe(0);
  });

  it("openGallery() respects startIndex", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items, 2));
    expect(result.current.index).toBe(2);
  });

  it("close() resets open and clears items", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items, 1));
    act(() => result.current.close());
    expect(result.current.open).toBe(false);
    expect(result.current.items).toHaveLength(0);
  });

  it("next() advances index", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items));
    act(() => result.current.next());
    expect(result.current.index).toBe(1);
  });

  it("next() wraps from last to first", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items, 2));
    act(() => result.current.next());
    expect(result.current.index).toBe(0);
  });

  it("prev() goes back", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items, 2));
    act(() => result.current.prev());
    expect(result.current.index).toBe(1);
  });

  it("prev() wraps from first to last", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items, 0));
    act(() => result.current.prev());
    expect(result.current.index).toBe(2);
  });

  it("setIndex() jumps to a specific index", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items));
    act(() => result.current.setIndex(2));
    expect(result.current.index).toBe(2);
  });

  it("setIndex() clamps out-of-range values", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery(items));
    act(() => result.current.setIndex(99));
    expect(result.current.index).toBe(2);
    act(() => result.current.setIndex(-5));
    expect(result.current.index).toBe(0);
  });

  it("openGallery() with empty array does not open", () => {
    const { result } = renderHook(() => useLightbox(), { wrapper: wrap });
    act(() => result.current.openGallery([]));
    expect(result.current.open).toBe(false);
  });
});
