// this js for searching image from how many image in website
// purpose : search for manga,etc in website

(function prototypeval(){
    String.prototype.replaceBetween = function(start,end,value){
            return this.substring(0,start) + value + this.substring(end);
    }
    Array.prototype.ArrayindexOf = function(value,key=undefined) {
        key = typeof key == 'string' ? key : undefined
        for(var x =0; x< this.length;x++){
            if (this[x].includes(value)){return x}
            else if (key !== undefined && this[x][1][key].includes(value)){return x}
        }
    }
    Number.prototype.isEven = function(){ return this % 2 == 0}
    Number.prototype.isOdd = function(){
        if(Number.isSafeInteger(this/2) && String(this).length < 16 || String(this/2).includes('e') && !String(this/2).includes('.') ||  String(this).length >= 16 && !String(this/2).includes('.')){console.log(1);return false}
        else if(Number.isSafeInteger(this/3 ) && String(this).length < 16 || String(this/3).includes('e') && !String(this/3).includes('.') ||  String(this).length >= 16 && !String(this/3).includes('.')){console.log(2);return false}
        else if(Number.isSafeInteger(this/this)){console.log(3);return true}
        else {return true}
    }
    Array.prototype.ArrayFromTo = function(From,To){
        if (typeof From !== 'number' || typeof To !== 'number'){
            throw new TypeError("Value is not number")
        }
        if (From > To){
            throw new RangeError([From, " is higher than ", To].join(''))
        }
        let Arr = []
        for (var x = From; x < To;x++){
            if (this[x] === undefined){break}
            Arr.push(this[x])
        }
        return Arr
    }
    Array.prototype.ArrObjindexOf = function(value,key=undefined) {
        key = typeof key == 'string' ? key : undefined
        for(var x =0; x< this.length;x++){
            try {
                if (this[x].includes(value)){return x}
                else if (key !== undefined && this[x][1][key].includes(value)){return x}
            }
            catch(err){
                if(err.name === 'TypeError'){
                    if(this[x].__proto__ == HTMLAnchorElement.prototype){
                        if(this[x] == value) {return x}
                    }
                }
            }

        }
    }
    HTMLElement.prototype.getElementsByInnerText = function (text, escape=false) {
        var nodes  = this.querySelectorAll("*");
        var matches = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].textContent.includes(text)) {
                matches.push(nodes[i]);
            }
        }
        if (escape) {
            return matches;
        }
        var result = [];
        for (var i = 0; i < matches.length; i++) {
            var filter = matches[i].getElementsByInnerText(text, true);
            if (filter.length == 0) {
                result.push(matches[i]);
            }
        }
        return result;
    };
    String.prototype.findAll = function(val,limit=null){
        var result = {}
        var numb = 0
        if(typeof val == 'object'){
            if(val.__proto__ == Array().__proto__){
                for(let x =0;x < this.length;x++){
                    if (limit !== null && numb >= limit){break}
                    if(val.some(el => this[x] == el)){
                        result[numb] = {index:x,sub:this[x]}
                        numb++
                    }
                }
            }
        }
        else if (typeof val == 'string'){
            for(let x =0;x < this.length;x++){
                if (limit !== null && numb >= limit){break}
                if(this[x] == val){
                    result[numb] = {index:x,sub:this[x]}
                    numb++
                }
            }
        }
        result['str'] = this
        result.__proto__.length = numb
        return result
    }
})();

