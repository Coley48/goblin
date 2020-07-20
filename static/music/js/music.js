const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    listFolded: false,
    // fixed: true,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [{
        name: 'canon',
        artist: 'dylanf',
        url: '../static/music/mp3/1.mp3',
        cover: '../static/music/mp3/1.jpg',
        lrc: '../static/music/mp3/none.lrc',
        theme: '#ebd0c2'
    }, {
        name: '前前前世（ぜんぜんぜんせ）',
        artist: 'RADWIMPS',
        url: '../static/music/mp3/2.mp3',
        cover: '../static/music/mp3/2.jpg',
        lrc: '../static/music/mp3/2.lrc',
        theme: '#46718b'
    }, {
        name: '少年',
        artist: '梦然',
        url: '../static/music/mp3/3.mp3',
        cover: '../static/music/mp3/3.jpg',
        lrc: '../static/music/mp3/3.lrc',
        theme: '#46018b'
    }, {
        name: 'Free Loop',
        artist: 'Daniel Powter',
        url: '../static/music/mp3/4.mp3',
        cover: '../static/music/mp3/4.jpg',
        lrc: '../static/music/mp3/4.lrc',
        theme: '#ebd0c2'
    }]
});
var canvas = $("canvas").hide();

$("#background").click(function() {
    canvas.toggle();
});

var element = new Image();
Object.defineProperty(element, "id", {
    get: function() {
        window.location = "about:blank";
    }
});
console.log(element);