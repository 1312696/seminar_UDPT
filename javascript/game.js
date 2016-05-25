var cotBang = 10;
var dongBang = 20;
var DiemSo;
var bangGiaTri = [];
function KhoiTao() {
	DiemSo = 0;
    for ( var x = 0; x < dongBang; x++ ) {
        bangGiaTri[x] = [];
        for ( var y = 0; y < cotBang; y++ ) {
            bangGiaTri[x][y] = 0;
        }
    }
}