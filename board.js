const axios = require('axios'); 
require('dotenv').config();

const TRELLO_URL_BASE = 'https://api.trello.com/1';


async function getBoardList() {
  try {
    const response = await axios.get(TRELLO_URL_BASE + `/boards/ZFJfyuf9/lists?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`);
    return response;
  } catch (error) {
  }
}

module.exports = {
  getBoardList
};
