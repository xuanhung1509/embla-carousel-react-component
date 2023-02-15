# Embla Carousel React Component

A lightweight carousel library for React, based on [Embla Carousel](https://www.npmjs.com/package/embla-carousel-react).

- [Features](#features)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Component API](#component-api)
- [Examples](#examples)
- [Acknowledgement](#acknowledgement)
- [License](#license)

## Features

This library helps build carousels with declarative API.
Easy to use, yet still powerful when needed.

- Comparison with `Embla Carousel React`:

  You need to rely on external CSS to lay out the slide container. It's not optimal in case you want to reuse the carousel somewhere with different slide sizes.

  This library comes with minimal styles needed to layout the grid, giving developers the ability to define the slide sizes in the component itself, while leaving the rest completely unstyled.

- Comparison with `@mantine/carousel`:

  `@mantine/carousel` introduces its own way to define carousel options. In contrast, this library gives you a familiar experience just like working with the base `Embla Carousel React`.

  The former comes with limited customization on controller components (Prev/Next Buttons or Indicator Dots) as they're tied to the Carousel. This library allows you to fully customize how those components look.

  This library also comes with a thumbs component if you need to build a product gallery for an e-commerce use case.

## Installation

```sh
npm install embla-carousel-react-component
```

## Basic Usage

```js
import Carousel from 'embla-carousel-react-component';

<Carousel>
  {[...Array(5).keys()].map((n) => (
    <Carousel.Slide key={n}>
      <div>Slide {n + 1}</div>
    </Carousel.Slide>
  ))}
</Carousel>;
```

[View all the examples](https://embla-carousel-react-component.vercel.app/)

## Component API

### Carousel

| Prop               | Type                                 | Default                    | Description                                                                                   |
| ------------------ | ------------------------------------ | -------------------------- | --------------------------------------------------------------------------------------------- |
| **perView**        | `number \| "custom"`                 | `1`                        | The number of slides per view. Pass "custom" if you want to customize the slide sizes later.  |
| **containerStyle** | `React.CSSProperties`                |                            | Customize the container's style                                                               |
| **gap**            | `string \| number`                   | `16`                       | The spacing between slides. String is interpreted as is. Number is interpreted as pixel unit. |
| **options**        | `EmblaOptionsType`                   | See [here](#options)       | [Embla Carousel's options](https://www.embla-carousel.com/api/options/)                       |
| **plugins**        | `EmblaPluginType[]`                  |                            | [Embla Carousel's plugins](https://www.embla-carousel.com/plugins/)                           |
| **PrevButton**     | `() => JSX.Element`                  |                            | Previous Button component                                                                     |
| **NextButton**     | `() => JSX.Element`                  |                            | Next Button component                                                                         |
| **Indicators**     | `() => JSX.Element`                  |                            | Dot Indicators component                                                                      |
| **Thumbs**         | `() => JSX.Element`                  |                            | Thumbs component                                                                              |
| **thumbsOptions**  | `EmblaOptionsType`                   | See [here](#thumbsoptions) | Options for Thumbs component                                                                  |
| **thumbsPlugins**  | `EmblaPluginType[]`                  |                            | Plugins for Thumbs component                                                                  |
| **getEmblaApi**    | `(embla: EmblaCarouselType) => void` |                            | Access Embla API for advanced use cases                                                       |

#### `options`

The component comes with a few opinionated options to ensure it works properly out of the box.

```js
{
  align: 'start',
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
}
```

You can overwrite this by providing your own styles.

### Carousel.Slide

| Prop     | Type     | Default | Description                                                                                    |
| -------- | -------- | ------- | ---------------------------------------------------------------------------------------------- |
| **size** | `string` |         | The slide size. To you this option, you need to pass `perView="custom"` on Carousel component. |

### Carousel.PrevButton, Carousel.NextButton

| Prop                  | Type     | Default      | Description                  |
| --------------------- | -------- | ------------ | ---------------------------- |
| **disabledClassName** | `string` | `"disabled"` | ClassName for disabled state |

> The components also expose a `data-disabled` attribute that you can use to conditionally apply different styles.

### Carousel.Indicators

| Prop                     | Type     | Default      | Description                                                         |
| ------------------------ | -------- | ------------ | ------------------------------------------------------------------- |
| **selectedClassName**    | `string` | `"selected"` | ClassName for selected state                                        |
| **nonSelectedClassName** | `string` |              | ClassName for non-selected state (Tailwind CSS users may need this) |

> The component also exposes a `data-selected` attribute that you can use to conditionally apply different styles.

### Carousel.Thumbs

| Prop        | Type               | Default | Description                                                                                   |
| ----------- | ------------------ | ------- | --------------------------------------------------------------------------------------------- |
| **perView** | `number`           | `1`     | The number of thumbs per view                                                                 |
| **gap**     | `string \| number` | `8`     | The spacing between thumbs. String is interpreted as is. Number is interpreted as pixel unit. |

#### `thumbsOptions`

Default options:

```js
{
  containScroll: 'keepSnaps',
  dragFree: true,
}
```

### Carousel.Thumb

| Prop                     | Type     | Default      | Description                                                         |
| ------------------------ | -------- | ------------ | ------------------------------------------------------------------- |
| **index**                | `number` | `required`   | The index of thumb item                                             |
| **selectedClassName**    | `string` | `"selected"` | ClassName for selected state                                        |
| **nonSelectedClassName** | `string` |              | ClassName for non-selected state (Tailwind CSS users may need this) |

> The component also exposes a `data-selected` attribute that you can use to conditionally apply different styles.

## Examples

### Basic

- [Default](https://embla-carousel-react-component.vercel.app/#default)
- [Loop](https://embla-carousel-react-component.vercel.app/#loop)
- [Right To Left](https://embla-carousel-react-component.vercel.app/#right-to-left)
- [Slides To Scroll](https://embla-carousel-react-component.vercel.app/#slides-to-scroll)
- [Drag Free](https://embla-carousel-react-component.vercel.app/#drag-free)
- [Align](https://embla-carousel-react-component.vercel.app/#align)
- [VariableWidths](https://embla-carousel-react-component.vercel.app/#variable-widths)
- [YAxis](https://embla-carousel-react-component.vercel.app/#y-axis)

### Plugins

- [Autoplay](https://embla-carousel-react-component.vercel.app/#autoplay-plugin)
- [Class Names](https://embla-carousel-react-component.vercel.app/#class-names-plugin)
- [Wheel Gestures](https://embla-carousel-react-component.vercel.app/#wheel-gestures-plugin)

### Others

- [Responsive](https://embla-carousel-react-component.vercel.app/#responsive)
- [Arrows and Dots](https://embla-carousel-react-component.vercel.app/#arrows-and-dots)
- [Thumbnails](https://embla-carousel-react-component.vercel.app/#thumbnails)
- [Scroll Progress](https://embla-carousel-react-component.vercel.app/#scroll-progress)
- [Parallax](https://embla-carousel-react-component.vercel.app/#parallax)

## Acknowledgement

- This library cannot be possible without `Embla Carousel React`. It really is a lightweight and sleek library for building carousels.
- This library also takes `@mantine/carousel` as a reference, especially the idea of exposing `emblaApi` to the outside.

## License

[MIT](LICENSE)
