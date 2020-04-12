import fetch from "isomorphic-unfetch";
const setId = 'JP8FV';
const cardcastUrl = `https://api.cardcastgame.com/v1/decks/${setId}/cards`;

export default async (req, res) => {
  try {
    const fetchResponse = await fetch(cardcastUrl);
    const data = await fetchResponse.json();

    const blackCards = data.calls.map((card) => {
      const text = card.text.join("____");
      return { text };
    });
    const whiteCards = data.responses.map((card) => {
      const text = card.text.join("");
      return { text };
    });
    res.status(200).json({
      blackCards,
      whiteCards,
    });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
