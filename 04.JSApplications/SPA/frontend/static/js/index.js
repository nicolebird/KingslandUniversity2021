import Dashboard from "./views/Dashboard.js";  //this is importing the code from Dashboard that is within the views folder
import Posts from "./views/Posts.js"; //This is importing the code from the Posts file that is within the views folder
import PostView from "./views/PostView.js"; //This is importing the code from the PostView file that is within the views folder
import Settings from "./views/Settings.js"; //this is importing the code from the Settings file that is within the views folder

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    console.log(match.result); //just testing
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:\w+/g)).map(result => result[1]);  //matchAll will match every single parameter. Then grab it into an Array.  

    console.log(Array.from(match.route.path.matchAll(/:\w+/g)));

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));


};

console.log("#SecretSocietyDev");
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


const router = async() => {
    console.log(pathToRegex("/post/:id"));
    // /post/:id
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/post", view: Posts },
        { path: "/posts/:id", view: PostView },
        { path: "/settings", view: Settings}
    ];

    //test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    
    let match = potentialMatches.find(potentialMatch => potentialMatch.result != null);
    
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }; //404 error handler
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
    
    console.log(match.route.view);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target, matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});

console.log("This works");