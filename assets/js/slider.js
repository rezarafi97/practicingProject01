$(document).ready(function () {
    $("#header-tools").mouseenter(function (e) {
        e.preventDefault();
        $("#header-tools-dropdown").fadeIn(200);
        $("#header-tools-dropdown").animate({
            top: "30px"
        }, 400, 0);

    });

    $("#header-tools").mouseleave(function (e) {
        e.preventDefault();
        $("#header-tools-dropdown").animate({
            top: "60px"
        }, 400, 0);
        $("#header-tools-dropdown").fadeOut(200);

    });

    $("#header-search").mouseenter(function (e) {
        e.preventDefault();
        $("#header-search-input").fadeIn(200);
        $("#header-search-input").animate({
            top: "30px"
        }, 400, 0);
    });

    $("#header-search").mouseleave(function (e) {
        e.preventDefault();
        $("#header-search-input").animate({
            top: "60px"
        }, 400, 0);
        $("#header-search-input").fadeOut(200);
    });

    $("#header-nav-shop").mouseenter(function (e) {
        e.preventDefault();
        $("#header-nav-shop-dropdown").fadeIn(200);
        $("#header-nav-shop-dropdown").animate({
            top: "20px"
        }, 400, 0);
    });

    $("#header-nav-shop").mouseleave(function (e) {
        e.preventDefault();
        $("#header-nav-shop-dropdown").animate({
            top: "60px"
        }, 400, 0);
        $("#header-nav-shop-dropdown").fadeOut(200);
    });

    $("#header-nav-pages").mouseenter(function (e) {
        e.preventDefault();
        $("#header-nav-pages-dropdown").fadeIn(200);
        $("#header-nav-pages-dropdown").animate({
            top: "20px"
        }, 400, 0);
    });

    $("#header-nav-pages").mouseleave(function (e) {
        e.preventDefault();
        $("#header-nav-pages-dropdown").animate({
            top: "60px"
        }, 400, 0);
        $("#header-nav-pages-dropdown").fadeOut(200);
    });

    $("#header-nav-blog").mouseenter(function (e) {
        e.preventDefault();
        $("#header-nav-blog-dropdown").fadeIn(200);
        $("#header-nav-blog-dropdown").animate({
            top: "20px"
        }, 300, 0);
    });

    $("#header-nav-blog").mouseleave(function (e) {
        e.preventDefault();
        $("#header-nav-blog-dropdown").animate({
            top: "60px"
        }, 400, 0);
        $("#header-nav-blog-dropdown").fadeOut(200);
    });

    $("#header-nav-elements").mouseenter(function (e) {
        e.preventDefault();
        $("#header-nav-elements-dropdown").fadeIn(200);
        $("#header-nav-elements-dropdown").animate({
            top: "20px"
        }, 400, 0);
    });

    $("#header-nav-elements").mouseleave(function (e) {
        e.preventDefault();
        $("#header-nav-elements-dropdown").animate({
            top: "60px"
        }, 400, 0);
        $("#header-nav-elements-dropdown").fadeOut(200);
    });

    $(".t1").mouseenter(function (e) {
        e.preventDefault();
        $(".t1 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t1 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t1").mouseleave(function (e) {
        e.preventDefault();
        $(".t1 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t1 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".t2").mouseenter(function (e) {
        e.preventDefault();
        $(".t2 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t2 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t2").mouseleave(function (e) {
        e.preventDefault();
        $(".t2 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t2 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".t3").mouseenter(function (e) {
        e.preventDefault();
        $(".t3 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t3 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t3").mouseleave(function (e) {
        e.preventDefault();
        $(".t3 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t3 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".t4").mouseenter(function (e) {
        e.preventDefault();
        $(".t4 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t4 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t4").mouseleave(function (e) {
        e.preventDefault();
        $(".t4 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t4 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".t5").mouseenter(function (e) {
        e.preventDefault();
        $(".t5 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t5 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t5").mouseleave(function (e) {
        e.preventDefault();
        $(".t5 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t5 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".t6").mouseenter(function (e) {
        e.preventDefault();
        $(".t6 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t6 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t6").mouseleave(function (e) {
        e.preventDefault();
        $(".t6 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t6 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".t7").mouseenter(function (e) {
        e.preventDefault();
        $(".t7 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t7 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t7").mouseleave(function (e) {
        e.preventDefault();
        $(".t7 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t7 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".t8").mouseenter(function (e) {
        e.preventDefault();
        $(".t8 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t8 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t8").mouseleave(function (e) {
        e.preventDefault();
        $(".t8 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t8 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".t9").mouseenter(function (e) {
        e.preventDefault();
        $(".t9 .dark-bcg").animate({
            opacity: '0.6'
        }, 400);

        $(".t9 .trendy-button-container").animate({
            bottom: '75px',
            opacity: '1'
        }, 400);
    });

    $(".t9").mouseleave(function (e) {
        e.preventDefault();
        $(".t9 .dark-bcg").animate({
            opacity: '0'
        }, 400);

        $(".t9 .trendy-button-container").animate({
            bottom: '0',
            opacity: '0'
        }, 400);
    });

    $(".i1 img").mouseenter(function (e) {
        e.preventDefault();
        $(".i1 .grey-bcg").animate({
            opacity: '0.3'
        }, 400);
    });

    $(".i1 img").mouseleave(function (e) {
        e.preventDefault();
        $(".i1 .grey-bcg").animate({
            opacity: '0'
        }, 400);
    });

    $(".i2 img").mouseenter(function (e) {
        e.preventDefault();
        $(".i2 .grey-bcg").animate({
            opacity: '0.3'
        }, 400);
    });

    $(".i2 img").mouseleave(function (e) {
        e.preventDefault();
        $(".i2 .grey-bcg").animate({
            opacity: '0'
        }, 400);
    });

    $(".i3 img").mouseenter(function (e) {
        e.preventDefault();
        $(".i3 .grey-bcg").animate({
            opacity: '0.3'
        }, 400);
    });

    $(".i3 img").mouseleave(function (e) {
        e.preventDefault();
        $(".i3 .grey-bcg").animate({
            opacity: '0'
        }, 400);
    });

    $(".i4 img").mouseenter(function (e) {
        e.preventDefault();
        $(".i4 .grey-bcg").animate({
            opacity: '0.3'
        }, 400);
    });

    $(".i4 img").mouseleave(function (e) {
        e.preventDefault();
        $(".i4 .grey-bcg").animate({
            opacity: '0'
        }, 400);
    });

    $(".i5 img").mouseenter(function (e) {
        e.preventDefault();
        $(".i5 .grey-bcg").animate({
            opacity: '0.3'
        }, 400);
    });

    $(".i5 img").mouseleave(function (e) {
        e.preventDefault();
        $(".i5 .grey-bcg").animate({
            opacity: '0'
        }, 400);
    });

    $(".i6 img").mouseenter(function (e) {
        e.preventDefault();
        $(".i6 .grey-bcg").animate({
            opacity: '0.3'
        }, 400);
    });

    $(".i6 img").mouseleave(function (e) {
        e.preventDefault();
        $(".i6 .grey-bcg").animate({
            opacity: '0'
        }, 400);
    });

    $(".slider-img-container img:last-child").prependTo(".slider-img-container");

    function moveLeft() {
        $(".slider-img-container").animate({
            left: "100vw"
        }, 500, function () {
            $(".slider-img-container img:last-child").prependTo(".slider-img-container");
            $(".slider-img-container").css('left', '0');
        });

        prevDot();
    };

    function moveRight() {
        $(".slider-img-container").animate({
            left: "-100vw"
        }, 500, function () {
            $(".slider-img-container img:first-child").appendTo(".slider-img-container");
            $(".slider-img-container").css('left', '0');
        });

        nextDot();
    };

    $(".prev-button").click(function () {
        moveLeft();
    });

    $(".next-button").click(function () {
        moveRight();
    });

    let i = 0;

    let dot = document.querySelectorAll(".dot");

    function nextDot() {
        dot[i].classList.remove("active");
        i++;
        if (i > 2) {
            i = 0;
        };
        dot[i].classList.add("active");
    };

    function prevDot() {
        dot[i].classList.remove("active");
        i--;
        if (i < 0) {
            i = 2;
        };
        dot[i].classList.add("active");
    };

    $(".dot-1").click(function () {
        switch (i) {
            case 1:
                moveLeft();
                break;

            case 2:
                moveRight();
                break;

            default:
                break;
        };
    });

    $(".dot-2").click(function () {
        switch (i) {
            case 2:
                moveLeft();
                break;

            case 0:
                moveRight();
                break;

            default:
                break;
        };
    });

    $(".dot-3").click(function () {
        switch (i) {
            case 0:
                moveLeft();
                break;

            case 1:
                moveRight();
                break;

            default:
                break;
        };
    });

    let k = 0;

    function mediaSection() {

        let media = document.createElement("section");

        media.classList.add("media");

        media.classList.add("py-1");

        media.classList.add(k);

        k++;

        $(".header-tools-dropdown").prepend(media);

        let mediaImg = document.createElement("img");

        mediaImg.classList.add("header-tools-dropdown-img");

        media.appendChild(mediaImg);

        let mediaBody = document.createElement("section");

        mediaBody.classList.add("media-body");

        mediaBody.classList.add("pl-1");

        media.appendChild(mediaBody);

        let mediaBodyHeader = document.createElement("h4");

        mediaBodyHeader.classList.add("media-body-header");

        mediaBody.appendChild(mediaBodyHeader);

        let mediaBodyText = document.createElement("p");

        mediaBodyText.classList.add("media-body-text");

        mediaBody.appendChild(mediaBodyText);

        let priceNumber = document.createElement("span");

        priceNumber.classList.add("price-number");

        mediaBodyText.appendChild(priceNumber);

        let mediaPrice = document.createElement("span");

        mediaPrice.classList.add("media-price");

        mediaBodyText.appendChild(mediaPrice);

        let mediaBodyPrice = document.createElement("p");

        mediaBodyPrice.classList.add("media-body-price");

        mediaBody.appendChild(mediaBodyPrice);

        let dollarSign = document.createElement("span");

        dollarSign.classList.add("dollar-sign");

        mediaBodyPrice.appendChild(dollarSign);

        let mediaPrice1 = document.createElement("span");

        mediaPrice1.classList.add("media-price1");

        mediaBodyPrice.appendChild(mediaPrice1);

        let mediaIcon = document.createElement("span");

        mediaIcon.classList.add("media-icon");

        mediaIcon.classList.add("d-flex");

        mediaIcon.classList.add("justify-content-center");

        mediaIcon.classList.add("align-items-center");

        mediaIcon.classList.add("mediaClose");

        media.appendChild(mediaIcon);

        let mediaIconTime = document.createElement("i");

        mediaIconTime.classList.add("fa");

        mediaIconTime.classList.add("fa-times");

        mediaIcon.appendChild(mediaIconTime);
    };

    (function closeItem() {
        $(".media-icon").click(function () {
            $(this).parent().remove();

            totalCartPrice();

            removingSaleBadge();
        });
    })();

    function closeItem() {
        $(".mediaClose").click(function () {
            $(this).parent().remove();

            totalCartPrice();

            removingSaleBadge();
        });
    };

    function totalCartPrice() {
        let totalPrice = 0;

        let mediaPriceArray = 0;

        let mediaPrice = document.querySelectorAll(".media-price");

        for (let index = 0; index < mediaPrice.length; index++) {
            const element = mediaPrice[index];
            mediaPriceArray = Number(element.innerHTML);
            totalPrice += mediaPriceArray;
        };

        document.querySelector("#total-price").innerHTML = totalPrice;
    };


    $(".shopCart").click(function () {

        mediaSection();

        let f = this.value - 1;

        let imgSrc = document.querySelectorAll(".trendy-img");

        console.log(imgSrc);

        let ItemName = document.querySelectorAll(".trendy-header");

        console.log(ItemName);


        let itemPrice = document.querySelectorAll(".trendy-price");

        console.log(itemPrice);

        let i = f;

        const element1 = imgSrc[i].src;

        document.querySelector(".header-tools-dropdown-img").setAttribute("src", element1);

        let j = f;

        const element2 = ItemName[j].innerHTML;

        document.querySelector(".media-body-header").innerHTML = element2;

        let k = f;

        const element3 = itemPrice[k].innerHTML;

        document.querySelector(".media-price").innerHTML = element3;

        document.querySelector(".media-price1").innerHTML = element3;

        document.querySelector(".price-number").innerHTML = "1 x ";

        document.querySelector(".dollar-sign").innerHTML = "$";

        closeItem();

        totalCartPrice();
    });

});