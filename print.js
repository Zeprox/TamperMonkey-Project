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

function formdata(){
  style = document.createElement('style');
  const stylehtml = '.komik_info-body .select-label select{\n    border:none;\n    background:#282731;\n    box-shadow:0 1px 3px -2px #2f2f2f;\n    color:#999\n    }\n.darkmode .komik_info-body .select-label select option{\n    color:#999;\n    }\n.darkmode .komik_info-body .select-label select option[value=""][disabled]{\n    display:none;\n    }\n.darkmode .komik_info-body .select-label select:focus{\n    outline:none;\n    border-color:#999;box-shadow:0 0 0 2px #2f2f2f;\n    }\n.darkmode .komik_info-body .select-label select:hover+svg{\n    stroke:#999;\n    }\n.komik_info-body .select-label{\n    position:relative;\n    }\n.komik_info-body .select-label svg{\n    position:absolute;\n    right:10%;\n    top:calc(50% - 3px);\n    width:10px;\n    height:6px;\n    stroke-width:2px;\n    stroke:#9098a9;\n    fill:none;\n    stroke-linecap:round;\n    stroke-linejoin:round;\n    pointer-events:none;\n    }\n.komik_info-body .select-label select{\n    -webkit-appearance:none;\n    padding:7px 40px 7px 12px;\n    border:1px solid #999;\n    border-radius:\n    background:#cfcfcf;\n    box-shadow:0 1px 3px -2px #cfcfcf;\n    cursor:pointer;\n    font-family:\n    inherit;\n    font-weight:500;\n    font-size:.9em;\n    transition:all 150ms ease;\n    }\n.komik_info-body .select-label select option{\n    color:#999;\n    }\n.komik_info-body .select-label select option[value=""][disabled]{\n    display:none;\n    }\n.komik_info-body .select-label select:focus{\n    outline:none;\n    border-color:#999;\n    box-shadow:0 0 0 2px #cfcfcf;\n    }\n.komik_info-body .select-label select:hover+svg{\n    stroke:#272727;\n    }\n.sprites{\n    position:absolute;\n    width:0;\n    height:0;\n    pointer-events:none;\n    user-select:none\n    }';
  style.innerHTML = stylehtml;
  document.head.appendChild(style);
  const chapterrelease = document.getElementsByClassName('komik_info-chapters-item')
  label = document.createElement('label');
  label.for = 'chapter';
  label.className = 'select-label';
  select = document.createElement('select');
  select.name = 'chapter';
  select.id = 'chapterlist';
  svg = document.createElement('svg');
  svg2 = document.createElement('svg');
  use = document.createElement('use');
  use.outerHTML = '<use xlink:href="#select-arrow-down"></use>';
  svg2.appendChild(use);
  svg.className = 'sprites';
  symbol = document.createElement('symbol');
  symbol.id = 'select-arrow-down';
  symbol.viewBox = '0 0 10 0';
  poly = document.createElement('polyline');
  poly.points = '1 1 5 5 9 1';
  symbol.appendChild(poly);
  svg.appendChild(symbol);
  document.getElementsbyClassName('komik_info').append(svg);
  for(var x=0;x<chapterrelease.length;x++){
    option = document.createElement('option');
    option.value = chapterrelease[x].children[0].href;
    option.name = chapterrelease[x].children[0].text;
    select.insertAdjacentElement('afterBegin',option);
  }
  select.appendChild(svg2);
  label.appendChild(select);
  document.getElementsByClassName('komik_info-body')[0].append(label);
  
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
window.alert(nurl)

if(nurl[0] == 'chapter'){
  document.getElementsByClassName('prints')[0].children[0].onclick = function(){printm('main-reading-area')}
}
if(nurl[0] == 'komik'){
  document.getElementsByClassName('design-menu')[0].onclick = function(){formdata()}
}
