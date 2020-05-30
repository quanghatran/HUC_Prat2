$(document).ready(function(){
    // append child for class admissionsImage


    // add event when mouse over and leave of image: admissionsImage
    $(".imageUndergraduate").hover(function(){
        // $(this).addClass(" animate__animated animate__backInUp");

        $(".imageUndergraduate").append(
            $("<div>", { class: "admissionsImageCreated animate__animated animate__zoomIn", id: "imageUndergraduate"}).append(
                $("<a>", {class: "button pa ", text: "Tìm hiểu thêm"})
            )
        )
    },function(){
        $("#imageUndergraduate").remove();
    });

    $(".imagePostgraduate").hover(function(){
        $(".imagePostgraduate").append(
            $("<div>", { class: "admissionsImageCreated animate__animated animate__zoomIn", id: "imagePostgraduate"}).append(
                $("<a>", {class: "button pa", text: "Tìm hiểu thêm"})

            )
        )
    },function(){
        $("#imagePostgraduate").remove();
    });

    //filter box event

    //isotope

    let $btns = $('.mainBox .listEvent li a');

    $btns.click(function (e) {

        $('.mainBox .listEvent li a').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.boxsEvent').isotope({
            filter: selector
        });

        return false;
    })

});

$("body").append(
  $("<a>", { class: "homeButton pf", href: "#" }).append(
    $("<i>", { class: "far fa-arrow-alt-circle-up" })
  )
)
