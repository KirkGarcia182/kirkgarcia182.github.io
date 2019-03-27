
let template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        position: fixed;
    }

    *{ box-sizing: border-box; }
    
    div{
        cursor: pointer;
        background-color: hotpink;
        color: white;
        padding: 2px 8px;
        font-size: 10px;
        user-select: none;
    }
</style>

<div>
    Change theme to <span>Light</span>
</div>

`;

const dark = {
    '--primary-bg-color': 'rgb(21, 21, 21)',
    '--primary-color': 'silver',
    '--tertiary-bg-color': 'rgba(0,0,0,0.5)',
    '--tertiary-color': 'silver',
    '--tertiary-hover-bg-color': 'rgba(0,0,0,0.3)',
    '--tertiary-hover-color': 'black'
};

const light = {
    '--primary-bg-color': 'white',
    '--primary-color': 'black',
    '--tertiary-bg-color': 'rgba(0,0,0,0.5)',
    '--tertiary-color': 'silver',
    '--tertiary-hover-bg-color': 'rgba(0,0,0,0.3)',
    '--tertiary-hover-color': 'black'
}

class ThemeToggler extends HTMLElement {
    constructor() {
        super();
        // Set up the root (shadowRoot)
        this.root = this.shadow({ 'mode': 'open' });
        this.root.appendChild(template.content.clone(true));
        this.label = this.root.qs('span');
    }

    connectedCallback(){
        
        // Add a click event listener to toggle between the classes and texts
        this.on('click', e => {
            document.body.toggleClass(class1, class2);
            this.label.toggleText('Light', 'Dark');
        });

        // Get position
        let position = this.attr('position');

        switch(position){
            case 'top left':
                this.css({top: '0%', left: '0%'});
                break;
            case 'top':
                this.css({top: '0%', left: '50%', transform: 'translate(-50%, 0%)'});
                break;
            case 'top right':
                this.css({top: '0%', right: '0%'});
                break;
            case 'left':
                this.css({top: '50%', left: '0%', transform: 'translate(0%, -50%)'});
                break;
            case 'middle':
                this.css({top: '50%', left: '50%', transform: 'translate(-50%, -50%)'});
                break;
            case 'right':
                this.css({top: '50%', right: '0', transform: 'translate(0%, -50%)'});
                break;
            case 'bottom left':
                this.css({bottom: '0%', left: '0%'});
                break;
            case 'bottom':
                this.css({bottom: '0%', left: '50%', transform: 'translate(-50%, 0%)'});
                break;
            case 'bottom right':
                this.css({bottom: '0%', right: '0%'});
                break;
            default: break;
        }
    }
}

window.customElements.define('theme-toggler', ThemeToggler);