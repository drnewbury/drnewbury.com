$(document).ready(function() {

let i = 1;
let y = i+1;
const offsetDist = 3000;

	function bannerShift(i) {
	
						animateElement('.banner-title', offsetDist, 0, i);
						animateElement('.glassline-logo', offsetDist, 0, i);
						animateElement('.image', offsetDist, 0, i);
						
						
						let bannerNo = 'banner-bg-0' + i;
						$('#bannner').attr('class', bannerNo);
					
						animateElement('.banner-title', offsetDist, 0, y );
						animateElement('.glassline-logo', offsetDist, 0, y );
						animateElement('.image', offsetDist, 1, y );	
	}
	
	function bannerReset() {
						setOffset('.banner-title', offsetDist, i);
						setOffset('.glassline-logo', offsetDist, i);
						setOffset('.image', offsetDist, i);
		
						ticker();
		
						setOffset('.banner-title', offsetDist, i+1);
						setOffset('.glassline-logo', offsetDist, i+1);
						setOffset('.image', offsetDist, i+1);
		
						$('#banner-content-0' + 3 ).css("display", "block");
						
						bannerShift(i);
	}
									
	function animateElement( item, distance, nextFunct, bannerInst ) {
			if (nextFunct) {
					console.log("animate next ran. i= " + i);
					$('#banner-content-0' + bannerInst + ' ' + item).animate({
					left: '-=' + distance,
					}, 1750, 'easeInSine', function() { setTimeout( function() { bannerReset();  }, 5000); } )
			} else {
					$('#banner-content-0' + bannerInst + ' ' + item).animate({
					left: '-=' + distance,
					}, 1750, 'easeInSine')
			}
	}
	
	function setOffset( item, distance, bannerInst ) {
						$('#banner-content-0' + bannerInst + ' ' + item).css("left", distance + "px");
	}
	
	function ticker() {
			console.log("ticker ran. i= " + i);
		if (i <= 1) {
			i = ++i;
			y = i+1;
		} else {
			console.log("ticker else ran. i= " + i);
			i = 1;
			y = 1;
		}
	}


setOffset('.banner-title', offsetDist, i+1);
setOffset('.glassline-logo', offsetDist, i+1);
setOffset('.image', offsetDist, i+1);
$('#banner-content-0' + 2 ).css("display", "block");
	
setTimeout(function() { bannerShift(i); console.log("timeout"); }, 4000);
	
	
function preload(images) {
    if (document.images) {
        var i = 0;
        var imageArray = new Array();
        imageArray = images.split(',');
        var imageObj = new Image();
        for(i=0; i<=imageArray.length-1; i++) {
            //document.write('<img src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
            imageObj.src=imageArray[i];
        }
    }
}

preload("/img/banner-design-boat-01.png","/img/banner-design-rear-derailleur-01.png","/img/banner-design-front-derailleur-01.png","/img/bg-banner-blue-snow.png","/img/bg-banner-blue-bokeh.png","/img/bg-banner-blue-grass.png");
  
});