const Ctp = {
    search: class search {
        static class1 = class parentval{
            constructor(classes,id,parent,src,length){
                this.class = classes;
                this.id = id;
                this.parents = parent;
                this.imgsrc = src
                this.lengths = Number(length);
            }
        }
        static searchbyid(frameid,id){
            if (frameid != null){return window.parent.document.getElementById(frameid).contentDocument.getElementById(id)}
            else {return document.getElementById(id)}
        }

        static searchbyclassname(frameid,classname){
            if (frameid != null){return window.parent.document.getElementById(frameid).contentDocument.getElementsByClassName(classname)}
            else {return document.getElementsByClassName(classname)}
        }

        static async loopers(frameid,url){
            if ($.inArray(frameid,[undefined,null]) != -1) {
                if ($.inArray(Ctp.search.searchimage.frameid,[undefined,null]) == -1) {
                    frameid = Ctp.search.searchimage.frameid
                }
            }
            Ctp.search.loopers.iframeready = false
            const delayl = ms => new Promise(resolve => setTimeout(resolve, ms));
            async function * delaying(count) {
                for (let i = 0; i < count; i++) {
                    yield delayl(1000).then(() => i);
                    if (Ctp.search.loopers.iframeready === true) {
                        return true
                    }else {}
                }
                return false
            }
            if ($.inArray(frameid,[undefined,null]) != -1){
                let ifr = document.createElement('iframe')
                ifr.src = url
                Ctp.search.searchimage.frameid = ifr.id = "ifrmexmp"
                ifr.addEventListener('load', function(){Ctp.search.searchimage(ifr.id)})
                top.document.body.append(ifr)
            }else {
                top.document.getElementById(frameid).src = url
                top.document.getElementById(frameid).addEventListener('load', function(){Ctp.search.searchimage(Ctp.search.searchimage.frameid)})
            }
            (async function loop() {
                for await (let i of delaying(1800)){};
            })();
        }

        static async searchimage(frameid=null){
            if (frameid != null) {var img = top.document.getElementById(frameid).contentDocument.querySelectorAll('img')
            }else {var img = document.getElementsByTagName('img');}
            var parents = [];
            var realimage = [];
            var tmpparents = [];
            var first = true;
            var bst1;
            var bst2;
            var x = 0;
            var xx = 0;
            var y = 0;
            for (x = 0; x<img.length;x++){
                this.current = img[x];
                if (parents.includes(this.current.parentElement)){
                } else {
                    if (parents.some(el => el.imgsrc == this.current.src)){
                    }else if (this.current.parentElement.className != '' && this.current.parentElement !== undefined || this.current.parentElement.id != '' && this.current.parentElement !== undefined){
                        if (this.current.parentElement.className != '' && this.current.parentElement.id == ''){
                            this.imgval = this.current.src;
                            this.classval = this.current.parentElement.className;
                            this.found = parents.some(el => el.class == this.classval) || parents.some(el => el.imgsrc == this.imgval);
                            if(this.found){
                                this.indexval = parents.findIndex(el => el.class == this.classval);
                                parents[this.indexval].lengths++;
                            }else {parents.push(new this.class1(this.classval,'',this.current.parentElement,this.imgval,1));}
                        }else if (this.current.parentElement.className == '' && this.current.parentElement.id != ''){
                            this.imgval = this.current.src;
                            this.id = this.current.parentElement.id;
                            this.found = parents.some(el => el.id == this.id) || parents.some(el => el.imgsrc == this.imgval);
                            if(this.found){
                                this.indexval = parents.findIndex(el => el.id == this.id);
                                parents[this.indexval].lengths++;
                            }else {parents.push(new this.class1('',this.id,this.current.parentElement,this.imgval,1));}
                        }else if (this.current.parentElement.className != '' && this.current.parentElement.id != ''){
                            this.imgval = this.current.src;
                            this.classval = this.current.parentElement.className;
                            this.id = this.current.parentElement.id;
                            this.found = parents.some(el => el.class == this.classval) || parents.some(el => el.id == this.id) || parents.some(el => el.imgsrc == this.imgval);
                            if(this.found){
                                this.indexval = parents.findIndex(el => el.class == this.classval) || parents.some(el => el.id == this.id);
                                parents[this.indexval].lengths++;
                            }else {parents.push(new this.class1(this.classval,this.id,this.current.parentElement,this.imgval,1));}
                        }
                    }else{
                        if (parents.some(el => el.class == this.current.parentElement.className) || parents.some(el => el.id == this.current.parentElement.id)){}
                        else{
                            if (this.current.parentElement.parentElement.className != '' && this.current.parentElement.parentElement.id != ''){
                                this.imgval = this.current.src;
                                this.classval = this.current.parentElement.parentElement.className;
                                this.found = parents.some(el => el.class == this.classval) || parents.some(el => el.imgsrc == this.imgval);
                                if(this.found){
                                    this.indexval = parents.findIndex(el => el.class == this.classval);
                                    parents[this.indexval].lengths++;
                                }else {parents.push(new this.class1(this.classval,'',this.current.parentElement.parentElement,this.imgval,1));}
                            }else if (this.current.parentElement.parentElement.className == '' && this.current.parentElement.parentElement.id != ''){
                                this.imgval = this.current.src;
                                this.id = this.current.parentElement.parentElement.id;
                                this.found = parents.some(el => el.id == this.id) || parents.some(el => el.imgsrc == this.imgval);
                                if(this.found){
                                    this.indexval = parents.findIndex(el => el.id == this.id);
                                    parents[this.indexval].lengths++;
                                }else {parents.push(new this.class1('',this.id,this.current.parentElement.parentElement,this.imgval,1));}
                            }else if (this.current.parentElement.parentElement.className != '' && this.current.parentElement.parentElement.id != ''){
                                this.imgval = this.current.src;
                                this.classval = this.current.parentElement.parentElement.className;
                                this.id = this.current.parentElement.parentElement.id;
                                this.found = parents.some(el => el.class == this.classval) || parents.some(el => el.id == this.id) || parents.some(el => el.imgsrc == this.imgval);
                                if(this.found){
                                    this.indexval = parents.findIndex(el => el.class == this.classval) || parents.some(el => el.id == this.id);
                                    parents[this.indexval].lengths++;
                                }else {parents.push(new this.class1(this.classval,this.id,this.current.parentElement.parentElement,this.imgval,1));}
                            }
                        }
                    }
                }
            }

            tmpparents = tmpparents.concat(parents)

            this.val1 = (function algorithm1(parents){
                var realimage = []
                var same2length = []
                var fakelength = parents.length
                for (var x =0 ;x < fakelength; x++){
                    var classval1 = parents[0].class
                    var idval1 = parents[0].id
                    var parentv1 = parents[0].parents
                    if(classval1 != '' && idval1 == ''){var chilval1 = Ctp.search.searchbyclassname(frameid,classval1)[0].childElementCount}else{var chilval1 = Ctp.search.searchbyid(frameid,idval1).childElementCount}
                    if (parents[1] != undefined){
                        var classval2 = parents[1].class
                        var idval2 = parents[1].id
                        var parentv2 = parents[1].parents
                        if(classval2 != '' && idval2 == ''){var chilval2 = Ctp.search.searchbyclassname(frameid,classval2)[0].childElementCount}else{var chilval2 = Ctp.search.searchbyid(frameid,idval2).childElementCount}
                    }else{
                        classval2 = idval2 = parentv2 = chilval2 = undefined
                    }
                    if(parents.length < 2){
                    }
                    if(chilval1 == undefined || chilval2 == undefined){
                        break
                    }else if (chilval1 < chilval2){
                        var indexval = parents.findIndex(el => el.class == classval1) || parents.findIndex(el => el.id == idval1)
                        parents.splice(indexval,1);
                    }else if (chilval1 > chilval2){
                        var indexval = parents.findIndex(el => el.class == classval2) || parents.findIndex(el => el.id == idval2)
                        parents.splice(indexval,1)
                    }else if(chilval1 == chilval2){
                        var indexval1 = parents.findIndex(el => el.class == classval1) || parents.findIndex(el => el.id == idval1)
                        var indexval2 = parents.findIndex(el => el.class == classval2) || parents.findIndex(el => el.id == idval2)
                        same2length.push(parents[indexval1])
                        same2length.push(parents[indexval2])
                        parents.splice(indexval1,1);
                        parents.splice(indexval2,1);
                    }else{
                        console.log('Error')
                        console.log(parents)
                    }
                }

                if (typeof same2length !== 'undefined' && same2length.length != 0){
                    for (var x=0; x<same2length.length;x++){
                        if (parents[x] == undefined) {break}
                        var classval = same2length[x].class
                        var idval = same2length[x].id
                        if(classval != '' && idval == ''){var realimage = realimage.concat(Ctp.search.searchbyclassname(frameid, classval)[0].children);
                                                         }else {var realimage = realimage.concat(Ctp.search.searchbyid(frameid, idval).children)}
                    }
                } else{
                    for (var x=0;x < parents.length;x++){
                        if (parents[x] == undefined) {break}
                        var classval = parents[x].class
                        var idval = parents[x].id
                        if(classval != '' && idval == ''){var realimage = realimage.concat(Ctp.search.searchbyclassname(frameid, classval)[0].children);
                                                         }else {var realimage = realimage.concat(Ctp.search.searchbyid(frameid, idval).children)}
                    }
                }
                return realimage
            })(tmpparents);

            realimage = realimage.concat(this.val1)
            Ctp.search.searchimage.resultsearchimage= new Array(realimage,parents)
            Ctp.search.loopers.iframeready = true
            return new Array(realimage,parents);
        }
    },
    redirect: class redirect{
        static async redirect(url,method){
            if (method == 1){
                this.frm = document.createElement('form')
                this.frm.className = "traceForm"
                this.frm.method = "post"
                this.frm.action = 'index.php'
                this.inp1 = document.createElement('input')
                this.inp1.type = "text"
                this.inp1.name = 'url'
                this.inp1.value = url
                this.frm.append(this.inp1)
                this.inp1 = document.createElement('input')
                this.inp1.type = "submit"
                this.inp1.value = 'Trace'
                this.frm.append(this.inp1)
            }
            else if (method == 2){
                this.frm = document.createElement('form')
                this.frm.method = "post"
                this.frm.action = '/trace/'
                this.inp1 = document.createElement('input')
                this.inp1.id="url"
                this.inp1.type="text"
                this.inp1.name="url"
                this.inp1.value = url
                this.frm.append(this.inp1)
                this.select = document.createElement('select')
                this.select.name = "ua"
                this.select.id = "ua"
                this.opt1 = document.createElement("option")
                this.opt1.value = "Wheregoes.com Redirect Checker/1.0"
                this.opt1.selected="selected"
                this.select.append(this.opt1)
                this.frm.append(this.select)
                this.inp1 = document.createElement('input')
                this.inp1.value = ''
                this.inp1.name="phn"
                this.inp1.type="text"
                this.frm.append(this.inp1)
                this.inp1 = document.createElement('input')
                this.inp1.value = '3f6fdd457jk98fatr738924dg5hydsrg'
                this.inp1.name="php"
                this.inp1.type="text"
                this.frm.append(this.inp1)
            } 
            let data = new URLSearchParams();
            let urls = method == 1 ? 'https://corsanywhere.herokuapp.com/http://redirectcheck.com/' : 'https://corsanywhere.herokuapp.com/https://wheregoes.com/trace/'
            for (const pair of new FormData(this.frm)) {
                data.append(pair[0], pair[1]);
            }

            async function getdata(method){
                var list_obj = []
                if (method == 1) {
                    if (!redirect.redirect.resval.getElementsByClassName('content-middle')[1].innerText.includes('Maximum number of queries (40) used today')){
                        let list_result = Ctp.redirect.redirect.resval.getElementsByClassName('content-middle')[1].children[1].innerText.split('\n')
                        let obj_result
                        let current_url
                        let current_value
                        let current_arrayindex
                        let shift_current_value
                        list_result.forEach((description, x) => {
                            current_value = list_result[x].split(':')
                            current_arrayindex = list_obj.ArrObjindexOf(current_url)
                            if (list_result[x].substring(0,5).includes('http')){
                                obj_result = new Object
                                current_url = list_result[x]
                                list_obj.push(new Array(current_url,obj_result))

                            }
                            else if (list_result[x] == ""){}
                            else if (current_value.length > 1) {shift_current_value = current_value.shift();list_obj[current_arrayindex][1][shift_current_value] = current_value.join(':')}
                            else if (list_result[x].substring(0,5).includes('HTTP')) {list_obj[current_arrayindex][1]["HTTP_ver"] = list_result[x].split(' ')[0];list_obj[current_arrayindex][1]["Status_code"] = list_result[x].split(' ')[1]}

                        })
                        Ctp.redirect.redirect["resdata"] = list_obj
                        return list_obj
                    }else(await Ctp.redirect.redirect(url,2))
                }else {
                    var objlist
                    var listhyml = Ctp.redirect.redirect.resval.getElementsByClassName('trace-results')[0].children
                    for (let x = 0; x < listhyml.length; x++) {
                        if (x == listhyml.length-1){break}
                        if (x == 0){
                            var obj1 = listhyml[x].innerText
                        }
                        else if (x == 1){
                            var obj2 = listhyml[x].innerText
                        }
                        else if (x == 2){
                            listhyml[x].childNodes.forEach((description,y) =>{
                                if (y >= 2){
                                    listhyml[x].childNodes[y].childNodes.forEach((description,z) =>{
                                        if (listhyml[x].childNodes[y].childNodes[z].className.split(' ')[1] == 'num'){
                                            objlist = {}
                                            objlist["Redirect"] = listhyml[x].childNodes[y].childNodes[z].innerText
                                        }
                                        else if (listhyml[x].childNodes[y].childNodes[z].className.split(' ')[1] == 'status'){
                                            objlist["Status_code"] = listhyml[x].childNodes[y].childNodes[z].innerText
                                        }
                                        else if (listhyml[x].childNodes[y].childNodes[z].className.split(' ')[1] == 'url') {
                                            listhyml[x].childNodes[y].childNodes[z].childNodes.forEach((description,v) => {
                                                if (!listhyml[x].childNodes[y].childNodes[z].childNodes[v].innerText == ''){
                                                    if (listhyml[x].childNodes[y].childNodes[z].childNodes[v].tagName == 'A' || listhyml[x].childNodes[y].childNodes[z].childNodes[v].tagName == 'TEXTAREA'){
                                                        let url
                                                        url = listhyml[x].childNodes[y].childNodes[z].childNodes[v].innerText.includes('|') ? listhyml[x].childNodes[y].childNodes[z].childNodes[v].innerText.replaceAll('|','') : listhyml[x].childNodes[y].childNodes[z].childNodes[v].innerText
                                                        list_obj.push(new Array(url,objlist))
                                                    }
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    }
                    list_obj.push(obj1,obj2)
                    Ctp.redirect.redirect["resdata"] = list_obj
                    return list_obj
                }
            }

            async function fetching(urls,data){
                    return fetch(urls, {
                    method: 'post',
                    body: data,
                    headers: {
                    'Access-Control-Allow-Origin':'*'
                    },
                })
                .then(response => response.text()
                     ).then(data => {
                    let parser = new DOMParser();
                    Ctp.redirect.redirect["resval"] = parser.parseFromString(data, 'text/html');
                    return}).catch(err => {Ctp.redirect.redirect["resval"] = err;if (navigator.onLine === false){alert('Warning you are disconnected , please press ok when your connection is back')};return new Error('\nError has occur please read "redirect.redirect.resval"')})
            }
            await fetching(urls,data)
            let result = await getdata(method)
            return result
        }
    },
    searchchp: class searchchp{
        static async searchhref(){
            function sorting(c,y){
                let res = []
                for (let x = 0; x < c.length;x++){
                    let a = Array.from(document.querySelectorAll(y[x] == 'Class' ? '.'+c[x].replaceAll(' ','.') : '#'+c[x].replaceAll(' ','#')))
                    let t = []
                    for (let x = 0; x < a.length; x++) {
                        t.push(a[x].textContent.findAll(['1','2','3','4','5','6','7','8','9','0']))
                    }
                    res.push(t)
                }
                var start = []
                var els = []
                for (var x  = 0 ; x < res.length ; x++){
                    for (var y =0 ; y < res[x].length ; y++){
                        if (res[x][y][0]['sub'] == '0' || res[x][y][0]['sub'] == '1' && res[x][y].length == 1){
                            if (res[x][y][0]['sub'] == '0'){
                                var s = ''
                                var r
                                for ( let z =0; z < res[x][y].length ; z++){
                                    r = z == 0 ? s+res[x][y][z].sub : r+s
                                    s = z+1 < res[x][y].length ? res[x][y][z+1].sub : ''
                                }
                                start.push(r)
                            }
                            else if (res[x][y][0]['sub'] == '1'){
                                start.push(r2[x][y][0].sub)
                            }
                        }else {
                            var s = ''
                            var r
                            for ( let z =0; z < res[x][y].length ; z++){
                                r = z == 0 ? s+res[x][y][z].sub : r+s
                                s = z+1 < res[x][y].length ? res[x][y][z+1].sub : ''
                            }
                            els.push(r)
                        }
                    }
                }
                res = [...els,...start]
                let met = res.filter(el => el[el.length-1] == 1 && Math.abs(el.substr(0, el.length-1)) == 0 || el[el.length-1] == 0 && Math.abs(el.substr(0, el.length-1)) == 0).length < 2 ? res.indexOf(res.filter(el => el[el.length-1] == 1 && Math.abs(el.substr(0, el.length-1)) == 0 || el[el.length-1] == 0 && Math.abs(el.substr(0, el.length-1)) == 0)[0]) : res.findLastIndex(el => el == res.filter(el => el[el.length-1] == 1 && Math.abs(el.substr(0, el.length-1)) == 0 || el[el.length-1] == 0 && Math.abs(el.substr(0, el.length-1)) == 0)[res.filter(el => el[el.length-1] == 1 && Math.abs(el.substr(0, el.length-1)) == 0 || el[el.length-1] == 0 && Math.abs(el.substr(0, el.length-1)) == 0).length-1])
                var bf = met > res.length/2 && res.indexOf(res.filter(el => el[el.length-1] == 1 && Math.abs(el.substr(0, el.length-1)) == 0|| el[el.length-1] == 0&& Math.abs(el.substr(0, el.length-1)) == 0)[0]) !=  0 && res.length != 0 || res.length != 1? 'B' : 'F'
                return bf
            }
            var lastdss
            var asr = [];
            var classes = [];
            var ds = document.querySelectorAll('[href]')
            ds.forEach((description, index) => {
                let dss = ds[index].href.replace(document.domain, '').replace(document.location.protocol+'//','')
                let dst = ds[index].href.replaceAll(document.location.href,'')
                if (dss.length == 0) {this.dss = 'skip'}
                if (['genre','#', document.domain.replaceBetween(document.domain.indexOf('.'),document.domain.length,''),'skip'].some(el => dss.toLowerCase().includes(el)) | dss == '/'){
                }else {
                    if (ds[index].parentElement != document.head){
                        if (['chap','issue'].some(el => dss.includes(el))){
                            if (dss.includes('.') || ['?'].some(el => dst[0] == el) || dss == lastdss){
                            }else{
                                let t = ds[index].className != '' ? ds[index].className : ds[index].id != '' ? ds[index].id : ds[index].className = 'classeshref'
                                let tc = ds[index].className != '' ? 'Class' : ds[index].id != '' ? 'Id': ''
                                let asrval = asr.find(el => el[3] == t ? true : false)
                                if(asrval){
                                    asr.some(el => t == el[3]?el[4]++:false)
                                }else{
                                    asr.push(new Array(ds[index].parentElement,dss,tc,t,1))
                                }
                            }
                            lastdss = dss
                        }
                    }
                }
            })
            // Eliminating Different link with same classes / id
            var xs = []
            var xsr = []
            for (var x = 0; x < asr.length;x++){
                let xss = []
                let xsc = Array.from(document.querySelectorAll(asr[x][2] == 'Class' ? '.'+asr[x][3].replaceAll(' ','.') : '#'+asr[x][3].replaceAll(' ','#'))).ArrayFromTo(0,5);
                for (var y = 0; y<xsc.length;y++){if(xsc[y] != undefined){xss.push(xsc[y])}}
                xs.push(xss)
            }
            for (var x = 0; x < xs.length;x++){
                let trfl = []
                let cnt = []
                let cl = []
                for(var y =0; y < xs[x].length;y++){if(xs[x][y].href.includes(document.location.origin) || xs[x][y].href[0] == '/'){if(xs[x][y].href.includes(document.location.pathname)){trfl.push(true)}else if(document.location.pathname.split('/').filter(el => el).some(els => xs[x][y].href.includes(els))){trfl.push(true)}else if(['chap'].some(el => xs[x][y].href.replace(document.location.protocol+'//','').replace(document.location.host+'/','').split('/')[0].includes(el))){trfl.push(true)}}
                }
                trfl.forEach((desc,x) => {if(desc == true){cnt++}})
                if (cnt != 0){
                    xsr.push(xs[x][0].className != '' ? xs[x][0].className : xs[x][0].Id)
                }
            }
            if (xsr.length > 1){return xsr + '\n xsr has more 1 result'}
            let cl = []
            for (let xx=0;xx < xsr.length;xx++){
                cl.push(asr[asr.ArrayindexOf(null,xsr[xx])][2])
            }
            let res = await sorting(xsr,cl)
            return [xs,[cl,xsr],res]
        }
    },
    printing: class printimg{
        static removnimage(array){
            this.htmllist = []
            this.fakelist = [...array[0][0]]
            this.fklength = this.fakelist.length
            for (var x in this.fakelist){
                if (x == this.fklength){break}
                if(this.fakelist[x].tagName == 'IMG'){this.htmllist.push(this.fakelist[x])}
            }
            return this.htmllist
        }

        static async image_checker(url,format){
            const delayl = ms => new Promise(resolve => setTimeout(resolve, ms));
            // Trying To load with image()
            try {
                Ctp.printimg.image_checker.loadingimage = undefined
                async function load () {
                    for (var i = 0; i < 180; i++) {
                        await delayl(250);
                        if (Ctp.printimg.image_checker.loadingimage != undefined){
                            break
                        }
                    }
                }
                let s = new jspdf.jsPDF("p", 'in', 0, 0, [500,100]);
                let checkimg = new Image()
                checkimg.src = url
                s.onload = s.addImage(checkimg, format, 0,0, 500,100);Ctp.printing.image_checker.loadingimage = true
                await load()
                Ctp.printing.image_checker.result = new Array("No Error Found!",url)
            }
            catch(err){
                console.log("Error has occur trying to fix it")
                let err_m = err.stack
                if(err_m.includes(`undefined (reading 'data')`) == true) {
                    try {
                        console.log("Trying To find the redirect")
                        await Ctp.redirect.redirect(url,1);
                        if (Ctp.redirect.redirect.resval.__proto__ === document.implementation.createHTMLDocument().__proto__){
                            console.log("Got the URL redirected")
                            Ctp.printing.image_checker.result = new Array("Got redirected!",Ctp.redirect.redirect.resdata[Ctp.redirect.redirect.resdata.ArrObjindexOf("Status_code","200")][0])
                            return
                        }else{
                            console.log("Error when finding redirect url")
                            Ctp.printing.image_checker.result = new Array("Error has occur please see 'redirect.redirect.resval / redirect.redirect.resdata'")
                            return
                        }
                    }catch(e) {Ctp.printing.image_checker.result = new Array("Error has occur please see this url ",url);throw e}
                    return
                }else {
                    console.log(err)
                    printimg.image_checker.result = new Array("Error has occur please check the error  ",err)
                    return
                }
            }
        }

        static async printing(frameid,url=null){
            const delayl = ms => new Promise(resolve => setTimeout(resolve, ms));
            if ($.inArray(url,[undefined,null])){}
            else if ($.inArray(Object.getPrototypeOf(url),[String.prototype,Array.prototype] == -1)){throw new TypeError(url +' is not string nor array')}
            if (Object.getPrototypeOf(url) === String.prototype) {this.url = [url]}else {this.url = url}
            for (var l =0 ; l < this.url.length;l++){
                console.log(this.url[l])
                Ctp.search.loopers(frameid,this.url[l])
                async function load () {
                    for (var i = 0; i < 180; i++) {
                        await delayl(1000);
                        if (Ctp.search.searchimage.resultsearchimage != undefined){
                            break
                        }
                    }
                }
                await load();
                this.asda = this.removnimage(Ctp.search.searchimage.resultsearchimage)
                Ctp.search.searchimage.resultsearchimage = undefined
                if ($.inArray(frameid,[undefined,null]) != -1) {
                    if ($.inArray(Ctp.search.searchimage.frameid,[undefined,null]) == -1) {
                        frameid = Ctp.search.searchimage.frameid
                    }
                }
                for (var x=0; x< this.asda.length;x++) {
                    if (this.asda[x].className == ''){this.asda[x].className = 'example123';this.clname = 'example123'
                    }else if (!this.asda[x].className.includes('example123')) {this.asda[x].className = this.asda[x].className + ' example123';this.clname = 'example123'}
                }
                if($.inArray(frameid,[undefined,null]) ==  -1){
                    this.lp = document.getElementById(frameid).contentDocument.querySelectorAll('img.example123')
                }else {this.lp = document.querySelectorAll('img.example123')}
                this.dsaa = this.lp[0].src.split('.')
                this.set_size = [];
                this.lp.forEach((description, index) => {
                    this.widthOfElement = parseInt(window.getComputedStyle(this.lp[index]).width)/96;
                    this.heightOfElement = parseInt(window.getComputedStyle(this.lp[index]).height)/96;
                    console.log('width : ',this.widthOfElement,'heigth : ', this.heightOfElement);
                    this.set_size.push(new Array(this.heightOfElement,this.widthOfElement)); 
                });
                this.rawformat = this.lp[0].src.split('.')
                this.orient = this.set_size[0][0] >= this.set_size[0][1] ? 'p' : 'l'
                var t = new jspdf.jsPDF(this.orient, 'in', 0, 0, this.set_size[0]);
                for (let i = 0; i < this.lp.length; i++) {
                    let rescheck = null
                    this.rawformat = this.lp[i].src.split('.')
                    if (this.rawformat[this.dsaa.length-1] == 'jpg') {this.formatimg = 'JPEG'
                    }else if (this.rawformat[this.dsaa.length-1] == 'png') {this.formatimg = 'png'}
                    this.relimage = new Image()
                    await this.image_checker(this.lp[i].src,this.formatimg)
                    if (Ctp.printing.image_checker.result[0].split(' ')[0] == "Error"){
                        rescheck = "Skip"
                    }else {
                        rescheck = "Continue"
                    }
                    this.relimage.crossOrigin = "anonymous";
                    console.log(Math.max(i+1).toString()+' : {'+"\n"+'height : '+t.getPageHeight().toString()+"\n"+'width : '+ t.getPageWidth().toString()+ "\n"+ 'orient: ' + this.orient.toString() + "\n" + 'format: '+ this.formatimg + "\n}")
                    t.internal.pageSize.width = this.set_size[i][1]
                    t.internal.pageSize.height = this.set_size[i][0]
                    if (rescheck == "Continue"){
                        this.printing.loadingimage = undefined
                        async function load () {
                            for (var i = 0; i < 180; i++) {
                                await delayl(250);
                                if (Ctp.printing.printing.loadingimage != undefined){
                                    break
                                }
                            }
                        }
                        try {
                            this.relimage.src = Ctp.printing.image_checker.result[1]
                            t.onload = t.addImage(this.relimage, this.formatimg, 0,0, this.set_size[i][1], this.set_size[i][0]);this.printing.loadingimage = true
                            await load()
                        }
                        catch(err){
                            let err_m = err.stack
                            if(err_m.includes(`undefined (reading 'data')`) == true) {
                                this.relimage.src = 'https://corsanywhere.herokuapp.com/'+Ctp.printing.image_checker.result[1]
                                t.onload = t.addImage(this.relimage, this.formatimg, 0,0, this.set_size[i][1], this.set_size[i][0]);this.printing.loadingimage = true
                                await load()
                            }
                        }
                    }else if (rescheck == "Skip"){
                        t.text(this.set_size[i][1]/2-20, this.set_size[i][0]%2, "Skip! Because error has occur")
                    }
                    t.setPage(i + 1);
                    if (i < this.lp.length - 1) {
                        this.orient = this.set_size[i+1][0] >= this.set_size[i][1] ? 'p' : 'l'
                        t.addPage(this.set_size[i+1], this.orient);
                    }
                    Ctp.redirect.redirect.resdata = undefined
                    Ctp.redirect.redirect.resval = undefined
                }
                t.save(this.url[l].replace(document.location.protocol,'').replace(document.domain,'').replace('/','_')+'.pdf')
            }

        }
    }
}
