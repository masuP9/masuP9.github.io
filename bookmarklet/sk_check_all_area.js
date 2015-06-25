/* ----------------------
 how to use

 1.下記をブックマークに追加
 javascript:(function(){var%20d=document;s=d.createElement('script');s.setAttribute('src','https://masup9.github.io/bookmarklet/sk_check_all_area.js');d.body.appendChild(s);})();

 2.sanko.ac.jp以下でブックマークを実行
 対応校: BA, 医療, RS, こども, ブライダル, スイーツ以下

 ---------------------- */

(function(){
  var l = document.location,
      dialog = document.createElement('dialog'),
      ul = document.createElement('ul'),
      btn = document.createElement('button'),
      area = "",
      beautyArea = ["sapporo", "sendai", "omiya", "tokyo", "chiba", "yokohama", "nagoya", "osaka", "hiroshima", "fukuoka"],
      medArea   = ["sapporo", "sendai", "omiya", "tokyo", "chiba", "yokohama", "nagoya", "osaka", "kobe", "hiroshima", "fukuoka"],
      sportsArea = ["sapporo", "sendai", "tokyo", "chiba", "yokohama", "nagoya", "osaka", "hiroshima", "fukuoka"],
      childArea = ["sapporo", "sendai", "omiya", "tokyo", "chiba", "yokohama", "nagoya", "osaka", "kobe", "fukuoka"],
      bridalArea = ["sapporo", "sendai", "tokyo", "nagoya", "osaka", "fukuoka"],
      sweetsArea = ["sapporo", "sendai", "omiya", "tokyo", "yokohama", "nagoya"];

  var isCgi = /^\/cgi\//.test(l.pathname);
  var genre = "";

  if (isCgi) {
    genre = l.pathname.replace(/\/cgi\/([^\/]*)\/.*$/, "$1").replace(/2$/, "");
  } else {
    genre = l.pathname.replace(/^([^-]*)-([^\/]*)\/.*/, "$2");
  }

  switch (genre) {
    case "beauty":
      area = beautyArea;
      break;
    case "med":
      area = medArea;
      break;
    case "sports":
      area = sportsArea;
      break;
    case "bridal":
      area = bridalArea;
      break;
    case "child":
      area = childArea;
      break;
    case "sweets":
      area = sweetsArea;
      break;
    default:
      console.error('!!can not get area!!');
      area = false;
      break;
  }

  function appendListItem(e, i, v) {
    var li = document.createElement('li'),
        a = document.createElement('a');

    if (isCgi) {
      href = l.protocol + "//" + l.host + l.pathname + '?local=' + e;
    } else{
      href = l.protocol + "//" + l.host + "/" + e + "-" + l.pathname.replace(/^([^-]*)-(.*)/, "$2");
    };
    a.textContent = href;
    a.setAttribute('href', href);
    li.appendChild(a);
    ul.appendChild(li);
  }

  function openListItem() {
    var listItems = document.body.querySelectorAll('dialog > ul > li > a');
    for (var i = listItems.length - 1; i >= 0; i--) {
      window.open(listItems[i].href);
    };
  }

  btn.textContent = '全てのページを開く';
  btn.setAttribute('style', 'margin-top: 1em;font-size: 1rem;cursor:pointer;');
  btn.addEventListener('click', openListItem, false);

  if (area) {
    area.forEach(appendListItem);
    dialog.appendChild(ul);
    dialog.appendChild(btn);
    document.body.appendChild(dialog);
    dialog.showModal();
  } else {
    dialog.textContent = 'URLの取得に失敗しました';
    document.body.appendChild(dialog);
    dialog.showModal();
  };

})();

