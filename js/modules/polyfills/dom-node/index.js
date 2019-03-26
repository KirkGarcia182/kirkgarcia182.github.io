import * as is from '../../utilities/is/index.js';

!function() {
	'use strict';

	const Notes = [];
	const Polyfill = {
		addClass(classes) {
			let classArray = classes.split(' ');
			this.classList.add(...classArray);
			return this;
		},
		attr(attributes, value) {
			if(is.undf(value) && is.str(attributes)) {
				return this.getAttribute(attributes);
			} else {
				if(is.obj(attributes)) {
					for(let attributeName in attributes) {
						this.setAttribute(attributeName, attributes[attributeName]);
						
					} 
				} else {
					this.setAttribute(attributes, value);
				} 
				return this;
			} 
		},
		changeClass(from, to) {
			this.classList.replace(from, to);
			return this;
		},
		clear() {
			this.innerHTML = '';
			return this;
		},
		css(styles, value) {
			if(is.obj(styles)) {
				for(let name in styles) {
					this.style[name] = styles[name];
				} 
			} else {
				this.style[styles] = value;
			} 
			return this;
		},
		data(datas, value){
			if(is.obj(datas)){
				for(let name in datas){
					this.attr(`data-${name}`, datas[name]);
				}
			}else if(is.str(datas) && !is.undf(value)){
				this.attr(`data-${datas}`, value);
			}else{
				this.attr(`data-${datas}`);
			}
			return this;
		},
		hasClass(classes, option = 'any') {
			let flag = false,
			classArray = classes.split(' ');
			if(option === 'any') {
				for(let className of classArray) {
					if(flag) break;
					flag = this.classList.contains(className) ? true : false;
				} 
			} else if(option === 'all') {
				// reserve all option when needed
			} else {
				throw new Error('Unknown option value.');
			} 
			return flag;
		},
		hide() {
			this.style.display = 'none';
			return this;
		},
		html(string) {
			if(is.undf(string)) {
				return this.innerHTML;
			} else {
				this.innerHTML = string;
				return this;
			} 
		},
		on(eventName, callback, options = false, propagate = true) {
			this.addEventListener(eventName, event =>{
				if(!propagate) event.stopPropagation();
				//callback.call(this, event);
				callback(event);
			}, options);
			return this;
		},
		removeAttr(attributes) {
			let attributeArray = attributes.split(' ');
			for(let attributeName of attributeArray) {
				this.removeAttribute(attributeName);
			} 
			return this;
		},
		removeClass(classes) {
			let classArray = classes.split(' ');
			for(let className of classArray) {
				this.classList.remove(className);
			} 
			return this;
		},
		show(display = 'inherit') {
			this.style.display = display;
			return this;
		},
		trigger(eventName, custom = false, obj) {
			let event = custom ? new CustomEvent(eventName, obj) : new Event(eventName);
			this.dispatchEvent(event);
		},
		qsa(selector){
			return [...this.querySelectorAll(selector)];
		},
		qs(selector){
			return this.querySelector(selector);
		}
	};

	for(let prop in Polyfill) {
		if(is.undf(Node.prototype[prop])) {
			Node.prototype[prop] = Polyfill[prop];
		} else {
			Notes.push(`Node ${prop}() already exist!`);
		} 
	} 

	if(Notes.length > 0) console.log(Notes);
} ();