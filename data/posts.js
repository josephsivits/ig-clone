// will add later with the firebase implementation
import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://i.imgur.com/D9HT0e3.jpg',
        user: USERS[0].user,
        likes:153,
        caption:'Feeling Spooky!',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: USERS[3].user,
                comment: 'omg this is so spooky!!',
            },
            {
                user: USERS[4].user,
                comment: 'plumpkin ;)',
            },
        ],
    },
    {
        imageUrl: 'https://i.imgur.com/exW2Vdf.jpg',
        user: USERS[2].user,
        likes:332,
        caption:'I miss vacation already!',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: USERS[1].user,
                comment: 'me too bestie',
            },
            {
                user: USERS[0].user,
                comment: 'did you take this??😍',
            },
        ],
    },
    {
        imageUrl: 'https://i.imgur.com/uyEOIXl.jpg',
        user: USERS[6].user,
        likes:44,
        caption:'Digital Design is my Passion.',
        profile_picture: USERS[6].image,
        comments: [
            {
                user: USERS[2].user,
                comment: 'Very cool!',
            },
            {
                user: USERS[4].user,
                comment: 'Do you do private work??',
            },
        ],
    },
]