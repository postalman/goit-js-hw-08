import Vimeo from "@vimeo/player"

const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', function(data) {
        const currentTime = data.seconds;
       localStorage.setItem('videoplayer-current-time', currentTime);
      });

      player.setCurrentTime(currentTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    })