import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>How to build a Single Page Application (SPA) with JavaScript (JS) (No Frameworks)</h1>
             <h2>#SecretSocietyDevs</h2>
            <p>
                Settings JS folder came out of no freaking where (?sp)
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}
