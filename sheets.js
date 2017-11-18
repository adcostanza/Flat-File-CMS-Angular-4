function DatatoJSON() {
  var _json = [];
  var ss=SpreadsheetApp.getActiveSpreadsheet();
    var sheet=ss.getSheets()[0];
    var data = sheet.getDataRange().getValues();
  //Logger.log(data);
  for(var r = 1; r<data.length;r++) {
    var element = {}
    for(var c = 0; c<data[0].length;c++) {
      element[data[0][c]] = data[r][c];
    }
    _json.push(element);
  }
  Logger.log(JSON.stringify(_json));
  return JSON.stringify(_json);
}

function sendData() {
  var query = DatatoJSON();
    var url = 'http://acostanza.com/php-cms/assets/writeMenu.php?key=rQLFqUYa8LnwcIH0TI83fO4g3bnFWEMfELLOvl';
  var options = {
   'method' : 'post',
   'payload' : query
 };
    var response = UrlFetchApp.fetch(url,options);
  Logger.log(response);

  if(response == "success") {
     SpreadsheetApp.getUi().alert('Successfully updated content.');
  } else {
    SpreadsheetApp.getUi().alert('Failed to update content.');
  }
}
