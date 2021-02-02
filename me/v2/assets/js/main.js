    /**
     *  @Auther Misanki
     *  @Email Outdie@qq.com
     *  @Date  2020/11/30 22:35
     *  @Copyright Misnaki All.
     **/

    function playMusic() {
        var audioEle = document.getElementById("audio");
      if (audioEle.paused){
        audioEle.play();
      }else {
        audioEle.pause();
      }
    }
    
    $("#music").click(function(){
      play();
    });

    var player = document.getElementById("audio");
    play();
    function play(){
    swal("是否开启音乐一边浏览一边听呢？", {
            buttons: {
                cancel: "开启",
                allow: "关闭"
            }
        }).then(function(value) {
            if (value == "allow") {
                player.pause()
            } else {
                player.play();
            }
        });
    }