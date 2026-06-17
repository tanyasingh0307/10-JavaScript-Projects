const quotes = [
    "Believe in yourself.",
    "Success is the sum of small efforts repeated daily.",
    "Dream big and dare to fail.",
    "Stay hungry, stay foolish.",
    "Hard work beats talent when talent doesn't work hard.",
    "The future depends on what you do today.",
    "Every accomplishment starts with the decision to try.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
    "Your only limit is your mind.",
    "Learn from yesterday, live for today, hope for tomorrow.",
    "Failure is not the opposite of success; it is part of success.",
    "Small steps every day lead to big results.",
    "Discipline is the bridge between goals and achievement.",
    "Push yourself because no one else is going to do it for you.",
    "Success doesn't come to you; you go to it.",
    "Be stronger than your excuses.",
    "The best way to predict the future is to create it.",
    "Never stop learning because life never stops teaching.",
    "Consistency is more important than perfection."
  ];

  const button= document.querySelector('button');
  const quote = document.querySelector('h1');
  button.addEventListener('click',()=>{
       const index=Math.floor(Math.random()*20);
       quote.textContent=quotes[index];
  })
  