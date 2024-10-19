import $ from 'jquery';
import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });

  $('#page').html(`
    <section>
      <nav class="mt-20 mb-20 px-18">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex" data-scroll data-scroll-call="animate">
            <img class="w-10 h-10 rounded-full opacity-0 translate-x-10 transition-all duration-700" src="/src/icon.svg" alt="icon">
            <a href="#" class="text-white text-xl font-bold ml-4 mt-1 opacity-0 translate-x-10 transition-all duration-700" 
               style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
              Netweb.<span class="text-sky-300">id</span>
            </a>
          </div>
        </div>
      </nav>
    </section>
  `);

  scroll.update();
});
