const readline = require('readline');
const util = require('util');

/**
 * Prompts the user for a value
 * @async Utilize IIFE to immediately call the function.
 * @param query - Value that will be sent to the user when prompted to answer
 * @returns Input received from the user
 * @example (async () => {
        var firstName = await prompt("What's your famous person's first name?");
        var lastName = await prompt("What's your famous person's last name?");
        console.log("Hi " + firstName + " " + lastName); 
    })();
  * @link https://studio.code.org/docs/applab/declareAssign_x_prompt/
 */

const prompt = async (query) => {
    if (!query) throw new SyntaxError('A query is required to run prompt()');
    
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout 
    });
    
    const question = util.promisify(rl.question).bind(rl);
    
    try {
        let res = await question(query);
        rl.close();
        
        return res;
      } catch (err) {
        throw new Error(`Unable to run prompt() ${err}`);
      }
}

module.exports = prompt;
