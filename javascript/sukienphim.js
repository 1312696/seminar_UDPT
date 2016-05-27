document.body.onkeydown = function( e ) {
    var phim = {
        37: 'trai',
        39: 'phai',
        40: 'xuong',
        38: 'xoay'
    };
    if ( typeof phim[ e.keyCode ] != 'undefined' ) {
        bamPhim( phim[ e.keyCode ] );
        Ve();
    }
};
