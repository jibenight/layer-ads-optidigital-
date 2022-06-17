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
      "activate":true,
      "bgcolor":"gainsboro",
      "width":"fit-content",
      "padding":"10px 10px"
  },
  "addtext":{
      "activate":true,
      "textdesktop":"Publicité",
      "textmobile":"Publicité Mobile",
      "padding":"10px",
      "fontsize":"2em"
   },
  "optidigitalbrand":{
      "activate":true,
      "src":"./images/brand-100px.png",
      "alt":"logo optidigital"
   },
  "logoloading":{
      "activate":true,
      "src":"./images/loading-optidigital-2.svg",
      "alt":"logo svg",
      "minHeight":"250",
      "activateBg":true
    },
    "reverse":false
}`;
let obj = JSON.parse(optionAdsLayer);

// find the adslot
const adslotDiv = document.getElementById('optidigital-adslot-Billboard_1');
const minHeight = '280';
// add parent element and option
// wrapper div
const optiDigitalWrapper = (adslot, minHeight) => {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'optidigital-wrapper-div';

  parentDiv.setAttribute(
    'style',
    `min-height:${minHeight}px; display: flex; flex-direction: column; justify-content: center; align-items: center;position:sticky;top:0`
  );
  adslot.parentNode.insertBefore(parentDiv, adslot);
  parentDiv.appendChild(adslot);
};

// background div
const optiBgDiv = (color, reverse, width, padding, adslot) => {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'opti-background';
  let textposition = 'column';
  if (reverse) {
    textposition = 'column-reverse';
  }
  parentDiv.setAttribute(
    'style',
    `background:${color}; display:flex; flex-direction:${textposition};align-items: center;width:${width};padding:${padding}`
  );
  adslot.parentNode.insertBefore(parentDiv, adslot);
  parentDiv.appendChild(adslot);
};
// add text
const optiAddText = (desktop, mobile, padding, fontsize, adslot) => {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'optidigital-text-ads';
  parentDiv.setAttribute('style', `padding:${padding};font-size:${fontsize}`);
  if (window.matchMedia('(min-width: 760px)').matches) {
    parentDiv.innerHTML = `<span>${desktop}</span>`;
  } else {
    parentDiv.innerHTML = `<span>${mobile}</span>`;
  }
  adslot.before(parentDiv);
};
// add loading or logo
const optiloadingLogo = (src, alt, minHeight, activateBg, adslot) => {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'optidigital-loading';
  parentDiv.setAttribute(
    'style',
    `text-align:center;min-height:${minHeight}px`
  );
  parentDiv.innerHTML = `<img src='${src}' alt='${alt}'>`;
  adslot.appendChild(parentDiv);
  const observer = new MutationObserver(() => {
    parentDiv.style.display = 'none';
    if (activateBg) {
      optiDigitalBrand(obj.optidigitalbrand.src, obj.reverse, adslotDiv);
    }

    observer.disconnect();
  });
  observer.observe(adslot, { childList: true });
};

// add optidigital brand link
const optiDigitalBrand = (src, reverse, adslot) => {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'optidigital-Brand';
  parentDiv.setAttribute('style', 'align-self: flex-end;');
  parentDiv.innerHTML = `<div style='display: flex;align-items: center;'>
  <span>Powered by&nbsp</span><a href="https://www.optidigital.com" target="_blank"
  ><img src="${src}" alt="Logo Optidigital The programmatic advertising solutions "
/></a>
</div> `;
  adslot.appendChild(parentDiv);
  let textposition = 'column';
  if (reverse) {
    textposition = 'column-reverse';
  }
  // flex the main conteneur
  adslot.setAttribute('style', `display:flex;flex-direction:${textposition}`);
};

// execute function
// optiDigitalWrapper(adslotDiv, minHeight);

// 5 arguments: color, true=reverse-column,width,padding and adslot
// if (obj.background.activate) {
//   optiBgDiv(
//     obj.background.bgcolor,
//     obj.reverse,
//     obj.background.width,
//     obj.background.padding,
//     adslotDiv
//   );
// }

// 5 arguments (word for desktop, word for mobile, padding, font-size and adslot)
// if (obj.addtext.activate) {
//   optiAddText(
//     obj.addtext.textdesktop,
//     obj.addtext.textmobile,
//     obj.addtext.padding,
//     obj.addtext.fontsize,
//     adslotDiv
//   );
// }

// 5 arguments (src of the image, alt of the image,min-height and adslot)
// if (obj.logoloading.activate) {
//   optiloadingLogo(
//     obj.logoloading.src,
//     obj.logoloading.alt,
//     obj.logoloading.minHeight,
//     obj.logoloading.activateBg,
//     adslotDiv
//   );
// }

// 3 arguments (src of the image, alt of the image, true for reverse-column)
//optiDigitalBrand(obj.optidigitalbrand.logosrc, obj.reverse, adslotDiv);

const adsLayerOptions = (options, adslotDiv, minHeight) => {
  console.log('start');

  let obj = JSON.parse(options);
  console.log(obj.reverse);
  // create the wrapper optidigital
  let WrapperDiv = document.createElement('div');
  WrapperDiv.className = 'optidigital-wrapper-div';
  WrapperDiv.setAttribute(
    'style',
    `min-height:${minHeight}px; display: flex; flex-direction: column; justify-content: center; align-items: center;position:sticky;top:0`
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
    `background:${obj.background.bgcolor}; display:flex; flex-direction:${textposition};align-items: center;width:${obj.background.width};padding:${obj.background.padding}`
  );
  adslotDiv.parentNode.insertBefore(backgroundDiv, adslotDiv);
  backgroundDiv.appendChild(adslotDiv);

  // add text option
  let textDiv = document.createElement('div');
  textDiv.className = 'optidigital-text-ads';
  textDiv.setAttribute(
    'style',
    `padding:${obj.addtext.padding};font-size:${obj.addtext.fontsize}`
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
    `text-align:center;min-height:${minHeight}px`
  );
  loadingDiv.innerHTML = `<img src='${obj.logoloading.src}' alt='${obj.logoloading.alt}'>`;
  adslotDiv.appendChild(loadingDiv);
  const observer = new MutationObserver(() => {
    loadingDiv.style.display = 'none';
    if (obj.logoloading.activateBg) {
      optiDigitalBrand(obj.optidigitalbrand.src, obj.reverse, adslotDiv);
    }
    observer.disconnect();
  });
  observer.observe(adslotDiv, { childList: true });
};

adsLayerOptions(optionAdsLayer, adslotDiv, minHeight);
