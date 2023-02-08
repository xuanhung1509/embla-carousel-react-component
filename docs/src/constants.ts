import {
  Default,
  Loop,
  RightToLeft,
  SlidesToScroll,
  DragFree,
  Align,
  VariableWidths,
  YAxis,
  ArrowsAndDots,
  Thumbnails,
  AutoplayPlugin,
  ClassNamesPlugin,
  WheelGesturesPlugin,
} from './examples';

export interface IBaseExample {
  id: string;
  title: string;
}

interface IExample extends IBaseExample {
  Component: () => JSX.Element;
}

const examples: IExample[] = [
  {
    id: 'default',
    title: 'Default',
    Component: Default,
  },
  {
    id: 'loop',
    title: 'Loop',
    Component: Loop,
  },
  {
    id: 'right-to-left',
    title: 'Right To Left',
    Component: RightToLeft,
  },
  {
    id: 'slides-to-scroll',
    title: 'Slides To Scroll',
    Component: SlidesToScroll,
  },
  {
    id: 'drag-free',
    title: 'Drag Free',
    Component: DragFree,
  },
  {
    id: 'align',
    title: 'Align',
    Component: Align,
  },
  {
    id: 'variable-widths',
    title: 'Variable Widths',
    Component: VariableWidths,
  },
  {
    id: 'y-axis',
    title: 'Y Axis',
    Component: YAxis,
  },
  {
    id: 'arrows-and-dots',
    title: 'Arrows and Dots',
    Component: ArrowsAndDots,
  },
  {
    id: 'thumbnails',
    title: 'Thumbnails',
    Component: Thumbnails,
  },
  {
    id: 'autoplay-plugin',
    title: 'Autoplay',
    Component: AutoplayPlugin,
  },
  {
    id: 'class-names-plugin',
    title: 'Class Names',
    Component: ClassNamesPlugin,
  },
  {
    id: 'wheel-gestures-plugin',
    title: 'Wheel Gestures',
    Component: WheelGesturesPlugin,
  },
];

export default examples;
