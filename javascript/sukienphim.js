document.body.onkeydown = function( e ) {
    var phim = {
        37: 'trai2',
        39: 'phai2',
        40: 'xuong2',
        38: 'xoay2',
        65: 'trai1',
        68: 'phai1',
        83: 'xuong1',
        87: 'xoay1'
    };
    if ( typeof phim[ e.keyCode ] != 'undefined' ) {
         bamPhim( phim[ e.keyCode ] );
        Ve(); 
         bamPhim2( phim[ e.keyCode ] );
        Ve2(); 
    }
};
