remove_others = ()=> { if(new_foot){console.log("removing"); new_foot.remove();} } 
document.addEventListener('DOMContentLoaded', function() {
 const audioElements = ['audio1', 'audio2', 'audio3', 'audio4', 'audio5', 'audio6', 'audio7', 'audio8', 'audio9', 'audio10', 'audio11', 'audio12', 'audio13', 'audio14', 'audio15', 'audio16', 'audio17', 'audio18','audio19'];  
 function pauseOtherAudios(playingAudio) {
    audioElements.forEach(function(audioId) {
      if (audioId !== playingAudio) {

        document.getElementById(audioId).pause();
      }
    });
 }
  /*  
    make_footer = () => {new_foot = document.createElement("div"); new_foot.id = "foooter"; new_foot.innerHTML = "";
                        new_foot.style.cssText = "height: 100px;width: 100%;background: black;border-radius: 50px;color: black;position:static;margin: 50px;animation-name: foooter;animation-duration: 1s;animation-timing-function: ease-out;";
                        document.body.appendChild(new_foot);
                        }
  */
 audioElements.forEach(function(audioId) {
    const audioElement = document.getElementById(audioId);
    audioElement.addEventListener('play', function() {
      /*    make_footer()    */
      pauseOtherAudios(audioId);
    });
 });
});
