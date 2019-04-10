[...document.querySelectorAll('.invitation-card')].forEach(card => {
  const fancyTitle = card.querySelector('.invitation-card__subtitle').textContent;
  const friendshipName = card.querySelector('.invitation-card__title').textContent;

  const kickEmOut = card.querySelector('[data-control-name="decline"]');
  const welcomeToMyParadise = card.querySelector('[data-control-name="accept"]');

  if (fancyTitle.match(/recruit/gi)) {
    console.log(`🐟🐟🐟Maeeeeeeeeeeeeh! You ${friendshipName} look like a little fisher who want's to catch me🐟🐟🐟`);
    kickEmOut.click();
  } else {
    console.log(`🚀🚀🚀Happy to say that you ${friendshipName} are welcome to my paradise. 🚀🚀🚀`);
    welcomeToMyParadise.click();
  }
})
