
<!DOCTYPE html>
<html lang="SK-sk">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Adam Lednicky">
  <meta name="keywords" content="bahalph bahal fotenie zilina">
  <meta name="description" content="Webstránka fotografky z Ukrajiny, Anny Lednickej, s možnosťou kontaktovania cez kontaktný formulár, prezretia si portfólia jej doterajšej práce a informácii o nej v samostatnej sekcii, stránku je možné preložiť do troch jazykov priamo z menu, a to slovenského, čo je default, ukrajinského a anglického">

  <title>bahal.ph / Anna Lednická / fotím emócie</title>

  <link rel="icon" href="/photo/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="/style/styleMain.css">
  <link rel="stylesheet" href="/style/styleMenu.css">
  <link rel="stylesheet" href="/style/styleAbout.css">
  <link rel="stylesheet" href="/style/styleContactForm.css">
  <link rel="stylesheet" href="/style/stylePortfolio.css">
  <link rel="stylesheet" href="/style/stylePricing.css">

  <script src="src/JS/variables.js" type="module" defer></script>
  <script src="src/JS/script.js" type="module" defer></script>
  <script src="src/JS/imagesStuff.js" type="module" defer></script>
  <script src="src/JS/languageChange.js" defer></script>
  <script src="src/JS/sendingContactForm.js" type="module" defer></script>
</head>



