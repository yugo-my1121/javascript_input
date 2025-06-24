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
// const userName = 'Yoshipi';

// let string = `Hellow ${userName}`; //変数を組み込みたい場合
// string = `Hellow\n${userName}`; //改行を入れたい場合「\n」を使用する
//console.log(string);

//明示的な方変換
const userInput = '10.9';
// Numbverの場合は小数に変換
calcResult = Number(userInput) + 10;
//console.log(calcResult);
//porseIntの場合は小数は切り捨て
calcResult = parseInt(userInput) + 10;
//console.log(calcResult);
//parswFloatの場合は小数に変換
calcResult = parseFloat(userInput) + 10;
//console.log(calcResult);

// 配列の追加方法
//pushでも追加できる
array = [];
array.push('apple');
//console.log(array);

//オブジェクト
const coffee = {
  name: 'chocolate Mocha',
  size: 350,
  isHot: true,
  toppings: ['Cinnamon', 'Caramel'],
  nutritions: {
    calories: 430,
    sugars: 53,
  },
};

//アクセス
// console.log(coffee.size);

//プロパティの追加
//.(新しいプロパティ名)で追加できる
coffee.barisuta = 'yugo';
// console.log(coffee);

//nullとundefinedの違い
// 意味合いは「何もなかった」
//使いわけ
//予期しないエラーはundefined 予定通りの場合はnullを使用する
let userInfo = null; //(例)

// == ===の違い
ok = 1 === 1; //型も同じかを判別する
ok = 1 == '1'; // ==は型の制約がないためtrue判定になる
console.log(ok);

// && ||

ok = false && true; //どちらもtrueの場合にtrueになる

ok = true || false; // どちらかがtrueの場合にtrueになる

//論理演算子
//「&&」は厳密に言うと左側がtureの場合は右側を返し、falseの場合は左側を返す
ok = 'hello' && 'hi'; //hiになる

//「||」は左側がtrueの場合は左を返し、falseの場合は右側を返す
//(例)ユーザ名が空白の場合に、デフォルトで値を設定する
let userInputName = '';
let userName = userInputName || 'User';
console.log(userName);

//null合体演算子
userInputName = '';
userName = userInputName ?? 'User'; //userInputNameがnullの場合は右側が返り、それ以外は左側が返る

//文と式
//式とは
//変数の定義で右辺にかけるもの

//文とは
//実行すると何かするもの

//参考演算子
ok = true ? 'ok' : 'no'; //trueの場合左側の値を返す

//try catch
//ユーザ操作など開発者がどうすることもできない、エラーが出ることが予測できる時にtry catch文は使用する
try {
  //ここでのエラーはcatchされる
} catch {
  //tryでエラーがあった場合に通る
}

//throw(エラーを発生させることができる)
//throw 'error';

//関数はオブジェクトに過ぎない
function add(a, b) {
  return a + b;
}
//本質的な形でログに表示
console.dir(add);
