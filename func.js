console.log('sds');



let button_clicked = document.getElementById('download_current_video');
let win_id;
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  console.log(tabs);
  console.log(tabs[0]);
  console.log(tabs[0].url);
  win_id = tabs[0].windowId;

});


button_clicked.addEventListener('click',function(){
  console.log(win_id);
  // test12
});
