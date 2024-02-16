$(window).on({
  // HTMLドキュメント読み込み完了時「loadイベントが発生しました」をコンソールに出力
  'load': () => {
  console.log('loadイベントが発生しました');
  },
  // 画面スクロール時「scrollイベントが発生しました」をコンソールに出力
  'scroll': () => {
    console.log('scrollイベントが発生しました');
  },
}); 