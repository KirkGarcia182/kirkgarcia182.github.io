
/*
    Usage...

    tabbedContent({
        btnSelector: '.myButtons',
        tabSelector: '.myTabs',
        onClick: function({index, tab, btn}, e){
            // Index of both the button and tab
            console.log(index);
            // Tab paired with the button clicked
            console.log(tab);
            // Button that was clicked
            console.log(btn);

            tab.show('flex');
        }
    })
*/

import * as is from '../../utilities/is/index.js';
import $ from '../../utilities/dom/index.js';

export default function tabbedContent(
    {
        btnSelector: btns,
        tabSelector: tabs,
        onClick
    }
){
    btns = $.qsa(btns);
    tabs = $.qsa(tabs);
    tabs.hide();

    //check if button and tab content elements are in pairs , if it doesn't then throw an error
    if(btns.length != tabs.length){
        throw new Error("Button count and tab count doesn't match!");
    }else{
        if(is.undf(onClick)){
            throw new Error("onClick function was not supplied!");
        }else{
            // Loop through all the btns and add a click
            // event listener to all of them
            for(let [index, btn] of btns.entries()){
                btn.on('click', e =>{
                    tabs.hide();
                    onClick({ index, btn, tab: tabs[index] });
                });
            }
            
            // Trigger click on the first button
            btns[0].trigger('click');
        }
        
    }
}