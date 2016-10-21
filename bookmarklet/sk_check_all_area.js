/* ----------------------
 how to use

 1.下記をブックマークに追加
 javascript:(function(){var%20d=document;s=d.createElement('script');s.setAttribute('src','https://masup9.github.io/bookmarklet/sk_check_all_area.js');d.body.appendChild(s);})();

 2.sanko.ac.jp以下でブックマークを実行
 対応校: BA, 医療, RS, こども, ブライダル, スイーツ、辻調理以下

 ---------------------- */

(function(d){
  var l = d.location,
      dialog = d.createElement('dialog'),
      ul = d.createElement('ul'),
      btn = d.createElement('button'),
      area = "",
      beautyArea = ["sapporo", "sendai", "omiya", "tokyo", "chiba", "yokohama", "nagoya", "osaka", "hiroshima", "fukuoka"],
      medArea   = ["sapporo", "sendai", "omiya", "tokyo", "tachikawa", "chiba", "yokohama", "nagoya", "osaka", "kobe", "hiroshima", "fukuoka"],
      sportsArea = ["sapporo", "sendai", "tokyo", "chiba", "yokohama", "nagoya", "osaka", "hiroshima", "fukuoka"],
      childArea = ["sapporo", "sendai", "omiya", "tokyo", "chiba", "yokohama", "nagoya", "osaka", "kobe", "fukuoka"],
      bridalArea = ["sapporo", "sendai", "tokyo", "nagoya", "osaka", "fukuoka"],
      sweetsArea = ["sapporo", "sendai", "omiya", "tokyo", "yokohama", "nagoya"],
      choriArea = ["nagoya", "osaka"];

  var genre = l.pathname.replace(/^\/([^-]*)-([^\/]*)\/.*/, "$2");

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
    case "chori":
      area = choriArea;
      break;
    default:
      console.error('!!can not get area!!');
      area = false;
      break;
  }

  function appendListItem(e, i, v) {
    var li = d.createElement('li'),
         a = d.createElement('a');

    var href = l.protocol + "//" + l.host + "/" + e + "-" + l.pathname.replace(/^([^-]*)-(.*)/, "$2") + l.search;
    a.textContent = href;
    a.setAttribute('href', href);
    li.appendChild(a);
    ul.appendChild(li);
  }

  function openListItem() {
    var listItems = dialog.querySelectorAll('ul > li > a');
    for (var i = listItems.length - 1; i >= 0; i--) {
      window.open(listItems[i].href);
    };
  }

  btn.textContent = '全てのページを開く';
  btn.setAttribute('style', 'margin-bottom: 1em;font-size: 1rem;cursor:pointer;');
  btn.addEventListener('click', openListItem, false);

  if (area) {
    area.forEach(appendListItem);
    dialog.appendChild(btn);
    dialog.appendChild(ul);
    d.body.appendChild(dialog);
    dialog.showModal();
  } else {
    dialog.textContent = 'URLの取得に失敗しました';
    d.body.appendChild(dialog);
    dialog.showModal();
  };

})(document);

