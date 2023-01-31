# Embla Carousel React Component

An easy-to-use carousel component based on Embla Carousel for React.

- [Motivation](#motivation)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Component API](#component-api)
- [Examples](#examples)
- [License](#license)

## Motivation

Embla Carousel is completedly unopinionated about the way you styles the carousels, including the slide container's layout.
If you want to reuse the carousels with a different number of slides per view, redeclaration of the container's style is needed, which's not optimal for reusability.

To solve the problem, the component comes with [minimal styles](#containerstyle) needed to layout the container.

Note that the component only covers [some common use cases](#examples). If you want to achieve extraordinary stuffs with Embla Carousel's internal API, you need to implement yourself.

## Installation

To get started, install the component via `npm` or `yarn`:

```sh
npm install embla-carousel-react-component
```

```sh
yarn add embla-carousel-react-component
```

## Basic Usage

```js
import Carousel from 'embla-carousel-react-component';

<Carousel perView={1} className='mt-4'>
  {[...Array(5).keys()].map((n) => (
    <Carousel.Slide key={n}>
      <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
        Slide {n + 1}
      </div>
    </Carousel.Slide>
  ))}
</Carousel>;
```

[View all the examples](https://embla-carousel-react-component.vercel.app/)

## Component API

### Carousel

| Prop               | Type                  | Default                     | Description                                                               |
| ------------------ | --------------------- | --------------------------- | ------------------------------------------------------------------------- |
| **perView**        | `number`              | `required`                  | The number of slides per view                                             |
| **gap**            | `string`              | `1rem`                      | The spacing between slides                                                |
| **options**        | `EmblaOptionsType`    | See [here](#options)        | [Embla Carousel's options](https://www.embla-carousel.com/api/options/)   |
| **plugins**        | `EmblaPluginType[]`   |                             | [Embla Carousel's plugins](https://www.embla-carousel.com/plugins/)       |
| **PrevButton**     | `() => JSX.Element`   |                             | Previous Button component                                                 |
| **NextButton**     | `() => JSX.Element`   |                             | Next Button component                                                     |
| **Dots**           | `() => JSX.Element`   |                             | Dot Indicators component                                                  |
| **Thumbs**         | `() => JSX.Element`   |                             | Thumbs component                                                          |
| **containerStyle** | `React.CSSProperties` | See [here](#containerstyle) | Customize the container's style. To use this prop, remove `perView` first |

#### `options`

The component comes with a few opinionated options to ensure it works properly out of the box.

```js
{
  align: 'start',
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
}
```

You can overwrite this by providing your own options.

#### `containerStyle`

The component use grid to layout the container.

```js
{
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: perView ? `${100 / perView}%` : '100%',
}
```

You can overwrite this by providing your own styles.

### Carousel.PrevButton, Carousel.NextButton

| Prop                  | Type     | Default    | Description                  |
| --------------------- | -------- | ---------- | ---------------------------- |
| **disabledClassName** | `string` | `disabled` | ClassName for disabled state |

> The components also expose a `data-disabled` attribute that you can use to conditionally apply different styles.

### Carousel.Dots

| Prop                     | Type     | Default    | Description                                                         |
| ------------------------ | -------- | ---------- | ------------------------------------------------------------------- |
| **selectedClassName**    | `string` | `selected` | ClassName for selected state                                        |
| **nonSelectedClassName** | `string` |            | ClassName for non-selected state (Tailwind CSS users may need this) |

> The component also exposes a `data-selected` attribute that you can use to conditionally apply different styles.

### Carousel.Thumbs

| Prop        | Type     | Default    | Description                   |
| ----------- | -------- | ---------- | ----------------------------- |
| **perView** | `number` | `required` | The number of thumbs per view |
| **gap**     | `string` | `1rem`     | The spacing between thumbs    |

### Carousel.Thumb

| Prop                     | Type     | Default    | Description                                                         |
| ------------------------ | -------- | ---------- | ------------------------------------------------------------------- |
| **index**                | `number` | `required` | The index of thumb item                                             |
| **selectedClassName**    | `string` | `selected` | ClassName for selected state                                        |
| **nonSelectedClassName** | `string` | `1rem`     | ClassName for non-selected state (Tailwind CSS users may need this) |

> The component also exposes a `data-selected` attribute that you can use to conditionally apply different styles.

## Examples

### Basic

- [Default](https://embla-carousel-react-component.vercel.app/#default)
- [Right To Left](https://embla-carousel-react-component.vercel.app/#right-to-left)
- [Slides To Scroll](https://embla-carousel-react-component.vercel.app/#slides-to-scroll)
- [Drag Free](https://embla-carousel-react-component.vercel.app/#drag-free)
- [Align](https://embla-carousel-react-component.vercel.app/#align)
- [VariableWidths](https://embla-carousel-react-component.vercel.app/#variable-widths)
- [YAxis](https://embla-carousel-react-component.vercel.app/#y-axis)
- [Arrows and Dots](https://embla-carousel-react-component.vercel.app/#arrows-and-dots)
- [Thumbnails](https://embla-carousel-react-component.vercel.app/#thumbnails)

### Plugins

- [Autoplay](https://embla-carousel-react-component.vercel.app/#autoplay-plugin)
- [Class Names](https://embla-carousel-react-component.vercel.app/#class-names-plugin)
- [Wheel Gestures](https://embla-carousel-react-component.vercel.app/#wheel-gestures-plugin)

## License

[MIT](LICENSE)
