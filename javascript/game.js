var cotBang = 10;
var dongBang = 20;
var DiemSo;
var bangGiaTri = [];
var ViTriXoay; 
var viTriX, viTriY; 
var Tocdo = 300;
var Thua;
var danhSachHinh = [
    [ 1, 1, 1, 1, 0, 0, 0, 0],
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
//Tăng tọa độ y cho ô gạch
function vongLap(){
  if ( kiemTra( 0, 1 ) ) {
        viTriY = viTriY+1;
    }
    else {
        luuGiaTri();
        xoaHang();
        if (checkLose == 1) {
            taoTroChoi();
            return false;
        }
        TaoHinhMoi();
    }
}
//luu gia tri vao bang khi o gạch xuống đáy
function  luuGiaTri() {
    for ( var x = 0; x < 4; x++ ) {
        for ( var y = 0; y < 4; y++ ) {
            if ( ViTriXoay[ x ][ y ] != 0 ) {
                bangGiaTri[ x + viTriY ][ y + viTriX ] = ViTriXoay[ x ][ y ];
            }
        }
    }
}
function  xoay(ViTriXoay) {
    
}
function  xoaHang() {
    
}
//khi diem cang cao thi goi ham de tang toc do roi cua cac khoi
function tangTocDo(){
    if(DiemSo){
        Tocdo = Tocdo - ;
    }
}

//kiem tra vi tri cua khoi co kha thi hay khong
function kiemTra(X, Y, viTriMoi){

}

//tao moi tro choi
function taoTroChoi() {
    clearInterval(interval);
    KhoiTao();
    TaoHinhMoi();
    Thua = false;
    interval = setInterval( vongLap, Tocdo );
}
