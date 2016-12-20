/**
 * Chart.js Simple Watermark plugin
 *
 * Valid options:
 *
 * options: {
 *      watermark: {
 *          // required
 *          image: new Image(),
 *
 *          x: 0,
 *          y: 0,
 *
 *          width: 0,
 *          height: 0,
 *
 *          alignX: "left"/"right",
 *          alignY: "top"/"bottom",
 *
 *          position: "front"/"back",
 *
 *          opacity: 0 to 1, // uses ctx.globalAlpha
 *      }
 * }
 *
 * Created by Sean on 12/19/2016.
 */
var watermarkPlugin = {

    defaultOptions: {
        x: 0,
        y: 0,

        height: false,
        width: false,

        alignX: "top",
        alignY: "left",

        position: "front",

        opacity: 1,
    },

    drawWatermark: function (chartInstance) {
        var context = chartInstance.chart.ctx;

        var watermark = chartInstance.watermark;

        if (watermark.image) {
            var image = watermark.image;

            var height = watermark.height ? watermark.height : image.height;
            var width = watermark.width ? watermark.width : image.width;

            var x = watermark.x;
            var y = watermark.y;

            var canvas = context.canvas;

            switch (watermark.alignX) {
                case "right":
                    x = canvas.width - x - width;
                    break;
                case "middle":
                    x = (canvas.width / 2) - (width / 2) - x;
                    break;
            }

            switch (watermark.alignY) {
                case "bottom":
                    y = canvas.height - y - height;
                    break;
                case "middle":
                    y = (canvas.height / 2) - (height / 2) - y;
                    break;
            }

            context.save();

            context.globalAlpha = watermark.opacity;
            context.drawImage(image, x, y, width, height);

            context.restore();
        }
    },

    beforeInit: function (chartInstance) {
        chartInstance.watermark = {};

        var options = chartInstance.options;

        if (options.watermark) {
            var watermark = Chart.helpers.extend(this.defaultOptions, options.watermark);

            if (watermark.image) {
                var image = watermark.image;

                if(typeof(image) == "string") {
                    // create the image object with this as our src
                    var imageObj = new Image();
                    imageObj.src = image;

                    image = imageObj;

                    // overwrite the image saved in our config
                    watermark.image = image;
                }

                // automatically refresh the chart once the image has loaded (if necessary)
                image.onload = function () {
                    chartInstance.update();
                };
            }

            chartInstance.watermark = watermark;
        }
    },
    // draw the image behind most chart elements
    beforeDraw: function (chartInstance) {
        var watermark = chartInstance.watermark;
        if (watermark.image && watermark.position == "back") {
            this.drawWatermark(chartInstance);
        }
    },
    // draw the image in front of most chart elements
    afterDraw: function (chartInstance) {
        var watermark = chartInstance.watermark;
        if (watermark.image && watermark.position == "front") {
            this.drawWatermark(chartInstance);
        }
    },
};

Chart = typeof(Chart) === 'function' ? Chart : window.Chart;

Chart.pluginService.register(watermarkPlugin);
