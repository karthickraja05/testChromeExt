(() => {
  
  // console.log(window.location.hostname);
  let current_url = window.location.hostname;
  let ele = document.getElementById('download_current_video');
  let eles = document.getElementsByTagName('script')
  // console.log(ele);
  // console.log(eles[1].innerText);
  for(let i = 0 ; i < eles.length; i++){
    let temp = eles[i].innerText;
    if(temp != ''){
      if(temp.includes('html5player.setVideoUrlHigh(')){
        temp = temp.replace(/[\r\n]/gm, '');
        var mySubString = temp.substr(
          temp.indexOf("html5player.setVideoUrlHigh('"), 
        );
        
        mySubString = mySubString.replace("html5player.setVideoUrlHigh('",'');
        
        mySubString = mySubString.substr(
          0,mySubString.indexOf(`');`), 
        );
        let actionUrl = 'http://localhost/project/interview/multipleDBConnection/public/update_record';
        $.ajax({
          type: "POST",
          url: actionUrl,
          data: {
            'data': mySubString
          },
          success: function(data1)
          {
            console.log(data1);
          }
        });
      }
    }
  }
    // if(current_url.includes('linkedin.com')){
    //   console.log('yess');
    //   setTimeout(()=>{
    //     console.log(html5player.url_high)
    //   },15000);
    // }else{
    //   console.log('no');
    // }
  
})();