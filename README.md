# chartjs-plugin-watermark

[![npm version](https://badge.fury.io/js/chartjs-plugin-watermark.svg)](https://badge.fury.io/js/chartjs-plugin-watermark)
![Build Status: Node.js CI](https://github.com/AlbinoDrought/chartjs-plugin-watermark/workflows/Node.js%20CI/badge.svg)

[![NPM](https://nodei.co/npm/chartjs-plugin-watermark.png)](https://nodei.co/npm/chartjs-plugin-watermark/)

A simple watermark plugin for Chart.js 3 and 4.

For Chart.js 2, use [version ^1](https://www.npmjs.com/package/chartjs-plugin-watermark/v/1.0.3)

[View samples on Github Pages](https://albinodrought.github.io/chartjs-plugin-watermark/samples/)

## Installation

### Using NPM

```
npm i chartjs-plugin-watermark
```

```js
import { Chart } from 'chart.js'
import ChartjsPluginWatermark from 'chartjs-plugin-watermark'

Chart.register(ChartjsPluginWatermark)
```

### Using CDN

Plugin will automatically register if their is a global Chart.js instance available.

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.1.2/dist/chart.umd.min.js"></script>
<script src="../chartjs-plugin-watermark.min.js"></script>
```

## Configuration

To configure the watermark plugin, add these options to your chart config:

```javascript
{
    // container for watermark options
    watermark: {
        // the image you would like to show
        // alternatively, this can be of type "Image"
        image: "https://placekitten.com/200/300",
        
        // x and y offsets of the image
        x: 50,
        y: 50,
        
        // width and height to resize the image to
        // image is not resized if these values are not set
        width: 108,
        height: 39,
        
        // opacity of the image, from 0 to 1 (default: 1)
        opacity: 0.1,
        
        // x-alignment of the image (default: "left")
        // valid values: "left", "middle", "right"
        alignX: "right",
        // y-alignment of the image (default: "top")
        // valid values: "top", "middle", "bottom"
        alignY: "bottom",
        
        // if true, aligns the watermark to the inside of the chart area (where the lines are)
        // (where the lines are)
        // if false, aligns the watermark to the inside of the canvas
        // see samples/alignToChartArea.html
        alignToChartArea: false,
        
        // determines whether the watermark is drawn on top of or behind the chart
        // valid values: "front", "back", "between"
        position: "back",
    }
}
```

## Build Locally

```
npm install
npm run build
```

## Documentation

You can find documentation for the main plugin, Chart.js, at [www.chartjs.org/docs](http://www.chartjs.org/docs).

There are some samples for this plugin in the [samples folder](samples).

## License

chartjs-plugin-watermark.js is available under the [MIT license](http://opensource.org/licenses/MIT).
