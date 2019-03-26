import * as is from '../../utilities/is/index.js';

!function(){
    'use strict';
    const Notes = [];
    const Polyfill = {
        addClass(classes) {
            for(let node of this) node.addClass(classes);
            return this;
        },
        append(_node, deep = true) {
            for(let node of this) node.append(_node, deep);
            return this;
        },
        attr(attributes, value) {
            for(let node of this) node.attr(attributes, value);
            return this;
        },
        changeClass(from, to) {
            for(let node of this) node.changeClass(from, to);
            return this;
        },
        clear() {
            for(let node of this) node.innerHTML = '';
            return this;
        },
        css(styles, value) {
            for(let node of this) node.css(styles, value);
            return this;
        },
        data(datas, value){
            for(let node of this) node.data(datas, value);
            return this;
        },
        hide() {
            for(let node of this) node.style.display = 'none';
            return this;
        },
        html(string) {
            for(let node of this) node.innerHTML = string;
            return this;
        },
        on(eventName, callback, options = false, propagate = true) {
            let index = 0;
            for(let node of this) {
                node.on(eventName, callback.bind(node, index), options, propagate);
                index++;
            }
            return this;
        },
        removeAttr(attributes) {
            for(let node of this) node.removeAttr(attributes);
            return this;
        },
        removeClass(classes) {
            for(let node of this) node.removeClass(classes);
            return this;
        },
        show(display = 'inherit') {
            for(let node of this) node.style.display = display;
            return this;
        }
    };

    for(let prop in Polyfill) {
		if(is.undf(Array.prototype[prop])) {
			Array.prototype[prop] = Polyfill[prop];
		} else {
			Notes.push(`Array ${prop}() already exist!`);
		} 
	} 
	if(Notes.length > 0) console.log(Notes);
}();