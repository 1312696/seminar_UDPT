var cotBang = 10;
var dongBang = 20;
var DiemSo;
var bangGiaTri = [];
var ViTriXoay; 
var viTriX, viTriY; 
var Tocdo = 300;
var Thua;
var interval;
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
    var viTriMoi = [];
    for ( var y = 0; y < 4; ++y ) {
        viTriMoi[ y ] = [];
        for ( var x = 0; x < 4; ++x ) {
            viTriMoi[ y ][ x ] = ViTriXoay[ 3 - x ][ y ];
        }
    }

    return viTriMoi;
}
function  xoaHang() {
    for ( var y = dongBang - 1; y >= 0; --y ) {
        var dongDay = true;
        for ( var x = 0; x < cotBang; ++x ) {
            if ( bangGiaTri[ y ][ x ] == 0 ) {
                dongDay = false;
                break;
            }
        }
        if ( dongDay ) {
            document.getElementById( 'clearsound' ).play();
            for ( var yy = y; yy > 0; --yy ) {
                for ( var x = 0; x < cotBang; ++x ) {
                    bangGiaTri[ yy ][ x ] = bangGiaTri[ yy - 1 ][ x ];
                }
            }
            ++y;
        }
    }
}


//khi diem cang cao thi goi ham de tang toc do roi cua cac khoi
function tangTocDo(){
        Tocdo = 300 - (DiemSo / 300) * 10;
}

//kiem tra vi tri cua khoi co kha thi hay khong
function kiemTra(X, Y, viTriMoi){
    X = viTriX + X;
    Y = viTriY + Y;
    viTriMoi = viTriMoi || ViTriXoay; // khi xoay khoi co bi qua ngoai man hinh khong



    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( newCurrent[ y ][ x ] ) {
                if ( typeof board[ y + Y ] == 'undefined'   // kiem tra cac Dk cua khoi co kha thi hay khong, khong ra ngoai khung hinh
                  || typeof board[ y + Y ][ x + X ] == 'undefined'
                  || board[ y + Y ][ x + X ]
                  || x + X < 0
                  || y + Y >= dongBang
                  || x + X>= cotBang ) {
                    if (Y == 1) Thua = true; // neu khoi dang o dong tren cung thi thua
                    return false;
                }
            }
        }
    }
    return true;
}


//tao moi tro choi
function taoTroChoi() {
    clearInterval(interval);
    KhoiTao();
    TaoHinhMoi();
    Thua = false;
    interval = setInterval( vongLap, Tocdo );
}
taoTroChoi();