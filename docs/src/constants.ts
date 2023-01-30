import {
  Default,
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

const examples: Array<{
  url: string;
  title: string;
  Component: () => JSX.Element;
}> = [
  {
    url: '#default',
    title: 'Default',
    Component: Default,
  },
  {
    url: '#right-to-left',
    title: 'Right To Left',
    Component: RightToLeft,
  },
  {
    url: '#slides-to-scroll',
    title: 'Slides To Scroll',
    Component: SlidesToScroll,
  },
  {
    url: '#drag-free',
    title: 'Drag Free',
    Component: DragFree,
  },
  {
    url: '#align',
    title: 'Align',
    Component: Align,
  },
  {
    url: '#variable-widths',
    title: 'Variable Widths',
    Component: VariableWidths,
  },
  {
    url: '#y-axis',
    title: 'Y Axis',
    Component: YAxis,
  },
  {
    url: '#arrows-and-dots',
    title: 'Arrows and Dots',
    Component: ArrowsAndDots,
  },
  {
    url: '#thumbnails',
    title: 'Thumbnails',
    Component: Thumbnails,
  },
  {
    url: '#autoplay-plugin',
    title: 'Autoplay',
    Component: AutoplayPlugin,
  },
  {
    url: '#class-names-plugin',
    title: 'Class Names',
    Component: ClassNamesPlugin,
  },
  {
    url: '#wheel-gestures',
    title: 'Wheel Gestures',
    Component: WheelGesturesPlugin,
  },
];

export default examples;
