

make_base("e30f252bc6534f8ba9aa1ee3b6b6b2fc");


function resize(context, zoom, imageSize){
    const x = document.createElement("canvas")
    const canvas = x.getContext('2d');
    var pic = context.getImageData(0, 0, imageSize, imageSize) .data;
    for (let i = 0; i < imageSize; ++i ){
        for (let j = 0; j< imageSize; ++j){
            var v = (j*imageSize + i)*4;
            var r = pic [v];
            var g = pic[v+1];
            var b = pic[v+2];
            var a = pic[v+3];
            canvas.fillStyle ="rgba("+r+","+g+","+b+","+(a/255) +")";
            canvas.fillRect(i*zoom,j*zoom,zoom,zoom);
        }
    }
    return x;
}
function make_base(uuid)
{
    var x = document.getElementById('viewport').getContext("2d");
    const canvas = document.createElement ("canvas");
    context = canvas.getContext('2d');
    img = new Image();
    img.src = 'https://crafatar.com/skins/' + uuid;
    img.crossOrigin = "Anonymous";
    img.onload = function(){
        context.drawImage(img, 8, 8, 8, 8, 0, 0, 8, 8);
        var dsa = resize(context, 8, 8);
        x.drawImage(dsa, 4, 4)
        const canvas = document.createElement ("canvas");
        context = canvas.getContext('2d');
        context.drawImage(img, 40, 8, 8, 8, 0, 0, 8, 8);
        var dsa = resize(context, 9, 8);
        x.drawImage(dsa, 0, 0)
        //console.log(resize(context, 8, 8));
}
}