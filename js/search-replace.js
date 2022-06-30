let optionAdsLayer = `{
  "optidigitalwrapper":{
      "display":"flex",
      "flex-direction":"column",
      "justify-content":"center",
      "align-items":"center"
  },
  "logoloading":{
    "background-image": "url('https://optidigital.jean-nguyen.dev/loading-optidigital-2.svg')",
    "background-position":"center",
    "background-repeat":"no-repeat"
  },
  "addbackground": {
    "background-color": "#ededed ",
    "width":"100%",
    "padding": "10px 0px",
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
      "alt":"Logo Optidigital",
      "alignself":"flex-end"
   },
    "reverse":false,
    "important":"",
    "customcss":"body {font-family: Arial, Helvetica, sans-serif;}",
    "onlyloading":false,
    "adslotminHeight":true,
    "sticky":false 
}`;

// find the adslot
const adslotDiv = document.getElementById('optidigital-adslot-Billboard_1');
const minHeight = '280';

const adsLayerOptions = (options, adslotDiv, minHeight) => {
  try {
    let obj = JSON.parse(options);
    let backgroundDiv = document.createElement('div');
    // create the wrapper optidigital
    let WrapperDiv = document.createElement('div');
    WrapperDiv.className = 'optidigital-wrapper-div';
    WrapperDiv.style.cssText += `min-height:${minHeight}px${obj.important};`;
    for (const [key, value] of Object.entries(obj.optidigitalwrapper)) {
      WrapperDiv.style.cssText += `${key}: ${value} ${obj.important}`;
    }
    if (obj.sticky) {
      WrapperDiv.style.cssText += `position:sticky${obj.important};top:0${obj.important};z-index:9999999${obj.important};`;
    }
    adslotDiv.parentNode.insertBefore(WrapperDiv, adslotDiv);
    WrapperDiv.appendChild(adslotDiv);

    if (obj.adslotminHeight == true) {
      adslotDiv.style.cssText += `min-height: ${minHeight}px${obj.important};)`;
    }

    // add the background option
    if (obj.hasOwnProperty('addbackground')) {
      backgroundDiv.className = 'opti-background';

      let textposition = 'column';
      if (obj.reverse) {
        textposition = 'column-reverse';
      }
      backgroundDiv.setAttribute(
        'style',
        `display:flex${obj.important}; flex-direction:${textposition}${obj.important};`
      );
      for (const [key, value] of Object.entries(obj.addbackground)) {
        backgroundDiv.style.cssText += `${key}: ${value} ${obj.important}`;
        //setup the loading with background
        if (obj.hasOwnProperty('logoloading')) {
          for (const [key, value] of Object.entries(obj.logoloading)) {
            backgroundDiv.style.cssText += `${key}: ${value} ${obj.important}`;
          }
        }
      }
      adslotDiv.parentNode.insertBefore(backgroundDiv, adslotDiv);
      backgroundDiv.appendChild(adslotDiv);
    }

    //add only loading
    if (obj.onlyloading == true) {
      for (const [key, value] of Object.entries(obj.logoloading)) {
        WrapperDiv.style.cssText += `${key}: ${value} ${obj.important}`;
      }
    }

    // add text option
    if (obj.hasOwnProperty('addtext')) {
      let textDiv = document.createElement('div');
      textDiv.className = 'optidigital-text-ads';
      for (const [key, value] of Object.entries(obj.addtext)) {
        textDiv.style.cssText += `${key}: ${value} ${obj.important}`;
      }
      if (window.matchMedia('(min-width: 760px)').matches) {
        textDiv.innerHTML = `<span>${obj.addtext.textdesktop}</span>`;
      } else {
        textDiv.innerHTML = `<span>${obj.addtext.textmobile}</span>`;
      }
      adslotDiv.before(textDiv);
    }

    // add logo Branding
    if (obj.hasOwnProperty('optidigitalbrand')) {
      let brandDiv = document.createElement('div');
      brandDiv.className = 'optidigital-Brand';
      brandDiv.setAttribute(
        'style',
        `align-self: ${obj.optidigitalbrand.alignself} ${obj.important};`
      );
      brandDiv.innerHTML = `<div style="display: flex ${obj.important};align-items: center${obj.important};">
  <span style="font-size:0.5em !important;">Powered by&nbsp</span><a href="https://www.optidigital.com" target="_blank"
  ><img width="50" src="${obj.optidigitalbrand.src}" alt="Logo Optidigital The programmatic advertising solutions "
/></a>
</div> `;
      adslotDiv.appendChild(brandDiv);
      let textposition = 'column-reverse';
      if (obj.reverse) {
        textposition = 'column';
      }
      // flex the main conteneur
      adslotDiv.style.cssText += `display:flex${obj.important};flex-direction:${textposition}${obj.important}`;
    }
    // create a style element for custom css
    if (obj.hasOwnProperty('customcss')) {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.textContent = obj.customcss;
      document.head.appendChild(style);
    }
  } catch (error) {
    console.log(error);
  }
};
adsLayerOptions(optionAdsLayer, adslotDiv, minHeight);
