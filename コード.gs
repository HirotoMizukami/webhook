function doPost(e) {
//SpreadSheet.appendToSheet("slack　開始");

  //投稿の認証
  if (verify_token != e.parameter.token) {
    throw new Error("invalid token.");
  }


  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var botName = "コンゴトモヨロシク";
  var message = "Hello, World"; //投稿するメッセージ
  
  var app = SlackApp.create(token); //SlackApp インスタンスの取得

//SpreadSheet.appendToSheet("slack　終了");
  return app.postMessage(e.parameter.channel_id, message, {
    username: botName
  });
}