// this js for searching image from how many image in website
// purpose : search for manga,etc in website

class search{
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
    
    static searchimage(frameid){
        const img = document.getElementsByTagName('img');
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
                }else if (this.current.parentElement.className != '' || this.current.parentElement.id != ''){
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
                        if (this.current.parentElement.parentElement.className != '' && this.current.parentElement.parentElement.id == ''){
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
                if(classval1 != '' && idval1 == ''){var chilval1 = search.searchbyclassname(frameid,classval1)[0].childElementCount}else{var chilval1 = search.searchbyid(frameid,idval1).childElementCount}
                if (parents[1] != undefined){
                    var classval2 = parents[1].class
                    var idval2 = parents[1].id
                    var parentv2 = parents[1].parents
                    if(classval2 != '' && idval2 == ''){var chilval2 = search.searchbyclassname(frameid,classval2)[0].childElementCount}else{var chilval2 = search.searchbyid(frameid,idval2).childElementCount}
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
                    if(classval != '' && idval == ''){var realimage = realimage.concat(search.searchbyclassname(frameid, classval)[0].children);
                    }else {var realimage = realimage.concat(search.searchbyid(frameid, idval).children)}
                }
            } else{
                for (var x=0;x < parents.length;x++){
                    if (parents[x] == undefined) {break}
                    var classval = parents[x].class
                    var idval = parents[x].id
                    if(classval != '' && idval == ''){var realimage = realimage.concat(search.searchbyclassname(frameid, classval)[0].children);
                    }else {var realimage = realimage.concat(search.searchbyid(frameid, idval).children)}
                }
            }
            return realimage
        })(tmpparents);

        realimage = realimage.concat(this.val1)
        
        return new Array(realimage,parents);
    }
}
