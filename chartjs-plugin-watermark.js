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

    drawWatermark: function(chartInstance) {
        var context = chartInstance.chart.ctx;

        var watermark = chartInstance.watermark;

        if(watermark.image) {
            var image = watermark.image;

            var height = watermark.height ? watermark.height : image.height;
            var width = watermark.width ? watermark.width : image.width;

            var x = watermark.x;
            var y = watermark.y;

            switch(watermark.alignX) {
                case "right":
                    x = context.canvas.width - x - width;
                    break;
                case "middle":
                    x = (context.canvas.width / 2) - (width / 2) - x;
                    break;
            }


            switch(watermark.alignY) {
                case "bottom":
                    y = context.canvas.height - y - height;
                    break;
                case "middle":
                    y = (context.canvas.height / 2) - (height / 2) - y;
                    break;
            }

            context.save();

            context.globalAlpha = watermark.opacity;
            context.drawImage(image, x, y, width, height);

            context.restore();
        }
    },

    beforeInit: function(chartInstance) {
        chartInstance.watermark = {};

        var options = chartInstance.options;

        if(options.watermark) {
            var watermark = options.watermark;

            if(watermark.image) {
                chartInstance.watermark.image = watermark.image;

                // automatically refresh the chart once the image has loaded (if necessary)
                watermark.image.onload = function() {
                    chartInstance.update();
                };
            }

            chartInstance.watermark.x = watermark.x ? watermark.x : 0;
            chartInstance.watermark.y = watermark.y ? watermark.y : 0;

            chartInstance.watermark.height = watermark.height ? watermark.height : false;
            chartInstance.watermark.width = watermark.width ? watermark.width : false;

            chartInstance.watermark.alignX = watermark.alignX ? watermark.alignX : "left";
            chartInstance.watermark.alignY = watermark.alignY ? watermark.alignY : "top";

            chartInstance.watermark.position = watermark.position ? watermark.position : "front";

            chartInstance.watermark.opacity = watermark.opacity ? watermark.opacity : 1;
        }
    },
    // draw the image behind most chart elements
    beforeDraw: function(chartInstance) {
        var watermark = chartInstance.watermark;
        if(watermark.image && watermark.position == "back") {
            this.drawWatermark(chartInstance);
        }
    },
    // draw the image in front of most chart elements
    afterDraw: function(chartInstance) {
        var watermark = chartInstance.watermark;
        if(watermark.image && watermark.position == "front") {
            this.drawWatermark(chartInstance);
        }
    },
};

Chart = typeof(Chart) === 'function' ? Chart : window.Chart;

Chart.pluginService.register(watermarkPlugin);
