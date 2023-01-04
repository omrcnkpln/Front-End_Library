
var images = $('#images');
var imageItems = images.find("li");
var writings = $('#writings');
var writingItems = writings.find("li");
$(function () {
    // <!-- _____________________________ main _____________________________________________________________ -->

    imageItems.mouseover(function () {
        index = $(this).index();
        imageItemsOn(index);
        writingsOn(index);
    });

    imageItems.mouseout(function () {
        index = $(this).index();
        imageItemsOut(index);
    });

    images.mouseout(function () {
        imagesOut();
        writingsOut(index);
    });
});

function imageItemsOn(index){
    imageItems.eq(index).addClass("hover").siblings().removeClass("hover");

    // imageItems.eq(index).animate({
    //     width: 60+"%"
    //   });

}
function imageItemsOut(index){
    // imageItems.eq(index).animate({
    //     width: 20+"%"
    //   });
}
function imagesOut(){
    imageItems.eq(0).addClass("hover").siblings().removeClass("hover");

    // imageItems.eq(0).animate({
    //     width: 60+"%"
    //   });
}

function writingsOn(index){
    writingItems.eq(index).addClass("hover").siblings().removeClass("hover");
    writingItems.eq(index).addClass("hover").siblings().removeClass("hover");
}
function writingsOut(index){
    writingItems.eq(0).addClass("hover").siblings().removeClass("hover");
}





// imageItems.animate({
    //     opacity: 0.25,
    //     left: "+=50",
    //     height: "toggle"
    //   }, 5000, function() {
    //     // Animation complete.
    //   });
