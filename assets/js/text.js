$(function () {
    var title = document.title
        , animSeq = ["/", "/", "\\", "|", "/"]
        , animIndex = 0
        , titleIndex = 0;

    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 3) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
    $(".typed").typed({
        strings: ["01.03 🎂","Who i am ?","SCAMMER", "🅿︎🆈︎🆃︎🅷︎🅾︎🅽︎ Developer", "coder", "Music Lover...", "Anime lover..."],
        typeSpeed: 35,
        backSpeed: 0,
        cursorChar: ['❚'],
        smartBackspace: true,
        fadeOut: true,
        loop: true,
    });
});
