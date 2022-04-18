
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
  if(formval){
  }else{
  style = document.createElement('style');
  const stylehtml = '.darkmode .print-menu .select-label select {\n    border: none;\n    background: #282731;\n    box-shadow: 0 1px 3px -2px #2f2f2f;\n    color: #fff;\n}\n.print-menu .select-label select {\n    -webkit-appearance: button;\n    padding: 7px 40px 7px 12px;\n    border: 1px solid #999;\n    border-radius: 5px;\n    min-width: 10rem;\n    background: #cfcfcf;\n    box-shadow: 0 1px 3px 2px #cfcfcf;\n    cursor: pointer;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: .9em;\n    transition: all 150ms ease;\n}\n.print-menu .select-label svg {\n    position: absolute;\n    right: 65%;\n    top: calc(50% - 8.93cm);\n    width: 10px;\n    height: 6px;\n    stroke-width: 2px;\n    stroke: #9098a9;\n    fill: none;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    pointer-events: none;\n}\nselect.chapter_list:hover{border: 1px solid #99B!important;\n}';
  style.innerHTML = stylehtml;
  document.head.appendChild(style);
  const chapterrelease = document.getElementsByClassName('komik_info-chapters-item');
  div = document.createElement('div');
  div.className = 'print-menu';
  div.style = 'padding: 1rem;padding: 1rem;gap: 5px;display: flex;justify-content: normal;';
  span = document.createElement('span')
  span.style = 'display: flex;align-content: space-around;justify-content: space-between;align-items: center;';
  span.innerText = 'From: ';
  div.appendChild(span);
  label = document.createElement('label');
  label.for = 'chapter';
  label.className = 'select-label';
  select = document.createElement('select');
  select.name = 'chapter';
  select.className = 'chapter_list';
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
  label.appendChild(select);
  label.appendChild(svg2);
  div.appendChild(label);
  document.getElementsByClassName('komik_info-body')[0].append(div);
  formval=true;
  formdata2();
  }
}

function formdata2(){
  span = document.createElement('span')
  span.style = 'display: flex;align-content: space-around;justify-content: space-between;align-items: center;';
  span.innerText = 'To: ';
  document.getElementsByClassName('print-menu')[1].append(span);
  const chapterrelease = document.getElementsByClassName('komik_info-chapters-item');
  label = document.createElement('label');
  label.for = 'chapter';
  label.className = 'select-label';
  select = document.createElement('select');
  select.name = 'chapter';
  select.className = 'chapter_list';
  svg2 = document.createElement('svg');
  svg2.innerHTML = '<use xlink:href="#select-arrow-down"></use>';
  document.getElementsByClassName('komik_info')[0].append(svg);
  for(var x=0;x<chapterrelease.length;x++){
    option = document.createElement('option');
    option.value = chapterrelease[x].children[0].href;
    option.text = chapterrelease[x].children[0].text;
    select.insertAdjacentElement('afterBegin',option);
  }
  label.appendChild(select);
  label.appendChild(svg2);
  document.getElementsByClassName('print-menu')[1].append(label);
}

function download(){
  
}

var nurl = removeItemAll(document.baseURI.split('/'),'');
for(var y=0;y<2;y++){
   nurl.splice(0,1);
}

if(nurl[0] == 'chapter'){
  document.getElementsByClassName('prints')[0].children[0].onclick = function(){printm('main-reading-area')}
}
if(nurl[0] == 'komik'){
  document.getElementsByClassName('design-menu')[0].children[0].onclick = function(){formdata()}
}

