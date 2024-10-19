import $ from 'jquery';
import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true, 
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

  });

  $('#internet').html(`
    
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
        <a class=" text-white mb-8 text-6xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Apa itu internet?</a>
        <a class=" text-white text-lg font-semi" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Internet adalah jaringan global yang menghubungkan jutaan komputer dan perangkat lain di seluruh dunia. Ketika kamu mengirimkan pesan kepada teman atau mengunjungi situs web, informasi tersebut tidak langsung terkirim. Sebaliknya, data tersebut dipecah menjadi paket-paket kecil. Paket-paket ini adalah seperti kiriman kecil yang membawa informasi. Masing-masing paket akan mencari rute tercepat untuk sampai ke tujuan, yang bisa jadi sangat jauh. Setiap perangkat di internet memiliki alamat unik, yang disebut alamat IP. Alamat ini sangat penting karena membantu paket data tahu ke mana mereka harus pergi.</a> 
        <a class=" text-white mb-8 mt-8 text-5xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Bagaimana cara internet bekerja?</a>
        <a class=" text-white text-lg font-semi" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Bayangkan kamu mengirimkan surat kepada temanmu yang tinggal di kota lain. Kamu menulis suratnya, lalu memasukkannya ke dalam amplop dan menuliskan alamat rumah temanmu di amplop tersebut. Ketika surat itu sampai ke kantor pos, mereka mengirimkannya melalui truk dan mobil ke alamat tujuan. Ini mirip dengan cara kerja internet: paket data berpindah tempat melalui jaringan yang terhubung satu sama lain hingga sampai ke komputer tujuan. Dalam perjalanan, paket-paket ini bisa melewati banyak rute yang berbeda, tergantung pada kepadatan lalu lintas data di jaringan.</a>
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
        <source src="/src/internet.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        </div>
      </nav>
    </section>

        <div class="text-center">
            <a class="text-4xl text-white font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Pelajari yang lainnya</a>
            <div class="mt-10 flex justify-center space-x-4">
          
              <button id="http" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">HTTP dan HTTPS</button>

              <button id="domain" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Domain</button>

              <button id="hosting" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Hosting</button>

              <button id="dns" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">DNS</button>

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