
var i = "";
 const  tabIndex = ['1"', '2"', '3"', '4"'];
  
 for (i = 0; i < tabIndex.length; i++) {
    tabIndex[i];

var photobulder = {
        tag: '<img src="imagesecondaire',
        alternative: 'image',
        finTag: '/>',
     
    construct:
        function () {
            return this.tag + tabIndex[i] + ' alt=' + '"' + this.alternative + '"' + this.finTag;
        },       
    }
   
     console.log(photobulder.construct());
     
 }
