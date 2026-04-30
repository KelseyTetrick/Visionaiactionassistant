import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Overview from "./components/sections/Overview";
import DesignPrinciples from "./components/sections/DesignPrinciples";
import PatternsAndBehaviors from "./components/sections/PatternsAndBehaviors";
import ControlAndExit from "./components/sections/ControlAndExit";
import AntiPatterns from "./components/sections/AntiPatterns";
import DesktopPostAction from "./components/concepts/DesktopPostAction";
import DesktopQuickCapture from "./components/concepts/DesktopQuickCapture";
import DesktopReviewApply from "./components/concepts/DesktopReviewApply";
import MobileBottomSheet from "./components/concepts/MobileBottomSheet";
import MobileQuickCapture from "./components/concepts/MobileQuickCapture";
import MobileReviewApply from "./components/concepts/MobileReviewApply";
import ConstituentRecordUpdate from "./components/concepts/ConstituentRecordUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "design-principles", Component: DesignPrinciples },
      { path: "patterns", Component: PatternsAndBehaviors },
      { path: "control-exit", Component: ControlAndExit },
      { path: "anti-patterns", Component: AntiPatterns },
      { path: "concepts/desktop-post-action", Component: DesktopPostAction },
      { path: "concepts/desktop-quick-capture", Component: DesktopQuickCapture },
      { path: "concepts/desktop-review-apply", Component: DesktopReviewApply },
      { path: "concepts/mobile-bottom-sheet", Component: MobileBottomSheet },
      { path: "concepts/mobile-quick-capture", Component: MobileQuickCapture },
      { path: "concepts/mobile-review-apply", Component: MobileReviewApply },
      { path: "concepts/constituent-record-update", Component: ConstituentRecordUpdate },
    ],
  },
]);