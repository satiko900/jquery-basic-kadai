// HTMLドキュメントが読み込まれたとき
$(window).on('load', () => {
  // id属性がtargetの要素にclass属性'heading'を追加
  $('#target').addClass('heading');
});