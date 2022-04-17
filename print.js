
function removeItemAll(arr, value) {
        var i = 0;
        while (i < arr.length) {
            if (arr[i] === value) {
                arr.splice(i, 1);
            } else {
                ++i;
            }
        }
        return arr;
    };

function printm(ClassName) {
    var printContents = document.getElementsByClassName(ClassName)[0].innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    document.getElementsByClassName('prints')[0].children[0].addEventListener("click", function(){printm('main-reading-area')});
    };

function validateva(val){
  
}

var formval = false;

function formdata(){
  style = document.createElement('style');
  const stylehtml = '.darkmode .chapter_body .select-label select {\n    border: none;\n    background: #282731;\n    box-shadow: 0 1px 3px -2px #2f2f2f;\n    color: #999;\n}\n.chapter_body .select-label select {\n    -webkit-appearance: none;\n    padding: 7px 40px 7px 12px;\n    border: 1px solid #999;\n    border-radius: 5px;\n    min-width: 12.5rem;\n    background: #cfcfcf;\n    box-shadow: 0 1px 3px 2px #cfcfcf;\n    cursor: pointer;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: .9em;\n    transition: all 150ms ease;\n}';
  style.innerHTML = stylehtml;
  document.head.appendChild(style);
  const chapterrelease = document.getElementsByClassName('komik_info-chapters-item');
  div = document.createElement('div');
  div.className = 'print-menu';
  div.style = 'padding: 1rem;';
  label = document.createElement('label');
  label.for = 'chapter';
  label.className = 'select-label';
  select = document.createElement('select');
  select.name = 'chapter';
  select.id = 'chapterlist';
  svg = document.createElement('svg');
  svg2 = document.createElement('svg');
  svg2.innerHTML = '<use xlink:href="#select-arrow-down"></use>';
  svg.className = 'sprites';
  symbol = document.createElement('symbol');
  symbol.id = 'select-arrow-down';
  symbol.viewBox = '0 0 10 0';
  poly = document.createElement('polyline');
  poly.points = '1 1 5 5 9 1';
  symbol.appendChild(poly);
  svg.appendChild(symbol);
  document.getElementsByClassName('komik_info')[0].append(svg);
  for(var x=0;x<chapterrelease.length;x++){
    option = document.createElement('option');
    option.value = chapterrelease[x].children[0].href;
    option.text = chapterrelease[x].children[0].text;
    select.insertAdjacentElement('afterBegin',option);
  }
  label.appendChild(svg2);
  label.appendChild(select);
  div.appendChild(label);
  document.getElementsByClassName('komik_info-body')[0].append(div);
  formval = true
}

function printmultiple(){
  var answer1 = form('Please input number')
  //if answer
  //var answer2
}

var nurl = removeItemAll(document.baseURI.split('/'),'');
for(var y=0;y<2;y++){
   nurl.splice(0,1);
}

if(nurl[0] == 'chapter'){
  document.getElementsByClassName('prints')[0].children[0].onclick = function(){printm('main-reading-area')}
}
if(nurl[0] == 'komik'){
  if(formval){
  }else{document.getElementsByClassName('design-menu')[0].onclick = function(){formdata()}}
}
