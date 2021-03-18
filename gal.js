
var i = "";
 const  tabIndex = ['1', '2', '3', '4'];
  
 for (i = 0; i < tabIndex.length; i++) {
    tabIndex[i];
 }
var photobulder = {
    tag: '<img src="imagesecondaire',
    construct:
    function () {
        return this.tag;
    },       
}
var photobulder2 = {
    format: '.jpg"',
    alternative: ' alt="image"',
    finTag: '/>',
    construct2: 
        function() {
            return this.format + this.alternative + this.finTag;
        }
    }


console.log(photobulder.construct());
console.log(photobulder2.construct2());


var divContainer = document.querySelector('#flex');
divContainer.innerHTML =
    '<div class="photos">' + photobulder.construct() + tabIndex[0] + photobulder2.construct2() + '</div>' +
    '<div class="photos">' + photobulder.construct() + tabIndex[1] + photobulder2.construct2() + '</div>' +
    '<div class="photos">' + photobulder.construct() + tabIndex[2] + photobulder2.construct2() + '</div>';



