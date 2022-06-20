//  actual js code
// var adslotDiv = document.getElementById(this.breakPointAdSlotsConfig[i].divId);
// var parentDiv = document.createElement('div');
// if (vPos == 'center')
//   parentDiv.setAttribute(
//     'style',
//     'min-height:' +
//       minHeight +
//       'px; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: auto;'
//   );
// else
//   parentDiv.setAttribute(
//     'style',
//     'min-height:' +
//       minHeight +
//       'px; display: flex; flex-direction: column; justify-content: start; align-items: center; margin: auto;'
//   );
// parentDiv.classList.add('optidigital-wrapper-div');
// adslotDiv.parentNode.insertBefore(parentDiv, adslotDiv);
// parentDiv.appendChild(adslotDiv);

let optionAdsLayer = `{
  "background":{
      "bgcolor":"gainsboro",
      "width":"fit-content",
      "padding":"10px 10px"
  },
  "addtext":{
      "textdesktop":"Publicité",
      "textmobile":"Publicité Mobile",
      "padding":"10px",
      "fontsize":"2em"
   },
  "optidigitalbrand":{
      "src":"./images/brand-100px.png",
      "alt":"logo optidigital"
   },
  "logoloading":{
      "src":"./images/loading-optidigital-2.svg",
      "alt":"logo svg",
      "minHeight":"250",
      "activateBg":true
    },
    "reverse":false,
    "important":"!important"
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
      `min-height:${minHeight}px${obj.important};display: flex${obj.important};flex-direction: column${obj.important};justify-content: center${obj.important};align-items: center${obj.important};position:sticky${obj.important};top:0${obj.important}`
    );
    adslotDiv.parentNode.insertBefore(WrapperDiv, adslotDiv);
    WrapperDiv.appendChild(adslotDiv);

    // add the background option
    let backgroundDiv = document.createElement('div');
    backgroundDiv.className = 'opti-background';
    let textposition = 'column';
    if (obj.reverse) {
      textposition = 'column-reverse';
    }
    backgroundDiv.setAttribute(
      'style',
      `background:${obj.background.bgcolor}${obj.important}; display:flex${obj.important}; flex-direction:${textposition}${obj.important};align-items: center${obj.important};width:${obj.background.width}${obj.important};padding:${obj.background.padding}${obj.important}`
    );
    adslotDiv.parentNode.insertBefore(backgroundDiv, adslotDiv);
    backgroundDiv.appendChild(adslotDiv);

    // add text option
    let textDiv = document.createElement('div');
    textDiv.className = 'optidigital-text-ads';
    textDiv.setAttribute(
      'style',
      `padding:${obj.addtext.padding}${obj.important};font-size:${obj.addtext.fontsize}${obj.important}`
    );
    if (window.matchMedia('(min-width: 760px)').matches) {
      textDiv.innerHTML = `<span>${obj.addtext.textdesktop}</span>`;
    } else {
      textDiv.innerHTML = `<span>${obj.addtext.textmobile}</span>`;
    }
    adslotDiv.before(textDiv);

    // add loading svg or publisher brand
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
      if (obj.logoloading.activateBg) {
        let brandDiv = document.createElement('div');
        brandDiv.className = 'optidigital-Brand';
        brandDiv.setAttribute(
          'style',
          `align-self: flex-end ${obj.important};`
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
  } catch (error) {
    console.log(error);
  }
};

adsLayerOptions(optionAdsLayer, adslotDiv, minHeight);
