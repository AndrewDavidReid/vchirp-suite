# Valorant Chirp Suite

The idea here is to “chirp” (Canadian slang for insult) our friend that has the worst score at the end of a Valorant game in Discord, using a text to speech API.

We have a small web application that allows us to enter chirps as text which are saved into a database. Each chirp requires a {name} that is substituted for the player’s name when the chirp is activated. Chirps will be activated at the end of the round in a Voice Chat in discord, against the player with the subjectively worst score.

We also maintain a mapping of player Discord User IDs, Riot Player UUIDs, and Names in our database. We will allow people to “register” from a Command associated to our discord bot. This will allow us to target users in our voice chat

## Web App

- Allow users to enter chirps, which will be validated from this web app. All chirps must include a {name} so we can substitute it in to target the “worst” player.
- Allow users to set the next “Active” chirp, which will ensure a chirp is used next time
- Wall of shame.

## Bot

- Bot Functions
  - Chirp players. This will be done automatically, using data returned against players from the Riot/Valorant API.
  - Whenever the bot automatically chirps a user at the end of a round, we will store the match data used to log out this chirp along with the player name so we have a history of t
- Bot Commands
  - /vc-join. This registers the “listener” for players in the VC
  - /vc-boot. This unregisters the “listener” and dis
  - /vc-register. This will register the player using their Discord ID, Riot puuid and Name that will be used for chirps to our database.
  - /vc-chirp. This will simply use our text to speech API for players to chirp other players on demand
