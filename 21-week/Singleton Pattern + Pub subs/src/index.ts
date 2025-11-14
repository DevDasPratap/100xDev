import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString(36),
        whitePlayer: "pd",
        blackPlayer: "pratap",
        moves: []
    })
}, 5000)