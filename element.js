import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@vaadin/combo-box/theme/material/vaadin-combo-box.js';
import { } from '@polymer/polymer/lib/elements/dom-repeat.js';


class MyElement extends PolymerElement {

    static get template() {
        return html`
            <template is="dom-repeat" items="[[items]]">
                <div>
                    <vaadin-combo-box></vaadin-combo-box>
                </div>
            </template>
        `;
    }

    static get properties() {
        return {
            items: {
                type: Array,

            }
        }
    }

    ready() {
        super.ready();

        this.items = [{}, {}];
    }
}

window.customElements.define('my-element', MyElement);