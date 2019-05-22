$(function(){

  $('#serch-btn').on('click',function(){
    // 検索ボタンがクリックされたら
    

     // itunesに検索をしに行く(Ajax)
     $.ajax({
      url: 'https://itunes.apple.com/search',
      type: 'get',  
      // GET送信→データを取得したい（例：itunsからデータだす）　OR POST送信（フォームから取得）
      dataType: 'jsonp',
      // 検索結果の形式
      data: {
        term: 'あいみょん',
        country: 'jp',
      }

     }).done( (data) =>{
      //  通信が成功した時
      console.log(data);

     }).fail((error) =>{
      //  通信が失敗した時
      console.log(error);

     })

  })
})