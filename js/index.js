// button background
const background = document.getElementById('background');
const bgOption = document.getElementById('bg-option');
const optidigitalWrapper = document.querySelectorAll(
  '.optidigital-wrapper > .optidigital-center-item'
);
background.addEventListener('click', function () {
  // only local
  if (bgOption.className === 'no-option') {
    bgOption.style.display = 'block';
    bgOption.classList.remove('no-option');
  } else {
    bgOption.style.display = 'none';
    bgOption.classList.add('no-option');
  }

  optidigitalWrapper.forEach(element => {
    if (element.classList.length === 1) {
      element.classList.add('optidigital-bg');
    } else {
      element.classList.remove('optidigital-bg');
    }
  });
});

// background option
const fitContent = document.getElementById('fit-content');
fitContent.addEventListener('click', function () {
  const allBackground = document.querySelectorAll('.optidigital-bg');
  if (fitContent.checked === true) {
    allBackground.forEach(element => {
      element.style.width = 'fit-content';
      element.style.padding = '10px 10px';
    });
  }
  if (fitContent.checked === false) {
    allBackground.forEach(element => {
      element.style.width = '100%';
      element.style.padding = '10px 0px';
    });
  }
});

// button ads
const ButtonAds = document.getElementById('googleads');
const optidigitalCenter = document.querySelectorAll('.optidigital-flex-center');
const optidigitalAds = document.querySelectorAll('.google-ads');
const optidigitalLoading = document.querySelectorAll('.optidigital-loading');
const optidigitalBrand = document.querySelectorAll('.optidigital-brand');
const googleAdsOption = document.getElementById('google-ads-option');
ButtonAds.addEventListener('click', function () {
  // only local
  if (googleAdsOption.className === 'no-option') {
    googleAdsOption.style.display = 'block';
    googleAdsOption.classList.remove('no-option');
  } else {
    googleAdsOption.style.display = 'none';
    googleAdsOption.classList.add('no-option');
  }
  optidigitalCenter.forEach(element => {
    if (element.classList.length === 3) {
      element.children[0].style.display = 'none';
      element.children[1].style.display = 'block';
      //element.children[2].style.display = 'block';
      element.classList.remove('no-ads');
    } else {
      element.children[0].style.display = 'block';
      element.children[1].style.display = 'none';
      element.children[2].style.display = 'none';
      element.classList.add('no-ads');
    }
  });
});
//option add brand
const optiBrand = document.getElementById('opti-brand');
optiBrand.addEventListener('click', function () {
  const allBrand = document.querySelectorAll('.optidigital-brand');
  if (optiBrand.checked === true) {
    allBrand.forEach(element => {
      element.style.display = 'block';
    });
  }
  if (optiBrand.checked === false) {
    allBrand.forEach(element => {
      element.style.display = 'none';
    });
  }
});

// button text ads
const ButtonTextAds = document.getElementById('text-ads');
const textAds = document.querySelectorAll('.optidigital-text-ads');
const textAdsOption = document.getElementById('text-ads-option');
const textAdsCustom = document.getElementById('opti-text-custom');

ButtonTextAds.addEventListener('click', function () {
  // only local
  if (textAdsOption.className === 'no-option') {
    textAdsOption.style.display = 'block';
    textAdsOption.classList.remove('no-option');
  } else {
    textAdsOption.style.display = 'none';
    textAdsOption.classList.add('no-option');
  }
  textAds.forEach(element => {
    if (element.classList.length === 2) {
      element.style.display = 'block';
      //element.innerHTML = `<span>${textCustom}</span>`;
      element.classList.remove('no-text');
    } else {
      element.style.display = 'none';
      element.classList.add('no-text');
    }
  });
});
// option text ads
// option custom text
let textCustom;
textAdsCustom.oninput = () => {
  textCustom = textAdsCustom.value;
  textAds.forEach(element => {
    element.innerHTML = `<span>${textCustom}</span>`;
  });
};

// reverse text ads
const ReverseTextAds = document.getElementById('opti-text-reverse');
ReverseTextAds.addEventListener('click', function () {
  const allTextAds = document.querySelectorAll('.optidigital-center-item');
  if (ReverseTextAds.checked === true) {
    allTextAds.forEach(element => {
      element.style.flexDirection = 'column-reverse';
    });
  }
  if (ReverseTextAds.checked === false) {
    allTextAds.forEach(element => {
      element.style.flexDirection = 'column';
    });
  }
});
