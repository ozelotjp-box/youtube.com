// ==UserScript==
// @name ozelotjp-box/youtube.com
// @version 1.12
// @author ozelotjp
// @homepageURL https://github.com/ozelotjp-box/youtube.com
// @downloadURL https://github.com/ozelotjp-box/youtube.com/raw/master/app.user.js
// @match https://www.youtube.com/
// @grant GM_notification
// ==/UserScript==

function reversePlaylist() {
  let playlist = document.getElementById("playlist");
  if (playlist.style.display !== "none") {
    playlist.style.display = "none";
  } else {
    playlist.style.display = "block";
  }
}

GM_notification("プレイリストの非表示はココをクリック\nまたは p キーを押してください\n\n(C) 2018 ozelotjp", "ozelotjp/hide-playlist からのお知らせ", "https://i.imgur.com/tUwnLok.png", (function () {
  reversePlaylist();
}));

document.onkeydown = (function (event) {
  if (event.key === "p") {
    reversePlaylist();
  }
});
