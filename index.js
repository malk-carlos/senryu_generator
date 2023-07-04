function downloadDatas(){
    const API_URL = 'https://script.googleapis.com/v1/scripts/AKfycbxDMmZuv3I3L7Qroi-eQ2FUC-MaRhFhgOikc3c10pexbg1d7L5w0GYoI7F-r-90XFmi:run'
    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://192.168.11.13:5500');  // クライアント側でCORSヘッダーを設定
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var responseData = JSON.parse(xhr.responseText);  // レスポンスデータを解析
    // レスポンスデータを使用するコード
    console.log(responseData.message);
    }
    };
    xhr.send();
}

function shoku(){

}

function niku(){

}

function kekku(){

}


function sentan(){
    // 5を選択（ランダム）
    shoku();

    // 7を選択（ランダム）
    niku();

    // 5を選択（ランダム）
    kekku();

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

// // 上の5を選択（ランダム）
// function kamigo(){
//     var kamigo = kamigolist();
//     var kamigo_len = kamigo.length;
//     var ransuuA = Math.floor(Math.random() * kamigo_len);
//     document.getElementById("a").innerHTML = kamigo[ransuuA];
// }

// // 7を選択（ランダム）
// function shichi(){
//     var shichi = shichilist();
//     var shichi_len = shichi.length;
//     var ransuuB = Math.floor(Math.random() * shichi_len);
//     document.getElementById("b").innerHTML = shichi[ransuuB];
// }

// // 下の5を選択（ランダム）
// function shimogo(){
//     var shimogo = shimogolist();
//     var shimogo_len = shimogo.length;
//     var ransuuC = Math.floor(Math.random() * shimogo_len);
//     document.getElementById("c").innerHTML = shimogo[ransuuC];
// }