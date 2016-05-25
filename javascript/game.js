var cotBang = 10;
var dongBang = 20;
var DiemSo;
var bangGiaTri = [];
var ViTriXoay; 
var viTriX, viTriY; 
var danhSachHinh = [
    [ 1, 1, 1, 1 ],
    [ 1, 1, 1, 0, 1 ],
    [ 1, 1, 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 0, 1, 1 ],
    [ 1, 1, 0, 0, 0, 1, 1 ],
    [ 0, 1, 1, 0, 1, 1 ],
    [ 0, 1, 0, 0, 1, 1, 1 ]
];
function KhoiTao() {
	DiemSo = 0;
    for ( var x = 0; x < dongBang; x++ ) {
        bangGiaTri[x] = [];
        for ( var y = 0; y < cotBang; y++ ) {
            bangGiaTri[x][y] = 0;
        }
    }
}
function TaoHinhMoi() {
	viTriX = 4;
    viTriY = 0;
	ViTriXoay = [];
    var id = Math.floor( Math.random() * danhSachHinh.length );
    var hinh = danhSachHinh[ id ];
    for ( var x = 0; x < 4; x++ )
	{
        ViTriXoay[ x ] = [];
        for ( var y = 0; y < 4; y++ ) 
		{
            var vt = 4 * x + y;
            if ( typeof hinh[ vt ] != 'undefined' && hinh[ vt ] ) {
                ViTriXoay[ x ][ y ] = id + 1;
            }
            else {
                ViTriXoay[ x ][ y ] = 0;
            }
        }
    }
}