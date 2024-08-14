const getData = async () => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const data = await response.json();
    const story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[0]}.json?print=pretty`);
    return story.json();
}

module.exports = {getData};