var canvas2 = document.getElementsByTagName( 'canvas' )[ 1 ];
var ctx2 = canvas2.getContext('2d');
var canvas = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = canvas.getContext( '2d' );
var chieuNgang = 300, chieuDoc = 600;
var canh = chieuNgang / 10;
function VeO( x, y ) {
    ctx.fillRect( canh * x, canh * y, canh - 1 , canh - 1 );
    ctx.strokeRect( canh * x, canh * y, canh - 1 , canh - 1 );
}
function Ve() {
   //ctx2.clearRect( 0, 0, W, H );
 	ctx2.font = '40pt Calibri';
    ctx2.fillStyle = 'Black';
 	ctx2.fillText("Your score", 10, 100);
	ctx2.font = '23pt Calibri';
    ctx2.fillText(DiemSo, 50, 150);
    ctx.clearRect( 0, 0, W, H );
    ctx.strokeStyle = 'black';
    for ( var x = 0; x < cotBang; ++x ) {
        for ( var y = 0; y < dongBang; ++y ) {
            if ( bangGiaTri[ y ][ x ] ) {
                ctx.fillStyle = danhSachMau[ bangGiaTri[ y ][ x ] - 1 ];
                VeO( x, y );
            }
        }
    }
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( ViTriXoay[ y ][ x ] ) {
                ctx.fillStyle = danhSachMau[ ViTriXoay[ y ][ x ] - 1 ];
                VeO( viTriX + x, viTriY + y );
            }
        }
    }
}
setInterval( Ve, 50 );