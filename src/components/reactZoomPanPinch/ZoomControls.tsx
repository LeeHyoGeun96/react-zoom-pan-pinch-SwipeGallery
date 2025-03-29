import { useTransformViewerShortcuts } from "../../hooks/TransformViwer/useTransformViewerShortcuts";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoReloadSharp } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

interface ZoomControlsProps {
  zoomIn: () => void;
  zoomOut: () => void;
  resetTransform: () => void;
  isCurrentImage: boolean;
}

const ZoomControls = ({
  zoomIn,
  zoomOut,
  resetTransform,
  isCurrentImage,
}: ZoomControlsProps) => {
  useTransformViewerShortcuts({
    zoomIn,
    zoomOut,
    resetTransform,
    isCurrentImage,
  });

  return (
    <TooltipProvider>
      <div
        aria-label="이미지 확대/축소 컨트롤"
        role="toolbar"
        className="flex gap-1 tools absolute bottom-4 right-4 z-10 rounded"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-label="확대"
              className="text-white bg-black/60 hover:bg-black/80 focus:bg-black/80 rounded cursor-pointer p-4"
              onClick={() => zoomIn()}
              tabIndex={isCurrentImage ? 0 : -1}
            >
              <FiPlus aria-hidden="true" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>확대(+)</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-label="축소"
              className="text-white bg-black/60 hover:bg-black/80 focus:bg-black/80 rounded cursor-pointer p-4"
              onClick={() => zoomOut()}
              tabIndex={isCurrentImage ? 0 : -1}
            >
              <FiMinus aria-hidden="true" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>축소(-)</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-label="배율 초기화"
              className="text-white bg-black/60 hover:bg-black/80 focus:bg-black/80 rounded cursor-pointer p-4"
              onClick={() => resetTransform()}
              tabIndex={isCurrentImage ? 0 : -1}
            >
              <IoReloadSharp aria-hidden="true" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>배율 초기화(0)</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default ZoomControls;
