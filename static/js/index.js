// 결과 페이지에서 뒤로가기 할 경우
window.onpageshow = function (event) {
    if (
        event.persisted ||
        (window.performance && window.performance.naviagation.type == TYPE_BACK_FORWARD)
    ) {
        $("#mask, #loadingImg").hide();
        $("#mask, #loadingImg").remove();
    }
};

function LoadingWithMask() {
    //화면의 높이와 너비를 구합니다.
    // const maskHeight = $(document).height();
    // var maskWidth = window.document.body.clientWidth;
    const maskHeight = window.innerHeight;
    const maskWidth = window.innerWidth;

    //화면에 출력할 마스크를 설정해줍니다.
    const mask = "<div id='mask'></div>";
    let loadingImg = "";

    loadingImg += "<div id='loadingImg'>";
    loadingImg += "<img src='static/images/loading.gif'/>";
    loadingImg += "</div>";

    //화면에 레이어 추가
    $("body").append(mask).append(loadingImg);

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
    $("#mask").css({
        width: maskWidth,
        height: maskHeight,
        opacity: "0.3",
    });

    //마스크 표시
    $("#mask").show();
    //로딩중 이미지 표시
    $("#loadingImg").show();
}
