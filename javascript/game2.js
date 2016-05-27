var cotBang2 = 10;
var dongBang2 = 20;
var DiemSo2;
var bangGiaTri2 = [];
var ViTriXoay2; 
var viTriX2, viTriY2; 
var Tocdo2 = 300;
var Thua2;
var interval2;
var danhSachHinh2 = [
    [ 1, 1, 1, 1, 0, 0, 0, 0],
    [ 1, 1, 1, 0, 1 ],
    [ 1, 1, 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 0, 1, 1 ],
    [ 1, 1, 0, 0, 0, 1, 1 ],
    [ 0, 1, 1, 0, 1, 1 ],
    [ 0, 1, 0, 0, 1, 1, 1 ]
];
function KhoiTao2() {
    DiemSo2 = 0;
    for ( var x = 0; x < dongBang2; x++ ) {
        bangGiaTri2[x] = [];
        for ( var y = 0; y < cotBang2; y++ ) {
            bangGiaTri2[x][y] = 0;
        }
    }
}
function TaoHinhMoi2() {
    viTriX2 = 4;
    viTriY2 = 0;
    ViTriXoay2 = [];
    var id2 = Math.floor( Math.random() * danhSachHinh2.length );
    var hinh2 = danhSachHinh2[ id2 ];
    for ( var x = 0; x < 4; x++ )
    {
        ViTriXoay2[ x ] = [];
        for ( var y = 0; y < 4; y++ ) 
        {
            var vt = 4 * x + y;
            if ( typeof hinh2[ vt ] != 'undefined' && hinh2[ vt ] ) {
                ViTriXoay2[ x ][ y ] = id2 + 1;
            }
            else {
                ViTriXoay2[ x ][ y ] = 0;
            }
        }
    }
}
//Tăng tọa độ y cho ô gạch
function vongLap2(){
  if ( kiemTra2( 0, 1 ) ) {
        viTriY2 = viTriY2+1;
    }
    else {
        luuGiaTri2();
        xoaHang2();
        if (Thua2 == 1) {
            taoTroChoi2();
            return false;
        }
        TaoHinhMoi2();
    }
}
//luu gia tri vao bang khi o gạch xuống đáy
function  luuGiaTri2() {
    for ( var x = 0; x < 4; x++ ) {
        for ( var y = 0; y < 4; y++ ) {
            if ( ViTriXoay2[ x ][ y ] != 0 ) {
                bangGiaTri2[ x + viTriY2 ][ y + viTriX2 ] = ViTriXoay2[ x ][ y ];
            }
        }
    }
}
function  xoay2(ViTriXoay2) {
    var viTriMoi2 = [];
    for ( var y = 0; y < 4; ++y ) {
        viTriMoi2[ y ] = [];
        for ( var x = 0; x < 4; ++x ) {
            viTriMoi2[ y ][ x ] = ViTriXoay2[ 3 - x ][ y ];
        }
    }

    return viTriMoi2;
}
function  xoaHang2() {
    for ( var y = dongBang2 - 1; y >= 0; --y ) {
        var dayDong2 = true;
        for ( var x = 0; x < cotBang2; ++x ) {
            if ( bangGiaTri2[ y ][ x ] == 0 ) {
                dayDong2 = false;
                break;
            }
        }
        if ( dayDong2 ) {
           
            for ( var yy = y; yy > 0; --yy ) {
                for ( var x = 0; x < cotBang2; ++x ) {
                    bangGiaTri2[ yy ][ x ] = bangGiaTri2[ yy - 1 ][ x ];
                }
            }
            DiemSo2 += 95+ Math.floor( Math.random()*5);
            ++y;

        }
    }
}


//khi diem cang cao thi goi ham de tang toc do roi cua cac khoi
function tangTocDo2(){
        Tocdo2 = 300 - (DiemSo2 / 300) * 10;
}

//xu ly su kiem phim
function bamPhim2( phim ) {
    switch ( phim ) {
        case 'trai2':
            if ( kiemTra2( -1,0, null ) ) {
                --viTriX2;
            }
            break;
        case 'phai2':
            if ( kiemTra2( 1,0,null ) ) {
                ++viTriX2;
            }
            break;
        case 'xuong2':
            if ( kiemTra2( 0, 1, null ) ) {
                ++viTriY2;
            }
            break;
        case 'xoay2':
            var khoixoay2 = xoay2( ViTriXoay2 );
            if ( kiemTra2( 0, 0, khoixoay2 ) ) {
                ViTriXoay2 = khoixoay2;
            }
            break;
    }
}

//kiem tra vi tri cua khoi co kha thi hay khong
function kiemTra2(X, Y, viTriMoi){
    X = viTriX2 + X;
    Y = viTriY2 + Y;
    viTriMoi = viTriMoi || ViTriXoay2; // khi xoay khoi co bi qua ngoai man hinh khong



    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( viTriMoi [ y ][ x ] ) {
                if ( typeof bangGiaTri2[ y + Y ] == 'undefined'   // kiem tra cac Dk cua khoi co kha thi hay khong, khong ra ngoai khung hinh
                  || typeof bangGiaTri2[ y + Y ][ x + X ] == 'undefined'
                  || bangGiaTri2[ y + Y ][ x + X ]
                  || x + X < 0
                  || y + Y >= dongBang2
                  || x + X>= cotBang2 ) {
                    if (Y == 1) Thua2 = true; // neu khoi dang o dong tren cung thi thua
                    return false;
                }
            }
        }
    }
    return true;
}


//tao moi tro choi
function taoTroChoi2() {
    clearInterval(interval2);
    KhoiTao2();
    TaoHinhMoi2();
    Thua2 = false;
    interval2 = setInterval( vongLap2, Tocdo2)
}
taoTroChoi2()