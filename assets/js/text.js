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
        strings: ["01.03 π","Who i am ?","SCAMMER", "πΏοΈποΈποΈπ·οΈπΎοΈπ½οΈ Developer", "coder", "Music Lover...", "Anime lover..."],
        typeSpeed: 35,
        backSpeed: 0,
        cursorChar: ['β'],
        smartBackspace: true,
        fadeOut: true,
        loop: true,
    });
});
