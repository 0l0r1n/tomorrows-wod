# Tomorrow's WOD

## Intro

In the last year I have discovered Crossfit and it is my new addiction. I go almost five or six times a week and I love it. I train at Crossfit Amsterdam, a great box with great colleagues and coaches.

Every day after 9:30 pm you can even see tomorrow's workout on the box's blog (not that I would cherry pick). And that bring us to the reason why I started this project. They say great programmers are lazy. I do not consider myself great or lazy, but lazyness was the motivation behind starting this project. Eventually got tired of going online every day at the exact same time to see what's up.

## Architecture

There is a lambda function that runs every day at 7:35 pm GMT which goes to Crossfit Amsterdam's Blog and reads the latest post. If the first post on the list corresponds to tomorrow's date, the result is parsed and a SMS to my number is sent. If tomorrow's WOD is not posted, a default SMS is sent.