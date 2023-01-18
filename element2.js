import { html, LitElement } from 'lit';
import '@vaadin/combo-box/theme/material/vaadin-combo-box.js';
import '@vaadin/multi-select-combo-box/theme/material/vaadin-multi-select-combo-box.js';


class MyElement2 extends LitElement {
    constructor() {
        super();
        this.items = [{}, {}];
    }
    render() {
        return html`
            <vaadin-multi-select-combo-box></vaadin-multi-select-combo-box>
            <vaadin-combo-box></vaadin-combo-box>
            
            ${this.items.length}
            ${this.items.map(item => html`
                <div>
                    <vaadin-combo-box></vaadin-combo-box>
                </div>
            `)}
        `;
    }

    static get properties() {
        return {
            items: {
                type: Array,

            }
        }
    }
}

window.customElements.define('my-element2', MyElement2);