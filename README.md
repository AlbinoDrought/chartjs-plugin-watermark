# chartjs-plugin-watermark

A simple watermark plugin for Chart.js

[Codepen Demo](http://codepen.io/albinodrought/pen/RovdYp)

## Configuration

To configure the watermark plugin, add these options to your chart config:

```javascript
{
    // container for watermark options
    watermark: {
        // the image you would like to show
        // alternatively, this can be of type "Image"
        image: "http://placehold.it/350x150",
        
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
        // valid values: "front", "back"
        position: "back",
    }
}
```

## Installation

To use, download chartjs-plugin-watermark.js and reference it in your project.

## Documentation

You can find documentation for the main plugin, Chart.js, at [www.chartjs.org/docs](http://www.chartjs.org/docs).

There are some samples for this plugin in the [samples folder](samples).

## License

chartjs-plugin-watermark.js is available under the [MIT license](http://opensource.org/licenses/MIT).
