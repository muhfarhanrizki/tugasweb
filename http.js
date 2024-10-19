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

  $('#http').html(`
    
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
        <a class=" text-white mb-8 text-6xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Apa itu HTTP & HTTPS?</a>
        <a class=" text-white text-lg font-semi" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">HTTP (HyperText Transfer Protocol) adalah cara yang digunakan oleh browser untuk meminta dan mengirimkan data di internet. Ketika kamu mengakses situs web, browser mengirimkan permintaan menggunakan HTTP untuk mengambil informasi. Namun, ketika kita berbicara tentang keamanan, HTTPS adalah versi aman dari HTTP. Huruf "S" di akhir berarti "secure," yang berarti informasi yang dikirimkan dilindungi dari orang yang tidak berwenang.</a>
        <a class=" text-white mb-8 mt-8 text-5xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Bagaimana cara kerja HTTP & HTTPS?</a>
        <a class=" text-white text-lg font-semi" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Saat kamu mengunjungi situs web yang menggunakan HTTP, seperti www.contoh.com, data yang kamu kirimkan, seperti nama pengguna atau kata sandi, dapat dilihat oleh orang lain yang mungkin mencoba mengaksesnya. Ini sama seperti mengirimkan surat tanpa amplop, di mana siapa pun dapat membaca isi surat tersebut. Namun, jika situs itu menggunakan HTTPS, seperti www.contohsecure.com, data yang kamu kirimkan akan dienkripsi. Ini berarti meskipun ada seseorang yang mencoba melihat data tersebut, mereka tidak akan dapat membaca informasi yang terkandung di dalamnya, seperti kunci rahasia atau informasi pribadi. HTTPS sangat penting untuk situs-situs yang menangani transaksi keuangan atau informasi sensitif lainnya.</a>
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
        <source src="/src/http.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        </div>
      </nav>
    </section>

        <div class="text-center">
            <a class="text-4xl text-white font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Pelajari yang lainnya</a>
            <div class="mt-10 flex justify-center space-x-4">
          
              <button id="internet" class=" bg-transparent border border-white hover:bg-white text-white hover:text-sky-800 font-bold w-40 h-12 rounded-lg" style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);">Internet</button>

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