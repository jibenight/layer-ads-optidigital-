let optionAdsLayer = `{
    "optidigitalwrapper":{
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "margin":"10px"
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
        "textdesktop":"Publicit&eacute;",
        "textmobile":"Publicit&eacute; Mobile",
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
      "sticky":false,
      "fitcontent": false  
  }`;

// find the adslot
const adslotDiv = document.getElementById('optidigital-adslot-Billboard_1');
const minHeight = '280';

const adsLayerOptions = (options, adslotDiv, minHeight) => {
  let obj;
  try {
    obj = JSON.parse(options);
  } catch (e) {
    console.log('error');
    return false;
  }
  // create the wrapper optidigital
  let WrapperDiv = document.createElement('div');
  WrapperDiv.className = 'optidigital-wrapper-div';
  //WrapperDiv.style.setProperty('min-height', minHeight + 'px', obj.important);
  for (const [key, value] of Object.entries(obj.optidigitalwrapper)) {
    WrapperDiv.style.setProperty(key, value, obj.important);
  }
  // reverse the text
  let textposition = 'column';
  if (obj.reverse) {
    textposition = 'column-reverse';
  }
  WrapperDiv.style.setProperty('flex-direction', textposition, obj.important);

  //add only wallpaper
  if (obj.hasOwnProperty('addbackground') & (obj.fitcontent === false)) {
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

  // add sticky
  if (obj.sticky) {
    WrapperDiv.style.setProperty('position', 'sticky', obj.important);
    WrapperDiv.style.setProperty('top', '1px', obj.important);
    WrapperDiv.style.setProperty('z-index', '9999999', obj.important);
  }
  // add minHeight
  if (obj.adslotminHeight == true) {
    WrapperDiv.style.setProperty('min-height', minHeight + 'px', obj.important);
  }

  // add the background fit-content
  if (obj.hasOwnProperty('addbackground') & obj.fitcontent) {
    let backgroundDiv = document.createElement('div');
    backgroundDiv.className = 'opti-background';
    let textposition = 'column';
    if (obj.reverse) {
      textposition = 'column-reverse';
    }
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
      textDiv.innerHTML = `<span>${obj.addtext.textdesktop}</span>`;
    } else {
      textDiv.innerHTML = `<span>${obj.addtext.textmobile}</span>`;
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
    let textposition = 'column-reverse';
    if (obj.reverse) {
      textposition = 'column';
    }
    brandDiv.style.setProperty('flex-direction', textposition, obj.important);
    brandDiv.innerHTML = `<span><a href="https://www.optidigital.com" target="_blank"
    ><img width="100" align="right" src="${obj.optidigitalbrand.src}" alt="Logo Optidigital The programmatic advertising solutions"
  /></a></span>`;
    if (adslotDiv) {
      adslotDiv.parentNode.insertBefore(brandDiv, adslotDiv);
      brandDiv.appendChild(adslotDiv);
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
adsLayerOptions(optionAdsLayer, adslotDiv, minHeight);
