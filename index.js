import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Venez chez Buddiz Event", "Rencontrons-nous !"],
    typeSpeed: 50,
    loop: true
  });
};

loadDynamicBannerText();
