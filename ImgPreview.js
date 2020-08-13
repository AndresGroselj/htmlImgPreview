var imgPreviews = document.getElementsByClassName("preview");
imgPreviews = Array.prototype.slice.call( imgPreviews );

imgPreviews.forEach(_imgPreview => {
    console.log(_imgPreview.getAttribute("for"));
    var _inputImg = document.getElementById(_imgPreview.getAttribute("for"));
    console.log(_inputImg.value);
    _inputImg.addEventListener("change", function(event){
        var _reader = new FileReader();
        _reader.onload = function(){
            _imgPreview.src = _reader.result
        }

        if (CheckValidity(_inputImg)){
            _reader.readAsDataURL(_inputImg.files[0]);
            _imgPreview.removeAttribute("hidden");
        }else{
            _imgPreview.setAttribute("hidden","");
            _imgPreview.src = "";
        }
    })
})

function CheckValidity(_inputImg){
    var _file = _inputImg.files[0];

    var _formats = _inputImg.accept.replace(/,/g,'|')
    var _allowedExtensions = new RegExp('('+_formats+')$','i');
    var _filePath = _inputImg.value;

    return(_file && _allowedExtensions.test(_filePath))
}