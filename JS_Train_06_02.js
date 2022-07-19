const findSubreddit = (url) => url.replace('https://', '').replace('www.', '').replace('reddit.com/r/', '').replace('/', '');

findSubreddit("https://www.reddit.com/r/news/");
findSubreddit("https://reddit.com/r/название_раздела/");