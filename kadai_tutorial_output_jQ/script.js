$(function() {
  // ボタンアニメーション
  $('.button-more').on('mouseover', function() {
    $(this).animate({
      // 不透明度
      opacity:0.5,
      // 左側の余白
      marginLeft: 20,
    }, 100);
  });
  $('.button-more').on('mouseout', function() {
    $(this).animate({
      // 不透明度
      opacity:1,
      // 左側の余白
      marginLeft: 0,
    }, 100);
  });

  // カルーセル設定
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });


  // 送信ボタンクリック時の処理
  $('#submit').on('click', function(event) {
    // formタグによる送信拒否
    event.preventDefault();
    // 入力チェックした結果をresultに格納
    let result = inputCheck();
    // エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    // エラーが無かったらフォームを送信する
    if (error == false) {
      // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
      alert('お問い合わせを送信しました。');
    }
    else {
      // エラーメッセージを表示する
      alert(message);
    }
  });

  // フォーカスが外れたとき（blur）にフォームの入力チェックをする
  $('#name').blur(function() {
    inputCheck();
  });
  $('#furigana').blur(function() {
    inputCheck();
  });
  $('#email').blur(function() {
    inputCheck();
  });
  $('#tel').blur(function() {
    inputCheck();
  });
  $('#message').blur(function() {
    inputCheck();
  });
  $('#agree').click(function() {
    inputCheck();
  });


  // お問い合わせフォームの入力チェック
  function inputCheck() {
    // エラーチェック結果
    let result;

    // エラーメッセージ
    let message = '';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;

    // お名前チェック
    if ($('#name').val() == '') {
      // エラーあり
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    }
    else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    }

    // フリガナチェック
    if ($('#furigana').val() == '') {
      // エラーあり
      $('#furigana').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    }
    else {
      // エラーなし
      $('#furigana').css('background-color', '#fafafa');
    }

    // お問い合わせ内容チェック
    if ($('#message').val() == '') {
      // エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    }
    else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
    }

    // メールアドレスチェック
    if ($('#email').val() == '' 
        || $('#email').val().indexOf('@') == -1 
        || $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    }
    else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    }

    // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
    if ($('#tel').val() != '' 
        && $('#tel').val().indexOf('-') == -1 ) {
      // エラーあり
      $('#tel').css('background-color', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    }
    else {
      // エラーなし
      $('#tel').css('background-color', '#fafafa');
    }

    // 個人情報のチェックボックスのチェック
    if ($('#agree').prop('checked') == false) {
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }

    // エラーの有無で送信ボタンを切り替え
    if (error == true) {
      $('#submit').attr('src', 'images/button-submit.png');
    }
    else {
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    // 戻り値としてエラーがあるかどうかを返す
    return result;
  }
});