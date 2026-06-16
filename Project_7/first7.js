const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];
  
  const compliments = [
    "You have a great sense of humor.",
    "Your creativity inspires others.",
    "You are incredibly hardworking.",
    "You bring positive energy everywhere.",
    "People enjoy being around you.",
    "You are a quick learner.",
    "You have excellent leadership skills.",
    "Your confidence is admirable.",
    "You make others feel valued.",
    "You are very thoughtful.",
    "You handle challenges gracefully.",
    "Your dedication is impressive.",
    "You are a great problem solver.",
    "You have a kind heart.",
    "Your ideas are innovative.",
    "You communicate effectively.",
    "You are dependable.",
    "You are full of potential.",
    "Your determination is inspiring.",
    "You brighten people's day.",
    "You are highly motivated.",
    "You are a fantastic teammate.",
    "You are intelligent and resourceful.",
    "Your optimism is contagious.",
    "You are unique in the best way.",
    "You have excellent judgment.",
    "You are courageous.",
    "You are making a difference.",
    "You are stronger than you realize.",
    "You have an amazing future ahead.",
    "You deserve success."
  ];
  
  const victimCardCompliments = [
    "You always have a reason ready.",
    "You're an expert at avoiding blame.",
    "Nobody tells a story quite like you.",
    "You can turn any situation into your struggle.",
    "Your excuses are surprisingly creative.",
    "You never miss a chance to play the hero.",
    "You make setbacks sound dramatic.",
    "You always find someone else responsible.",
    "Your self-pity skills are unmatched.",
    "You can gain sympathy effortlessly.",
    "You make every challenge sound impossible.",
    "You always have an explanation.",
    "You are committed to your narrative.",
    "You can make small issues sound huge.",
    "You rarely let facts interrupt your story.",
    "You know how to attract attention.",
    "You make complaints sound professional.",
    "You are persistent with your excuses.",
    "You can justify almost anything.",
    "You never give up on your perspective."
  ];
  
  const recommendations = [
    "Try learning a new programming language.",
    "Read a book this month.",
    "Exercise for 30 minutes today.",
    "Take a short walk outside.",
    "Practice meditation for 10 minutes.",
    "Start a personal project.",
    "Drink more water.",
    "Improve your resume.",
    "Learn a new skill online.",
    "Call a friend or family member.",
    "Organize your workspace.",
    "Get at least 8 hours of sleep.",
    "Watch an educational video.",
    "Write down your goals.",
    "Limit social media usage today.",
    "Practice problem-solving challenges.",
    "Try a healthy meal.",
    "Review your finances.",
    "Learn keyboard shortcuts.",
    "Spend time on a hobby.",
    "Work on communication skills.",
    "Take regular study breaks.",
    "Plan your week ahead.",
    "Contribute to open source.",
    "Read tech blogs.",
    "Practice public speaking.",
    "Keep a journal.",
    "Network with professionals.",
    "Stay consistent with your habits.",
    "Celebrate small wins."
  ];

  const predictions = [
    "Today is a great day to start something new.",
    "An unexpected opportunity will come your way.",
    "Someone appreciates your efforts more than you realize.",
    "A small risk could lead to a big reward.",
    "Good news is on the horizon.",
    "Trust your instincts today.",
    "A meaningful conversation awaits you.",
    "Your hard work will soon pay off.",
    "Take time to relax and recharge.",
    "A surprise may brighten your day.",
    "Focus on your goals and avoid distractions.",
    "Luck is on your side today.",
    "A new friendship could be forming.",
    "Patience will bring positive results.",
    "An old problem may finally be resolved.",
    "Your creativity will shine brightly.",
    "Someone may seek your advice.",
    "A financial opportunity could appear.",
    "Stay positive and good things will follow.",
    "You may discover a hidden talent.",
    "A pleasant journey lies ahead.",
    "Your confidence will inspire others.",
    "Be open to learning something new.",
    "A challenge will reveal your strengths.",
    "You will find clarity in a confusing situation.",
    "Success comes from consistent effort.",
    "A happy surprise awaits you soon.",
    "Trust the process and keep moving forward.",
    "Your kindness will be rewarded.",
    "Today has the potential to become memorable."
  ];

 const form= document.getElementById('astroform');
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value;
    const lname=document.getElementById('lname').value;
    const day=parseInt(document.getElementById('day').value);
    const month=parseInt(document.getElementById('month').value);
    const year=parseInt(document.getElementById('year').value);
    
    const text=`Hi ${name} ${lname}, Your Zodiac Sign is
     ${zodiacSigns[month-1]}, ${compliments[day-1]}, ${victimCardCompliments[year%20]},
     ${recommendations[(day*month)%30]}, ${predictions[(name.length*lname.length)%30]}`;
     document.getElementById('result').textContent=text;
 });
