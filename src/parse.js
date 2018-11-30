import Parser from 'rss-parser'

export default async () => {
    const parser = new Parser();
    const feed = await parser.parseURL('https://www.crossfitamsterdam.nl/feed/')

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
      })
}