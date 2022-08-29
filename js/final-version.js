let optionAdsLayer = `{
    "optidigitalwrapper":{
        "display":"flex",
        "align-items":"center",
        "justify-content":"center",
        "margin":"auto"
    },
    "logoloading":{
      "background-image": "url('https://optidigital.jean-nguyen.dev/loading-optidigital-2.svg')",
      "background-position":"center",
      "background-repeat":"no-repeat",
      "min-width":"100px",
      "min-height":"100px"
    },
    "addbackground": {
      "background-color": "#ededed ",
      "display":"flex",
      "width":"fit-content",
      "padding": "10px 10px",
      "align-items" : "center"
    },
    "addtext":{
      "padding":"10px",
      "font-size":"1em",
      "color":"black",
      "background-color":"unset",
      "text-align":"center"
     },
    "optidigitalbrand":{
        "src":"https://optidigital.jean-nguyen.dev/opti-logo-100.webp",
        "alt":"Logo Optidigital"
     },
      "reverse":false,
      "important":"important",
      "customcss":"body {font-family: Arial, Helvetica, sans-serif;}",
      "adslotminHeight":true,
      "sticky":true,
      "fitcontent": false,
      "width100": false
  }`;

let traductionText = `{
      "textdesktop":"Publicit&eacute;",
      "textmobile":"Publicit&eacute; Mobile"
  }`;

// find the adslot
const adslotDiv = document.getElementById('optidigital-adslot-Billboard_1');
const minHeight = '280';

const adsLayerOptions = (options, text, adslotDiv, minHeight) => {
  //only for test on resquestly need to be remove for test sticky
  if (adslotDiv) {
    adslotDiv.classList.remove('optidigital-ad-center-sticky');
  }

  // parse the json
  let obj;
  let textTrad;
  try {
    textTrad = JSON.parse(text);
    obj = JSON.parse(options);
  } catch (e) {
    console.log('error');
    return false;
  }
  // reverse the text
  let textposition;
  if (obj.reverse) {
    textposition = 'column-reverse';
  } else {
    textposition = 'column';
  }
  // create the wrapper optidigital
  let WrapperDiv = document.createElement('div');
  WrapperDiv.className = 'optidigital-wrapper-div';
  for (const [key, value] of Object.entries(obj.optidigitalwrapper)) {
    WrapperDiv.style.setProperty(key, value, obj.important);
  }
  WrapperDiv.style.setProperty('flex-direction', textposition, obj.important);

  //add full background in the wrapper
  if (obj.hasOwnProperty('addbackground') && obj.fitcontent === false) {
    WrapperDiv.style.setProperty(
      'background-color',
      obj.addbackground['background-color'],
      obj.important
    );
  }
  if (adslotDiv) {
    adslotDiv.parentNode.insertBefore(WrapperDiv, adslotDiv);
    WrapperDiv.appendChild(adslotDiv);
  }
  // add minHeight
  if (obj.adslotminHeight == true) {
    WrapperDiv.style.setProperty('min-height', minHeight + 'px', obj.important);
  }
  // add the background fit-content
  if (obj.hasOwnProperty('addbackground') & obj.fitcontent) {
    let backgroundDiv = document.createElement('div');
    backgroundDiv.className = 'opti-background';
    backgroundDiv.style.setProperty(
      'flex-direction',
      textposition,
      obj.important
    );
    for (const [key, value] of Object.entries(obj.addbackground)) {
      backgroundDiv.style.setProperty(key, value, obj.important);
    }
    if (adslotDiv) {
      adslotDiv.parentNode.insertBefore(backgroundDiv, adslotDiv);
      backgroundDiv.appendChild(adslotDiv);
    }
  }
  //add loading
  if (obj.hasOwnProperty('logoloading')) {
    for (const [key, value] of Object.entries(obj.logoloading)) {
      if (adslotDiv) {
        adslotDiv.style.setProperty(key, value, obj.important);
      }
    }
  }
  // add text option
  if (obj.hasOwnProperty('addtext')) {
    let textDiv = document.createElement('div');
    textDiv.className = 'optidigital-text-ads';
    for (const [key, value] of Object.entries(obj.addtext)) {
      textDiv.style.setProperty(key, value, obj.important);
    }
    if (window.matchMedia('(min-width: 760px)').matches) {
      textDiv.innerHTML = `<span>${textTrad.textdesktop}</span>`;
    } else {
      textDiv.innerHTML = `<span>${textTrad.textmobile}</span>`;
    }
    if (adslotDiv) {
      adslotDiv.before(textDiv);
    }
  }
  // add logo Branding
  if (obj.hasOwnProperty('optidigitalbrand')) {
    let brandDiv = document.createElement('div');
    brandDiv.className = 'optidigital-Brand';
    brandDiv.style.setProperty('display', 'flex', obj.important);
    brandDiv.style.setProperty('flex-direction', textposition, obj.important);
    const optiLogo = `<span><a href="https://optidigital.jean-nguyen.dev/Logo-OptiDigital_w200.svg" target="_blank"
      ><img width="70" align="right" src="${obj.optidigitalbrand.src}" alt="Logo Optidigital The programmatic advertising solutions"
    /></a></span>`;
    if (obj.sticky) {
      if (brandDiv) {
        brandDiv.style.setProperty('position', 'sticky', obj.important);
        brandDiv.style.setProperty('top', '0', obj.important);
        if (obj.width100) {
          brandDiv.style.setProperty('width', '100%');
        }
      }
    }
    if (adslotDiv) {
      adslotDiv.parentNode.insertBefore(brandDiv, adslotDiv);
      brandDiv.appendChild(adslotDiv);
      adslotDiv.insertAdjacentHTML('afterend', optiLogo);
    }
  }
  // add sticky
  if (obj.sticky) {
    if (adslotDiv && !obj.hasOwnProperty('optidigitalbrand')) {
      adslotDiv.style.setProperty('position', 'sticky', obj.important);
      adslotDiv.style.setProperty('top', '0', obj.important);
      if (obj.width100) {
        adslotDiv.style.setProperty('width', '100%');
      }
    }
  }
  // create a style element for custom css
  if (obj.hasOwnProperty('customcss')) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = obj.customcss;
    document.head.appendChild(style);
  }
};
adsLayerOptions(optionAdsLayer, traductionText, adslotDiv, minHeight);
