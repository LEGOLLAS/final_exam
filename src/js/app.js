var $newnote = $('.btn-newnote');
var $savenote = $('.btn-savenote');
var $down = $('.btn-down');
var $full = $('.btn-full');
var $about = $('.btn-about');
var $memo = $('#memo');

var appdata = document.getElementById('appdata');

window.onload = onloadFunction;
function onloadFunction(e){
  if (localStorage.length != 0) {
    $memo.val( localStorage.text );
  }
}

$newnote.click( function() {
  $memo.val('');
});

$full.click( function() {
  screenfull.request();
});

$savenote.click( function() {
  localStorage.text = $memo.val();
});

$down.click( function () {
  var blob = new Blob( [$memo.val()], {type: "text/plain;charset=utf-8"}); // 메모 내용 다운로드
  saveAs(blob, "text.txt");
});

$about.click(function() {
  appdata.innerHTML =
        '<ul>'+
                '<li>홍지혁이 만든 노트 앱 입니다</li>' +
                '<li>새로운 노트를 작성하고 싶으시면 새노트를 눌러 주세요!</li>' +
                '<li>노트저장 버튼을 클릭하시면 내용이 저장됩니다! F5눌러도 다시 떠요 !</li>' +
                '<li>노트다운로드 버튼을 누르시면 현재 입력된 메모가 text.txt 파일로 다운로드되요!</li>' +
                '<li>전체화면으로 보고 싶으시면 전체화면 버튼을 클릭하시면 됩니다.</li>' +
        '</div>';
});
