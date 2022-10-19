const fetch = require("node-fetch");
const chalk = require("chalk");
const readline = require("readline-sync");
const { randomUUID } = require("crypto");

const sendQNA = (username, text) =>
    new Promise((resolve, reject) => {
        fetch(`https://ngl.link/${username}`, {
            method: "POST",
            headers: {
                "user-agent": "Chrome/81.0.4044.138",
                "content-type": "application/x-www-form-urlencoded",
            },
            body: `question=${decodeURIComponent(text)}&deviceId=${randomUUID()}`,
        })
            .then((res) => res.status.toString())
            .then((res) => resolve(res))
            .catch((e) => reject(e));
    });

(async () => {
    try {
        console.log(chalk.blue("[+]") + " NGL Link Bot - By: GidhanB.A\n");
        const username = readline.question(chalk.yellow("[+]") + " Username NGL: ");
        const qna = readline.question(chalk.yellow("[+]") + " Text: ");
        const gas = await sendQNA(username, qna);
        if (gas === "200") {
            console.log(chalk.green(`[+]`) + ` Success! => ${gas}`);
        } else {
            console.log(chalk.red(`[-]`) + ` Failed! => ${gas}`);
        }
    } catch (error) {
        console.log(chalk.red(`[+]`) + ` Error: ${error.toString()}`);
    }
})();
