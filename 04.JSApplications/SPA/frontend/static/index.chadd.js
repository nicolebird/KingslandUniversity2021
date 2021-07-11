import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};
const router = async () => {
    // /posts/:id
    const routes = [
        { path: "/", view: Dashboard },// [0]
        { path: "/posts", view: Posts },// [1]
        { path: "/posts/:id", view: PostView },
        { path: "/settings", view: Settings },// [2]
    ];
    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    if (!match){// defaulting to the first route if no match found 404 error handler 
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }
    const view = new match.route.view(getParams(match));// creating a new insrtance of the view at the match route
    document.querySelector("#app").innerHTML = await view.getHtml();
    // console.log(match.route.view);
};
window.addEventListener("popstate", router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        // console.log(e.target);
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});