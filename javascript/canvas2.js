var canvas3 = document.getElementsByTagName( 'canvas' )[ 3 ];
var ctx3 = canvas3.getContext('2d');
var canvas1 = document.getElementsByTagName( 'canvas' )[ 2 ];
var ctx1 = canvas1.getContext( '2d' );
var chieuNgang = 300, chieuDoc = 600;
var canh = chieuNgang / 10;
var danhSachMau = [
    'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
];
function Ve1( x, y ) {
    ctx.fillRect( canh * x, canh * y, canh - 1 , canh - 1 );
    ctx.strokeRect( canh * x, canh * y, canh - 1 , canh - 1 );
}
function Ve2() {
   //ctx2.clearRect( 0, 0, W, H );
 	ctx3.font = '40pt Calibri';
    ctx3.fillStyle = 'Black';
 	ctx3.fillText("Your score", 10, 100);
	ctx3.font = '23pt Calibri';
    ctx3.fillText(DiemSo, 50, 150);
    ctx1.clearRect( 0, 0, chieuNgang, chieuDoc );
    ctx1.strokeStyle = 'black';
    for ( var x = 0; x < cotBang; ++x ) {
        for ( var y = 0; y < dongBang; ++y ) {
            if ( bangGiaTri[ y ][ x ] ) {
                ctx1.fillStyle = danhSachMau[ bangGiaTri[ y ][ x ] - 1 ];
                Ve1( x, y );
            }
        }
    }
    ctx1.fillStyle = 'red';
    ctx1.strokeStyle = 'black';
    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( ViTriXoay[ y ][ x ] ) {
                ctx1.fillStyle = danhSachMau[ ViTriXoay[ y ][ x ] - 1 ];
                Ve1( viTriX + x, viTriY + y );
            }
        }
    }
}
setInterval( Ve2, 50 );