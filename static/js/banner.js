// image scrolling

    window.addEventListener("resize", function () {
        "use strict"; window.location.reload();
    });
    document.addEventListener("DOMContentLoaded", function () {
        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function (element) {
            element.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        })
        // make it as accordion for smaller screens
        if (window.innerWidth < 992) {
            // close all inner dropdowns when parent is closed
            document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
                everydropdown.addEventListener('hidden.bs.dropdown', function () {
                    // after dropdown is hidden, then find all submenus
                    this.querySelectorAll('.submenu')
                        .forEach(function (everysubmenu) {
                            // hide every submenu as well
                            everysubmenu
                                .style
                                .display =
                                'none';
                        });
                })
            });
            document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
                element.addEventListener('click', function (e) {
                    let nextEl = this.nextElementSibling;
                    if (nextEl && nextEl.classList
                        .contains('submenu')) {
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault();
                        console.log(nextEl);
                        if (nextEl.style.display ==
                            'block') {
                            nextEl.style.display =
                                'none';
                        }
                        else {
                            nextEl.style.display =
                                'block';
                        }
                    }
                });
            })
        }
        // end if innerWidth
    });
     // DOMContentLoaded  end


// image scrolling

    $(document).ready(function () {
        var banner = $(".banner");
        var images = banner.find("img");
        var imgWidth = images.outerWidth();
        var bannerWidth = images.length * imgWidth;
        var currentPosition = 0;

        // Set the banner width to accommodate all images
        banner.css("width", bannerWidth + "px");

        // Function to slide the banner to a new position
        function slideTo(position) {
            banner.animate({ marginLeft: -position }, 1000, "swing");
        }

        // Next button click event
        $(".next-button").on("click", function () {
            if (currentPosition < bannerWidth - imgWidth) {
                currentPosition += imgWidth;
                slideTo(currentPosition);
            }
        });

        // Previous button click event
        $(".prev-button").on("click", function () {
            if (currentPosition > 0) {
                currentPosition -= imgWidth;
                slideTo(currentPosition);
            }
        });
    });

// scrolling bannner

    $(document).ready(function () {
        var banner = $(".banner");
        var images = banner.find("img");
        var imgWidth = images.outerWidth();
        var bannerWidth = images.length * imgWidth;
        var currentPosition = 0;
        var autoScrollInterval = 3000; // Adjust the interval (in milliseconds) as needed

        banner.css("width", bannerWidth + "px");

        function slideTo(position) {
            banner.animate({ marginLeft: -position }, 1000, "swing");
        }

        function nextSlide() {
            if (currentPosition < bannerWidth - imgWidth) {
                currentPosition += imgWidth;
            } else {
                currentPosition = 0;
            }
            slideTo(currentPosition);
        }

        function startAutoScroll() {
            setInterval(nextSlide, autoScrollInterval);
        }

        // Start auto-scrolling when the page loads
        startAutoScroll();
    });
