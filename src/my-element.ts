import './index.css';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
    /**
     * Copy for the read the docs hint.
     */
    @property()
    docsHint = 'Click on the Vite and Lit logos to learn more';

    /**
     * The number of times the button has been clicked.
     */
    @property({ type: Number })
    count = 0;

    render() {
        return html`
            <div>
                <p class="text-red-200 text-2xl">test</p>
            </div>
            <p class="read-the-docs">${this.docsHint}</p>
        `;
    }

    private _onClick() {
        this.count++;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
