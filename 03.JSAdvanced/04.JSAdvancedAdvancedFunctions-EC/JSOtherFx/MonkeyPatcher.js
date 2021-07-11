solve = (() => {
  const commands = {
      upvote: (post) => post.upvotes++,
      downvote: (post) => post.downvotes++,
      score: (post) => {
          let {upvotes, downvotes} = post;
          let total = upvotes + downvotes;
          // let balance = upvotes - downvotes;

          let obfuscated = Math.ceil(0.25 * Math.max(upvotes,downvotes));
          let obfuscatedUpVotes = upvotes + obfuscated;
          let obfuscatedDownVotes = downvotes + obfuscated;
          let balance = obfuscatedUpVotes - obfuscatedDownVotes;

          let rating = '';

          if (total < 10) {
            rating = 'new';
          } else if (upvotes > total * 0.66) {
            rating = 'hot';
          } else if (balance >= 0 && (upvotes > 100 || downvotes > 100)) {
            rating = 'controversial';
          } else if (balance < 0) {
            rating = 'unpopular';
          } else {
            rating = 'new';
          }
           if (total > 50) {
               return [obfuscatedUpVotes, obfuscatedDownVotes, balance, rating];
          }
          return [upvotes, downvotes, balance, rating];
        }
  };

  return {call:(post, command) => commands[command](post)};
})();

// Don't copy the code below in judge, you won't get any points, just the code above
let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');          // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']