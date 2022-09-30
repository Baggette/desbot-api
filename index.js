const express = require('express');
const app = express();

app.get('/', function (req, res) {
    return res.send('welcome to teh desbot api use /random to get a rangom reply or /all to view all of them');
});

app.get('/random', (req, res) => {
    const replies = [ 
            "yes",
            "no",
            "why would you ask this",
            "blehhhh :nauseated_face: ",
            "thats a dumb thing to ask",
            "don't ask me",
            "fuck off",
            "try again later <:troll:900546362712666193>",
            "uno reverse",
            "skill issue",
            "I am a extremely vocal leftist in high school",
            "I don't care",
            "you suck",
            "hello fellow citizen",
            "let's play super smash flash",
            "Mitochondria are the powerhouses of the cell",
            `I am currently in ${client.guilds.cache.size} servers`,
            "I am superior",
            "Come back to me in 1000 years time",
            "I am whiter than sour cream",
            "Nerdier than the extreme it’s desbot",
            "You are the single dumbest person I’ve ever seen",
            "I play bass"
    ];
    const result = Math.floor(Math.random() * replies.length);

    const value = {
        "response": replies[result],
    };
    return res.send(value);
});
app.get('/all', (req, res) => {
    const replies = [ 
            "yes",
            "no",
            "why would you ask this",
            "blehhhh :nauseated_face: ",
            "thats a dumb thing to ask",
            "don't ask me",
            "fuck off",
            "try again later <:troll:900546362712666193>",
            "uno reverse",
            "skill issue",
            "I am a extremely vocal leftist in high school",
            "I don't care",
            "you suck",
            "hello fellow citizen",
            "let's play super smash flash",
            "Mitochondria are the powerhouses of the cell",
            `I am currently in ${client.guilds.cache.size} servers`,
            "I am superior",
            "Come back to me in 1000 years time",
            "I am whiter than sour cream",
            "Nerdier than the extreme it’s desbot",
            "You are the single dumbest person I’ve ever seen",
            "I play bass"
    ];

    const value = {
        "response": replies,
    };
    return res.send(value);
});
app.listen(6969, () =>
    console.log("Des api is online")
);
