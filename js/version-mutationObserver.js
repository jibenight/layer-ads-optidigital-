let optionAdsLayer = `{
    "optidigitalwrapper":{
        "display":"flex",
        "flex-direction":"column",
        "justify-content":"center",
        "align-items":"center"
        
    },
    "addbackground":{
        "background":"#ededed",
        "width":"100%",
        "padding":"10px 0px"
    },
    "addtext":{
        "textdesktop":"Publicit&eacute;",
        "textmobile":"Publicit&eacute; Mobile",
        "padding":"10px",
        "font-size":"1em",
        "color":"black",
        "background-color":"unset"
     },
    "optidigitalbrand":{
        "src":"https://optidigital.jean-nguyen.dev/brand-100px.png",
        "alt":"logo optidigital",
        "alignself":"flex-end"
     },
    "logoloading":{
        "src":"https://optidigital.jean-nguyen.dev/loading-optidigital-2.svg",
        "alt":"logo svg",
        "minHeight":"250",
        "activateBrand":true
      },
      "reverse":false,
      "important":"!important",
      "customcss":"body {font-family: Arial, Helvetica, sans-serif;}",
      "sticky":false 
  }`;

// find the adslot
const adslotDiv = document.getElementById('optidigital-adslot-Billboard_1');
const minHeight = '280';

const adsLayerOptions = (options, adslotDiv, minHeight) => {
  try {
    let obj = JSON.parse(options);
    // create the wrapper optidigital
    let WrapperDiv = document.createElement('div');
    WrapperDiv.className = 'optidigital-wrapper-div';
    WrapperDiv.setAttribute(
      'style',
      `min-height:${minHeight}px${obj.important};`
    );
    for (const [key, value] of Object.entries(obj.optidigitalwrapper)) {
      WrapperDiv.style.cssText += `${key}: ${value} ${obj.important}`;
    }
    if (obj.sticky) {
      WrapperDiv.style.cssText += `position:sticky${obj.important};top:0${obj.important};z-index:9999999${obj.important};`;
    }
    adslotDiv.parentNode.insertBefore(WrapperDiv, adslotDiv);
    WrapperDiv.appendChild(adslotDiv);

    // add the background option
    if (obj.hasOwnProperty('addbackground')) {
      let backgroundDiv = document.createElement('div');
      backgroundDiv.className = 'opti-background';
      let textposition = 'column';
      if (obj.reverse) {
        textposition = 'column-reverse';
      }
      backgroundDiv.setAttribute(
        'style',
        `display:flex${obj.important}; flex-direction:${textposition}${obj.important};align-items: center${obj.important};`
      );
      for (const [key, value] of Object.entries(obj.addbackground)) {
        backgroundDiv.style.cssText += `${key}: ${value} ${obj.important}`;
      }
      adslotDiv.parentNode.insertBefore(backgroundDiv, adslotDiv);
      backgroundDiv.appendChild(adslotDiv);
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

    // add loading svg or publisher brand
    if (obj.hasOwnProperty('logoloading')) {
      let loadingDiv = document.createElement('div');
      loadingDiv.className = 'optidigital-loading';
      loadingDiv.setAttribute(
        'style',
        `text-align:center${obj.important};min-height:${minHeight}px${obj.important}`
      );
      loadingDiv.innerHTML = `<img src='${obj.logoloading.src}' alt='${obj.logoloading.alt}'>`;
      adslotDiv.appendChild(loadingDiv);
      const observer = new MutationObserver(() => {
        loadingDiv.style.display = 'none';
        if (obj.logoloading.activateBrand) {
          let brandDiv = document.createElement('div');
          brandDiv.className = 'optidigital-Brand';
          brandDiv.setAttribute(
            'style',
            `align-self: ${obj.optidigitalbrand.alignself} ${obj.important};`
          );
          brandDiv.innerHTML = `<div style="display: flex ${obj.important};align-items: center${obj.important};">
        <span>Powered by&nbsp</span><a href="https://www.optidigital.com" target="_blank"
        ><img src="${obj.optidigitalbrand.src}" alt="Logo Optidigital The programmatic advertising solutions "
      /></a>
      </div> `;
          adslotDiv.appendChild(brandDiv);
          let textposition = 'column';
          if (obj.reverse) {
            textposition = 'column-reverse';
          }
          // flex the main conteneur
          adslotDiv.setAttribute(
            'style',
            `display:flex${obj.important};flex-direction:${textposition}${obj.important}`
          );
        }
        observer.disconnect();
      });
      observer.observe(adslotDiv, { childList: true });
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
