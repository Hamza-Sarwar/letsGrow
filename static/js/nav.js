 let scrollpos = window.scrollY;

  const header = document.getElementById("navbar");

  const header_height = header.offsetHeight;

  header.classList.remove("navbar-scroll");

  const add_class_on_scroll = () => header.classList.add("navbar-scroll");

  const remove_class_on_scroll = () => header.classList.remove("navbar-scroll");



  window.addEventListener('scroll', function () {

    scrollpos = window.scrollY;



    if (scrollpos >= header_height) {

      add_class_on_scroll()

    } else {

      remove_class_on_scroll()

    }



  })


