import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>How to build a Single Page Application (SPA) with JavaScript (JS) (No Frameworks)</h1>
             <h2>#SecretSocietyDevs</h2>
            <p>
                Halvah tiramisu biscuit sesame snaps gingerbread I love cupcake. Sugar plum halvah chupa chups I love jelly beans tootsie roll lollipop. I love marzipan fruitcake tart tart jelly beans gummies sweet fruitcake.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}
