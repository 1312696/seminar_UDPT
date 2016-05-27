var canvas3 = document.getElementsByTagName( 'canvas' )[ 3 ];
var ctx3 = canvas3.getContext('2d');
var canvas1 = document.getElementsByTagName( 'canvas' )[ 2 ];
var ctx1 = canvas1.getContext( '2d' );
var chieuNgang2 = 300, chieuDoc2 = 600;
var canh2 = chieuNgang2 / 10;
var danhSachMau2 = [
    'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
];
function Ve1( x, y ) {
    ctx1.fillRect( canh2 * x, canh2 * y, canh2 - 1 , canh2 - 1 );
    ctx1.strokeRect( canh2 * x, canh2 * y, canh2 - 1 , canh2 - 1 );
}
function Ve2() {
   //ctx2.clearRect( 0, 0, W, H );
 	ctx3.font = '40pt Calibri';
    ctx3.fillStyle = 'Black';
 	ctx3.fillText("Your score", 10, 100);
	ctx3.font = '23pt Calibri';
    ctx3.fillText(DiemSo2, 50, 150);
    ctx1.clearRect( 0, 0, chieuNgang2, chieuDoc2 );
    ctx1.strokeStyle = 'black';
    for ( var x = 0; x < cotBang2; ++x ) {
        for ( var y = 0; y < dongBang2; ++y ) {
            if ( bangGiaTri2[ y ][ x ] ) {
                ctx1.fillStyle = danhSachMau2[ bangGiaTri2[ y ][ x ] - 1 ];
                Ve1( x, y );
            }
        }
    }
    ctx1.fillStyle = 'red';
    ctx1.strokeStyle = 'black';
    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( ViTriXoay2[ y ][ x ] ) {
                ctx1.fillStyle = danhSachMau2[ ViTriXoay2[ y ][ x ] - 1 ];
                Ve1( viTriX2 + x, viTriY2 + y );
            }
        }
    }
}
setInterval( Ve2, 50 );