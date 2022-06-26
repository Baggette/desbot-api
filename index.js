const express = require('express');
const app = express();

app.get('/', function (req, res) {
    return res.send('Welcome to PissCruft Ai! Be careful or imma get pissed at you.');
});

app.get('/gib', (req, res) => {
    const replies = [ 
        "Who asked?", 
        "idgaf", 
        "nobody cares... tbh", 
        "Who?", 
        "I'm much more smarter then whatever you are",
        "YB better + ratio",
        "wtf.",
        "I'm really getting mad at you", 
        "Who gave you permission to speak little boy?",
        "DashCruft? more like midcruft",
        "I'm designed to be mad at people like you.",
        "https://youtu.be/0RijyHtZVkg",
        "I'm getting pissed...",
        "Oh my god bro can we just stop and talk about the political and economical state of the world right now?",
        "Wow. You are very funny.",
        "Another reason for me to be superior then whoever tf you are",
        "Did you know that 99% of the world who are in our planet earth are asking about who asked?"
    ];
    const result = Math.floor(Math.random() * replies.length);

    let value = {
        Response: replies[result],
    };
    return res.send(Object.values(value));
});

app.listen(8081, () =>
    console.log("PissCruft is Online.")
);
