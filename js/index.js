import './modules/polyfills/html-element/index.js';
import './modules/polyfills/array-dom/index.js';
import * as is from './modules/utilities/is/index.js';
import $ from './modules/utilities/dom/index.js';
import './modules/components/s-form/index.js';
import './modules/components/theme-toggler/index.js';
import tabbedContent from './modules/plugins/tabbedContent/index.js';

//console.log(document.styleSheets[0]);
//document.styleSheets[0].disabled = true;
/*console.log(document.styleSheets);
console.log(document.styleSheets[0].cssRules[0].style.cssText);
let a = document.styleSheets[0].cssRules[0].style.cssText
        .replace(/\s/g,'')
        .split(';')
        .slice(0,-1)
        .map(t => t.split(':'));

console.log(a);
//.map(t => t.split(':'))
/*let cn = $.cn('item1')[0];
cn.on('click', e => {
    let set = document.documentElement.style.setProperty;
    let props = {
        '--bg-color': 'white',
        '--color': 'black',
        '--font-family': 'Georgia',
        '--font-size': '30px',
    };
    
    for(let p in props){
        document.documentElement.style.setProperty(p, props[p]);
    }
});*/

tabbedContent({
    btnSelector: '.menus div',
    tabSelector: '.body',
    onClick: function({tab}){
        tab.show('block');
    }
})