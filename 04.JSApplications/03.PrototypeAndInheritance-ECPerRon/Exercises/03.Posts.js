function main() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString() + `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += '\nComments';
                this.comments.forEach(comment => result += `\n* ${ comment}`);
            }

            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `Views: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

let m = main(); 
let sm = new m.SocialMediaPost('title 1', 'content 1', 5, 2); 
sm.addComment('added comment'); 
sm.addComment('added comment'); 
console.log(sm.toString());  
let blog = new m.BlogPost('title 1', 'content 1', 1); 
blog.view(); blog.view(); console.log(blog.toString());


//--------------
//hw grader result

// Post: title 1
// Content: content 1
// Rating: 3
// Comments
// * added comment
// * added comment
// Post: title 1
// Content: content 1
// Views: 3

//Mine
// Post: title 1
// Content: content 1
// Rating: 3
// Comments
//  * added comment
//  * added comment
// Post: title 1
// Content: content 1
// Views: 3