export function getDataUri(url, cb) {
    var image = new Image();
    image.setAttribute('crossOrigin', 'anonymous'); //getting images from external domain

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;

        //next three lines for white background in case png has a transparent background
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';  /// set white fill style
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        canvas.getContext('2d').drawImage(this, 0, 0);

        cb(canvas.toDataURL('image/png'));
    };

    image.src = url;


    /*
    * Firma de salida
    let logo = null;
        getDataUri("https://i.ibb.co/N6HJshg/graph.png", function (dataUri) {
            logo = dataUri;
            console.log("logo=" + logo);
        });*/
}