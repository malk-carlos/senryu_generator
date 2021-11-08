function sentan(){
    // 5を選択（ランダム）
    kamigo();

    // 7を選択（ランダム）
    shichi();

    // 5を選択（ランダム）
    shimogo();

    // ランダム部分をデータ配列から選ばれるように（単語としての体をなすため）

    // ランダムに下の句を変更する
    var ransuuS1 = Math.floor(Math.random() * 2);
    if(ransuuS1 === 0){
        $("#salad").css("display","none");
        $("#akohusi").css("display","unset");
    } else if(ransuuS1 === 1){
        $("#akohusi").css("display","none");
        $("#salad").css("display","unset");
    }
}

// 上の5を選択（ランダム）
function kamigo(){
    var kamigo = kamigolist();
    var kamigo_len = kamigo.length;
    var ransuuA = Math.floor(Math.random() * kamigo_len);
    document.getElementById("a").innerHTML = kamigo[ransuuA];
}

// 7を選択（ランダム）
function shichi(){
    var shichi = shichilist();
    var shichi_len = shichi.length;
    var ransuuB = Math.floor(Math.random() * shichi_len);
    document.getElementById("b").innerHTML = shichi[ransuuB];
}

// 下の5を選択（ランダム）
function shimogo(){
    var shimogo = shimogolist();
    var shimogo_len = shimogo.length;
    var ransuuC = Math.floor(Math.random() * shimogo_len);
    document.getElementById("c").innerHTML = shimogo[ransuuC];
}

function simo(){
    // 下の句 を表示/非表示（選択を切り替えた時）
    var sel = document.getElementById("select").value;

    if( sel === "tan" ){
        $("#simo").css("display","unset");
        // $("#akohusi").css("display","none");
        var ransuuS2 = Math.floor(Math.random() * 2);
        if(ransuuS2 === 0){
            $("#salad").css("display","none");
            $("#akohusi").css("display","unset");
        } else if(ransuuS2 === 1){
            $("#akohusi").css("display","none");
            $("#salad").css("display","unset");
        }
    } else if ( sel === "sen" ){
        $("#simo").css("display","none");
    }
}


// function up(){
//     var file = filelist(); //data.jsの関数を呼び出す
//     var fileno = file.length;
//     var sosu = ''; //ここで初期化しておかないと連結時に'undefined'が先頭に表示されてしまう
//     for(i=0;i<fileno;i++){
//     //var sosu = sosu +'<label><input type=radio name=mus onClick="func1(this)" onkeypress="func1(this)" value="'+ file[i] +'">'+ file[i] +'</label><br>';
//     //html要素の属性はダブルコーテーションでくくる、終了タグのスラッシュはエスケープしておく
//     sosu = sosu +'<label><input type="radio" name="mus" onClick="func1(this)" onkeypress="func1(this)" value="'+ file[i] +'">'+ file[i] +'<\/label><br>';
//     }
//     document.getElementById('hyouji').innerHTML = sosu;
//     }