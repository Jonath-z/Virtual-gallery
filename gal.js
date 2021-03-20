
var i = "";
const tabIndex = ['1', '2', '3', '4','6','7','8','9','10','11','12','13','14','15','16','17','18','19','10','21','22'];
    var photobulder = {
        tag: '<img src="image_mini/imagesecondaire',
        // linkTag: '<a href="imagesecondaire',
        construct:
            function () {
                return this.tag;
            }
    }
var photobulder2 = {
        format: '.jpg"',
        alternative: ' alt="image"',
        finTag: '/></a>',
        construct2:
            function () { 
                return this.format + this.alternative + this.finTag;
            }
    }
 
var mini = {
    miniTag: '_mini',
    mini_tag: function () {
        return this.miniTag;
    }
}
console.log(mini.mini_tag());
console.log(photobulder.construct());
console.log(photobulder2.construct2());
 
 for (i = 0; i <= tabIndex.length; i++) {
    tabIndex[i];
     
    var divContainer = document.querySelector('#flex');
     divContainer.innerHTML =
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[0] + '.jpg">' + photobulder.construct() + tabIndex[0] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[1] + '.jpg">' + photobulder.construct() + tabIndex[1] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[2] + '.jpg">' + photobulder.construct() + tabIndex[2] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[3] + '.jpg">' + photobulder.construct() + tabIndex[3] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[4] + '.jpg">' + photobulder.construct() + tabIndex[4] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[5] + '.jpg">' + photobulder.construct() + tabIndex[5] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[6] + '.jpg">' + photobulder.construct() + tabIndex[6] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[7] + '.jpg">' + photobulder.construct() + tabIndex[7] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[8] + '.jpg">' + photobulder.construct() + tabIndex[8] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[9] + '.jpg">' + photobulder.construct() + tabIndex[9] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[10] + '.jpg">' + photobulder.construct() + tabIndex[10] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[11] + '.jpg">' + photobulder.construct() + tabIndex[11] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[12] + '.jpg">' + photobulder.construct() + tabIndex[12] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[13] + '.jpg">' + photobulder.construct() + tabIndex[13] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[14] + '.jpg">' + photobulder.construct() + tabIndex[14] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[15] + '.jpg">' + photobulder.construct() + tabIndex[15] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[16] + '.jpg">' + photobulder.construct() + tabIndex[16] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[17] + '.jpg">' + photobulder.construct() + tabIndex[17] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[18] + '.jpg">' + photobulder.construct() + tabIndex[18] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[19] + '.jpg">' + photobulder.construct() + tabIndex[19] + mini.mini_tag() + photobulder2.construct2() + '</div>' +
         '<div class="photos">' + '<a href="images/imagesecondaire' + tabIndex[20] + '.jpg">' + photobulder.construct() + tabIndex[20] + mini.mini_tag() + photobulder2.construct2() + '</div>';
         
}


