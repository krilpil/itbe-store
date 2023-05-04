import { useMediaQuery } from "react-responsive";
import ScreenBreakpoints from "../constants/ScreenBreakpoints";

const useDevice = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${ScreenBreakpoints.maxMobile}px)` });
  const isTablets = useMediaQuery({ query: `(max-width: ${ScreenBreakpoints.maxTablets}px)` });
  const isLaptops = useMediaQuery({ query: `(max-width: ${ScreenBreakpoints.maxLaptops}px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${ScreenBreakpoints.maxDesktops}px)` });

  return { isMobile, isTablets, isLaptops, isDesktop };
};

export default useDevice;