<body>
  <?php include 'src/php_stuff/send_email.php'; ?>
  <!-- this html code here is for main page -->
  <section id="mainContainer" class="mainContainer">

    <header>
      <div class="navbar">
        <ul class="navbar-nav">
          <li id="menuIcon"><img src="/photo/icon-menu.svg" alt="SVG File"></li>
        </ul>
        <ul class="navbar-soc">
          <li><a href="https://www.instagram.com/bahal.ph/"><img src="../photo/icon-instagram-34.svg" alt="SVG File"></a></li>
          <li><a href="https://www.facebook.com/bahal.photography"><img src="../photo/icon-facebook-34.svg" alt="SVG File"></a></li>
          <li><a href="#"><img src="../photo/icon-whatsapp-34.svg" alt="SVG File"></a></li>
        </ul>
      </div>
    </header>

    <main>
      <section class="mainText">
        <div class="blockOfText">
          <h1 id="mainName">Anna Bahal</h1>
          <p id="mainDescription">Fotografka z Ukrajiny. Zachytím vaše emócie na fotografiu.</p>
        </div>
      </section>
    </main>

  </section>


    <!-- this html code here is for Menu with language options -->
    <section id="menuContainer" class="menuContainer">

      <ul class="menuSelect">
        <li id="portfolio">Portfólio</li>
        <li id="about">O Mne</li>
        <li id="contact">Kontaktujte Ma</li>
        <li id="pricing">Cenník</li>
         <ul class="languageSelect">      
           <li id="sk">SK</li>
           <li id="ua">UA</li>
           <li id="en">EN</li>
         </ul>
      </ul>
  
    </section>


   <!-- this html code here is for contact form -->
  <section id="contactContainer" class="contactContainer">

    <div class="contact-form">
      <h2 id="contactMeForm">Kontaktujte Ma</h2>
      <form id="contactForm" action="src/php_stuff/send_email.php" method="POST">
        <div class="form-group">
          <label id="nameContactForm" for="name">Meno</label>
          <input type="text" id="name" name="name">
          <span id="nameError">Meno je povinné pole. Hneď ho tam napíš.</span>
        </div>
        <div class="form-group">
          <label id="emailContactForm" for="email">Email</label>
          <input type="email" id="email" name="email">
          <span id="emailError">Prosím, napíš tam skutočnú emailovú adresu.</span>
        </div>
        <div class="form-group">
          <label id="messageContactForm" for="message">Správa</label>
          <textarea id="message" name="message"></textarea>
          <span id="messageError">Napíš tu aspoň niečo, hocičo...</span>
        </div>
        <div class="form-group buttons">
          <button id="backButton" type="button">Späť</button>
          <button id="submitButton" type="button">Poslať</button>
        </div>
      </form>
      <div class="otherContacts">
        <a href="tel:+421/951775896"><p>+421951775896</p></a>
        <a href="mailto:abagal496@gmail.com"><p>abagal496@gmail.com</p></a>
      </div>
    </div>
    <span id="errorMessage">Chyba na serveri, skús to prosím neskôr.</span>
    <span id="successMessage">Tvoju správu som dostala, ozvem sa ti čo najskôr.</span>

  </section> 


   <!-- this html code here is for About Me  -->
  <section id="aboutContainer" class="aboutContainer">

    <div class="aboutContent">
      <img class="lazy" data-src="/photo/IMG_princessMain.jpg" alt="Author" class="author-photo">
      <h2 id="aboutName">Anna Bahal</h2>
      <p class="authorInfo" id="authorInfo1">Ahoj! Volám sa Anna a vášnivo sa zaujímam o fotografovanie. Hoci som dokončila lekársku univerzitu, moja pravá vášeň leží vo svete fotografovania.</p>
      <p class="authorInfo" id="authorInfo2">V roku 2021 som začala svoju fotografickú cestu. Učila som sa, absolvovala kurzy a hlboko som sa ponárala do štúdia fotografie. Pol roka som sa tešila zo svojich úspechov, no potom ma okolnosti donútili presunúť sa na Slovensko. Hoci začať svoju cestu vo fotografovaní v novej krajine bola výzva, som pripravená prekonať všetky prekážky. Verím, že pravé umenie vzniká z lásky a oddanosti k svojej práci. Snažím sa rásť a zdokonalovať, aby som mohla uchovávať svoju vášeň v každom snímku a robiť z fotografovania svoje stále povolanie.</p>
      <p class="authorInfo" id="authorInfo3">V každom snímku sa snažím zachytiť život a energiu. Fotografujem nielen ľudí, ale aj ich emócie a city. Moje zábery ožívajú vďaka prirodzenému svetlua autenticite okamihu. Snažím sa zachytiť momenty, aby každá fotografia iskrila životom.</p>
    </div>

  </section>


   <!-- this html code here is for Portfolio  -->
  <section id="portfolioContainer" class="portfolioContainer">

    <div class="portfolioContent">

      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto1.jpeg" alt="Image 1">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto6.jpeg" alt="Image 6">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto3.jpeg" alt="Image 3">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto4.jpeg" alt="Image 4">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto5.jpeg" alt="Image 5">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto2.jpeg" alt="Image 2">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto7.jpeg" alt="Image 7">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto11.jpeg" alt="Image 8">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto12.jpeg" alt="Image 9">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto13.jpeg" alt="Image 10">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto8.jpeg" alt="Image 11">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto9.jpeg" alt="Image 12">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto10.jpeg" alt="Image 13">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto14.jpeg" alt="Image 14">
      </a>
      <a class="portfolioItem" rel="noopener">
        <img class="lazy" data-src="/photo/portfolioFoto15.jpeg" alt="Image 15">
      </a>

    </div>

  </section>



   <!-- this html code here is for Pricing  -->
  <section id="pricingContainer" class="pricingContainer">

    <div class="pricingContent">
      <p id="pricingInfo1">Cena za fotenie je 65 eur (max 4 osoby na fotení). Trvanie fotenia je do 1,5 hodiny. Všetko je možné individuálne prerokonzultovať a dohodnúť sa.</p>
      <p id="pricingInfo2">Ako výsledok fotenia obdržíte:</p>
      <p class="whatUserGet" id="pricingInfo3">150-300 neupravených fotografií (originály) do ďalšieho dňa cez online úložisko (uchovávanie po dobu 7 dní).</p>
      <p class="whatUserGet" id="pricingInfo4">30 upravených fotografií do 7 dní (z toho 10 s podrobnou retušou, ak je potrebné) cez internet.</p>
      <p id="pricingInfo5">Ak fotenie nebude v okrese Žilina, je nutné zabezpečiť dopravu na miesto fotenia alebo dodatočne zaplatiť za cestu.</p>
    </div>

  </section>

  
</body>
</html>