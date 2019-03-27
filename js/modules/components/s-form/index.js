
let template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        position: relative;
    }

    *{
        box-sizing: border-box;
    }
    
    form {
        display: flex;
        flex-direction: column;
        margin: 0;
        font-family: var(--font-family, Verdana);
        font-size: var(--font-size, 13px);
        background-color: var(--bg-color, transparent);
        border: 1px solid var(--border-color, transparent);
    }

    header {
        display: inherit;
        flex-direction: row;
        color: var(--header-color, silver);
        background-color: var(--header-bg-color, transparent);
    }

    header div {
        font-size: calc(var(--font-size, 13px) + 3px);
        padding: 4px 8px;
        flex-grow: 1;
        text-align: var(--header-text-align, center);
    }

    header button {
        font-size: 20px;
        border: none;
        padding: 0px 8px;
        cursor: pointer;
        padding-top: 3px;
        color: var(--close-button-color, white);
        background-color: var(--close-button-bg-color, rgba(0,0,0,0.5));
        border-radius: var(--close-button-border-radius, 0%);
    }

    header button:hover{
        background-color: var(--close-button-hover-bg-color, rgba(0,0,0,0.3));
        color: var(--close-button-hover-color, white);
    }

    hr{
        visibility: var(--hr-visible, visible);
        margin: 0px 2.5%;
        width: 95%;
        border-radius: var(--hr-border-radius, 50%);
        border-color: var(--hr-color, silver);
    }

    content{
        display: inherit;
        flex-direction: column;
        padding: 10px 10px 0px 10px;
    }

    .my-input{
        display: inherit;
        flex-direction: column;
        margin-bottom: 10px;
        border-bottom: 1px solid silver;
        padding: 0px;
        position: relative;
    }

    .my-input label{
        font-size: 10px;
        font-weight: bold;
        padding: 0px 8px;
        color: silver;
    }

    .my-input input{
        padding: 4px 8px;
        border: none;
        background-color: transparent;
        outline: none;
        color: silver;
    }

    .my-input ::placeholder {
        color: gray;
        font-size: 14px;
    }

    footer button{
        border: none;
        width: 100%;
        height: 25px;
        background-color: var(--button-bg-color, steelblue);
        color: var(--button-color, silver);
        cursor: pointer;
        font-family: var(--font-family, Verdana);
        font-size: var(--font-size, 13px);
        padding: 0px;
    }
</style>
<form>
    <header>
        <div><slot name='formTitle'>Form Name Here</slot></div>
        <button tooltip='Close'>&times;</button>
    </header>
    <hr/>
    <content>
        <div class="my-input toolTipHere">
            <label>Emergency Contact Number (Optional)</label>
            <input type="text" name="" placeholder="Emergency Contact Number"/>
            <!--<div class="myToolTip">Password must be a minimum of 8 characters with atleast 1 Number and 1 Capital letter!</div>-->
        </div>
    </content>
    <footer>
        <button><slot name='formButton'>Save</slot></button>
    </footer>
</form>
`;

class SimpleForm extends HTMLElement {
    constructor() {
        super();
        // Set up the root (shadowRoot)
        this.root = this.attachShadow({ 'mode': 'open' });
        this.formData = [];
    }

    connectedCallback(){
        let action = this.getAttribute('action');
        let method = this.getAttribute('method');

        // Check if action and method attributes has been supplied
        // If not then throw an error
        if(!action && !method){
            throw new Error('Please supply an Action and Method attribute!');
        }else{
            // Append the template
            this.root.appendChild(template.content.cloneNode(true));
            // By default the form will have a close button attached to it
            // But the user can provide a closeButton attribute with a value of 'no'
            // if the user doesn't want to the form to have a closeButton
            let closeButtonAttribute = this.getAttribute('closeButton');
            let closeButton = this.root.querySelector('header button');
            if(closeButtonAttribute === 'no'){closeButton.remove();}

            this.form = this.root.querySelector('form');
            this.form.setAttribute('action', action);
            this.form.on('submit',e=> e.preventDefault());
        }
    }

    set on_click(value) { 
        console.log(value);
        console.log(this._onclick);
        this.form.removeEventListener('click', this._onclick);
        this._onclick = value;
        this.form.on('click', value);
        console.log(this._onclick);
    }
    get on_click() { return this._onclick; }
}

window.customElements.define('s-form', SimpleForm);