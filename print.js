function printm(ClassName) {
        var printContents = document.getElementsByClassName(ClassName)[0].innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;

    };
document.getElementsByClassName('prints')[0].addEventListener("click", printm(ClassName));
