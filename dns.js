import $ from 'jquery';
import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true, 
  });

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

  const goToBrowserButton = document.getElementById('browser');
  goToBrowserButton.addEventListener('click', () => {
    window.location.href = 'browser.html';
  });

  });

  $('#dns').html(`
    
    <section>
      <nav class="mt-20 mb-20 px-18">
        <div class="container mx-auto flex items-center justify-between" >
          <div class="flex"">
            <img class="w-10 h-10 rounded-full" src="/src/icon.svg" alt="icon">
            <a href="#" class="text-white text-xl font-bold ml-4 mt-1" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);"> Netweb.<span class="text-sky-300">id</span></a>
          </div>
          <div>
          <a href="index.html" class="text-white font-medium text-md" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Beranda</a>
          </div>
        </div>
      </nav>
    </section>
    
    <!-- Ini Content -->

       <section>
       <div class="bg-white/10 backdrop-blur-2xl flex ml-40 mr-40 rounded-xl" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">
        <div class="flex items-center justify-center min-h-screen">

        <div class="flex flex-col gap-4 text-center mx-24">
        <a class=" text-white mb-8 text-6xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Apa itu DNS?</a>
        <a class=" text-white text-lg font-semi" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">DNS (Domain Name System) adalah sistem yang membantu mengubah nama domain menjadi alamat IP. Ketika kamu mengetikkan nama domain di browser, DNS akan mencari alamat IP yang sesuai agar browser bisa terhubung ke server yang menyimpan situs web tersebut. Proses ini sangat cepat dan biasanya terjadi dalam hitungan detik.</a> 
        <a class=" text-white mb-8 mt-8 text-5xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Bagaimana cara kerja DNS?</a>
        <a class=" text-white text-lg font-semi" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Bayangkan kamu memiliki peta kota dan kamu ingin mengunjungi temanmu di alamat tertentu. Nama temanmu adalah "Kate," tetapi peta tersebut hanya menunjukkan alamat rumahnya. Ketika kamu mencari di peta, kamu menemukan alamat Budi dan bisa langsung menuju ke rumahnya. DNS bekerja seperti peta: saat kamu mengetik "www.contoh.com," DNS mencari alamat IP yang tepat sehingga browser bisa mengarahkannya ke situs yang benar. Jika DNS tidak ada, kita akan kesulitan menemukan situs web yang kita cari, karena kita harus mengingat semua alamat IP.</a>
        </div>

        </div>
        
       </div>

       
    
        </section>
   

     <section>
      <nav class="mt-10 mb-20 px-40">
      <div class="text-center">
      <a class=" text-white mb-8 mt-8 text-2xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Simak video ini untuk penjelasan lebih lanjut.<a>
      </div>
        <div class="mt-10 flex justify-center ">
        <video class="rounded-2xl w-1/2" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);" controls>
        <source src="/src/dns.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        </div>
      </nav>
    </section>

        <div class="text-center">
            <a class="text-4xl text-white font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Pelajari yang lainnya</a>
            <div class="mt-10 flex justify-center space-x-4">
          
              <button id="internet" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Internet</button>

              <button id="http" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">HTTP & HTTPS</button>

              <button id="domain" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Domain</button>

              <button id="hosting" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Hosting</button>

              <button id="browser" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Browser</button>

            </div>
        </div>

    

    <!-- Ini Footbar -->
     <section>
    <footer class="mt-16 mb-8 backdrop-blur-md bg-black/50">
      <div class="w-full max-w-screen-xl mx-auto p-4">
        <div class="flex items-cente6 justify-center">
          <span class="block text-sm text-white text-center">
            © 2024 Netweb.id™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  </section>
  `);

  scroll.update();