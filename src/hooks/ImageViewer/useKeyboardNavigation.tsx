import { useEffect } from "react";

interface UseKeyboardNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  onFullscreen?: () => void;
  onEscapeExpanded?: () => void;
  setIsThumbnailExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  isThumbnailExpanded?: boolean;
  enabled?: boolean;
}

export function useKeyboardNavigation({
  onPrev,
  onNext,
  onFullscreen,
  onEscapeExpanded,
  setIsThumbnailExpanded,
  isThumbnailExpanded = false,
  enabled = true,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "f" && onFullscreen) {
        onFullscreen();
      } else if (
        e.key === "Escape" &&
        isThumbnailExpanded &&
        onEscapeExpanded
      ) {
        onEscapeExpanded();
      } else if (e.key === "t" && setIsThumbnailExpanded) {
        setIsThumbnailExpanded((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    onPrev,
    onNext,
    onFullscreen,
    onEscapeExpanded,
    setIsThumbnailExpanded,
    isThumbnailExpanded,
    enabled,
  ]);
}
