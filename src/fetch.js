import Parser from 'rss-parser'
import isTomorrow from 'date-fns/is_tomorrow'

import formatPost from './format-post'

const defaultMessageBodyNoPost = 'Tomorrows\'s workout has not been posted. No cherry picking for you today 🍒.'

export default async () => {
    const parser = new Parser();
    const feed = await parser.parseURL('https://www.crossfitamsterdam.nl/feed/')

    const latestPost = feed.items[0]

    if (isTomorrow(latestPost.isoDate)) 
        return formatPost(latestPost)
    else 
        return defaultMessageBodyNoPost
}