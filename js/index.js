// button background
const background = document.getElementById('background');
const bgOption = document.getElementById('bg-option');
const optidigitalWrapper = document.querySelectorAll(
  '.optidigital-wrapper > .optidigital-center-item'
);
background.addEventListener('click', () => {
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
fitContent.addEventListener('click', () => {
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
ButtonAds.addEventListener('click', () => {
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
optiBrand.addEventListener('click', () => {
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
const textAdsDesktop = document.getElementById('opti-text-desktop');
const textAdsMobile = document.getElementById('opti-text-mobile');
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

if (window.matchMedia('(min-width: 760px)').matches) {
  textAdsDesktop.oninput = () => {
    textAds.forEach(element => {
      element.innerHTML = `<span>${textAdsDesktop.value}</span>`;
    });
  };
} else {
  textAdsMobile.oninput = () => {
    textAds.forEach(element => {
      element.innerHTML = `<span>${textAdsMobile.value}</span>`;
    });
  };
}

// reverse text ads
const ReverseTextAds = document.getElementById('opti-text-reverse');
ReverseTextAds.addEventListener('click', () => {
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

// loading - logo change

const changeLogo = document.getElementById('loading-logo');
const loadingSvg = document.getElementById('opti-loading');
const optiLogo = document.getElementById('opti-logo');
const optiLoading = document.querySelectorAll('.opti-loading');
changeLogo.addEventListener('click', () => {
  optiLoading.forEach(element => {
    if (element.src.indexOf('loading-optidigital-2.svg') > 1) {
      element.src = './images/brand-100px.png';
    } else {
      element.src = './images/loading-optidigital-2.svg';
    }
  });
});
