import $ from '../../utilities/mylib/index.js';
import * as is from '../../utilities/is/index.js';

const template = $.ce('template');
template.html(`
    <styles>
        :host{
            display: flex;
            flex-direction: row;
        }
    </styles>

    <span>Hello Fuck</span>

`);

class MyHeader extends HTMLElement {
    constructor() {
        super();
        // Set up the root (shadowRoot)
        this.root = this.attachShadow({ 'mode': 'open' });
        this.root.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        
    }
}

window.customElements.define('my-header', MyHeader);
