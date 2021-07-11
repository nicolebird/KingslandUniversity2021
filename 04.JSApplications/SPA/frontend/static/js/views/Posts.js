import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts </h2>
            <p>
                POSTS - jelly beans gummies sweet fruitcake.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}
