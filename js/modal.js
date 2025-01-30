function ModalSlider(container) {
    this.$container = $(container);
    this.changeSlide = function(back, idx) {
        var $active = this.$container.find(".slides .active");
        this.$container.find(".slide").not(".active").css("z-index", 1);
        var $next =
            $active.next(".slide").length > 0
                ? $active.next(".slide")
                : this.$container.find(".slides .slide:first");
        var $last =
            $active.prev(".slide").length > 0
                ? $active.prev(".slide")
                : this.$container.find(".slides .slide:last");
        $next = back === true ? $last : $next;
        $next.css("z-index", 2);
        $active.fadeOut(400, function() {
            $active
                .css("z-index", 1)
                .show()
                .removeClass("active");
            $next.css("z-index", 3).addClass("active");
        });
        var $caption = this.$container.find(".slider-image-caption");
        var captionText = $next.attr("title");
        $caption.html(captionText);
        if (idx === -1) {
            this.$container.find('.slide[data-index="0"]')
                .addClass("active")
                .css("z-index", 3);
        }
    };
    this.nextSlide = function() {
        this.changeSlide();
    };
    this.lastSlide = function() {
        this.changeSlide(true);
    };
    this.init = function() {
        var $caption = this.$container.find(".slider-image-caption");
        $caption.html(this.$container.find(".slide.active").attr("title"));
    };
    this.setSlide = function(slideIndex) {
        var slideIdx = parseInt(slideIndex);
        if (typeof slideIdx === "number") {
            var idx = slideIndex - 1;
            var lastSlide = this.$container.find(".slide").length;
            this.$container.find(".slide").removeClass("active");
            this.$container.find('.slide[data-index="' + idx + '"]').addClass("active");
            this.changeSlide(false, idx);
        }
    };
}


// SLIDER 1 (UI Design)
var Slider1 = new ModalSlider(".slider-modal.ui");

Slider1.init();

$(".slider-modal.ui .nav-arrow.right").on("click", function() {
    Slider1.nextSlide();
});

$(".slider-modal.ui .nav-arrow.left").on("click", function() {
    Slider1.lastSlide();
});

$(".show-ui").on("click", function() {
    $(".slider-modal.ui").addClass("modal-active");
    $('body').css('overflow', 'hidden');
});

$(".slider-modal.ui .modal-close").on("click", function() {
    $(this).parent().removeClass("modal-active");
    $('body').css('overflow', 'auto');
});

// SLIDER 2 (Video)
var Slider2 = new ModalSlider(".slider-modal.video");

Slider2.init();

$(".slider-modal.video .nav-arrow.right").on("click", function() {
    Slider2.nextSlide();
});

$(".slider-modal.video .nav-arrow.left").on("click", function() {
    Slider2.lastSlide();
});

$(".show-video").on("click", function() {
    $(".slider-modal.video").addClass("modal-active");
    $('body').css('overflow', 'hidden');
});

$(".slider-modal.video .modal-close").on("click", function() {
    $(this).parent().removeClass("modal-active");
    $('body').css('overflow', 'auto');
});

// SLIDER 3 (Graphic)
var Slider3 = new ModalSlider(".slider-modal.graphic");

Slider3.init();

$(".slider-modal.graphic .nav-arrow.right").on("click", function() {
    Slider3.nextSlide();
});

$(".slider-modal.graphic .nav-arrow.left").on("click", function() {
    Slider3.lastSlide();
});

$(".show-graphic").on("click", function() {
    $(".slider-modal.graphic").addClass("modal-active");
    $('body').css('overflow', 'hidden');
});

$(".slider-modal.graphic .modal-close").on("click", function() {
    $(this).parent().removeClass("modal-active");
    $('body').css('overflow', 'auto');
});
