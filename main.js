import $ from 'jquery';
import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true, 
  });


  scroll.on('call', (func, state, obj) => {
    if (func === 'animate' && obj.el) {
      const logo = obj.el.querySelector('img');
      const link = obj.el.querySelector('a');

      if (logo) {
        logo.classList.add('opacity-100', 'translate-x-0');
        logo.classList.remove('opacity-0', 'translate-x-10');
      }

      if (link) {
        link.classList.add('opacity-100', 'translate-x-0');
        link.classList.remove('opacity-0', 'translate-x-10');
      }
    }

  const goToInternetButton = document.getElementById('internet');
  goToInternetButton.addEventListener('click', () => {
    window.location.href = 'internet.html';
  });

  const goToHttpButton = document.getElementById('http');
  goToHttpButton.addEventListener('click', () => {
  window.location.href = 'http.html';
  });

  const goToDomainButton = document.getElementById('domain');
  goToDomainButton.addEventListener('click', () => {
    window.location.href = 'domain.html';
  });

  const goToHostingButton = document.getElementById('hosting');
  goToHostingButton.addEventListener('click', () => {
    window.location.href = 'hosting.html';
  });

  const goToDnsButton = document.getElementById('dns');
  goToDnsButton.addEventListener('click', () => {
    window.location.href = 'dns.html';
  });

  const goToBrowserButton = document.getElementById('browser');
  goToBrowserButton.addEventListener('click', () => {
    window.location.href = 'browser.html';
  });

  const goTotesButton = document.getElementById('tes');
  goTotesButton.addEventListener('click', () => {
    window.location.href = 'internet.html';
  });

  });

  $('#app').html(`
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
    
    <!-- Ini Content -->
    <section>
      <nav class="mt-10 mb-20 px-40 grid grid-cols-2 gap-4">
        <div class="mt-10">
          <a class=" text-white text-xl font-small" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Selamat Datang di</a>
          <div>
            <a class=" text-white text-8xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Netweb.<span class="text-sky-300">id</span></a>
          </div>
          <div class="mt-8 mr-20 mb-4">
            <a class=" text-white text-sm font-small" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);">NetWeb adalah sebuah website edukasi yang menyediakan informasi dasar tentang teknologi internet dan komponen-komponen penting di dalamnya. Melalui NetWeb, kalian dapat mempelajari cara internet bekerja dan memahami konsep-konsep fundamental seperti HTTP, HTTPS, DNS, domain, hosting, dan browser.</a> 
          </div>
          <div class="mb-20">
            <button id="tes" type="button" class="text-white bg-sky-500 hover:bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Mulai Belajar</button>
          </div>
        </div>

        <div>
          <div class="ml-16">
            <a class="ml-3 text-4xl text-white font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Apa yang ingin kamu pelajari?</a>
            <div class="grid gap-4 mt-10">
    
              <button id="internet" class="bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-60 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Internet</button>
          
              <button id="http" class=" ml-72 bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-60 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">HTTP dan HTTPS</button>

              <button id="domain" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-60 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Domain</button>

              <button id="hosting" class=" ml-72 bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-60 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Hosting</button>

              <button id="dns" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-60 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">DNS</button>

              <button id="browser" class=" ml-72 bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-60 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Browser</button>

            </div>
          </div>
        </div>
      </nav>
    </section>

    <!-- Ini Footbar -->
    <section>
      <footer class="mt-40 backdrop-blur-md bg-black/50">
        <div class="w-full max-w-screen-xl mx-auto p-4">
          <div class="flex items-center justify-center">
            <span class="block text-sm text-white text-center">
              © 2024 Netweb.id™. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </section>
  `);

  scroll.update();
});
