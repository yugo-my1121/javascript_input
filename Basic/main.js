let count = 0;
count = 30;
let newCount = 0;
const dayCount = 3;
//constは定義後に再代入はできない
//dayCount = 2;
//console.log(dayCount);

//命名規則
//「_」「$」は先頭でもどこでも使用できる
//数字に関しては先頭で使用できない
let tomoto1 = 0;
//let 1tomoto = 1;
let _tomoto = 2;
let トマトカウント = 3; //実は日本語で定義できる

//キャメルケース
let tomotoCount = 4; //この命名規則がベスト

//パスカルケース
let TomatoCount = 5;

//スネークケース
let tomoto_count = 6;

//計算の省略記法
let result = 5;
result = result + 1;
result += 1;
//console.log(result++); //計算は1を足す前の7を返す
//console.log(++result); //計算は1足した後9を返す
//console.log(result);

//文字列
const userName = 'Yoshipi';

let string = `Hellow ${userName}`; //変数を組み込みたい場合
string = `Hellow\n${userName}`; //改行を入れたい場合「\n」を使用する
console.log(string);
