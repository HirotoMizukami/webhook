function doPost(e) {
  var method_name = "webhook doPost";
  console.log(method_name + start_log);
  
  try {
    
    var contents = JSON.parse(e.postData.contents);
    console.log(contents);
    
    var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
    var app = SlackApp.create(token); //SlackApp インスタンスの取得
    var options = {
      "botName" : "BacklogBot"
    }
    
    // プロジェクト名の取得
    var projectName = contents.project.projectKey;
    var taskNo = contents.content.key_id;
    
    // 課題追加時のメッセージ
    var url = backlog_url + task_url + projectName + "-" + taskNo;
    
    var message = contents.content.summary + "が追加されました!" + "\n" + url　; //投稿するメッセージ

    var channelId = PropertiesService.getScriptProperties().getProperty('SLACK_CHANNEL_ID')
    //  var channelId = e.parameter.channel_id; // 発言したルームにオウム返ししたい場合はこちらのパラメータを使用する。
    app.postMessage(channelId, message, options);
  
  } finally {
    console.log(method_name + end_log);
  }  
  
  return; 
}

