/*Start scripts when page DOM loading complete*/
$( document ).ready(function(){
	function setActive (classItem, defaultItem){
        $( classItem ).on('mouseover', function(){
            $( this ).addClass('active');
            $( defaultItem ).removeClass('active');
        });
        $( classItem ).on('mouseleave', function(){
            $( this ).removeClass('active');
            $( defaultItem ).addClass('active');
        });
        var tempDef = $(defaultItem)[0].classList[1];
        $( classItem ).click(function(){z
            if($( classItem ).hasClass(tempDef)){
                $( classItem ).removeClass(tempDef)
            }
            $( this ).addClass(tempDef);
        })
        if( classItem == '.rentalTab') {
            changeTabIconColor()
        }
 	}
    function changeTabIconColor(){
        $('#IntercityIco')[0].outerHTML = '<img id="IntercityIco" src="img/SVG/IntercityActive.svg" alt="Intercity">';
        $('.rentalTab').click(function () {
            if($(this).hasClass('active')){
                if($( this )[0].id == 'linkIntercity'){
                    $('#IntercityIco')[0].outerHTML = '<img id="IntercityIco" src="img/SVG/IntercityActive.svg" alt="Intercity">'
                } else {
                    $('#IntercityIco')[0].outerHTML = '<img id="IntercityIco" src="img/SVG/IntercityMain.svg" alt="Intercity">'
                };
                if ($( this )[0].id == 'linkTourist'){
                    $('#TouristIco')[0].outerHTML = '<img id="TouristIco" src="img/SVG/TouristActive.svg" alt="Tourist">'
                } else {
                    $('#TouristIco')[0].outerHTML = '<img id="TouristIco" src="img/SVG/TouristMain.svg" alt="Tourist">'
                };
                if ($( this )[0].id == 'linkCorporate'){
                    $('#CorporateIco')[0].outerHTML = '<img id="CorporateIco" src="img/SVG/CorporateActive.svg" alt="Corporate">'
                } else {
                    $('#CorporateIco')[0].outerHTML = '<img id="CorporateIco" src="img/SVG/CorporateMain.svg" alt="Corporate">'
                };
                if ($( this )[0].id == 'linkChildren'){
                    $('#ChildrenIco')[0].outerHTML = '<img id="ChildrenIco" src="img/SVG/ChildrenActive.svg" alt="Children">'
                } else {
                    $('#ChildrenIco')[0].outerHTML = '<img id="ChildrenIco" src="img/SVG/ChildrenMain.svg" alt="Children">'
                };
                if ($( this )[0].id == 'linkTransfer'){
                    $('#TransferIco')[0].outerHTML = '<img id="TransferIco" src="img/SVG/TransferActive.svg" alt="Transfer">'
                } else {
                    $('#TransferIco')[0].outerHTML = '<img id="TransferIco" src="img/SVG/TransferMain.svg" alt="Transfer">'
                };
                if ($( this )[0].id == 'linkWedding'){
                    $('#WeddingIco')[0].outerHTML = '<img id="WeddingIco" src="img/SVG/WeddingActive.svg" alt="Wedding procession">'
                } else {
                    $('#WeddingIco')[0].outerHTML = '<img id="WeddingIco" src="img/SVG/WeddingMain.svg" alt="Wedding procession">'
                }
            }
        })
    }
    setActive('.headerNavItem', '.defaultNavitem');
    setActive('.rentalTab', '.defaultTab');
    setActive('.parkNavItem', '.defaultAuto');

    $('#sliderBtnRight').click(function(){
        var currentSlide = $('.testimSlide.active');
        var nextSlide = currentSlide.next();
        currentSlide.fadeOut(0).removeClass('active');
        nextSlide.fadeIn(0).addClass('active');
        if(nextSlide.length == 0) {
            $('.testimSlide').first().fadeIn(10).addClass('active');
        }
    })
    $('#sliderBtnLeft').click(function(){
        var currentSlide = $('.testimSlide.active');
        var prevSlide = currentSlide.prev();
        currentSlide.fadeOut(0).removeClass('active');
        prevSlide.fadeIn(0).addClass('active');
        if(prevSlide.length == 0){
            $('.testimSlide').last().fadeIn(0).addClass('active');
        }
    })

    function carRentTabsCheck(chekTabClass, linkTabClass){
        linkTabClass.click(function(){
            if (chekTabClass.hasClass('active')){}
            else{
                chekTabClass.addClass('active');
                if(chekTabClass.hasClass('carRentSlideIntercity')){}
                else{
                    $('.carRentSlideIntercity').removeClass('active');
                }
                if(chekTabClass.hasClass('carRentSlideTourist')){}
                else{
                    $('.carRentSlideTourist').removeClass('active');
                }
                if(chekTabClass.hasClass('carRentSlideCorporate')){}
                else{
                    $('.carRentSlideCorporate').removeClass('active');
                }
                if(chekTabClass.hasClass('carRentSlideChildren')){}
                else{
                    $('.carRentSlideChildren').removeClass('active');
                }
                if(chekTabClass.hasClass('carRentSlideTransfer')){}
                else{
                    $('.carRentSlideTransfer').removeClass('active');
                }
                if(chekTabClass.hasClass('carRentSlideWedding')){}
                else{
                    $('.carRentSlideWedding').removeClass('active');
                }
            }
        })
    }
    carRentTabsCheck($('.carRentSlideIntercity'), $('#linkIntercity'));
    carRentTabsCheck($('.carRentSlideTourist'), $('#linkTourist'));
    carRentTabsCheck($('.carRentSlideCorporate'), $('#linkCorporate'));
    carRentTabsCheck($('.carRentSlideChildren'), $('#linkChildren'));
    carRentTabsCheck($('.carRentSlideTransfer'), $('#linkTransfer'));
    carRentTabsCheck($('.carRentSlideWedding'), $('#linkWedding'));

    function carParkCheck(chekCarClass, linkCarClass){
        linkCarClass.click(function(){
            if (chekCarClass.hasClass('active')){}
            else{
                chekCarClass.addClass('active');
                if(chekCarClass.hasClass('autoParkSlideBuses')){}
                else{
                    $('.autoParkSlideBuses').removeClass('active');
                }
                if(chekCarClass.hasClass('autoParkSlideMicrobuses')){}
                else{
                    $('.autoParkSlideMicrobuses').removeClass('active');
                }
                if(chekCarClass.hasClass('autoParkSlideMinivans')){}
                else{
                    $('.autoParkSlideMinivans').removeClass('active');
                }
                if(chekCarClass.hasClass('autoParkSlideJeeps')){}
                else{
                    $('.autoParkSlideJeeps').removeClass('active');
                }
                if(chekCarClass.hasClass('autoParkSlideCars')){}
                else{
                    $('.autoParkSlideCars').removeClass('active');
                }
            }
        })
    }
    carParkCheck($('.autoParkSlideBuses'), $('#linkBuses'));
    carParkCheck($('.autoParkSlideMicrobuses'), $('#linkMicrobuses'));
    carParkCheck($('.autoParkSlideMinivans'), $('#linkMinivans'));
    carParkCheck($('.autoParkSlideJeeps'), $('#linkJeeps'));
    carParkCheck($('.autoParkSlideCars'), $('#linkCars'));
})

/*Start scripts without page DOM loading complete*/

function getRangeVal(){
	var rVal = $('#calcRange');
	var rengeValue = rVal.val();
    rengeValue = (rengeValue *100)/3;
    $('#calcRange').css("background", "-webkit-linear-gradient(left, #242b33 0, #242b33 "+rengeValue+"%, white "+rengeValue+"%, white 100%)");
    var p = $('#calcRange').css("background");
    console.log(p);
    console.log(rengeValue);
}
function checkClientData(inputData, changePlaceholder){
    var inputVal = $(inputData).val();
    if (inputVal !== ''){
        $(changePlaceholder).css('font-size', '10px');
        $(changePlaceholder).css('color', 'dimgray');
        $(changePlaceholder).css('margin-top', '-20px');
    } else if (inputVal == ''){
        $(changePlaceholder).css('font-size', '14px');
        $(changePlaceholder).css('color', 'gray');
        $(changePlaceholder).css('margin-top', '-8px');
    }
}
function checkName(){checkClientData('#orderFormName', '#orderClientName')}
function checkPhone(){checkClientData('#orderFormPhone', '#orderClientPhone')}