const faq = [
  {
    keywords: ["hour", "open", "close", "time"],
    answers: [
      "We are open daily from 10 AM to 10 PM.",
      "Our restaurant operates from 10 AM until 10 PM every day.",
    ],
  },
  {
    keywords: ["location", "address", "where"],
    answers: [
      "We are located at Little Lemon Restaurant, Bangkok.",
      "You can find us in central Bangkok. Check our Contact page for directions.",
    ],
  },
  {
    keywords: ["reservation", "book", "table"],
    answers: [
      "You can reserve a table from our Reservation page.",
      "Yes! Please use our online reservation form.",
    ],
  },
  {
    keywords: ["menu", "food", "dish"],
    answers: [
      "We serve Mediterranean dishes, pasta, seafood, and desserts.",
      "Our menu includes fresh and seasonal Mediterranean cuisine.",
    ],
  },
  {
    keywords: ["contact", "phone", "email"],
    answers: [
      "You can contact us via our Contact page.",
      "Feel free to reach us through phone or email listed on our website.",
    ],
  },
];

export const getBotReply = (message) => {
  const text = message.toLowerCase();

  for (let item of faq) {
    if (item.keywords.some((keyword) => text.includes(keyword))) {
      return item.answers[Math.floor(Math.random() * item.answers.length)];
    }
  }

  return "I'm here to help with reservations, menu, opening hours, and location.";
};
