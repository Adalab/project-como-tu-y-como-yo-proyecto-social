'use strict';

var picSectionInfoPic = document.querySelector ('.info-img');
var textSectionInfoPic = document.querySelector ('.text-sec-info-pic');

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', 'fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#261d1a'],
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page'],



        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);


            if(index == 6){

							picSectionInfoPic.classList.add('info-img-transition')
							textSectionInfoPic.classList.add('info-img-transition')

            }

        }
    });
});
//JS para la flecha

var buttonScrollDown = document.querySelector('#button-scrolldown');
function scrollDown(event){
	$.fn.fullpage.moveSectionDown();
	event.preventDefault();
}

buttonScrollDown.addEventListener('click', scrollDown);
