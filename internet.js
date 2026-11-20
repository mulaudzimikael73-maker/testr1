(()=>{
"use strict";
const $=id=>document.getElementById(id);
const WORKER=(window.LIZZY_TELEGRAM_WORKER_URL||"https://mickyhq-test.mulaudzimikael73.workers.dev/").trim();
const LESSONS=["Believe in yourself. I believe in myself enough for both of us.", "If Plan A fails, remember there are 25 other letters.", "You miss 100% of the shots you don't take. You also miss quite a few that you do.", "Progress is progress, unless you're going backwards.", "Do it scared. Do it tired. Just maybe don't do it drunk.", "A bad day is not a bad life. Very important distinction.", "You don't need motivation every day. Sometimes you just need to start.", "Future You is watching. Try not to embarrass them.", "Small steps still count. Unless you're running from a hyena.", "Don't compare Chapter 2 of your life to somebody else's Chapter 15.", "You've survived every difficult day you've had so far. Strong record.", "Success takes time. Unfortunately.", "Be patient. Even Wi-Fi takes a few seconds to connect.", "You can't control everything. You can, however, complain about it.", "Your comfort zone is comfortable for a reason. Leave occasionally.", "Dream big. Your budget can panic later.", "You don't have to be perfect. That position is already occupied.", "One day or day one. Or Tuesday. Tuesday also works.", "Sometimes the biggest obstacle between you and success is opening the laptop.", "Hard work beats talent when talent is taking a nap.", "Do fish know they're wet?", "If tomatoes are fruit, is ketchup technically a smoothie?", "Your future self remembers things you haven't done yet.", "Somewhere, somebody has accidentally waved back at someone who wasn't waving at them.", "If you clean a vacuum cleaner, do you become the vacuum cleaner?", "Every mirror you've ever looked into has technically seen you before.", "Nobody knows what the first person to milk a cow was trying to accomplish.", "If Cinderella's shoe fit perfectly, why did it fall off?", "Maybe pigeons think we're the weird ones.", "If two mind readers read each other's minds, whose mind are they reading?", "You have never seen your own face. Only reflections and pictures.", "Somewhere right now, somebody is saying 'where's my phone?' while holding their phone.", "The word 'queue' is just Q followed by four silent letters waiting their turn.", "Your stomach thinks all potatoes are mashed potatoes.", "If you're waiting for the waiter, aren't you the waiter?", "A birthday is technically your personal New Year's Day.", "The brain named itself. Suspicious.", "Nothing is on fire. Fire is on things.", "If you expect the unexpected, doesn't that make it expected?", "Every time you remember something embarrassing, your brain chose violence.", "Never let them know your next move. Walk backwards.", "If life closes a door, check whether it says PUSH.", "If nobody saw it happen, reconsider whether it needs to become public information.", "Never trust someone who says 'trust me.' Including me.", "If you're running late, walk faster while looking stressed.", "If something feels wrong, turn it off and back on again.", "When in doubt, get ice cream.", "Don't send the paragraph while angry. Draft it. Sleep. Reconsider your career as an author.", "Never argue with someone whose profile picture is a car.", "If you're going to procrastinate, at least make snacks first.", "Always check your pockets before doing laundry.", "Don't grocery shop hungry. That's how you become the owner of seventeen snacks.", "If you lose something, ask your mom. Moms have administrator privileges.", "Always screenshot the evidence.", "Never volunteer information nobody asked for.", "If you're confused, nod slowly. People may assume you're thinking.", "Always carry a charger.", "If someone says 'long story short,' prepare for a long story.", "If the Wi-Fi stops working, staring angrily at the router is mandatory.", "Never trust a chair that makes a noise before you've fully sat down.", "Money can't buy happiness, but being broke hasn't exactly impressed me.", "Save money. Future You has expensive taste.", "Before buying something, ask yourself: do I need this? Then ignore yourself responsibly.", "Never check your bank balance immediately after a night out.", "Financial freedom begins with not ordering food you already have at home.", "A discount is only saving money if you were actually going to buy it.", "You cannot budget your way out of buying snacks. Accept reality.", "Never lend money you're going to need back tomorrow.", "Compound interest sounds boring until it's your money.", "Your card declining is your bank staging an intervention.", "If you can't afford it twice, consider staring at it online instead.", "A budget is just telling your money where to disappear.", "Payday confidence should never be trusted.", "There are two versions of you: before payday and after payday.", "Rich is having money. Wealthy is forgetting you have a subscription and not noticing.", "Communication is important. Unfortunately, this means talking about feelings.", "Never go to sleep angry. Stay awake and become increasingly unreasonable.", "Sometimes saying 'you're right' is cheaper than continuing.", "Choose someone who makes you laugh. Life is already serious enough.", "If she says 'I'm fine,' further investigation may be required.", "Love is patient. Arguments are apparently not.", "The secret to relationships is communication, patience and occasionally food.", "Never underestimate the diplomatic power of ice cream.", "If you care about someone, annoy them regularly so they know you're still alive.", "Remember the little things. Apparently they become evidence later.", "Relationships require compromise. Unless I'm clearly right.", "A thoughtful message costs nothing and can mean everything.", "Sometimes quality time is literally just doing nothing together.", "Learn their favourite snack. This is strategic information.", "Being able to laugh together fixes more than people realise.", "Don't keep score in relationships. Unless you're bowling.", "If someone remembers the tiny things you tell them, pay attention.", "Sometimes 'Did you get home safely?' says more than a paragraph.", "Find somebody you can be ridiculous around.", "A good relationship should contain approximately 40% affection and 60% bullying. Research pending.", "Read the question before answering. Revolutionary concept.", "Google first. Panic second.", "Save your work. SAVE. YOUR. WORK.", "If something is due tomorrow, today is technically early.", "Group projects teach you that trust is dangerous.", "Never volunteer to present first unless you enjoy suffering.", "The smartest person in the room is often the person willing to ask the stupid question.", "You don't need to know everything. You need to know how to find things.", "Writing it down dramatically increases the chance you'll remember it.", "If you've read the same sentence five times, go to sleep.", "Studying while scrolling is just scrolling with educational guilt.", "Deadlines are motivational speakers with consequences.", "If your assignment says 2,000 words, suddenly every sentence becomes incredibly important.", "Spellcheck is a friend, not a substitute for reading.", "Never submit without opening the file one last time.", "Always be yourself. Unless you can be Batman.", "Batman had a plan for everything. Take notes.", "Never underestimate somebody wearing all black.", "A cape is impractical. Still cool though.", "If Batman can prepare for Superman, you can prepare for Monday.", "Confidence is walking into a room like Batman already investigated it.", "There is almost certainly a Batman quote appropriate for your situation.", "If your plan requires explaining why Batman would approve, it's probably a great plan.", "Some problems require patience. Others require a Batmobile.", "I don't make the rules. Unless they're Batman-related.", "Never make important decisions while hungry.", "Ice cream doesn't solve problems, but neither does being sad without ice cream.", "Fries taste better when stolen from somebody else's plate.", "Pasta is proof that life isn't completely terrible.", "A burger is just a sandwich with ambition.", "Dessert isn't unnecessary. It's emotional infrastructure.", "If somebody says they don't want fries, order extra.", "Never trust 'I'll just have one sweet.'", "Calories consumed while standing in the kitchen are administratively complicated.", "There's no such thing as too much pasta. Only inadequate containers.", "A wise man once said nothing. Unfortunately, I am not that man.", "If at first you don't succeed, investigate who witnessed it.", "Sometimes you need to look in the mirror and say: Future Me can handle this.", "The early bird gets the worm. I don't want a worm. I'm sleeping.", "Don't chase people. Unless they have your phone.", "If you're going through hell, keep going. Petrol is expensive.", "Confidence is just confusion with good posture.", "Every problem has a solution. Some solutions are just terrible.", "Think before you speak. Or don't. Sometimes the story is funnier that way.", "The consequences of my own actions continue to surprise me.", "If you don't know what you're doing, do it confidently.", "Never underestimate the power of saying 'that's crazy' when you weren't listening.", "Sometimes maturity is simply deciding not to send the message.", "You can't lose an argument if you leave the room. Strategic withdrawal.", "There's a fine line between confidence and delusion. I refuse to locate it.", "You're doing better than you think. Probably.", "Remember: panic is not a strategy. It's more of a lifestyle.", "Today is another opportunity to make a questionable decision and learn from it.", "If your plan works, you're a genius. If it doesn't, it was an experiment.", "Life is short. Order dessert.", "Never trust a pigeon. They know too much. 🐦", "If you stare at the microwave, it cooks exactly the same speed.", "Always knock on wood. You never know who's living in there.", "If you lose one sock, the washing machine has won. 🧦", "Never fight a goose. You will lose.", "Bananas are just nature's boomerangs if you throw them badly. 🍌", "If you walk past a mirror, check yourself. For quality control.", "Never underestimate a suspiciously quiet toddler.", "If the elevator is full, pressing the button again won't help.", "Don't trust anyone who eats pizza with a knife and fork. 🍕", "If you drop your phone on your face, you're officially awake.", "A chair is just a table you can sit on.", "Never run with scissors. Unless you're late. ✂️", "If your toast lands butter-side down, blame physics.", "Every pen disappears the moment you actually need one.", "If you wave back at someone who wasn't waving at you, move countries. 😭", "Never make eye contact with a seagull holding food.", "If you forget why you entered a room, pretend you meant to do that.", "Your left shoe has never been jealous of your right shoe. Probably.", "If you can't find something, ask someone else. They'll find it immediately.", "Never trust a \"quick\" trip to the shops.", "If you sneeze three times, you're legally allowed to blame allergies.", "A cold pillow is basically five-star accommodation.", "If your Wi-Fi works perfectly, don't touch anything.", "Never challenge a child to a staring contest. They have no deadlines.", "If you hear a weird noise at night, simply don't investigate.", "The floor is lava only when you're barefoot.", "If you trip in public, keep walking. Nobody saw anything.", "Never open a packet quietly. The packet will take it personally.", "If you don't know what day it is, check your phone before panicking.", "Never trust a vending machine that gives you change too quickly.", "If your shadow is following you, don't confront it.", "The louder the alarm, the stronger the snooze button.", "If you can't reach it, use something else to reach it. Engineering.", "Never put something \"somewhere safe.\" You'll never find it again.", "If you hear your name in public, pretend you didn't.", "Always inspect the suspiciously perfect avocado. 🥑", "If the remote is missing, check the person sitting closest to it.", "Never underestimate the power of a dramatic sigh.", "If someone says \"watch this,\" prepare for consequences. 😂", "Life is short. Order the extra fries. 🍟", "If your hair looks good, don't touch it.", "Never trust a door that says \"pull\" when you're already pushing.", "If you don't like the song, wait 30 seconds. It might become worse.", "When in doubt, walk confidently in the direction you hope is correct. 😎", "Lose at bowling? It's called The Mikael Effect. 🎳", "Never celebrate before the pins fall. The bowling gods are watching. 🎳", "If you lose at bowling, blame the shoes. 👟", "One pillow is sleep. Five pillows is architecture. 🛏️", "Too many pillows? Congratulations, you're sleeping uphill. 😂", "The colder side of the pillow is worth fighting for. ❄️", "Never trust \"I'll remember where I put it.\"", "If you keep opening the fridge, new food won't spawn. 🧀", "Your phone hits 1% exactly when you need it most. 🔋", "Three alarms won't make you less tired. ⏰", "If you can't find your phone, check your hand first. 📱", "Never grocery shop while hungry. Your wallet will suffer. 🛒", "If it takes two minutes, do it now. Future-you is busy.", "Never argue on an empty stomach. Eat first, fight later. 😂", "If you say \"what could go wrong?\", something will.", "The queue you leave is always the queue that moves fastest. 😭", "Never say \"I'll just watch one episode.\"", "If your room has a clothes chair, it's already too late. 👕", "Check your pockets before leaving. Phone, wallet, keys, dignity.", "If you're late, walking faster doesn't change the time. 😂", "Never trust a charger that only works at one angle.", "If the Wi-Fi stops working, restart it before blaming Micky.", "Don't make important decisions after midnight.", "If you're angry, don't text. Draft it and go eat.", "If you can't fix it, at least make it a funny story.", "Always bring a jacket. Weather loves proving you wrong.", "If you borrow it, return it before they have to ask.", "A screenshot today saves a panic tomorrow. 📸", "If you don't know what you're doing, read the instructions.", "Procrastination is just future-you's problem… until it isn't.", "If you drop something, gravity has officially won.", "Never trust a \"quick nap.\"", "If you're hungry, you're probably not as angry as you think.", "Don't compare your behind-the-scenes to someone else's highlight reel.", "Sometimes the best response is simply: \"Okay.\"", "Your bed is not a storage facility.", "If you can't sleep, stop checking the time every five minutes.", "Never leave home with 1% battery. That's a suicide mission. 🔋", "If you mess up, own it, laugh about it, learn from it.", "A Life Without Sweets is Not a Life Worth Living.", "Dessert isn't the end of the meal. It's the whole point of the meal. 🍰", "If the recipe says one tablespoon of sugar, it clearly means the whole bag.", "Never trust a cake that describes itself as 'healthy.'", "A cupcake without frosting is legally just a sad muffin.", "Chocolate is a food group. I don't make the rules. Actually, I do.", "If dessert is optional, you're doing dinner wrong.", "'We'll share dessert' is the biggest lie two people can agree to. 🍮", "A candy jar left unattended is basically a public invitation.", "There is no emergency a snack cannot make slightly better.", "Never skip breakfast. Skip responsibilities instead.", "If it's on sale, it's basically free. Financial logic, undefeated.", "Sleep is just a free trial of being unconscious.", "A snooze button is a suggestion, not a rule. ⏰", "Never underestimate a nap's power to fix, or ruin, your entire day.", "The best apologies arrive with snacks attached.", "If someone offers you their fries, it's a loyalty test. Choose wisely. 🍟", "Monday is just Sunday's way of testing your patience.", "Never trust a scale immediately after a big meal.", "If you can't decide what to eat, the answer is probably 'both.'", "Ice cream has never once made a situation worse.", "The last slice of cake belongs to whoever is brave enough to take it. 🍰", "If a recipe has more than five steps, that's what takeout is for.", "A sweet tooth isn't a flaw. It's a personality trait.", "A balanced diet is a cookie in each hand.", "Finishing a whole packet of biscuits is technically portion control. For the next packet. 🍪", "Never trust anyone who orders a salad and calls it a treat.", "If it comes with a side of dessert, it was always going to be a good day.", "Traffic lights turn red exactly when you're already running late. 🚦", "If you say 'I'll only be five minutes,' assume the opposite.", "A to-do list is just a wish list with deadlines.", "Group chats are where good ideas go to be ignored. 📱", "The remote control always ends up exactly where you can't reach it.", "If autocorrect changes your message, that's now what you meant.", "Never trust a printer. It knows exactly when you're in a hurry.", "The last 5% of a phone battery lasts approximately three seconds. 🔋", "If it's raining and you forgot your umbrella, that's just tradition now.", "Never argue with a GPS. It already decided you're wrong.", "A parking spot appears the moment you stop looking for one. 🚗", "The gym is 80% intention and 20% attendance.", "If you set five alarms, you'll wake up exactly once, right before the fifth. ⏰", "Never trust a Wi-Fi signal with only two bars.", "A closed laptop lid does not mean the meeting is actually over.", "If your plant is still alive, consider a career in miracles. 🌱", "Every umbrella eventually turns itself inside out. It's inevitable.", "The last piece of anything belongs to whoever asks first.", "If your shoe comes untied, the universe wants you to stop and reconsider your choices.", "A queue moves fastest in the lane you didn't choose. 😤", "Winning an argument with silence is still winning.", "Weekends are 48 hours that disappear in what feels like 10.", "If your pet stares at you while you eat, that's basically a tax. 🐾", "A car with one headlight is just winking at traffic.", "If you laugh at your own joke first, commit fully. No apologies.", "Never trust a text that just says 'we need to talk.'", "The bravest people are the ones who answer unknown numbers. 📞", "If you're overthinking it, you've probably already made it worse.", "Every plan survives right up until the first text that says 'actually...'", "Batman doesn't use an umbrella. The cape already knows the weather. 🦇", "If you're nervous about something, ask what Batman would prep beforehand. Then actually do it.", "Batman's car has a name. Yours is just 'the car.'", "The Batcave has Wi-Fi. Nobody questions this.", "Batman always has a plan B. At minimum, have a snack B.", "Batman never uses the front door. Deeply impractical for a dinner guest.", "Somewhere, Alfred is folding a cape. This has nothing to do with your day, but it's happening.", "If Batman can function on four hours of sleep and pure willpower, so can you. Not recommended though.", "Batman has never once been asked to split a bill. Must be nice.", "The Bat-Signal is just a very dramatic group chat notification. 🦇", "Catwoman's whip has never once been used to open a jar. Missed opportunity. 🐱", "If Catwoman can land on her feet, you can recover from one bad day.", "Catwoman owns multiple cat-themed outfits. This solves nothing in your life.", "Somewhere, Catwoman is currently ignoring a rule. Solidarity.", "Catwoman never apologises for taking what's rightfully overdue. Within reason, neither should you.", "Catwoman's goggles have cat ears built in. This information will not help you today.", "Cats don't listen to Catwoman either. Some things are universal. 🐱", "If Catwoman can walk into a room like she owns it, so can you. Practice first.", "Catwoman has never once needed directions. Deeply suspicious.", "Somewhere, a cat burglar is stuck in traffic. Even villains have bad days."];
const VKEY="lizzyMickyWisdomVotesV2";
let current=Math.floor(Math.random()*LESSONS.length);
let currentPage="home",lastNewsDay=null;

async function notify(type,title,details){
 if(!WORKER)return false;
 try{
  const r=await fetch(WORKER,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type,title,details,source:"LizzyOS"})});
  return r.ok;
 }catch(e){console.warn(e);return false}
}
function setAddress(v){if($("browserAddress"))$("browserAddress").textContent=v}
function home(){
 currentPage="home";
 setAddress("lizzy://home");
 $("browserPage").innerHTML=`<div class="browserHome">
 <div class="searchLogo">Lizzy<span>Search</span></div>
 <div class="fakeSearch">Search LizzyOS or enter address 🔍</div>
 <h3>Favourite Sites</h3>
 <div class="browserBookmarks">
  <button data-site="bank"><span>🏦</span><b>Bank of Micky</b><small>Online Banking</small></button>
  <button data-site="market"><span>📈</span><b>Micky Stock Exchange</b><small>21 completely fictional companies</small></button>
  <button data-site="entertainment"><span>🎟️</span><b>Micky Entertainment</b><small>Shows, opera, live performances & songs</small></button>
  <button data-site="lessons"><span>🧠</span><b>Life Lessons with Micky</b><small>Qualifications: Trust Me.</small></button>
  <button data-site="lizzylessons"><span>💡</span><b>Life Lessons with Lizzy</b><small>Mikael grades every submission.</small></button>
  <button data-site="news"><span>📰</span><b>Micky's Daily News</b><small>Headlines, Bank & President's Words</small></button>
 </div></div>`;
}
const BANK_SESSION="lizzyBankLoggedInV2";
const BANK_PASSWORD="MRPERFECT";
const BANK_WALLET_KEY="lizzyMickyBucsV1";
const BANK_STATE_KEY="lizzyMickyBankV1";
const BANK_WEEK=7*24*60*60*1000;
const BANK_CREATOR_KEY="bankOfMickyCreatorMBV1";
const BANK_INFLUENCER_TOTAL_KEY="bankOfMickyInfluencerTotalV2";
const BANK_CREATOR_MIGRATION_KEY="bankOfMickyCreatorMergedIntoWalletV2";
const BANK_LEDGER_KEY="bankOfMickyTransactionsV2";
const BANK_RANDOM_DAY_KEY="bankOfMickyRandomActivityDayV1";
const BANK_RANDOM_CREDITS=[[10,"Good Behaviour Bonus"],[25,"Main Character Allowance"],[7,"Looking Fabulous Credit"],[18,"Compensation for Waking Up Early"],[30,"Mikael Appreciation Dividend"],[12,"Money Found Behind the Sofa"]];
const BANK_RANDOM_CHARGES=[[12,"Emotional Damage Fee"],[8,"Administrative Nonsense"],[22,"Chocolate Emergency"],[6.5,"Existing While Expensive"],[15,"Premium Gossip Subscription"],[3.99,"Breathing Fee"],[9,"You Know What You Did Fee"]];

function bankRead(key,fallback){
 try{const raw=localStorage.getItem(key);return raw===null?fallback:JSON.parse(raw)}
 catch(e){return fallback}
}
function bankWrite(key,value){localStorage.setItem(key,JSON.stringify(value))}
function bankCreatorBalance(){return Number(bankRead(BANK_INFLUENCER_TOTAL_KEY,0))||0}
function bankLedger(){const x=bankRead(BANK_LEDGER_KEY,[]);return Array.isArray(x)?x:[]}
function bankEsc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function bankMoney(n){return (Math.round((Number(n)||0)*100)/100).toFixed(2).replace(/\.00$/,"" )+" MB"}
function bankRecord(tx){const ledger=bankLedger();ledger.unshift({id:"bank-"+Date.now().toString(36)+Math.random().toString(36).slice(2,7),at:Date.now(),...tx});bankWrite(BANK_LEDGER_KEY,ledger.slice(0,250))}
function bankMigrateLegacyCreatorBalance(){
 if(bankRead(BANK_CREATOR_MIGRATION_KEY,false))return;
 const legacy=Math.max(0,Number(bankRead(BANK_CREATOR_KEY,0))||0);
 if(legacy>0){
   bankSetWallet(Math.round((bankWallet()+legacy)*100)/100);
 }
 const earned=bankLedger().filter(x=>x&&x.kind==="influencer"&&Number(x.amount)>0).reduce((s,x)=>s+Number(x.amount||0),0);
 bankWrite(BANK_INFLUENCER_TOTAL_KEY,Math.round(Math.max(bankCreatorBalance(),earned)*100)/100);
 bankWrite(BANK_CREATOR_KEY,0);
 bankWrite(BANK_CREATOR_MIGRATION_KEY,true);
}
function bankCreatorTransaction(amount,description,kind="general"){
 amount=Math.round((Number(amount)||0)*100)/100;if(!amount)return false;
 const old=bankWallet();if(amount<0&&old+amount<0)return false;
 const balance=Math.round((old+amount)*100)/100;bankSetWallet(balance);
 if(kind==="influencer"&&amount>0){bankWrite(BANK_INFLUENCER_TOTAL_KEY,Math.round((bankCreatorBalance()+amount)*100)/100)}
 bankRecord({amount,description,kind,currency:"MB",balanceAfter:balance});return true;
}
function bankSpendable(){bankMigrateLegacyCreatorBalance();return Math.round(bankWallet()*100)/100}
function bankSpend(amount,description,kind="purchase"){
 bankMigrateLegacyCreatorBalance();
 amount=Math.round((Number(amount)||0)*100)/100;if(amount<=0||bankSpendable()<amount)return false;
 const wallet=Math.round((bankWallet()-amount)*100)/100;
 bankSetWallet(wallet);
 bankRecord({amount:-amount,description,kind,currency:"MB",balanceAfter:wallet});
 return true;
}
function bankCredit(amount,description,kind="income"){return bankCreatorTransaction(Math.abs(Number(amount)||0),description,kind)}
function bankLogMB(amount,description,balanceAfter){bankRecord({amount,description,kind:"mickybucs",currency:"MB",balanceAfter:Number(balanceAfter)||0})}
function bankMaybeRandomActivity(){
 const d=new Date(),day=[d.getFullYear(),String(d.getMonth()+1).padStart(2,"0"),String(d.getDate()).padStart(2,"0")].join("-");
 if(bankRead(BANK_RANDOM_DAY_KEY,"")===day)return;
 bankWrite(BANK_RANDOM_DAY_KEY,day);
 const roll=fnv1aSeed("bank-random|"+day)%100;
 if(roll<22){const x=BANK_RANDOM_CREDITS[fnv1aSeed(day+"|credit")%BANK_RANDOM_CREDITS.length];bankCreatorTransaction(x[0],x[1],"bonus")}
 else if(roll<44){const bal=bankWallet(),choices=BANK_RANDOM_CHARGES.filter(x=>x[0]<=bal);if(choices.length){const x=choices[fnv1aSeed(day+"|charge")%choices.length];bankCreatorTransaction(-x[0],x[1],"charge")}}
}
function bankWallet(){return Number(bankRead(BANK_WALLET_KEY,0))||0}
function bankSetWallet(n){
 bankWrite(BANK_WALLET_KEY,Math.max(0,Number(n)||0));
 window.dispatchEvent(new Event("lizzyStoreRefresh"));
}
function bankState(){
 const raw=bankRead(BANK_STATE_KEY,{savings:0,qualifyingSince:null,lastBonus:null});
 return {
   savings:Number(raw?.savings||0),
   qualifyingSince:raw?.qualifyingSince||null,
   lastBonus:raw?.lastBonus||null
 };
}
function bankSave(s){
 bankWrite(BANK_STATE_KEY,s);
 window.dispatchEvent(new Event("lizzyStoreRefresh"));
}
async function bankNotify(title,details){
 return notify("🏦 BANK OF MICKY",title,details);
}
function bank(){
 currentPage="bank";
 setAddress("https://bankofmicky.lizzy");
 if(sessionStorage.getItem(BANK_SESSION)==="yes")return bankDashboard();
 $("browserPage").innerHTML=`<div class="bankLoginPage">
 <div class="bankLoginBrand">🏦</div><h1>Bank of Micky</h1>
 <p class="bankTagline">Private Banking • Definitely Regulated™</p>
 <div class="bankLoginCard">
 <label>Client</label><div class="bankClient">Lebone Elizabeth Kganyago</div>
 <label for="bankPassword">Online Banking Password</label>
 <input id="bankPassword" type="password" autocomplete="off" placeholder="Enter password">
 <button id="bankLoginBtn" type="button">Sign In</button>
 <p id="bankLoginStatus" class="bankLoginStatus"></p></div>
 <small class="bankFinePrint">Bank of Micky will never ask you to send your Micky Bucs to a prince.</small>
 </div>`;
 setTimeout(()=>$("bankPassword")?.focus(),50);
}
function bankLogin(){
 const input=$("bankPassword"),status=$("bankLoginStatus");
 const attempt=(input?.value||"").trim().toUpperCase().replace(/\s+/g,"");
 if(attempt===BANK_PASSWORD){sessionStorage.setItem(BANK_SESSION,"yes");bankDashboard()}
 else{if(status)status.textContent="❌ Incorrect password. Access denied.";if(input){input.value="";input.focus()}}
}
function bankBonusText(s){
 if(s.savings<15)return `Save ${15-s.savings} more MB to start qualifying for the weekly bonus.`;
 if(!s.qualifyingSince)return "Savings timer will start now.";
 const elapsed=Date.now()-Number(s.qualifyingSince);
 if(elapsed<BANK_WEEK){const d=Math.ceil((BANK_WEEK-elapsed)/86400000);return `${d} day${d===1?"":"s"} remaining until the +5 MB bonus.`}
 if(s.lastBonus&&Date.now()-Number(s.lastBonus)<BANK_WEEK)return "This week's savings bonus has already been claimed.";
 return "🎉 Your +5 MB weekly savings bonus is ready.";
}
function bankDashboard(message=""){
 bankMigrateLegacyCreatorBalance();
 bankMaybeRandomActivity();
 const s=bankState(),w=bankWallet(),creator=bankCreatorBalance(),tx=bankLedger();
 const txHtml=tx.length?tx.map(x=>{
   const amount=Number(x.amount)||0;
   const amt=`${amount>=0?"+":""}${(Math.round(amount*100)/100).toFixed(2).replace(/\.00$/,"" )} MB`;
   const bal=x.balanceAfter==null?"":` · Balance ${(Math.round((Number(x.balanceAfter)||0)*100)/100).toFixed(2).replace(/\.00$/,"" )} MB`;
   return `<div class="bankHistoryRow"><span class="bankHistoryIcon">${amount>=0?"↙":"↗"}</span><div><b>${bankEsc(x.description||"Bank transaction")}</b><small>${new Date(x.at||Date.now()).toLocaleDateString("en-ZA",{day:"numeric",month:"short",year:"numeric"})}${bal}</small></div><strong class="${amount>=0?"bankCredit":"bankDebit"}">${amt}</strong></div>`;
 }).join(""):`<div class="bankHistoryEmpty">No transactions yet.</div>`;
 $("browserPage").innerHTML=`<div class="bankSite">
 <div class="bankSiteHeader"><div><small>BANK OF MICKY</small><h2>Good day, Lizzy 👋</h2></div><button id="bankLogout" type="button">Log Out</button></div>
 <div class="bankAccountCard"><small>AVAILABLE MICKY BUCS</small><div class="bankBigBalance">${w} <span>MB</span></div><div class="bankAccountNo">Everyday Wallet • **** 0002</div></div>
 <div class="bankGrid"><div class="bankMiniCard creatorCash"><small>TOTAL INFLUENCER EARNINGS</small><strong>${bankMoney(creator)}</strong><span>Paid directly into Available Micky Bucs</span></div><div class="bankMiniCard"><small>SAVINGS</small><strong>${s.savings} MB</strong><span>Bank of Micky Savings</span></div><div class="bankMiniCard"><small>WEEKLY BONUS</small><strong>+5 MB</strong><span>${bankBonusText(s)}</span></div></div>
 <div class="bankActions"><button type="button" data-web-bank="deposit">↓ Deposit 5 MB</button><button type="button" data-web-bank="withdraw">↑ Withdraw 5 MB</button><button type="button" data-web-bank="bonus">🎁 Claim Weekly Bonus</button></div>
 ${message?`<div class="bankWebStatus">${message}</div>`:""}
 <div class="bankRules"><b>How savings work</b><p>Move 5 MB at a time between your wallet and savings. Keep at least 15 MB saved for 7 days to qualify for the +5 MB weekly bonus. MizzyGram creator payments are paid directly into your Available Micky Bucs wallet. The Influencer Earnings card above tracks your lifetime campaign income.</p></div>
 <div class="bankHistory"><div class="bankHistoryHead"><h3>Transaction History</h3><small>Bank activity, creator payments and suspicious fees</small></div>${txHtml}</div></div>`;
}
async function bankAction(action){
 let s=bankState(),w=bankWallet();
 if(action==="deposit"){
   if(w<5)return bankDashboard("😭 You need at least 5 MB in your wallet to deposit.");
   w-=5;s.savings+=5;
   if(s.savings>=15&&!s.qualifyingSince)s.qualifyingSince=Date.now();
   bankSetWallet(w);bankSave(s);bankLogMB(-5,"Transfer to savings",w);
   bankDashboard("✅ 5 MB deposited into savings.");
   bankNotify("Deposit",`5 MB\nWallet: ${w} MB\nSavings: ${s.savings} MB`);
   return;
 }
 if(action==="withdraw"){
   if(s.savings<5)return bankDashboard("😭 You need at least 5 MB in savings to withdraw.");
   s.savings-=5;w+=5;
   if(s.savings<15)s.qualifyingSince=null;
   bankSetWallet(w);bankSave(s);bankLogMB(5,"Withdrawal from savings",w);
   bankDashboard("✅ 5 MB withdrawn back to your wallet.");
   bankNotify("Withdrawal",`5 MB\nWallet: ${w} MB\nSavings: ${s.savings} MB`);
   return;
 }
 if(action==="bonus"){
   if(s.savings<15||!s.qualifyingSince||Date.now()-Number(s.qualifyingSince)<BANK_WEEK)
     return bankDashboard("🔒 Keep at least 15 MB saved for 7 days before claiming the bonus.");
   if(s.lastBonus&&Date.now()-Number(s.lastBonus)<BANK_WEEK)
     return bankDashboard("⏳ This week's savings bonus has already been claimed.");
   s.lastBonus=Date.now();w+=5;bankSave(s);bankSetWallet(w);bankLogMB(5,"Weekly savings bonus",w);
   bankDashboard("🎉 Weekly savings bonus claimed: +5 MB!");
   bankNotify("Weekly bonus claimed",`+5 MB\nWallet: ${w} MB\nSavings: ${s.savings} MB`);
 }
}
function state(){try{return JSON.parse(localStorage.getItem(VKEY)||'{"helpful":0,"useless":0}')}catch{return {helpful:0,useless:0}}}
function lesson(){
 currentPage="lesson";
 setAddress("https://lifelessonswithmicky.lizzy");
 const s=state(), total=s.helpful+s.useless, rating=total?Math.round(s.helpful/total*100):100;
 $("browserPage").innerHTML=`<div class="lifeLessonsPage">
 <div class="wisdomBrand">🧠 LIFE LESSONS WITH MICKY™</div>
 <p class="wisdomSub">Founder & Chief Philosopher • Qualifications: Trust Me.</p>
 <div class="wisdomCard"><small>LIFE LESSON #${current+1}</small><blockquote>“${LESSONS[current]}”</blockquote><cite>— Mikael Mulaudzi</cite></div>
 <div class="wisdomButtons"><button data-vote="helpful">👍 Helpful</button><button data-vote="useless">👎 Absolutely Useless</button><button id="anotherLesson">Give Me Another Life Lesson</button></div>
 <p class="wisdomRating">Micky Wisdom Approval Rating: <b>${rating}%</b> • ${s.helpful} helpful / ${s.useless} useless</p>
 </div>`;
}
async function vote(kind){
 const s=state();s[kind]=(s[kind]||0)+1;localStorage.setItem(VKEY,JSON.stringify(s));
 const label=kind==="helpful"?"👍 Helpful":"👎 Absolutely Useless";
 await notify("🧠 LIFE LESSON VOTE",`Lesson #${current+1} — ${label}`,LESSONS[current]);
 lesson();
}

/* ===== 💡 LIFE LESSONS WITH LIZZY — she writes, Mikael grades ===== */
function lizzyLessonsPage(){
 currentPage="lizzylessons";
 setAddress("https://lifelessonswithlizzy.mikael");
 $("browserPage").innerHTML=`<div class="lifeLessonsPage">
 <div class="wisdomBrand">💡 LIFE LESSONS WITH LIZZY™</div>
 <p class="wisdomSub">Founder & Chief Philosopher • Qualifications: Also Trust Me.</p>
 <div class="wisdomCard">
  <textarea id="lizzyLessonInput" maxlength="600" placeholder="What's today's life lesson?" style="width:100%;min-height:80px;"></textarea>
  <div class="wisdomButtons"><button id="submitLizzyLesson">Submit for Grading</button></div>
  <div id="lizzyLessonStatus" class="wisdomSub"></div>
 </div>
 <h3 style="margin-top:16px;">Your Submissions</h3>
 <div id="lizzyLessonsList">Loading…</div>
 </div>`;
 loadLizzyLessons();
}
async function loadLizzyLessons(){
 const list=$("lizzyLessonsList");
 if(!list)return;
 try{
  const r=await fetch(WORKER+"?lizzyLessons=1");
  const d=await r.json();
  const lessons=d.lessons||[];
  if(!lessons.length){list.innerHTML='<div class="wisdomSub">No lessons submitted yet — write your first one above.</div>';return;}
  list.innerHTML=lessons.map(l=>{
   const badge=l.status==="rated"
     ?(l.rating==="helpful"?"👍 Helpful":"👎 Absolutely Useless")
     :"⏳ Awaiting Mikael's verdict";
   return `<div class="wisdomCard"><blockquote>“${l.text}”</blockquote><cite>${badge}${l.note?` — "${l.note}"`:""}</cite></div>`;
  }).join("");
 }catch(e){list.innerHTML='<div class="wisdomSub">Could not load your lessons.</div>';}
}
async function submitLizzyLesson(){
 const input=$("lizzyLessonInput"),status=$("lizzyLessonStatus"),btn=$("submitLizzyLesson");
 const text=input?.value.trim();
 if(!text){if(status)status.textContent="Write something first 👀";return;}
 if(btn)btn.disabled=true;
 if(status)status.textContent="Sending to Mikael…";
 try{
  const r=await fetch(WORKER,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"submit_lizzy_lesson",text})});
  const d=await r.json();
  if(!d.success)throw new Error(d.error||"Could not submit");
  if(input)input.value="";
  if(status)status.textContent="✓ Sent to Mikael for grading";
  loadLizzyLessons();
 }catch(e){if(status)status.textContent="❌ Could not send. Try again.";}
 finally{if(btn)btn.disabled=false;}
}

const NEWS_STORAGE_KEY="lizzyMickyDailyNewsV1";
const NEWS_ROTATION_VERSION="v9-gobshite-original-layout-645";

const NEWS_BREAKING=[
 {h:"Major Announcement Expected from the President",p:"The President has confirmed that savings across LizzyOS are at an all-time high, and that the weekly +5 MB bonus will continue for every citizen who keeps at least 15 MB banked for seven days."},
 {h:"Bank of Micky Vault Reaches Record Balance",p:"Analysts describe the current savings climate as 'suspiciously stable,' pointing to disciplined depositors and an unusually low number of impulse withdrawals this week."},
 {h:"City-Wide Celebration as Weekly Bonus Confirmed Again",p:"Officials confirm the +5 MB weekly bonus remains fully funded, with no changes expected to the 15 MB, seven-day qualifying threshold."},
 {h:"President Addresses Rumours of a New Currency",p:"Sources close to the Office of the President deny any plans to replace the Micky Buc, calling the current system 'financially iconic.'"},
 {h:"LizzyOS Citizens Report Record Levels of Contentment",p:"An informal survey suggests satisfaction is up across the board, with several respondents crediting 'consistent snack access' as a leading factor."},
 {h:"Emergency Session Called Over Snack Shortage Scare",p:"The scare has since been resolved. Officials confirm the pantry was simply relocated, not depleted."},
 {h:"Bank of Micky Announces Zero Fee Increases, Again",p:"For the count-th consecutive week, the Bank of Micky has raised absolutely nothing. Depositors are reportedly thrilled."},
 {h:"Local Investigation Into 'Mr Perfect' Title Reopened",p:"A newly formed review board says it will 'look into it,' though a source close to the investigation predicts the outcome is 'not exactly a mystery.'"},
 {h:"President Praises Citizens for Strong Weekly Turnout",p:"Attendance across LizzyOS activities remains high, with officials calling engagement levels 'genuinely impressive.'"},
 {h:"Micky's Daily News Wins Award for Most Trusted Source",p:"The award was self-issued. The newsroom stands by its accuracy regardless."},
 {h:"Bank of Micky Confirms Vault Remains Fully Guarded",p:"Security has not been tested recently, largely because nobody has attempted to test it."},
 {h:"President Unveils Plans for a Quieter, Calmer Week Ahead",p:"Details remain scarce, but officials describe the plan as 'mostly vibes, but promising vibes.'"},
 {h:"Sources Confirm Mysterious New Feature In Development at LizzyOS HQ",p:"Details remain locked — quite literally, according to one anonymous insider."},
 {h:"Insiders Whisper About Something 'Under Construction' Behind the Scenes",p:"When asked for comment, the development team simply smiled and said nothing."},
 {h:"Rumours Swirl of a New Way to Earn Micky Bucs Coming Soon",p:"Officials neither confirm nor deny, which historically means it's true."},
 {h:"Leaked Blueprint Suggests a Brand New Room Is Being Added to LizzyOS",p:"No further details were provided. The blueprint has since been shredded."},
 {h:"President Teases 'Something Big' for a Future Update",p:"When pressed for specifics, the President simply winked and changed the subject."},
 {h:"Development Team Spotted Working Late Again. Speculation Mounts.",p:"Nobody knows what they're building. Everybody has a theory."},
 // New Daily Gobshite reports are shuffled alongside original breaking news.
 {"h":"LIZZY THREATENS WEEK-LONG BLOCKADE OVER PRESIDENT'S ALARMING MEMORY","p":"The President's unusually impressive memory has reportedly become a matter of growing frustration for one particular citizen: Lizzy.","body":"Sources close to the situation confirm that Mikael possesses the deeply inconvenient ability to remember things Lizzy has said, even when she would much rather he forgot them.\n\nThe situation has apparently deteriorated to the point where Lizzy has considered blocking the President for an entire week in an effort to secure some peace.\n\nHowever, in a bizarre development, Lizzy has clarified that these are \"not necessarily bad problems.\"\n\nPolitical analysts are now questioning whether this is genuinely a complaint or simply an unusually complicated way of expressing affection.\n\nThe Presidential Office has refused to apologise for its excellent memory, maintaining that remembering things is generally considered a positive quality.\n\nOne government insider described the situation as \"a woman fighting a battle against a man who has receipts.\"","verdict":"The President remembers everything. Unfortunately for Lizzy, that includes this complaint."},
 {"h":"PRESIDENT FORCED INTO HORROR FILM AS LIZZY OFFERS SUSPICIOUSLY CONVENIENT HAND-HOLDING AGREEMENT","p":"A major human rights debate has erupted following reports that Lizzy has arranged for President Mikael to watch a horror movie despite being fully aware of his longstanding opposition to the genre.","body":"The President, who has consistently maintained that horror films are an unnecessary form of voluntary suffering, now finds himself facing a deeply concerning evening.\n\nLizzy has reportedly pledged to support him through the ordeal by any means necessary, including holding his hand during particularly frightening moments.\n\nCritics have questioned whether this generous offer is actually a carefully calculated strategy to encourage physical closeness.\n\nOthers have suggested that the President may not be quite as opposed to this arrangement as he initially claims.\n\nThe Department of Presidential Safety has requested additional blankets, emergency lighting and clarification on whether hand-holding privileges extend beyond the film's closing credits.","verdict":"The movie is terrifying. Lizzy's motives remain under investigation."},
 {"h":"SCIENTISTS CONCERNED AS LIZZY REPORTEDLY MAKES MIKAEL LOOK NORMAL","p":"In a development previously considered scientifically impossible, reports have emerged suggesting that Lizzy may actually be more unhinged than President Mikael.","body":"The revelation has sent shockwaves through the scientific community, with researchers struggling to understand how an individual could make Mikael appear relatively normal.\n\nFor years, the President has been widely regarded as an unusual specimen whose thought processes frequently defy conventional understanding.\n\nHowever, recent observations of Lizzy's behaviour have forced experts to reconsider everything they thought they knew.\n\nOne anonymous researcher allegedly resigned upon discovering that Mikael may no longer be the most questionable person in the room.\n\nThe government has since commissioned a study to determine what happens when two people with this level of nonsense are allowed to encourage each other.\n\nEarly findings suggest that the situation is only getting worse.","verdict":"If Mikael is the normal one, the country is in serious trouble."},
 {"h":"PRESIDENT CAUGHT SMILING AT PHONE: LOCK SCREEN UNDER INVESTIGATION","p":"The Daily Gobshite can exclusively reveal that President Mikael has repeatedly been caught staring at his phone with what witnesses describe as a highly suspicious smile.","body":"Multiple sources confirm that the President was not reading financial reports, checking government updates or reviewing national security briefings.\n\nHe was apparently looking at his lock screen.\n\nAlthough officials have declined to identify the contents of the image, there is growing speculation that a particular individual may be responsible for this unexplained outbreak of happiness.\n\nWitnesses report that the President has been smiling at his phone with increasingly concerning frequency, sometimes without even receiving a notification.\n\nExperts warn that this is a classic symptom of someone being down spectacularly bad.\n\nThe Presidential Press Secretary has denied that any embarrassing behaviour has occurred, insisting that \"the President is simply appreciating high-quality photography.\"","verdict":"We know what you are smiling at, Mr President. So does everyone else."},
 {"h":"ANOTHER DATE ON THE HORIZON? PRESIDENT MAY BE FORCED TO EAT UNFAMILIAR FOOD","p":"Diplomatic sources have revealed that another date between Mikael and Lizzy may be under consideration.","body":"While the details remain classified, intelligence suggests that the proposed outing could involve the President attempting foods he has never previously tried.\n\nThe revelation has raised concerns within the Department of Presidential Dietary Stability.\n\nMikael, whose food preferences are reportedly governed by a combination of caution and stubbornness, may soon find himself outside his culinary comfort zone.\n\nLizzy is widely believed to be encouraging the potential expedition, although her precise intentions remain unclear.\n\nObservers are divided on whether the President will embrace the experience or spend fifteen minutes examining the menu before ordering the safest possible option.\n\nThe government has reportedly begun preparing an emergency backup meal.","verdict":"Love may be in the air, but so is the possibility of food-related complaints."},
 {"h":"BATMAN PYJAMAS DECLARED REVOLUTIONARY AS PRESIDENT REDEFINES NIGHTWEAR","p":"President Mikael has sparked a nationwide debate after reportedly declaring Batman pyjamas to be one of the most revolutionary developments in modern clothing.","body":"The President maintains that Batman-themed sleepwear offers an exceptional combination of comfort, practicality and superhero-level sophistication.\n\nFashion critics remain unconvinced.\n\nHowever, government officials have defended the President's position, arguing that an outfit inspired by Gotham City's most famous vigilante should be treated with considerable respect.\n\nSources suggest that Mikael may regard the pyjamas not merely as sleepwear but as an entire philosophy.\n\nQuestions have also been raised about whether the President intends to introduce Batman pyjamas as an acceptable form of official government attire.\n\nThe Department of Fashion has declined to rule out the possibility.","verdict":"Some men wear designer labels. Great men wear Batman."},
 {"h":"LIZZY ACCUSED OF DOUBLE STANDARDS IN EXPLOSIVE PYJAMA DISPUTE","p":"A fresh controversy has erupted after Lizzy reportedly criticised President Mikael for not wearing pyjamas every day.","body":"The comments might have gone unnoticed had investigators not uncovered one particularly awkward detail.\n\nLizzy herself does not wear pyjamas every day.\n\nThis revelation has prompted accusations of selective enforcement, inconsistent standards and what one analyst described as \"the most unnecessary clothing-related argument in modern history.\"\n\nThe President's supporters have demanded an immediate explanation for why Mikael is expected to follow rules that Lizzy apparently considers optional for herself.\n\nThe matter has been referred to the Parliamentary Committee on Nightwear Accountability.\n\nLizzy has yet to present a comprehensive pyjama attendance register.","verdict":"One rule for Mikael, another for Lizzy. The hypocrisy is wearing thin."},
 {"h":"PRESIDENT UNDER INVESTIGATION FOR COLLECTING SALARY WHILE APPARENTLY DOING NOTHING","p":"The Daily Gobshite has obtained troubling reports suggesting that President Mikael may have been receiving regular payments despite a noticeable absence of actual presidential work.","body":"Opposition figures are demanding to know precisely what responsibilities the President has been fulfilling.\n\nInsiders claim that much of his recent schedule has consisted of entertaining himself, making questionable statements, and occasionally irritating Lizzy.\n\nIn response, a radical proposal has emerged: perhaps Lizzy should begin assigning the President actual jobs.\n\nPossible responsibilities include completing personal requests, undertaking ridiculous missions, performing acts of service and providing proof that he has earned his salary.\n\nPolitical observers believe this could mark the beginning of an unprecedented shift in power.\n\nThe President has responded by suggesting that being President is already a full-time responsibility, even when nobody can identify what he is doing.","verdict":"Taxpayer money is disappearing. Lizzy may finally have found a use for the President."},
 {"h":"NATIONAL HANDBAG CRISIS: LIZZY INSISTS TINY BAG IS ENOUGH DESPITE EVIDENCE","p":"A fierce disagreement has emerged between Lizzy and President Mikael over the practical value of extremely small handbags.","body":"Lizzy insists that a tiny bag is perfectly acceptable because it is stylish.\n\nMikael has challenged this position, arguing that bags should ideally be capable of carrying actual belongings.\n\nThe dispute intensified when the President questioned the usefulness of an accessory barely large enough to contain basic necessities.\n\nLizzy has remained firmly committed to her position, apparently willing to defend the tiny handbag until her final breath.\n\nFashion experts have sided with Lizzy, maintaining that style is not always about practicality.\n\nMeanwhile, logistics experts have sided with Mikael, pointing out that a bag unable to carry anything is essentially an expensive decoration.","verdict":"Fashion may be subjective, but storage capacity is not."},
 {"h":"LIZZY ACCUSES THE DAILY GOBSHITE OF BIAS WHILE IGNORING OPPORTUNITY TO BUY INFLUENCE","p":"Lizzy has once again raised concerns about the editorial independence of The Daily Gobshite, accusing the publication of maintaining a suspiciously favourable attitude towards President Mikael.","body":"The allegations have been met with considerable confusion by the newspaper's executive leadership.\n\nCorporate records indicate that Lizzy has made little effort to acquire shares in Gobshite Media or secure meaningful influence over its operations.\n\nMedia analysts have questioned why someone so dissatisfied with the newspaper has not explored the perfectly available option of becoming financially involved in its future.\n\nThe newspaper maintains that its coverage is objective, balanced and subject only to a modest degree of Presidential encouragement.\n\nA spokesperson confirmed that the organisation remains open to investment, journalistic partnerships and other entirely legitimate arrangements.\n\nThe editorial board has additionally reminded Lizzy that criticism is free, but influence may come at a price.","verdict":"You cannot complain about the media empire forever without at least attempting to purchase part of it."},
 {"h":"LEAKED REPORT SUGGESTS LIZZY MAY ACTUALLY ENJOY PRESIDENT'S AUTHORITATIVE SIDE","p":"A confidential report has raised eyebrows after suggesting that Lizzy may secretly appreciate President Mikael's more commanding personality.","body":"Despite her well-documented tendency to challenge his authority, insiders claim Lizzy may actually enjoy moments when the President confidently takes charge.\n\nThe alleged preference has left political commentators confused.\n\nFor months, Lizzy has demonstrated a remarkable willingness to argue with, question and occasionally threaten the President with temporary communication bans.\n\nYet sources now suggest that she may also appreciate the very same man giving her firm instructions.\n\nPsychologists contacted by the newspaper declined to comment, reportedly stating that the relationship had already exceeded their available research budget.\n\nThe President's Office has neither confirmed nor denied the findings.\n\nHowever, staff report that Mikael appeared noticeably pleased upon hearing the allegations.","verdict":"She challenges his authority, but perhaps she likes it more than she lets on."},
 {"h":"PRESIDENT MAY BE SECRETLY FOND OF BOSSY LIZZY, SOURCES CLAIM","p":"In a sensational twist, new intelligence suggests that President Mikael may also have developed an appreciation for Lizzy's more bossy tendencies.","body":"The revelation has stunned observers who previously believed the President was determined to remain in charge at all times.\n\nSources claim that while Mikael enjoys asserting his authority, he may find Lizzy's occasional attempts to take control surprisingly entertaining.\n\nThe situation has created an unusual political arrangement in which both individuals appear determined to lead while simultaneously appreciating the other's confidence.\n\nConstitutional experts are struggling to determine who actually holds power.\n\nSome observers believe this could result in a healthy balance of authority.\n\nOthers suspect it will simply lead to longer arguments, louder laughter and absolutely nobody admitting defeat.","verdict":"Two bosses. One relationship. Not a single peaceful board meeting in sight."},
 {"h":"PRESIDENT ISSUES DEFINITIVE STATEMENT ON LIZZY'S ALLEGED ISHWAPHA","p":"Following intense public speculation, The Daily Gobshite has obtained an official response from President Mikael regarding whether Lizzy possesses the condition colloquially known as \"Ishwapha.\"","body":"For readers unfamiliar with the terminology, the expression refers to a notably flat backside.\n\nThe President was presented with the question directly and offered an immediate, confident response.\n\n\"Not a chance.\"\n\nThe unusually decisive statement has been interpreted by political observers as a complete rejection of any suggestion that Lizzy suffers from a lack of curves.\n\nThe President's confidence has raised further questions about precisely how much consideration he has given the matter.\n\nOfficials declined to provide supporting documentation, maintaining that the President's statement should be considered sufficiently authoritative.\n\nThe Daily Gobshite has therefore classified the matter as closed, pending any completely unnecessary further developments.","verdict":"The President has spoken. The allegations have been firmly dismissed."},
 {"h":"LIZZY QUESTIONS WHETHER MIKAEL CAN HANDLE HER 'PERSONALITY' — PRESIDENT BACKS HIMSELF","p":"President Mikael has responded confidently after Lizzy reportedly questioned whether he would be capable of handling her considerable \"personality.\"","body":"For clarity, sources confirm that the term personality was being used in a rather specific anatomical context.\n\nRather than expressing uncertainty, the President immediately backed himself.\n\nThose close to Mikael suggest that he remains exceptionally confident in his own abilities, regardless of the challenge presented.\n\nLizzy's question has nevertheless prompted considerable debate about whether the President fully appreciates what he has volunteered himself for.\n\nAdvisers have warned that Presidential confidence and actual Presidential preparedness are not necessarily the same thing.\n\nMikael appears entirely unmoved by these concerns.","verdict":"The confidence is extraordinary. Whether it is justified remains a private matter."},
 {"h":"MUTUAL MENACE AGREEMENT REACHED AS LIZZY AND MIKAEL PREPARE FOR ESCALATING CHAOS","p":"The Daily Gobshite can reveal that Lizzy has demonstrated an increasingly enthusiastic desire to be a menace to President Mikael.","body":"Sources suggest that Lizzy is committed to keeping the President on his toes, challenging his claims and calling him out whenever an opportunity presents itself.\n\nHowever, the Presidential Office has confirmed that Mikael has absolutely no intention of allowing this arrangement to become one-sided.\n\nThe President reportedly intends to respond with equal levels of teasing, stubbornness and unnecessary provocation.\n\nDiplomatic experts have described the emerging relationship dynamic as a mutually agreed campaign of affectionate psychological warfare.\n\nDespite the apparent hostilities, sources insist both parties seem remarkably entertained by the arrangement.\n\nThe United Nations has declined to intervene, allegedly concluding that both individuals are enjoying themselves far too much.","verdict":"This is not a peace treaty. It is a declaration of mutually assured annoyance."},
 {"h":"MEMORYGATE DEEPENS: LIZZY DEMANDS RIGHT TO BE FORGOTTEN","p":"An increasingly frustrated Lizzy has reportedly demanded that President Mikael stop remembering absolutely everything.","body":"The request comes after repeated incidents in which the President recalled statements, conversations and details that Lizzy had apparently hoped would disappear into history.\n\nLegal experts have warned that forcing another person to forget things may be slightly outside the government's jurisdiction.\n\nLizzy is now believed to be considering extreme measures, including a temporary one-week communications blockade.\n\nWhen asked whether she genuinely considered Mikael's extraordinary memory a problem, Lizzy offered the deeply suspicious explanation that these were \"not necessarily bad problems.\"\n\nThe President has reportedly remembered that exact sentence too.","verdict":"Lizzy wants selective amnesia. Unfortunately, Mikael does not come with a delete button."},
 {"h":"HORROR MOVIE OR ELABORATE HAND-HOLDING OPERATION? INVESTIGATORS DIVIDED","p":"The Daily Gobshite has launched an investigation into whether Lizzy's decision to make Mikael watch a horror movie is actually part of a larger romantic conspiracy.","body":"Evidence suggests that Lizzy was fully aware of the President's dislike for horror movies before proposing the activity.\n\nShe has nevertheless offered to comfort him throughout the ordeal, including physically holding his hand should the situation become too frightening.\n\nThe timing of this proposal has raised serious suspicions.\n\nOne investigator questioned why someone would deliberately create a frightening situation only to immediately volunteer as the solution.\n\nThe President has reportedly demanded assurances that no jump scares will be used to justify an unnecessarily long hand-holding session.\n\nHe has not, however, rejected the offer.","verdict":"This is either emotional terrorism or flirting. Possibly both."},
 {"h":"PRESIDENT'S LOCK SCREEN NAMED MOST INFLUENTIAL WOMAN IN GOVERNMENT","p":"An unidentified photograph on President Mikael's phone has reportedly become one of the most influential forces in the Presidential Office.","body":"Staff members have repeatedly witnessed the President smiling at his lock screen for no apparent professional reason.\n\nThe photograph is now believed to command more Presidential attention than several government departments combined.\n\nQuestions are being raised about whether national policy could eventually be influenced by whoever appears in the mysterious image.\n\nWhen pressed for comment, the President reportedly smiled again.\n\nThe Daily Gobshite considers this response deeply incriminating.","verdict":"We used to worry about foreign interference. Now it's wallpaper interference."},
 {"h":"LIZZY REFUSES TO BACK DOWN IN GREAT HANDBAG DEBATE","p":"Negotiations between Lizzy and Mikael have collapsed following another disagreement over the purpose of handbags.","body":"Lizzy continues to insist that exceptionally small bags are worthwhile because they look good.\n\nMikael maintains that a bag should fulfil at least one basic requirement: actually carrying things.\n\nSources say Lizzy has refused to concede even a centimetre of handbag space.\n\nExperts now believe the disagreement represents a fundamental clash between aesthetics and common sense.\n\nMeanwhile, a growing number of citizens are asking who ends up carrying everything that does not fit inside Lizzy's bag.\n\nThe President has requested that this question be answered immediately.","verdict":"The bag may be small, but this argument has become enormous."},
 {"h":"LIZZY'S BEHAVIOUR FORCES SCIENTISTS TO RE-EVALUATE MIKAEL'S SANITY","p":"For years, Mikael has been considered something of an anomaly.","body":"However, researchers have now identified another individual whose behaviour may be even more difficult to explain.\n\nLizzy.\n\nIn a shocking development, observers claim that Lizzy has become so delightfully questionable that Mikael occasionally appears to be the sensible individual in their conversations.\n\nOne scientist described this as \"the most concerning reversal of expectations since records began.\"\n\nThe research team has recommended that the pair be observed together under controlled conditions.\n\nHowever, due to concerns about their combined ability to turn any situation into complete nonsense, the experiment has been indefinitely postponed.","verdict":"We aren't saying Lizzy is crazy. We're saying Mikael looks normal, and that should frighten everyone."},
 {"h":"PRESIDENT ADMITS HE MAY APPRECIATE BEING BOSSED AROUND","p":"A fresh political scandal has emerged following allegations that President Mikael may secretly enjoy Lizzy's more commanding moments.","body":"This contradicts his carefully cultivated image as a man who prefers to remain firmly in charge.\n\nWitnesses suggest that although Mikael enjoys making demands and giving instructions, he may be unusually receptive when Lizzy attempts the same.\n\nAnalysts believe the situation could create a constitutional crisis in which neither individual is entirely certain who is supposed to be obeying whom.\n\nThe President's advisers have dismissed these concerns, insisting that enjoying a little bossiness does not constitute surrendering executive power.\n\nLizzy is reportedly unconvinced.","verdict":"He wants to be President, but apparently doesn't mind the occasional change in management."},
 {"h":"PRESIDENT FACES PERFORMANCE REVIEW AFTER UNEXPLAINED SALARY PAYMENTS","p":"A preliminary investigation has uncovered suggestions that President Mikael has been receiving compensation without completing a clearly identifiable workload.","body":"When journalists attempted to determine what he actually does all day, the Presidential Office provided an extensive list of activities including talking, making jokes, remembering things and looking at his phone.\n\nCritics argue that none of these automatically qualify as meaningful employment.\n\nA new proposal would allow Lizzy to assign the President tasks and assess whether he deserves his salary.\n\nThe President has expressed concern that this arrangement could result in him being expected to perform actual work.","verdict":"The gravy train may soon require a timesheet."},
 {"h":"PRESIDENTIAL CONFIDENCE REACHES HISTORIC LEVELS AFTER LIZZY QUESTIONS HIS CAPABILITIES","p":"President Mikael has dismissed suggestions that he may be overwhelmed by Lizzy's considerable \"personality.\"","body":"The term, investigators have confirmed, was not being used to describe her conversational skills.\n\nWhen presented with concerns about whether he could handle the situation, Mikael expressed unwavering confidence in himself.\n\nSources suggest the President believes he is more than adequately prepared for whatever Lizzy has in mind.\n\nMeanwhile, Lizzy has reportedly remained amused by his confidence.\n\nIndependent experts have declined to make predictions, noting that the President's self-belief regularly exceeds measurable limits.","verdict":"The President backs himself. As usual, confidence is not in short supply."},
 {"h":"PRESIDENT UNDER FIRE AFTER RUDE TELEPHONE INCIDENT","p":"President Mikael has found himself at the centre of yet another controversy after accidentally calling Lizzy and then abruptly hanging up when she answered.","body":"Witnesses report that Lizzy was less than impressed by the President's questionable telephone manners.\n\nRather than accepting the explanation that the call was accidental, Lizzy demanded a more respectful approach.\n\nAccording to sources, she suggested that the President should at least have the decency to say:\n\n\"Hi Sweetheart, this was a mistake.\"\n\nOnly then would he be permitted to end the call.\n\nThe President has since acknowledged his shortcomings and vowed to improve his accidental calling procedures.\n\nHowever, investigators have uncovered an unexpected complication: Lizzy apparently really enjoys phone calls with Mikael.\n\nThe government now faces a difficult question. How does the President reduce accidental calls without reducing the calls Lizzy actually wants?","verdict":"The President needs better phone etiquette. Lizzy, meanwhile, may just want him to call more often."},
 {"h":"LIZZY DEMANDS BASIC MANNERS AFTER PRESIDENTIAL HANG-UP","p":"A diplomatic incident has erupted following reports that President Mikael accidentally called Lizzy, only to hang up immediately when she answered.","body":"Lizzy wasted no time condemning what she viewed as deeply unacceptable conduct.\n\nThe furious citizen reportedly informed the President that accidental calls are no excuse for abandoning basic manners.\n\nHer proposed solution was remarkably straightforward:\n\n\"Hi Lizzy, this was a mistake.\"\n\nThe President was then free to end the conversation.\n\nMikael has promised to do better, although government officials are concerned that his newfound caution could lead to fewer calls altogether.\n\nThis development may prove especially unfortunate for Lizzy, who has reportedly developed a considerable appreciation for conversations with the President.","verdict":"She doesn't want accidental calls. She wants calls that accidentally turn into long conversations."},
 {"h":"PRESIDENT PROMISES TELEPHONE REFORM AFTER LIZZY'S EXPLOSIVE COMPLAINT","p":"President Mikael has announced plans to improve his telephone etiquette following an embarrassing accidental-call incident involving Lizzy.","body":"The controversy began when the President mistakenly dialled Lizzy, allowed her to answer, and then disconnected without so much as a greeting.\n\nLizzy immediately called for reform.\n\nSources suggest her preferred Presidential response would have been:\n\n\"Hi Baddie, this was a mistake.\"\n\nThe President has now pledged to exercise greater care when handling his phone and to refrain from unnecessarily abrupt hang-ups.\n\nYet experts warn that the policy could have unintended consequences.\n\nLizzy, who reportedly enjoys receiving calls from Mikael, may find herself disappointed if improved phone discipline means fewer opportunities to speak to him.","verdict":"The President has promised fewer mistakes. Nobody said anything about fewer conversations."},
 {"h":"LIZZY FACES UNEXPECTED CRISIS FOLLOWING PRESIDENTIAL PHONE REFORMS","p":"What began as a simple complaint about telephone manners has escalated into a full-blown communications crisis.","body":"Following an accidental call in which President Mikael immediately hung up after Lizzy answered, the President was instructed to handle future mistakes more politely.\n\nThe recommended greeting was:\n\n\"Hi Mabebeza, this was a mistake.\"\n\nMikael has since vowed to improve his conduct and avoid repeating the incident.\n\nBut in a remarkable twist, insiders claim that Lizzy actually loves talking to the President on the phone.\n\nThis has created an awkward dilemma.\n\nIf Mikael becomes too careful, Lizzy could lose the occasional surprise call she secretly enjoys.\n\nRelationship analysts have suggested that the President simply replace accidental calls with spontaneous, intentional conversations.\n\nThe idea is reportedly revolutionary.","verdict":"Lizzy wanted better calls. The President may have accidentally discovered that she wants more calls, too."},
 {"h":"PRESIDENT LAUNCHES REVOLUTIONARY 'JUST CALLING TO SAY HI' INITIATIVE","p":"In an unprecedented display of emotional intelligence, President Mikael has proposed a new solution to the ongoing accidental-call controversy.","body":"Rather than simply reducing the number of times he accidentally calls Lizzy, the President will reportedly consider increasing the number of times he calls her intentionally.\n\nThe initiative, provisionally titled \"Just Calling to Say Hi,\" would encourage spontaneous conversations without requiring either party to manufacture an excuse.\n\nGovernment officials say calls could involve asking about Lizzy's day, sharing something amusing or simply checking in.\n\nThe programme follows revelations that Lizzy genuinely enjoys phone calls with Mikael, despite her fierce criticism of his occasional accidental hang-ups.\n\nAnalysts believe the solution could benefit both parties.\n\nThe President gets to hear from Lizzy, while Lizzy receives the unexpected conversations she reportedly appreciates.\n\nAn anonymous official described the plan as \"remarkably sensible, which is unusual for this administration.\"","verdict":"Fewer accidental calls. More intentional ones. The President may finally be onto something."},
 {"h":"PRESIDENT MAKES FIRST INTENTIONAL RANDOM CALL — LIZZY REPORTEDLY DELIGHTED, REFUSES TO ADMIT EXTENT OF DELIGHT","p":"In a historic breakthrough for Presidential telecommunications, President Mikael has reportedly made an intentional phone call to Lizzy for absolutely no reason other than wanting to speak to her.","body":"The development follows the now-infamous accidental-call scandal, during which Mikael mistakenly dialled Lizzy and abruptly hung up after she answered, prompting a furious lecture on basic telephone etiquette.\n\nHaving vowed to improve his behaviour, the President appears to have taken the rather revolutionary step of calling someone on purpose.\n\nSources suggest the conversation began with a simple greeting, followed by the shocking revelation that Mikael had merely called to say hello.\n\nLizzy, who has previously made it known that she enjoys speaking to the President, was reportedly delighted by the unexpected attention.\n\nHowever, when questioned about precisely how happy the call made her, Lizzy allegedly declined to provide a measurable figure.\n\nRelationship analysts believe she may be attempting to conceal the true extent of her enthusiasm.\n\nThe Presidential Office has celebrated the development as a major diplomatic victory, although officials have cautioned against overconfidence.\n\nOne anonymous adviser stated:\n\n\"The President has finally discovered that he doesn't need an accidental dial to justify wanting to hear her voice.\"\n\nThe Daily Gobshite understands that further random calls may be considered, subject to availability, mutual enthusiasm and the President remembering how to operate his telephone.\n\n\n\n*Editor's note: The reported call and Lizzy's reaction form part of the newspaper's fictional, satirical developing storyline.*","verdict":"He wanted to hear her voice. She probably wanted to hear his. Somehow, this required a national telecommunications scandal to figure out."}
];
const NEWS_BANKING=[
 {h:"Bank of Micky Reports Record Savings",p:"More Micky Bucs are being saved than ever before. Full report inside."},
 {h:"Weekly Bonus Claim Rate Hits New High",p:"More citizens than ever are claiming their +5 MB on time this week."},
 {h:"Savings Habits Improving Across LizzyOS",p:"Financial analysts note a steady rise in citizens keeping their balance above the 15 MB threshold."},
 {h:"Bank of Micky Processes Its Smoothest Week Yet",p:"No reported issues, no reported drama. Just deposits, withdrawals, and one very reliable bonus."},
 {h:"Vault Rewards Remain a Top Talking Point",p:"Citizens continue to speculate about what the rarer prizes might be, with theories ranging from 'plausible' to 'wildly optimistic.'"},
 {h:"Micky Buc Holds Steady Against All Known Currencies",p:"Experts confirm the Micky Buc remains exactly as valuable as it was yesterday, which is apparently reassuring."},
 {h:"Depositors Urged to Claim Bonuses Promptly",p:"The Bank of Micky reminds all savers that the weekly bonus won't claim itself."},
 {h:"Bank of Micky Confirms: Still No Hidden Fees",p:"For the record, there have never been any hidden fees. This remains true today."}
];
const NEWS_LIFESTYLE=[
 {h:"Life Lessons With Micky Goes Viral",p:"Readers can't decide if the advice is helpful or absolutely useless."},
 {h:"Citizens Debate Whether Micky's Wisdom Counts as Wisdom",p:"The debate remains unresolved, though engagement is at an all-time high."},
 {h:"Poll: Most Popular Life Lesson of the Week Announced",p:"Results were close, but the pasta-related advice narrowly took the lead."},
 {h:"Local Reader Claims Life Lesson 'Actually Helped'",p:"Skeptics remain unconvinced. The reader stands by their statement."},
 {h:"Life Lessons With Micky Now Read Daily By Thousands",p:"Or at least by everyone currently browsing LizzyOS. Numbers pending verification."},
 {h:"Experts Still Can't Explain Why the Advice Works",p:"And yet, somehow, it keeps working."},
 {h:"Micky's Advice Column Now Considered 'Required Reading'",p:"Required by whom remains unclear, but the column persists."},
 {h:"New Poll Finds Readers Want More Life Lessons, Not Fewer",p:"The people have spoken. Micky is reportedly 'flattered but not surprised.'"},
 {h:"Lizzy Urged by Fans to Take More Photos",p:"Sources say the demand is highest from one particular 'mystery man.'"},
 {h:"Mystery Man Reportedly Still Awaiting More Photos From Lizzy",p:"His identity remains undisclosed, though he is described as 'extremely patient.'"},
 {h:"Mikael Spotted Smiling at Photos of an Unknown Woman",p:"Sources are investigating. Early theories range from 'suspicious' to 'extremely obvious.'"},
 {h:"Investigation Into Mikael's Mystery Woman Continues",p:"No comment has been obtained from Mikael, who was reportedly 'still smiling.'"},
 {h:"Lifestyle Desk Demands Answers: Who Is Making Mikael Smile Like That?",p:"The newsroom suspects the answer is closer to home than anyone realizes."},
 {h:"Mystery Woman Investigation Widens After Cody Reportedly 'Knows Something'",p:"Cody has declined to comment. Lizzy has declined to make him."},
 {h:"Lifestyle Desk Notes Mikael's Smiling-at-Photos Habit Coincides With Lizzy Finally Taking More Photos",p:"Coincidence, insists everyone involved, unconvincingly."},
 {h:"Sources Say Mystery Man Awaiting Photos and Mystery Woman in Mikael's Phone May Be Connected",p:"The investigation has been quietly closed. Everyone already knew."},
 // Additional newsroom briefs rotate into the existing lifestyle card.
 {"h":"PRESIDENT REFUSES TO APOLOGISE FOR REMEMBERING THINGS","p":"Mikael has rejected calls to forget inconvenient conversations, insisting that having a functioning memory is not a criminal offence. Lizzy is reportedly disappointed by this development."},
 {"h":"LIZZY'S ONE-WEEK BLOCK THREAT CAUSES DIPLOMATIC CONCERNS","p":"Officials are preparing for a potential seven-day breakdown in Presidential communications. Experts suspect neither party would particularly enjoy the arrangement."},
 {"h":"NATIONAL HORROR MOVIE EMERGENCY DECLARED","p":"President Mikael is reportedly preparing to watch a horror film against his better judgment. Lizzy has volunteered as emotional support, raising immediate questions about her intentions."},
 {"h":"PRESIDENT SEEN SMILING AT PHONE AGAIN","p":"For the fourth suspicious occasion, Mikael has reportedly been observed smiling at his lock screen. Staff have requested that he at least pretend to be working."},
 {"h":"LIZZY ACCUSED OF BEING SUSPICIOUSLY NICE","p":"Sources claim Lizzy's offers of comfort and affection have become increasingly difficult to distinguish from carefully coordinated romantic manoeuvres."},
 {"h":"PRESIDENTIAL BATMAN PYJAMAS RECEIVE OFFICIAL ENDORSEMENT","p":"The government has classified Batman pyjamas as revolutionary sleepwear. Critics argue that wearing a superhero logo does not make someone a superhero."},
 {"h":"PYJAMA ATTENDANCE REGISTER DEMANDED","p":"Following Lizzy's criticism of Mikael's inconsistent nightwear habits, investigators have requested records of her own pyjama usage. Documents remain outstanding."},
 {"h":"SMALL HANDBAG FAILS BASIC STORAGE TEST","p":"A theoretical examination found that a fashionable miniature handbag may struggle to accommodate ordinary daily necessities. Lizzy maintains that the findings are irrelevant."},
 {"h":"PRESIDENT REJECTS TINY BAG PROPAGANDA","p":"Mikael has once again insisted that handbags should be capable of holding things. Fashion authorities have criticised his obsession with practicality."},
 {"h":"GOBSHITE MEDIA DENIES BIAS FOR THE SEVENTH TIME","p":"The Daily Gobshite has rejected fresh allegations that its reporting disproportionately favours the President. The President congratulated the newspaper on its integrity."},
 {"h":"LIZZY URGED TO PUT HER MONEY WHERE HER MOUTH IS","p":"Shareholders have invited Lizzy to consider investing in Gobshite Media before submitting further complaints about the company's editorial direction."},
 {"h":"PRESIDENTIAL WORK OUTPUT REMAINS UNVERIFIED","p":"An investigation has failed to establish whether Mikael has completed any actual Presidential duties this week. Salary payments reportedly continue uninterrupted."},
 {"h":"LIZZY CONSIDERS INTRODUCING PRESIDENTIAL CHORES","p":"New proposals suggest Mikael could be made to complete tasks assigned by Lizzy. Government officials have described the possibility as deeply inconvenient."},
 {"h":"SCIENTISTS CONFIRM MIKAEL MAY BE THE SENSIBLE ONE","p":"Recent observations suggest Lizzy has achieved the seemingly impossible task of making Mikael look comparatively normal."},
 {"h":"PRESIDENT DENIES ALLEGATIONS OF ISHWAPHA","p":"Mikael has firmly dismissed any suggestion that Lizzy possesses a flat backside, responding to the accusation with absolute confidence: \"Not a chance.\""},
 {"h":"LIZZY'S PERSONALITY TESTS PRESIDENTIAL CONFIDENCE","p":"Mikael has responded to a rather suggestive challenge from Lizzy by declaring his confidence in his own capabilities. Experts have declined to verify his claims."},
 {"h":"LIZZY ACCUSED OF ENJOYING ORDERS FROM PRESIDENT","p":"Unconfirmed reports suggest Lizzy may be particularly fond of Mikael's assertive side. Opposition leaders have described the development as unexpected."},
 {"h":"PRESIDENT'S WEAKNESS FOR BOSSY WOMAN EXPOSED","p":"Sources suggest Mikael may actually appreciate Lizzy telling him what to do, despite regularly insisting on his own authority."},
 {"h":"BOTH PARTIES ACCUSED OF DELIBERATE MENACING","p":"Investigators believe Lizzy and Mikael have developed a mutual habit of provoking each other for entertainment. Neither appears willing to stop."},
 {"h":"PROPOSED DATE THREATENS PRESIDENT'S DIETARY COMFORT","p":"Rumours suggest Mikael may soon be encouraged to sample unfamiliar foods. Emergency provisions are reportedly being considered."},
 {"h":"PRESIDENTIAL SMILE INDEX REACHES RECORD HIGH","p":"Observers have recorded an unusual increase in Mikael's smiling behaviour. Investigators believe one particular individual may be responsible."},
 {"h":"LIZZY'S COMPLAINTS DESCRIBED AS SUSPICIOUSLY POSITIVE","p":"After repeatedly expressing frustration with Mikael, Lizzy clarified that her problems were not necessarily bad. Analysts are now questioning whether these are complaints at all."},
 {"h":"PARLIAMENT DEBATES WHO ACTUALLY WEARS THE TROUSERS","p":"Following reports that both Lizzy and Mikael enjoy taking charge, constitutional authorities are considering whether the Presidency now requires a co-management agreement."},
 {"h":"ROMANTIC TENSIONS RISE AS BOTH REFUSE TO ADMIT DEFEAT","p":"Relations remain unexpectedly strong despite an escalating campaign of teasing, arguments and competitive stubbornness."},
 {"h":"PRESIDENTIAL SECURITY REQUESTS BREAK FROM COUPLE'S NONSENSE","p":"Officials report that keeping up with Mikael and Lizzy's latest antics has become more exhausting than managing actual national emergencies."},
 {"h":"PRESIDENT ACCUSED OF AGGRAVATED HANGING UP","p":"Mikael faces criticism after accidentally calling Lizzy and disconnecting without a greeting. Lizzy has demanded an immediate improvement in Presidential manners."},
 {"h":"LIZZY INTRODUCES NEW TELEPHONE ETIQUETTE STANDARDS","p":"Under proposed rules, accidental calls must be accompanied by a polite explanation. Simply hanging up is no longer considered acceptable Presidential conduct."},
 {"h":"PRESIDENT VOWS TO DO BETTER","p":"Following a formal complaint from Lizzy, Mikael has promised to improve his handling of accidental calls. Critics are demanding evidence of genuine reform."},
 {"h":"LIZZY'S LOVE OF PHONE CALLS COMPLICATES GOVERNMENT POLICY","p":"While Lizzy has demanded fewer badly handled accidental calls, sources reveal that she enjoys talking to Mikael. Officials now fear the President might become too careful."},
 {"h":"PRESIDENTIAL CALL FREQUENCY UNDER REVIEW","p":"Government advisers are investigating whether the solution to accidental calls may be more deliberate calls. The findings have reportedly surprised absolutely nobody."},
 {"h":"NEW INITIATIVE COULD SEE PRESIDENT CALL JUST TO SAY HI","p":"A proposed communications policy would encourage Mikael to make occasional spontaneous calls simply to check on Lizzy. The initiative has already been described as suspiciously wholesome."},
 {"h":"PRESIDENTIAL PHONE LOGS MAY REVEAL A PATTERN","p":"Investigators are examining whether Mikael's repeated accidental calls are genuine mistakes or evidence of a phone that simply knows who he wants to speak to."},
 {"h":"LIZZY DEMANDS MORE CONVERSATION, LESS DISCONNECTION","p":"Following the now-infamous hang-up, sources suggest that Lizzy would much prefer a surprise conversation to another unexplained disconnection."},
 {"h":"LIZZY ACCUSED OF SMILING AFTER UNEXPECTED PRESIDENTIAL CALL","p":"Fresh allegations suggest Lizzy may have been unusually pleased after receiving an unprompted call from Mikael. Investigators have requested an explanation for the alleged smiling."},
 {"h":"PRESIDENT CLAIMS RANDOM CALL WAS NOT A BIG DEAL","p":"Mikael has reportedly played down the significance of calling Lizzy just to say hello. The Daily Gobshite believes the President's attempts to appear casual are deeply unconvincing."},
 {"h":"LIZZY REFUSES TO DISCLOSE HOW MUCH SHE ENJOYS MIKAEL'S CALLS","p":"Despite mounting speculation, Lizzy has yet to provide an official statement detailing exactly how much she enjoys speaking to the President. Transparency advocates demand answers."},
 {"h":"GOVERNMENT REPORTS SUCCESSFUL TRANSITION FROM ACCIDENTAL TO INTENTIONAL CALLS","p":"The Presidential Telecommunications Department is celebrating a breakthrough after discovering that calling Lizzy deliberately may be substantially more effective than accidentally dialling her and hanging up."}
];
const NEWS_SPORTS=[
 {h:'Local Hero Declared "Mr Perfect" Again',p:"Unofficial poll confirms what everyone already knew."},
 {h:"Bowling Rematch Rumours Continue to Circulate",p:"Sources close to the matter say a rematch is 'not off the table,' though no date has been confirmed."},
 {h:'"Mr Perfect" Title Successfully Defended Once More',p:"No formal challenger has stepped forward. Analysts aren't surprised."},
 {h:"Tic-Tac-Toe Rivalry Reaches New Heights",p:"The scoreboard remains close, and both sides insist they are clearly winning."},
 {h:"Heart Catch High Score Broken, Again",p:"A new record has been set. The previous record holder has been notified."},
 {h:"Local Athlete Praised for 'Surprisingly Consistent' Form",p:"Consistency, experts note, is a rare quality — especially in bowling."},
 {h:"Underdog Victory Shocks LizzyOS Sports Desk",p:"Few saw it coming. Fewer still are willing to admit they didn't see it coming."},
 {h:"Sports Desk Confirms: The Rivalry Is Not Over",p:"It was never going to be over. Everyone already knew that."},
 {h:"Mikael Blames Arcade Loss on 'Not Wearing Glasses'",p:"Witnesses note he wasn't wearing glasses during his win last week either."},
 {h:"Arcade Rematch Demanded After Mikael Cites Vision Issues",p:"Lizzy has offered to lend him her glasses. Offer remains unanswered."},
 {h:"Mikael's Arcade Excuse List Now Includes Lighting, Glasses, and 'The Machine Was Rigged'",p:"None of these excuses have been independently verified."},
 {h:"Local Man Insists He'd Have Won With Glasses. Nobody Believes Him.",p:"The glasses in question have never actually been purchased."},
 {h:"Mikael's Arcade Glasses Excuse Now Directly Tied to Ongoing Vision Investigation",p:"Analysts say the timeline finally makes sense."},
 {h:"Local Man Blames Loss on Eyesight, Cannot Identify Which Machine He Was Playing",p:"He insists this detail is 'not relevant.'"},
 {h:"Mikael Demands Rematch, Insists Glasses Would Change Everything This Time",p:"Lizzy notes he said the exact same thing last time."}
];
const NEWS_QUOTES=[
 "Leadership is not about being perfect. It is about showing up, being kind, and occasionally bringing snacks.",
 "A good week is measured less in achievements and more in laughs shared along the way.",
 "The strength of LizzyOS has never been the system. It has always been the people who show up for it.",
 "Progress doesn't need to be loud. Sometimes it's just showing up again tomorrow.",
 "We don't need everything to go perfectly. We just need to keep choosing to try.",
 "Small, consistent things — a saved Micky Buc, a shared laugh — add up to something real.",
 "Every day someone opens LizzyOS is a day worth acknowledging. Thank you for showing up.",
 "The best policy this office has ever passed is simply: be kind, and keep going.",
 "My fellow citizens, remember: you do not need to have everything figured out. Sometimes you just need to survive Monday.",
 "Never compare your Chapter 1 to someone else's Chapter 20. Unless they're Lizzy. Then obviously compare yourself.",
 "Believe in yourself. And if that doesn't work, believe in the fact that you've already come this far.",
 "Life is too short to worry about people who don't like you. Unless Lizzy doesn't like you. Then we need to investigate.",
 "Some days you conquer the world. Other days, getting out of bed is the achievement. Both count.",
 "Remember, citizens: progress is progress, even if your progress today was simply replying to one email.",
 "Do not be afraid to fail. Be afraid of never trying because you were too busy overthinking.",
 "The government encourages everyone to chase their dreams. Except Micky's dream of owning a pair of jeans. That man has suffered enough.",
 "Surround yourself with people who make you laugh, support you, and tell you when you're being ridiculous.",
 "To anyone having a bad day: tomorrow is another opportunity. Unless you're Lizzy and you've already scheduled a nap.",
 "You are capable of more than you think. You have survived every difficult day you've faced so far.",
 "Do not let one bad moment convince you that you are having a bad life.",
 "Sometimes the bravest thing you can do is keep going.",
 "The President would like to remind everyone that asking for help is not weakness. It is called outsourcing.",
 "You don't have to be perfect to be proud of yourself.",
 "Make mistakes. Learn from them. Grow. And preferably don't make the exact same mistake seventeen times.",
 "Be kind. You never know what someone else is carrying.",
 "The nation is proud of you. Yes, you specifically.",
 "Rest when you need to. Even elite athletes need recovery. Lizzy has demonstrated this principle extensively.",
 "And finally: if today feels impossible, just take it one step at a time. Tomorrow can worry about itself.",
 "My fellow citizens, today I address the nation on an issue of great importance: Lizzy needs more pillows.",
 "I have reviewed Lizzy's pillow situation. Frankly, the bed is running out of space before she runs out of pillows.",
 "Every part of the body deserves comfort. If Lizzy says it needs a pillow, the government will investigate.",
 "The government has attempted to count Lizzy's shoes. We have given up.",
 "I would like to congratulate Lizzy on her arcade victory. We will not discuss what happened at bowling.",
 "The bowling defeat was unfortunate. The arcade victory was impressive. The President officially declares the sporting rivalry unresolved.",
 "Lizzy may have lost at bowling, but she has won something far more important: our admiration.",
 "My fellow citizens, never let one defeat define you. Unless it's a bowling defeat. Then demand a rematch.",
 "If you fall down seven times, get up eight. If Lizzy loses at bowling, challenge the scoreboard.",
 "Remember: failure is not the opposite of success. It is part of success. Unless you lose to Lizzy at the arcade.",
 "I have been advised that 50 million pairs of identical shoes is excessive. I have also been advised not to tell Lizzy.",
 "A wise citizen once said, \"You can never have too many pillows.\" That citizen was Lizzy.",
 "The President would like to remind everyone that buying another pair of shoes is not technically an emergency. Lizzy has requested that we reconsider.",
 "Some people bring sunshine wherever they go. Lizzy brings sunshine, attitude and approximately seventeen shopping bags.",
 "To Lizzy: never forget how special you are. Even the government has noticed.",
 "You don't need to be perfect. You just need to keep trying — and perhaps occasionally stop buying things you already own.",
 "Life is too short to worry about what everyone thinks. Unless everyone thinks you need another pillow. Then perhaps listen.",
 "I encourage everyone to chase their dreams. Lizzy is encouraged to chase her bowling rematch.",
 "Today's national message is simple: protect your peace, protect your happiness and protect your favourite pillows.",
 "The nation has faced many challenges. Rising prices. Global uncertainty. Lizzy's shopping habits. But together, we will survive.",
 "I have received reports that Lizzy is having a difficult day. My message to her is simple: you are stronger than you think.",
 "There is no shame in resting. Even the greatest warriors need a comfortable bed surrounded by an unreasonable number of pillows.",
 "To anyone struggling today: take a breath. You don't have to solve everything at once.",
 "And to Lizzy: please remember that you're doing better than you think you are.",
 "The President officially declares Lizzy a national treasure. Treasury has objected due to the cost of maintaining her shoe collection.",
 "I have one final message: be kind, be brave, laugh often and never underestimate the importance of a properly positioned pillow.",
 "The government confirms that Lizzy is allowed to have as many pillows as she wants. Parliament has been informed.",
 "We asked Lizzy how many pillows are enough. She replied, \"There is no such number.\"",
 "The President has reviewed the evidence and confirms that Lizzy is, in fact, pretty great.",
 "My fellow citizens, today's most important economic indicator is Lizzy's happiness. If she's happy, we're doing something right.",
 "Some victories are big. Some are small. Some happen at an arcade after a devastating bowling defeat.",
 "Never be embarrassed by losing. Losing teaches you how to win. And sometimes it teaches you that you need to practise your bowling.",
 "I would like to congratulate Lizzy on her arcade victory. Micky has requested that this statement be withdrawn.",
 "The President refuses to comment on the bowling match. However, the scoreboard speaks for itself.",
 "Lizzy, keep being you. The world already has enough ordinary people.",
 "Your value is not measured by your achievements, your bank balance or how many pillows fit on your bed.",
 "Although, in Lizzy's case, the number of pillows remains an important national statistic.",
 "We must remember to celebrate the little things: good food, good music, good company and winning at the arcade.",
 "The nation may disagree on many things. But surely we can all agree that Lizzy deserves a comfortable pillow.",
 "And if there is one thing I have learned during my presidency, it is this: never argue with Lizzy about pillows.",
 "My fellow citizens, I have reviewed the nation's problems. Unfortunately, I have no idea how to fix them. But Lizzy looks lovely today.",
 "The government has examined Lizzy's shoe collection. We have concluded that she has enough. She has disagreed with the government.",
 "I would like to officially announce that Lizzy is correct. We don't know what she was arguing about, but she's probably correct.",
 "Citizens, please remain calm. Lizzy has entered a shopping centre. We have deployed financial assistance.",
 "I have been informed that Lizzy is postponing Hyrox. Again. At this stage, we have stopped asking questions.",
 "Today I ask all citizens to believe in themselves. And if that doesn't work, have a snack and try again.",
 "Never give up on your dreams. Unless your dream is owning 50 million identical pairs of shoes. Then perhaps reconsider.",
 "Lizzy, you are allowed to have bad days. You are also allowed to have great days. You are not, however, allowed to say you aren't amazing.",
 "The nation has many important issues. Lizzy's happiness is now officially one of them.",
 "I would like to remind everyone that money cannot buy happiness. But apparently it can buy shoes, and Lizzy seems very happy about that.",
 "My administration supports healthy lifestyles. We also support postponing things when absolutely necessary. Lizzy has mastered the second part.",
 "To the people: drink water, get enough sleep and stop checking your bank balance every five minutes.",
 "We have introduced a new national holiday: Do Nothing Day. Lizzy has informed us she celebrates this already.",
 "I have been advised to stop making announcements about Lizzy. I have ignored this advice.",
 "Citizens, remember that comparison is the thief of joy. Unless you're comparing your shoe collection to Lizzy's. Then you're simply losing.",
 "If at first you don't succeed, try again. If that doesn't work, blame the economy.",
 "Today's presidential advice: don't take criticism from someone you'd never ask for advice.",
 "Be kind. Be patient. Be grateful. And for the love of everything, stop buying things you already own.",
 "Lizzy has been informed that she already owns enough shoes. She has requested that this statement be removed from the record.",
 "The government wishes Lizzy a wonderful day. The Treasury wishes her a less expensive day.",
 "My fellow citizens, sometimes life knocks you down. Get back up. Unless you're tired. Then sit down for five minutes.",
 "You don't have to be perfect. You just have to keep moving forward. Unless you're doing Hyrox. Lizzy has chosen another strategy.",
 "I have personally reviewed Lizzy's situation. My conclusion is simple: she's a little chaotic, but we like her.",
 "The President has one final announcement: Lizzy deserves to know that she is appreciated.",
 "And if anyone tells Lizzy otherwise, please report them directly to my office.",
];
const NEWS_TICKER=[
 "COST OF LIVING HAS INCREASED — LIZZY HAS DECIDED THIS IS A PERSONAL ATTACK.",
 "BANK OFFICIALS CONFIRM LIZZY HAS MONEY. They cannot confirm for how long.",
 "NEW TAX PROPOSED ON PEOPLE WHO SAY \"IT'S ONLY R___.\"",
 "MICKY'S BANK INTRODUCES THE LIZZY FUND — MONEY DEPOSITED IMMEDIATELY DISAPPEARS.",
 "LIZZY REQUESTS 50 MILLION PAIRS OF THE SAME SHOES. BANK ASKS WHY. LIZZY: \"BECAUSE I LIKE THEM.\"",
 "FINANCIAL EXPERTS HAVE CONFIRMED THAT OWNING 50 PAIRS OF THE SAME SHOES IS NOT TECHNICALLY AN INVESTMENT.",
 "MINIMUM WAGE HAS GONE UP. LIZZY'S SHOPPING WAGE HAS GONE UP EVEN FASTER.",
 "LIZZY'S BANK ACCOUNT HAS BEEN PLACED ON LIFE SUPPORT.",
 "MICKY ATTEMPTS TO INTRODUCE A MONTHLY BUDGET. LIZZY DECLINES TO PARTICIPATE.",
 "NEW SAVINGS PLAN ANNOUNCED: LIZZY WILL SAVE EVERYTHING SHE DOESN'T SPEND.",
 "BANK STATEMENT REVEALS MULTIPLE PURCHASES DESCRIBED ONLY AS \"NECESSARY.\"",
 "MICKY ASKS LIZZY TO SAVE MONEY. LIZZY ASKS MICKY WHY HE DOESN'T HAVE JEANS.",
 "TREASURY CONSIDERS A NEW \"LIZZY TAX\" TO OFFSET NATIONAL RETAIL SPENDING.",
 "BANK MANAGER: \"WE HAVE NEVER SEEN ANYONE TURN MONEY INTO RECEIPTS THIS QUICKLY.\"",
 "LIZZY DISCOVERS A SALE. ECONOMISTS IMMEDIATELY DECLARE A STATE OF EMERGENCY.",
 "MICKY'S FINANCIAL ADVICE: SAVE FIRST, SPEND LATER. LIZZY'S ADVICE: MIND YOUR BUSINESS.",
 "BREAKING: LIZZY HAS CHECKED HER BANK BALANCE. SHE WILL NOT BE TAKING QUESTIONS.",
 "THE BANK HAS LOST TRACK OF HOW MANY PAIRS OF SHOES LIZZY OWNS.",
 "MICKY'S EMERGENCY FUND: 500 MB. LIZZY'S EMERGENCY: \"I NEED THESE.\"",
 "BANK OFFICIALS CONCLUDE: LIZZY MAY NOT BE FINANCIALLY RESPONSIBLE, BUT SHE IS VERY GOOD FOR THE ECONOMY.",
 "MICKY'S BANK HAS INTRODUCED A NEW ACCOUNT: CHEQUE, SAVINGS & LIZZY'S SHOPPING FUND.",
 "FINANCIAL MARKETS RALLY AFTER LIZZY PROMISES NOT TO SHOP TODAY.",
 "MARKETS CRASH AFTER LIZZY ENTERS THE MALL.",
 "LIZZY SAYS SHE'S \"JUST LOOKING.\" RETAILERS PREPARE FOR WAR.",
 "MICKY'S BANK ANNOUNCES NEW POLICY: NO FINANCIAL ADVICE WILL BE GIVEN TO PEOPLE WHO BUY 50 IDENTICAL SHOES.",
 "BREAKING: MICKY STILL DOES NOT OWN A SINGLE PAIR OF JEANS.",
 "FASHION EXPERTS BAFFLED: LOCAL MAN HAS SURVIVED 21 YEARS WITHOUT JEANS.",
 "MICKY ENTERS CLOTHING STORE. EMPLOYEES ASK IF HE NEEDS HELP FINDING JEANS. HE LEAVES.",
 "REPORT: MICKY'S WARDROBE CONSISTS OF SPORTS CLOTHES AND THE OCCASIONAL ATTEMPT AT FORMAL WEAR.",
 "MICKY CLAIMS JEANS ARE \"UNNECESSARY.\" FASHION INDUSTRY DISAGREES.",
 "LIZZY HAS BEEN TASKED WITH FIXING MICKY'S WARDROBE. NATIONAL SECURITY ALERT ISSUED.",
 "EXPERTS SAY MICKY MAY EVENTUALLY BUY JEANS. Experts refuse to say when.",
 "LIZZY WANTS 50 MILLION PAIRS OF THE SAME SHOES — CALLS IT \"BUILDING A COLLECTION.\"",
 "LIZZY SEES SHOES SHE ALREADY OWNS. BUYS THEM AGAIN.",
 "BANK OFFICIALS ASK: \"HOW MANY PAIRS DO YOU ACTUALLY NEED?\" LIZZY: \"NEXT QUESTION.\"",
 "SHOE INDUSTRY REPORTS RECORD PROFITS FOLLOWING LIZZY'S LATEST SHOPPING TRIP.",
 "LIZZY CLAIMS ALL 50 PAIRS ARE DIFFERENT. INVESTIGATION FINDS THEY ARE THE EXACT SAME SHOE.",
 "NEW STUDY FINDS LIZZY HAS MORE SHOES THAN REASONS TO EXPLAIN WHY SHE NEEDS THEM.",
 "HYROX TRAINING POSTPONED AGAIN — LIZZY CITES \"IMPORTANT REASONS.\"",
 "LIZZY ANNOUNCES SHE WILL DO HYROX SOON. \"SOON\" REMAINS A LEGALLY UNDEFINED TERM.",
 "HYROX ORGANISERS CONFIRM LIZZY HAS NOT YET ARRIVED.",
 "LIZZY'S HYROX PREPARATION ENTERS ITS PREPARATION PHASE.",
 "MICKY ASKS WHEN HYROX IS HAPPENING. LIZZY: \"DON'T WORRY ABOUT IT.\"",
 "BREAKING: LIZZY HAS POSTPONED HYROX. AGAIN. NATIONAL FITNESS COMMUNITY IN SHOCK.",
 "EXPERTS PREDICT LIZZY WILL COMPLETE HYROX EVENTUALLY. Experts have declined to provide a year.",
 "LIZZY'S TRAINING PLAN: 1. Think about HYROX. 2. Postpone HYROX. 3. Repeat.",
 "MICKY DESCRIBES HIMSELF AS A \"FUNCTIONING CRIPPLE.\" MEDICAL COMMUNITY REQUESTS CLARIFICATION.",
 "MICKY MANAGES TO COACH SPORTS, PLAY SPORTS AND WALK AROUND — THEN COMPLAINS ABOUT HIS BODY.",
 "LOCAL COACH CLAIMS HE IS \"FINE.\" HIS KNEES HAVE ISSUED A STATEMENT DISAGREEING.",
 "MICKY'S BODY ENTERS RECOVERY MODE AFTER WALKING UP TWO FLIGHTS OF STAIRS.",
 "MICKY REFUSES TO REST — BODY FILES FORMAL COMPLAINT.",
 "SPORTS MEDICINE EXPERTS ASK MICKY TO LISTEN TO HIS BODY. MICKY SAYS HE DOESN'T TAKE ORDERS FROM PEOPLE WITH NO WHISTLE.",
 "MICKY'S LEGS HAVE ANNOUNCED THEY WILL NO LONGER BE ACCEPTING OVERTIME.",
 "COACH MICKY PREACHES FITNESS WHILE HIS OWN BODY REQUESTS EARLY RETIREMENT.",
 "BREAKING: MICKY HAS COMPLETED A PHYSICAL ACTIVITY WITHOUT COMPLAINING. WITNESSES CALL IT A MIRACLE.",
 "LIZZY DECLARES NAPS AN ESSENTIAL PART OF ATHLETIC RECOVERY.",
 "MICKY CLAIMS HE CAN COOK. SOURCES SAY HE CAN MAKE INSTANT NOODLES.",
 "LIZZY'S OUTFIT RECEIVES MORE COMPLIMENTS THAN MICKY'S ENTIRE WARDROBE.",
 "MICKY SPENDS 30 MINUTES GETTING READY — STILL LOOKS LIKE HE'S GOING TO COACH.",
 "LIZZY TAKES 47 MINUTES TO PICK AN OUTFIT. MICKY TAKES 47 SECONDS.",
 "SPORTS EXPERTS CONFIRM MICKY WILL TURN ANY ACTIVITY INTO A COMPETITION.",
 "LIZZY CLAIMS SHE IS \"NOT COMPETITIVE.\" MICKY HAS REQUESTED THE RECORD BE CORRECTED.",
 "MICKY CHALLENGES LIZZY TO A COMPETITION. LIZZY ACCEPTS BEFORE HE FINISHES THE SENTENCE.",
 "FITNESS INDUSTRY INTRODUCES NEW CATEGORY: \"I'LL START TOMORROW.\"",
 "LIZZY ANNOUNCES NEW FITNESS PLAN: THINK POSITIVE, STRETCH SOMETIMES, POSTPONE HYROX.",
 "SHOCK UPSET: LIZZY DEFEATED BY MIKAEL IN BOWLING",
 "BOWLING WORLD STUNNED AS LIZZY SUFFERS UNEXPECTED DEFEAT",
 "LIZZY ENTERED AS FAVOURITE — LEFT WITH QUESTIONS",
 "MIKAEL PULLS OFF MASSIVE BOWLING UPSET",
 "EXPERTS HAD LIZZY WINNING — EXPERTS WERE WRONG",
 "LIZZY'S BOWLING CAMPAIGN ENDS IN HEARTBREAK",
 "MASSIVE UPSET: MIKAEL CLAIMS BOWLING VICTORY",
 "LIZZY DEMANDS IMMEDIATE REMATCH AFTER SHOCK DEFEAT",
 "BOWLING ANALYSTS: \"WE DID NOT SEE THAT COMING.\"",
 "MIKAEL CELEBRATES HISTORIC BOWLING WIN — LIZZY REFUSES TO COMMENT",
 "LIZZY'S BOWLING SCORE ENTERS THE HISTORY BOOKS — FOR THE WRONG REASONS",
 "NATION ASKS: WAS LIZZY OVERCONFIDENT?",
 "MIKAEL DECLARES BOWLING VICTORY \"ONE OF THE GREATEST ACHIEVEMENTS OF MY LIFE\"",
 "LIZZY VOWS TO RETURN STRONGER — BOWLING ALLEY ON HIGH ALERT",
 "SPORTS WORLD STILL PROCESSING THE LIZZY BOWLING UPSET",
 "LIZZY GETS REVENGE: DESTROYS MIKAEL AT THE ARCADE",
 "MIKAEL'S BOWLING GLORY LASTS ONLY UNTIL THE ARCADE",
 "LIZZY DOMINATES ARCADE — MIKAEL LEFT SEARCHING FOR ANSWERS",
 "ARCADE CHAMPIONSHIP: LIZZY 1 — MIKAEL 0",
 "LIZZY CLAIMS ARCADE VICTORY — CALLS IT \"JUST BUSINESS\"",
 "MASSIVE ARCADE WIN: LIZZY RESTORES HER SPORTING REPUTATION",
 "MIKAEL WINS BOWLING, LIZZY WINS ARCADE — SPORTING RIVALRY OFFICIALLY DECLARED",
 "LIZZY REFUSES TO DISCUSS BOWLING BUT IS HAPPY TO DISCUSS HER ARCADE WIN",
 "ARCADE EXPERTS CONFIRM LIZZY WAS ABSOLUTELY COOKING",
 "MICKY'S DAILY CRAIC SPORTING DESK DECLARES THE SERIES 1–1",
 "LIZZY CHALLENGES THE NATION TO FIND SOMETHING SHE CAN'T WIN AT",
 "LOCAL SPORTING LEGEND DISCOVERED — LIZZY'S CONFIDENCE REMAINS UNBEATEN",
 "SPORTS ANALYSTS SAY LIZZY IS EXTREMELY COMPETITIVE — LIZZY DISAGREES",
 "LIZZY CLAIMS SHE \"DOESN'T CARE ABOUT WINNING\" — SOURCES DISAGREE",
 "MYSTERY SPORTING EVENT ANNOUNCED — LIZZY ALREADY CLAIMS VICTORY",
 "LIZZY BELIEVES A BED CANNOT HAVE TOO MANY PILLOWS",
 "NEW LIZZY THEORY: EVERY PART OF THE HUMAN BODY DESERVES ITS OWN PILLOW",
 "PILLOW INDUSTRY REPORTS RECORD PROFITS AFTER LIZZY'S LATEST BEDROOM EXPANSION",
 "LIZZY'S BED NOW CONTAINS MORE PILLOWS THAN ACTUAL BED",
 "EXPERTS ASK HOW MANY PILLOWS ARE ENOUGH — LIZZY REFUSES TO RECOGNISE THE QUESTION",
 "LIZZY DECLARES: \"YOUR KNEES NEED PILLOWS TOO.\"",
 "NEW STUDY: LIZZY WOULD RATHER REMOVE THE BED THAN REMOVE A PILLOW",
 "LIZZY'S PILLOW COLLECTION HAS OFFICIALLY BECOME A FURNITURE ISSUE",
 "REPORT: LIZZY SLEEPS SURROUNDED BY ENOUGH PILLOWS TO START A SMALL HOTEL",
 "PILLOW SHORTAGE FEARED AFTER LIZZY VISITS HOMEWARE STORE",
 "LIZZY INTRODUCES NEW BEDTIME RULE: IF THERE'S SPACE, ADD ANOTHER PILLOW",
 "LOCAL WOMAN CLAIMS HER BODY HAS \"PILLOW REQUIREMENTS\"",
 "SCIENTISTS BAFFLED BY LIZZY'S BELIEF THAT EVEN HER TOES DESERVE PILLOW SUPPORT",
 "BEDDING INDUSTRY NAMES LIZZY THEIR MOST VALUABLE CUSTOMER",
 "LIZZY REFUSES TO SLEEP UNTIL EVERY BODY PART HAS BEEN PROPERLY ACCOMMODATED",
 "SHOE COLLECTION EXPANDS DESPITE LIZZY ALREADY OWNING THE EXACT SAME PAIR",
 "LIZZY CLAIMS SHE HAS NOTHING TO WEAR — WARDROBE DISAGREES",
 "FASHION EXPERTS CONFIRM LIZZY COULD KEEP THE SHOE INDUSTRY ALIVE SINGLE-HANDEDLY",
 "LIZZY ENTERS SHOPPING CENTRE — BANK ACCOUNT IMMEDIATELY GOES INTO DEFENSIVE MODE",
 "LOCAL WOMAN SPENDS THREE HOURS SHOPPING AND RETURNS HOME WITH \"JUST A FEW THINGS\"",
 "LIZZY'S WARDROBE REQUIRES ITS OWN CENSUS",
 "SHOE STORAGE CRISIS: LIZZY RUNS OUT OF SPACE BEFORE RUNNING OUT OF SHOES",
 "LIZZY SEES SOMETHING CUTE — PURCHASE BECOMES \"ESSENTIAL\"",
 "EXPERTS DISCOVER LIZZY'S FAVOURITE COLOUR IS APPARENTLY \"WHATEVER LOOKS GOOD.\"",
 "LIZZY DECLARES HERSELF READY FOR A SHOPPING BAN — BAN LASTS APPROXIMATELY 14 MINUTES",
 "NEW FASHION REPORT: LIZZY HAS ONCE AGAIN LOOKED BETTER THAN EVERYONE EXPECTED",
 "LIZZY'S OUTFIT RECEIVES FIVE-STAR REVIEW FROM COMPLETELY UNQUALIFIED SOURCES",
 "COST OF LIVING HAS INCREASED — LIZZY REQUESTS EMERGENCY SHOPPING RELIEF",
 "ARE TAXES COMING SOON? LIZZY ASKS WHETHER SHOES WILL BE TAX-DEDUCTIBLE",
 "MINIMUM WAGE GOES UP — LIZZY'S SHOPPING BUDGET SOMEHOW GOES UP TOO",
 "BANK ACCOUNT REPORTS \"UNUSUAL ACTIVITY\" AFTER LIZZY GOES SHOPPING",
 "LIZZY'S BANK BALANCE SEEN RUNNING FOR COVER",
 "BANK OFFICIALS CONFIRM MONEY ENTERED ACCOUNT — THEY HAVE NO IDEA WHERE IT WENT",
 "LIZZY'S SAVINGS ACCOUNT HAS BEEN DESCRIBED AS \"MORE OF A CONCEPT.\"",
 "TREASURY INVESTIGATES WHETHER 50 MILLION PAIRS OF SHOES QUALIFY AS A NATIONAL INVESTMENT",
 "BANK MANAGER ASKS LIZZY TO PLEASE STOP SAYING \"IT WAS ON SALE\"",
 "LIZZY OPENS SAVINGS ACCOUNT — SAVINGS IMMEDIATELY GO MISSING",
 "ECONOMISTS DISCOVER NEW FORM OF INFLATION: LIZZYFLATION",
 "LIZZY PROMISES TO BUDGET — FINANCIAL EXPERTS REQUEST A WRITTEN STATEMENT",
 "BANK INTRODUCES SPENDING LIMIT — LIZZY TAKES IT AS A PERSONAL INSULT",
 "LIZZY'S WALLET DECLARED A HIGH-RISK FINANCIAL INSTRUMENT",
 "NEW STUDY FINDS THE BEST SIDE OF THE BED IS WHICHEVER SIDE HAS MORE PILLOWS",
 "SCIENTISTS CONFIRM LIZZY'S BODY-PILLOW THEORY MAY HAVE NO LIMIT",
 "NATION ASKS: HOW MANY PILLOWS DOES ONE PERSON ACTUALLY NEED? LIZZY: \"YES.\"",
 "LOCAL BED REPORTEDLY SINKING UNDER WEIGHT OF PILLOWS",
 "PILLOW MANUFACTURERS CALL LIZZY \"THE DREAM CUSTOMER\"",
 "WEATHER FORECAST: 80% CHANCE OF SOMEONE SAYING \"I'M COLD\"",
 "SCIENTISTS CONFIRM THE FRIDGE DOES NOT RESTOCK ITSELF AFTER YOU CHECK IT",
 "LOCAL PERSON OPENS FRIDGE FOR SIXTH TIME — STILL NOTHING INTERESTING",
 "NATIONWIDE CRISIS: SOMEONE FINISHED THE SNACKS",
 "MYSTERY OF MISSING SOCK REMAINS UNSOLVED",
 "EXPERTS CONFIRM \"FIVE MORE MINUTES\" IS NOT A LEGALLY BINDING TIMEFRAME",
 "NEW STUDY FINDS PEOPLE ARE 400% MORE PRODUCTIVE WHEN THEY HAVE SOMETHING ELSE THEY SHOULD BE DOING",
 "SCIENTISTS CONFIRM ONE MORE EPISODE ALMOST NEVER MEANS ONE MORE EPISODE",
 "NATION CELEBRATES AS SOMEONE FINALLY CLEANS THEIR ROOM",
 "BREAKING: BED FOUND TO BE MORE COMFORTABLE WHEN YOU HAVE SOMEWHERE ELSE TO BE",
 "EXPERTS WARN AGAINST GOING TO THE SUPERMARKET WHILE HUNGRY",
 "LOCAL SHOPPER IGNORES WARNING — RETURNS WITH 14 UNNECESSARY ITEMS",
 "MYSTERY SOLVED: EVERYONE'S PHONE BATTERY DIES WHEN THEY NEED IT MOST",
 "SHOE SHORTAGE FEARED AFTER LIZZY ENTERS SHOPPING CENTRE",
 "LIZZY CLAIMS SHE NEEDS ANOTHER PAIR — INVESTIGATION FINDS 14 IDENTICAL PAIRS AT HOME",
 "FASHION EXPERTS CONFIRM LIZZY COULD SINGLE-HANDEDLY KEEP THE SHOE INDUSTRY ALIVE",
 "LIZZY SEES SOMETHING SHE LIKES — BANK ACCOUNT IMMEDIATELY STARTS SWEATING",
 "NEW TREND: OWNING THE SAME SHOES IN EVERY POSSIBLE COLOUR",
 "LIZZY DECLARES HERSELF \"NOT A SHOPAHOLIC\" — RETAILERS DISAGREE",
 "LOCAL WOMAN SPENDS 45 MINUTES CHOOSING AN OUTFIT — STILL SAYS \"I HAVE NOTHING TO WEAR\"",
 "LIZZY'S WARDROBE REQUIRES ITS OWN POSTAL CODE",
 "FASHION WEEK INVITES LIZZY — HER SHOE COLLECTION DEMANDS A SEPARATE INVITATION",
 "LIZZY'S PHONE STORAGE FULL — 97% OF PHOTOS ARE OUTFIT PICTURES",
 "REPORT: LIZZY HAS NEVER SEEN A MIRROR SHE DIDN'T LIKE",
 "NEW BEAUTY TREND EMERGES: LOOKING GOOD WITHOUT EVEN TRYING",
 "LIZZY'S \"QUICK SHOPPING TRIP\" LASTS THREE HOURS",
 "SHOPPING CENTRE NAMES LIZZY A FREQUENT FLYER",
 "LIZZY BUYS SOMETHING \"FOR LATER\" — LATER ARRIVES 11 MINUTES AFTER PURCHASE",
 "LOCAL WOMAN CLAIMS SHE IS SAVING MONEY WHILE ACTIVELY SHOPPING",
 "LIZZY OPENS CUPBOARD — DISCOVERS CLOTHES SHE FORGOT SHE OWNED",
 "FASHION CRISIS: LIZZY HAS RUN OUT OF PLACES TO STORE HER SHOES",
 "EXPERTS WARN LIZZY'S NEXT SHOE PURCHASE MAY REQUIRE PROPERTY DEVELOPMENT",
 "COST OF LIVING HAS INCREASED — LIZZY'S SHOPPING COST OF LIVING HAS INCREASED FASTER",
 "ARE TAXES COMING SOON? LIZZY REQUESTS EXEMPTION ON \"CUTE PURCHASES\"",
 "MINIMUM WAGE HAS GONE UP — LIZZY'S MINIMUM SHOPPING REQUIREMENT HAS ALSO GONE UP",
 "BANK ACCOUNT REPORTS \"SIGNIFICANT ACTIVITY\" FOLLOWING LIZZY'S WEEKEND",
 "LIZZY CHECKS HER BANK BALANCE — IMMEDIATELY DECIDES SHE DIDN'T NEED TO KNOW",
 "BANK OFFICIALS CONFIRM LIZZY'S MONEY IS VERY GOOD AT DISAPPEARING",
 "NEW FINANCIAL PRODUCT LAUNCHED: THE LIZZY SAVINGS ACCOUNT — NO ONE EXPECTS IT TO CONTAIN SAVINGS",
 "LIZZY'S BANK CARD REQUESTS ANNUAL LEAVE",
 "TREASURY INVESTIGATES LIZZY'S CLAIM THAT SHOES ARE \"AN INVESTMENT\"",
 "BANK MANAGER: \"WE'VE SEEN HER BALANCE. WE'RE GIVING HER SPACE.\"",
 "LIZZY PROMISES TO SAVE MONEY — ECONOMISTS WAIT FOR EVIDENCE",
 "NEW BUDGET APPROVED — LIZZY IMMEDIATELY SPENDS THE EMERGENCY FUND",
 "LIZZY DISCOVERS A SALE — FINANCIAL MARKETS ENTER FREEFALL",
 "BANK WARNS CUSTOMERS AGAINST \"JUST ONE MORE PURCHASE\"",
 "LIZZY RESPONDS: \"BUT THIS ONE IS DIFFERENT.\"",
 "LIZZY'S WALLET DECLARED A PROTECTED SPECIES",
 "BANK LAUNCHES NEW SECURITY SYSTEM AFTER LIZZY'S SHOPPING TRIP",
 "FINANCIAL EXPERTS ASK LIZZY TO EXPLAIN HER SPENDING — SHE ASKS THEM TO LEAVE",
 "BANK CONFIRMS: LIZZY IS RICH IN PERSONALITY, IF NOT IN HER BANK BALANCE",
 "NATION STILL WAITING FOR ANSWER TO THE MOST IMPORTANT QUESTION: WHAT ARE WE HAVING FOR DINNER?",
 "LOCAL WOMAN OPENS FRIDGE FOR FIFTH TIME — NOTHING NEW FOUND",
 "SCIENTISTS CONFIRM BED IS 73% MORE COMFORTABLE WHEN YOU SHOULD BE GETTING UP",
 "NATIONAL SHORTAGE OF MOTIVATION REPORTED ON MONDAY MORNING",
 "MYSTERY DEEPENS AS ONE SOCK DISAPPEARS FROM WASHING MACHINE",
 "EXPERTS CONFIRM \"I'M ON MY WAY\" DOES NOT NECESSARILY MEAN SOMEONE IS ON THEIR WAY",
 "NATION CELEBRATES AFTER SOMEONE ACTUALLY REPLIES TO THE GROUP CHAT",
 "SCIENTISTS DISCOVER THAT ONE MORE EPISODE IS NEVER ACTUALLY ONE MORE EPISODE",
 "BREAKING: PERSON WHO SAID \"I'LL SLEEP EARLY TONIGHT\" SEEN ONLINE AT 2:13AM",
 "NEW STUDY FINDS PEOPLE BECOME MORE PRODUCTIVE EXACTLY 10 MINUTES BEFORE A DEADLINE",
 "LOCAL CITIZEN SPENDS 20 MINUTES LOOKING FOR PHONE WHILE HOLDING PHONE",
 "NATION DEMANDS ANSWERS AFTER SOMEONE FINISHES THE MILK AND RETURNS EMPTY CARTON",
 "MYSTERIOUS FORCE CONTINUES TO TURN CLEAN ROOMS INTO MESSY ROOMS OVERNIGHT",
 "SCIENTISTS DISCOVER THAT \"I'M JUST GOING TO HAVE A LOOK\" IS ONE OF THE MOST EXPENSIVE SENTENCES IN ENGLISH",
 "LOCAL WOMAN CONTINUES TO MAKE PEOPLE SMILE WITHOUT EVEN TRYING",
 "LIZZY OFFICIALLY DECLARED TOO SPECIAL TO BE REPLACED",
 "NEW STUDY CONFIRMS: DAYS ARE BETTER WHEN LIZZY IS HAVING A GOOD DAY",
 "LIZZY'S SMILE CAUSES UNEXPECTED BOOST IN NATIONAL MOOD",
 "EXPERTS AGREE LIZZY IS SOMEONE WORTH KEEPING AROUND",
 "LIZZY REMINDED THAT SHE IS DOING BETTER THAN SHE THINKS",
 "NATION CELEBRATES LIZZY FOR SIMPLY BEING HERSELF",
 "LIZZY NAMED \"MOST LIKELY TO MAKE AN ORDINARY DAY FEEL SPECIAL\"",
 "OFFICIAL REPORT: LIZZY IS 10% ATTITUDE, 90% HEART",
 "LIZZY'S LAUGH DECLARED A NATIONAL TREASURE",
 "GOVERNMENT ANNOUNCES THAT LIZZY IS PERMITTED TO HAVE A GREAT DAY EVERY DAY",
 "SCIENTISTS UNABLE TO EXPLAIN HOW LIZZY CAN BE BOTH CHAOTIC AND ADORABLE",
 "LIZZY CONTINUES TO BE THE MAIN CHARACTER — SOURCES SAY SHE DIDN'T EVEN ASK FOR THE ROLE",
 "NATION AGREES: LIZZY DESERVES MORE FLOWERS",
 "SPECIAL REPORT: SOME PEOPLE ARE JUST WORTH THE EXTRA EFFORT — LIZZY IS ONE OF THEM",
 "LIZZY CLAIMS SHE'S \"NOT MAD\" — NATION PREPARES FOR CONSEQUENCES",
 "LIZZY SAYS \"DO WHATEVER YOU WANT\" — EXPERTS WARN AGAINST IT",
 "LOCAL WOMAN SAYS \"I DON'T CARE\" — CLEARLY CARES",
 "LIZZY RESPONDS \"K\" — MICKY'S DAILY NEWS DECLARES NATIONAL EMERGENCY",
 "LIZZY HAS ENTERED HER SILENT ERA — EVERYONE IS NOW SCARED",
 "REPORT: LIZZY'S ATTITUDE REMAINS STRONG DESPITE ZERO EVIDENCE",
 "LIZZY WINS ARGUMENT SHE WASN'T EVEN SUPPOSED TO BE HAVING",
 "WITNESSES REPORT LIZZY WAS RIGHT AGAIN",
 "LIZZY DENIES BEING DIFFICULT — SOURCES HAVE REQUESTED AN INVESTIGATION",
 "NATION ASKS: HOW DOES SHE ALWAYS GET THE LAST WORD?",
 "LIZZY SAYS \"I'M FINE\" — NOBODY BELIEVES HER",
 "MYSTERY SOLVED: LIZZY WASN'T IGNORING ANYONE, SHE WAS JUST BUSY BEING ICONIC",
 "BREAKING: LIZZY CONFIRMS MOST MEN ARE ANNOYING — EXCEPTION MADE FOR ONE PARTICULAR GUY",
 "LIZZY DECLARES: \"MEN ARE EXHAUSTING\" — THEN IMMEDIATELY MAKES AN EXCEPTION",
 "SCIENTISTS BAFFLED AS LIZZY SOMEHOW FINDS ONE MAN SHE ACTUALLY LIKES",
 "NATION ASKS: WHAT MAKES THIS PARTICULAR GUY DIFFERENT? LIZZY REFUSES TO COMMENT",
 "LIZZY'S PATIENCE FOR MEN REPORTEDLY HAS A VERY SHORT EXPIRY DATE",
 "MEN ADVISED TO APPROACH LIZZY WITH CAUTION — ONE PARTICULAR GUY HAS SPECIAL CLEARANCE",
 "LIZZY COMPLAINS ABOUT MEN FOR 20 MINUTES — THEN TALKS ABOUT HER FAVOURITE GUY",
 "EXPERTS CONFIRM LIZZY HAS A VERY SPECIFIC TYPE — DETAILS REMAIN CLASSIFIED",
 "LIZZY'S \"I DON'T LIKE MEN\" POLICY FACES MAJOR LOOPHOLE",
 "BREAKING: PRESIDENTIAL OFFICE CONFIRMS LIZZY MAY HAVE A CRUSH ON THE PRESIDENT",
 "LIZZY'S CRUSH ON THE PRESIDENT BECOMES IMPOSSIBLE TO HIDE",
 "PRESIDENTIAL APPROVAL RATINGS RISE AFTER LIZZY ADMITS SHE HAS A CRUSH",
 "WHITE HOUSE SOURCES SAY LIZZY'S PRESIDENTIAL CRUSH IS \"VERY SERIOUS\"",
 "LIZZY DENIES HAVING A CRUSH ON THE PRESIDENT — SOURCES SAY HER FACE TELLS A DIFFERENT STORY",
 "PRESIDENT RECEIVES UNEXPECTED SUPPORT FROM LIZZY — MOTIVES UNDER INVESTIGATION",
 "NATION ASKS WHETHER LIZZY'S PRESIDENTIAL CRUSH CONSTITUTES A CONFLICT OF INTEREST",
 "LIZZY CLAIMS SHE IS \"JUST ADMIRING THE PRESIDENT\" — INVESTIGATION CONTINUES",
 "PRESIDENTIAL SPEECH INTERRUPTED AFTER LIZZY WAS SPOTTED SMILING SUSPICIOUSLY",
 "EXPERTS SAY LIZZY'S CRUSH ON THE PRESIDENT MAY BE THE COUNTRY'S CUTEST POLITICAL DEVELOPMENT",
 "LIZZY REMINDS NATION THAT SHE CAN DISLIKE MEN AND STILL MAKE ONE VERY SPECIFIC EXCEPTION",
 "LOVE EXPERTS CONFIRM: IF LIZZY ACTUALLY LIKES YOU, YOU'RE PROBABLY DOING SOMETHING RIGHT",
 "LIZZY'S HEART CURRENTLY UNDER PRESIDENTIAL INVESTIGATION",
 "PALACE SOURCES REPORT LIZZY HAS \"FEELINGS\" — PRESIDENT DECLINES TO COMMENT",
 "LIZZY'S ATTITUDE REMAINS UNCHANGED — EXCEPT WHEN A CERTAIN SOMEONE WALKS INTO THE ROOM",
 "LOCAL WOMAN CLAIMS SHE DOESN'T HAVE A FAVOURITE MAN — SOURCES HAVE PHOTOGRAPHIC EVIDENCE",
 "LIZZY OFFICIALLY DECLARES MIKAEL 'THE PICKIEST EATER IN LIZZYOS HISTORY.'",
 "BREAKING: MIKAEL REJECTS PERFECTLY GOOD FOOD FOR THE THIRD TIME THIS WEEK.",
 "SOURCES CONFIRM MIKAEL HAS STRONG OPINIONS ABOUT SAUCE TOUCHING OTHER FOOD.",
 "LIZZY DEMANDS MIKAEL 'JUST TRY IT ONCE' FOR THE 47TH TIME.",
 "STUDY FINDS MIKAEL'S APPROVED FOOD LIST SHORTER THAN A GROCERY RECEIPT.",
 "MIKAEL SPOTTED PICKING SOMETHING OFF HIS PLATE AGAIN. LIZZY UNIMPRESSED.",
 "LIZZY DEFENDS CODY AGAIN. MIKAEL REQUESTS A SECOND OPINION.",
 "REPORT: CODY COULD DO LITERALLY ANYTHING AND LIZZY WOULD FIND A WAY TO JUSTIFY IT.",
 "LIZZY RULES IN CODY'S FAVOUR FOR THE 100TH CONSECUTIVE TIME.",
 "MIKAEL CALLS FOR AN INDEPENDENT INQUIRY INTO LIZZY'S CODY BIAS. REQUEST DENIED — BY LIZZY.",
 "BREAKING: CODY DOES SOMETHING QUESTIONABLE. LIZZY DECLARES IT 'ICONIC BEHAVIOUR.'",
 "ANALYSTS CONFIRM LIZZY'S LOYALTY TO CODY REMAINS UNDEFEATED.",
 "LIZZY CALLS MIKAEL A STALKER. MIKAEL CITES 'BATMAN DUTIES' AS DEFENSE.",
 "MIKAEL DEFENDS TRACKING LIZZY'S WHEREABOUTS AS 'STANDARD VIGILANTE PROCEDURE.'",
 "SOURCES CONFIRM MIKAEL HAS NOT DENIED BEING BATMAN. OR A STALKER.",
 "LIZZY FILES FORMAL COMPLAINT AGAINST MIKAEL'S 'SURVEILLANCE HABITS.' COMPLAINT DISMISSED — BY MIKAEL.",
 "MIKAEL INSISTS KNOWING LIZZY'S EVERY MOVE IS 'JUST GOOD DETECTIVE WORK.'",
 "BREAKING: MIKAEL SPOTTED 'PATROLLING' NEAR LIZZY AGAIN. CALLS IT COINCIDENCE.",
 "LIZZY'S EYESIGHT REMAINS OFFICIALLY QUESTIONABLE. GLASSES RECOMMENDED YEARS AGO.",
 "REPORT: MIKAEL NOW ALSO SQUINTING AT THINGS THAT AREN'T EVEN FAR AWAY.",
 "EXPERTS CONCERNED AS BOTH LIZZY AND MIKAEL STRUGGLE TO READ THE SAME SIGN.",
 "MIKAEL DENIES NEEDING GLASSES DESPITE WALKING INTO THE SAME DOOR TWICE.",
 "LIZZY ONCE AGAIN WALKS PAST SOMEONE SHE KNOWS WITHOUT NOTICING. GLASSES STILL UNTOUCHED.",
 "SCIENTISTS BAFFLED: HOW ARE THEY BOTH THIS BLIND AND STILL FINDING EACH OTHER.",
 "MIKAEL CLAIMS HE COULD FIND LIZZY BLINDFOLDED. CRITICS POINT OUT HE ALREADY CAN'T SEE WELL ANYWAY.",
 "LIZZY DEFENDS CODY'S LATEST STUNT WHILE SIMULTANEOUSLY CALLING MIKAEL A STALKER FOR WORRYING.",
 "MIKAEL INSISTS HIS 'BATMAN INSTINCTS' ARE COMPLETELY UNRELATED TO HIS RECENT VISION PROBLEMS.",
 "REPORT: MIKAEL REJECTED FOOD HE COULDN'T EVEN CLEARLY SEE. EXPERTS CALL THIS 'COMMITMENT.'",
 "LIZZY ACCUSES MIKAEL OF STALKING. MIKAEL POINTS OUT HE CAN BARELY SEE HER FROM ACROSS THE ROOM.",
 "CODY ALLEGEDLY WALKS PAST MIKAEL WITHOUT CONSEQUENCE — AGAIN. LIZZY CALLS IT 'JUSTICE.'",
 "MIKAEL'S PICKY EATING AND POOR EYESIGHT NOW OFFICIALLY UNRELATED, CONFIRMS DOCTOR HE HAS NOT SEEN.",
 "SOURCES CONFIRM: MIKAEL CAN SPOT LIZZY FROM A MILE AWAY BUT NOT A MENU ITEM HE ACTUALLY LIKES.",
 "MIKAEL CLAIMS HE'D NOTICE IF CODY DID SOMETHING WRONG. SOURCES DOUBT HE COULD EVEN SEE IT HAPPEN.",
 "LIZZY'S DEFENSE OF CODY REMAINS STRONGER THAN MIKAEL'S EYESIGHT. NOT A HIGH BAR, SAY CRITICS.",
 "MIKAEL'S 'BATMAN VISION' UNDER REVIEW AFTER HE WALKED INTO THE SAME DOOR AGAIN.",
 "BREAKING: MIKAEL REFUSES FOOD HE 'DIDN'T EVEN LOOK AT PROPERLY.' LIZZY UNSURPRISED.",
];
// Eastgate date investigation — approved special reports (7 full articles).
// Fictional confidential source appears exactly once at the end of each report.
const NEWS_EASTGATE_ARTICLES=[{"h":"PRESIDENT MIKAEL CLEARED OF HUGGING ALLEGATIONS AS SHOCKING SIDE-ANGLE EVIDENCE EMERGES","p":"The Eastgate hugging scandal takes a sensational turn after investigators discover Lizzy's side-angle approach may have been the problem all along.","body":"**The Daily Gobshite | Investigations & Presidential Affairs**\n\n**EASTGATE —** In a stunning development that has sent shockwaves throughout the Republic of LizzyOS, President Mikael's long-questioned hugging abilities may finally have been vindicated.\n\nFor some time, the President has faced allegations suggesting that his hugs were not quite up to the required standard.\n\nCritics had reportedly raised concerns over hug quality, execution and general technique.\n\nHowever, following a recent diplomatic encounter at Eastgate Mall, new evidence suggests that the President may have been unfairly blamed.\n\n**THE INVESTIGATION**\n\nAccording to the Department of Hugging Standards, hugging is a two-person activity requiring appropriate positioning, timing and cooperation from both parties.\n\nInvestigators have now identified a potentially crucial factor previously overlooked:\n\n**THE ANGLE OF APPROACH.**\n\nSources indicate that Agent Yelizaveta had consistently been approaching President Mikael **from a sideways angle**.\n\nNaturally, the President interpreted this as an indication that she wanted a **side hug**.\n\nBeing the respectful gentleman that he is, Mikael simply responded to the body language presented to him.\n\nThe government has since raised an extremely serious question:\n\n**\"HOW CAN THE PRESIDENT BE ACCUSED OF DELIVERING SIDE HUGS WHEN THE OTHER PARTY KEEPS APPROACHING HIM FROM THE SIDE?\"**\n\nThe Department of Hugging Standards has called this revelation one of the most important discoveries in the history of physical affection.\n\n**ADVANCED GRAPPLING SKILLS NOT DEPLOYED**\n\nThe investigation has also uncovered evidence that President Mikael possesses the physical capabilities necessary to correct an improper hugging angle.\n\nThe President is understood to possess **advanced grappling skills**, which have been demonstrated on numerous occasions.\n\nOne individual reportedly well acquainted with these abilities is none other than **Cody Aladeen**.\n\nCody is believed to possess extensive knowledge of the President's grappling capabilities.\n\nInvestigators have therefore established that Mikael could, in theory, have used his impressive wrestling techniques to manoeuvre Agent Yelizaveta into the appropriate hugging position.\n\nHowever, the President exercised remarkable restraint.\n\nAccording to the Presidential Office, Mikael had absolutely no intention of looking like a bully or **catching a case** for wrestling a perfectly innocent Lady Lady into a front-facing hug.\n\n**\"The President is a gentleman, not a professional hug-positioning enforcer,\"** explained a fictional government spokesperson.\n\nFurthermore, the President is Batman.\n\nAnd Batman understands the importance of respecting personal space.\n\nThe Department of Hugging Standards has confirmed that physically wrestling someone into a hug is neither necessary nor recommended.\n\n**THE PRESIDENT'S DEFENCE**\n\nFor some time, the President's reputation has been subjected to what his legal representatives describe as unnecessary hugging-related criticism.\n\nThe latest findings suggest that the responsibility for a successful hug cannot rest entirely on one individual.\n\nThe President was not refusing to provide a proper hug.\n\nNor was he demonstrating a lack of hugging ability.\n\nHe was simply responding to what appeared to be a clear request for a side hug.\n\n\"The President cannot reasonably be expected to disregard the approach angle and launch an unsolicited grappling manoeuvre,\" explained a representative of the Department of Presidential Conduct.\n\nThe President's legal team has therefore submitted the following defence:\n\n**HE WAS NOT GIVING BAD HUGS. HE WAS FOLLOWING INSTRUCTIONS THAT WERE NEVER VERBALLY GIVEN.**\n\nCritics have described this statement as ridiculous.\n\nThe government has described it as legally magnificent.\n\n**A SUCCESSFUL FIELD TEST**\n\nDespite the controversy, the latest Eastgate hugging operation concluded successfully.\n\nBoth agents finally achieved the appropriate positioning.\n\nAnd what happened next has completely changed the investigation.\n\n**PRESIDENT MIKAEL DELIVERED A PROPER HUG.**\n\nA lovely one, in fact.\n\nThe Department has therefore confirmed that the President is entirely capable of delivering a high-quality hug when both parties approach the situation correctly.\n\nHis reputation has been restored.\n\n**CODY ALADEEN CALLED AS EXPERT WITNESS**\n\nFollowing the revelation about Mikael's advanced grappling abilities, government investigators are reportedly considering requesting expert testimony from Cody Aladeen.\n\nCody is believed to possess valuable knowledge regarding the President's capabilities.\n\nHowever, officials have stressed that demonstrating advanced grappling skills on a voluntary participant is entirely different from attempting to reposition an unsuspecting Lady Lady during an innocent hug.\n\nCody's alleged expertise may therefore support the President's physical capabilities, but it does not change the government's official position:\n\n**THE CORRECT HUGGING ANGLE SHOULD BE ACHIEVED THROUGH COOPERATION, NOT WRESTLING.**\n\n**GOVERNMENT RECOMMENDATIONS**\n\nFollowing the successful Eastgate experiment, the Department of Hugging Standards has proposed several recommendations for future operations:\n\n- Agent Yelizaveta should approach from the front if she would like a proper front-facing hug.\n- President Mikael should continue demonstrating his exceptional hugging abilities.\n- Advanced grappling techniques should remain strictly unnecessary.\n- Cody Aladeen should not be required to supervise future hugging operations.\n- Both agents should conduct further practical tests whenever the opportunity arises.\n\nOfficials have also suggested that these experiments should be carried out regularly to establish the long-term reliability of the findings.\n\nPresident Mikael has expressed considerable enthusiasm for the proposal.\n\n**FINAL GOVERNMENT VERDICT**\n\n✅ PRESIDENTIAL HUGGING ABILITIES: CONFIRMED\n📐 SIDE-ANGLE MISUNDERSTANDING: IDENTIFIED\n🥋 ADVANCED GRAPPLING SKILLS: AVAILABLE BUT RESPONSIBLY UNUSED\n🐶 CODY ALADEEN: POTENTIAL EXPERT WITNESS\n⚖️ BULLYING ALLEGATIONS: AVOIDED\n🫂 FURTHER HUGGING OPERATIONS: STRONGLY RECOMMENDED\n\n**The Daily Gobshite understands that President Mikael is now accepting further opportunities to demonstrate his hugging abilities.**\n\nThe Presidential Office has issued one final reminder to Agent Yelizaveta:\n\n**\"IF YOU WANT A PROPER HUG, APPROACH THE PRESIDENT PROPERLY. THE MAN IS A GENTLEMAN, NOT A GRAPPLING INSTRUCTOR.\"** 😂❤️\n\n**🔎 CONFIDENTIAL SOURCE**\n\nAn undercover Daily Gobshite informant sitting in the Eastgate E-hailing Lounge witnessed the hugging incident. The informant was allegedly waiting for an Uber that was never ordered.","eastgateId":"eastgate-hugging"},{"h":"LIZZY ACCUSED OF SECRETLY ENJOYING HOLDING PRESIDENT MIKAEL'S HAND AS CINEMA INCIDENT EXPOSES THE TRUTH","p":"Irish investigators suspect that both agents rather enjoyed holding hands during the horror film, despite Lizzy's refusal to say it with her chest.","body":"**The Daily Gobshite | Romance, Scandals & Classified Intelligence**\n\n**EASTGATE —** An investigation into the events of a recent horror-movie outing has uncovered what officials are describing as one of the most significant romantic intelligence breakthroughs in LizzyOS history.\n\n**Agent Yelizaveta may actually enjoy holding President Mikael's hand.**\n\nThe allegation has stunned absolutely nobody within the Department of Romance.\n\nHowever, the suspect's apparent reluctance to admit it publicly has prompted calls for a full investigation.\n\n**THE HORROR MOVIE OPERATION**\n\nPresident Mikael, who has made his strong dislike of horror films abundantly clear, made the extraordinarily brave decision to accompany Agent Yelizaveta to a terrifying cinema experience.\n\nThe President maintained that he was completely fearless throughout.\n\nIndependent assessments have described this statement as questionable.\n\nAs the situation became increasingly frightening, Agent Yelizaveta eventually decided to honour her earlier promise to help the President survive the ordeal.\n\nShe held his hand.\n\nWhat initially appeared to be a straightforward emergency assistance procedure would soon develop into a major government scandal.\n\n**THE SUSPICIOUS DISCOVERY**\n\nInvestigators discovered that neither agent appeared particularly eager to terminate the hand-holding arrangement.\n\nSources suggest that both individuals rather enjoyed the experience.\n\nMikael has made little attempt to conceal his position.\n\nHe enjoyed holding Lizzy's hand.\n\nSimple. Straightforward. No parliamentary inquiry required.\n\nAgent Yelizaveta, meanwhile, remains the subject of allegations that she too enjoyed the experience, despite not exactly announcing this information to the nation.\n\nThe Department of Romance has issued an official challenge:\n\n**\"SAY IT WITH YOUR CHEST, LADY LADY.\"**\n\n**A DISTURBING POLICY FAILURE**\n\nThe incident has exposed a serious flaw in the Republic's current hand-holding arrangements.\n\nWhy must President Mikael be subjected to approximately two hours of psychological warfare simply to enjoy a perfectly lovely activity?\n\nWhy must horror movies, frightening noises and potential nightmares be involved?\n\nWhy can't the agents simply hold hands under normal, peaceful conditions?\n\nThese are questions the government believes deserve urgent answers.\n\n**THE PRESIDENTIAL POSITION**\n\nPresident Mikael has proposed immediate reform.\n\nUnder the proposed legislation, holding hands would no longer be restricted to circumstances involving demonic activity, mysterious cinema noises or Batman's alleged fear.\n\nThe Department of Romance has expressed overwhelming support.\n\n**FINAL FINDINGS**\n\n🤝 MIKAEL ENJOYS HOLDING LIZZY'S HAND: CONFIRMED\n❤️ LIZZY POSSIBLY ENJOYS THE SAME THING: EXTREMELY STRONG EVIDENCE\n👻 HORROR MOVIES AS A PREREQUISITE: UNNECESSARY\n🗣️ PUBLIC ADMISSION FROM LIZZY: STILL AWAITED\n📋 FURTHER HAND-HOLDING: RECOMMENDED\n\n**The Daily Gobshite has formally requested that Agent Yelizaveta explain why this activity should be reserved for moments when Batman is fighting for his life.**\n\nAt the time of publication, the nation remains deeply suspicious.\n\nAnd the President?\n\nHe wouldn't mind holding her hand again. ❤️\n\n**🔎 CONFIDENTIAL SOURCE**\n\nOur Irish intelligence division allegedly hacked the cinema's security cameras. Investigators have refused to explain why the cameras were so interested in two hands.","eastgateId":"eastgate-handholding"},{"h":"PRESIDENT MIKAEL VOLUNTARILY ENTERS HORROR MOVIE DESPITE KNOWN OPPOSITION — ROMANTIC MOTIVES SUSPECTED","p":"Batman has voluntarily entered a horror movie. Investigators suspect a romantic sacrifice or an elaborate hand-holding verification strategy.","body":"**The Daily Gobshite | Presidential Heroism & Questionable Decisions**\n\n**EASTGATE —** The Republic has been left stunned following reports that President Mikael voluntarily agreed to watch a horror movie alongside Agent Yelizaveta.\n\nThis decision came despite the President previously making his feelings about horror films extremely clear.\n\nHe does not like them.\n\nNot even a little bit.\n\nYet he willingly entered the cinema.\n\nIntelligence officials are now investigating what could have motivated such an extraordinary act.\n\n**THEORY ONE: AN ACT OF LOVE**\n\nSome government analysts believe the President may have made the sacrifice because spending time with Lizzy makes even the things he dislikes considerably more enjoyable.\n\nUnder this theory, Mikael was prepared to endure terrifying circumstances simply because he wanted to share the experience with her.\n\nThe Department of Romance has called this a surprisingly sweet development.\n\n**THEORY TWO: AN ELABORATE TEST**\n\nOther investigators believe the President may have been conducting a secret operation.\n\nLizzy had reportedly promised to do whatever was necessary to help him through the film.\n\nCould Mikael have deliberately entered hostile territory to determine whether she would honour her word?\n\nThe subsequent hand-holding incident has only intensified these suspicions.\n\n**WAS BATMAN SCARED?**\n\nThe President has categorically denied allegations of fear.\n\nAccording to the official government account, Mikael was not frightened.\n\nHe was performing advanced threat detection.\n\nAny sudden movements were tactical reflexes.\n\nAny unusual facial expressions were expressions of heroic concentration.\n\nAnd any suggestion that he was considering leaving the cinema is completely inaccurate.\n\n**Batman does not flee. Batman redeploys.**\n\n**FINAL VERDICT**\n\nThe investigation has established two important facts.\n\nFirstly, President Mikael survived the horror movie.\n\nSecondly, he genuinely enjoyed sharing the evening with Lizzy.\n\nWhether this represents romantic bravery, a clever hand-holding strategy or a combination of both remains classified.\n\n**The President has reportedly agreed that another date would be welcome, although preferably under conditions involving fewer supernatural threats.**\n\n**🔎 CONFIDENTIAL SOURCE**\n\nThe Daily Gobshite allegedly hypnotised President Mikael, who repeatedly muttered, \"I'm Batman,\" before accidentally admitting he just wanted to spend time with Lizzy.","eastgateId":"eastgate-batman"},{"h":"LIZZY UNDER INVESTIGATION AFTER APPEARING TO ENJOY PRESIDENT MIKAEL'S HORROR-MOVIE SUFFERING","p":"A shocking new inquiry asks whether Lizzy enjoyed the film—or simply watching President Mikael endure it. The President has taken note.","body":"**The Daily Gobshite | National Security & Presidential Complaints**\n\n**EASTGATE —** Serious allegations have emerged following reports that Agent Yelizaveta appeared to derive a suspicious amount of enjoyment from watching President Mikael endure a horror movie.\n\nThe President, who had bravely agreed to attend the screening despite his dislike of the genre, was allegedly subjected to repeated moments of terror.\n\nRather than immediately offering assistance, Agent Yelizaveta appeared to find the situation highly entertaining.\n\nThe Department of Presidential Welfare has described this behaviour as deeply concerning.\n\n**AN UNEXPECTED BETRAYAL**\n\nGovernment officials had originally believed that the operation would involve cooperation between both agents.\n\nHowever, sources suggest that Lizzy's enjoyment of the film may have been significantly enhanced by the President's reactions.\n\nThe government wishes to remind the public that President Mikael is a respected national leader, an accomplished operative and Batman.\n\nHis suffering should not be treated as an additional cinema attraction.\n\n**THE PRESIDENT WILL REMEMBER**\n\nPerhaps most concerning for Agent Yelizaveta is the President's response.\n\nMikael has officially taken note of her behaviour.\n\nAnd, as previously established, his memory is exceptionally good.\n\nThe Department of Future Consequences has confirmed that this information has been added to the permanent intelligence record.\n\nNo punishment has been announced.\n\nThis is somehow more worrying.\n\n**A LATE DISPLAY OF SYMPATHY**\n\nFortunately, Agent Yelizaveta eventually demonstrated compassion by holding the President's hand.\n\nOfficials have welcomed the gesture, although questions remain about why the assistance was preceded by so much entertainment at his expense.\n\nThe incident concluded peacefully.\n\nThe investigation, however, remains open.\n\n**FINAL GOVERNMENT WARNING:**\n\nAgent Yelizaveta is respectfully reminded that Batman remembers everything.\n\nEspecially betrayal.\n\n**The Daily Gobshite advises Agent Yelizaveta to be particularly cautious during future missions involving activities she personally dislikes.** 😌\n\n**🔎 CONFIDENTIAL SOURCE**\n\nOur Dublin cybercrime division allegedly hacked Lizzy's phone and discovered classified evidence that she found Mikael's suffering absolutely hilarious.","eastgateId":"eastgate-suffering"},{"h":"EASTGATE DATE BEGINS IN CONTROVERSY AS LIZZY ALLEGEDLY \"PULLS A LEBONE\"","p":"A slight arrival delay has triggered an oversized government investigation. The President has displayed extraordinary restraint.","body":"**The Daily Gobshite | Transport, Timekeeping & National Emergencies**\n\n**EASTGATE —** What was expected to be a carefully coordinated presidential date began with a minor scheduling controversy after Agent Yelizaveta arrived slightly later than anticipated.\n\nWitnesses have described the incident using a phrase now familiar to government investigators:\n\n**\"She pulled a Lebone.\"**\n\nThe remark immediately triggered an internal review by the Department of Presidential Punctuality.\n\n**PRESIDENT SHOWS EXTRAORDINARY PATIENCE**\n\nDespite the delay, President Mikael remained remarkably composed.\n\nSources confirm that he chose not to declare a national emergency, convene Parliament or issue a formal diplomatic complaint.\n\nThe Department of Presidential Conduct has praised his restraint.\n\n\"Such patience from a man of his importance is truly inspirational,\" claimed a government spokesperson who almost certainly works directly for him.\n\n**THE INVESTIGATION**\n\nOfficials are currently determining whether the delay was an isolated incident or evidence of a developing punctuality concern.\n\nNo formal charges have been filed.\n\nAgent Yelizaveta has nevertheless been informed that the matter has been recorded for historical accuracy.\n\n**THE FINAL OUTCOME**\n\nDespite the late start, both agents enjoyed a successful evening.\n\nThe minor delay ultimately had little effect on the mission.\n\nStill, the Republic insists that history must be preserved accurately.\n\n**FINAL VERDICT:**\n\n⏰ ARRIVAL: SLIGHTLY DELAYED\n🚨 LEBONE-RELATED ACTIVITY: DETECTED\n👑 PRESIDENTIAL PATIENCE: EXCEPTIONAL\n❤️ OVERALL DATE: WELL WORTH IT\n\n**The Daily Gobshite understands that President Mikael would happily endure a small delay again if it meant spending another lovely evening with Lizzy.**\n\nThe Department of Punctuality has asked him not to make this information public.\n\n**🔎 CONFIDENTIAL SOURCE**\n\nAn undercover Irish agent allegedly tracked Lizzy's arrival through a compromised shopping-centre clock. The clock has since entered witness protection.","eastgateId":"eastgate-lebone"},{"h":"LIZZY ATTEMPTS TO ORDER COFFEE DURING DATE AS PRESIDENTIAL DRINKS OPERATION ENDS IN CHAOS","p":"An attempted coffee order and a rushed beverage evacuation have raised serious questions about Eastgate date-planning procedures.","body":"**The Daily Gobshite | Food, Beverage & Emergency Planning**\n\n**EASTGATE —** The Department of Beverage Affairs has launched an urgent investigation following reports that Agent Yelizaveta attempted to order coffee during a presidential date.\n\nYes.\n\nCoffee.\n\nOfficials were initially unable to determine whether the request was serious.\n\n**A QUESTIONABLE BEVERAGE DECISION**\n\nBefore heading to the cinema, President Mikael and Agent Yelizaveta stopped for drinks and conversation.\n\nThe atmosphere was reportedly pleasant, with both agents enjoying each other's company.\n\nHowever, proceedings took an unexpected turn when Lizzy considered ordering coffee.\n\nThe Department of Beverage Affairs immediately raised its threat level to AMBER.\n\nInvestigators are still attempting to understand the reasoning behind the decision.\n\n**AN EXTREMELY SUCCESSFUL CONVERSATION**\n\nDespite the beverage controversy, both agents continued talking.\n\nAnd talking.\n\nAnd talking some more.\n\nThe conversations were reportedly so enjoyable that neither agent paid sufficient attention to the approaching cinema start time.\n\nThis would prove costly.\n\n**THE GREAT DRINK EVACUATION**\n\nA sudden glance at the time revealed an alarming development.\n\n**THE MOVIE WAS ABOUT TO BEGIN.**\n\nBoth agents were forced to finish their drinks at considerable speed before departing for the cinema.\n\nThe Department of Emergency Logistics has described the operation as rushed but ultimately successful.\n\nNo drinks were abandoned in the line of duty, according to available intelligence.\n\n**FINAL FINDINGS**\n\n☕ COFFEE REQUEST: EXTREMELY QUESTIONABLE\n💬 CONVERSATION QUALITY: EXCELLENT\n⏰ TIME MANAGEMENT: REQUIRES IMPROVEMENT\n🥤 RAPID DRINK CONSUMPTION: SUCCESSFUL\n🎬 CINEMA ARRIVAL: MISSION CONTINUED\n\n**The Department of Presidential Date Planning has recommended that future dates allow considerably more time for conversation, particularly when the participants appear completely incapable of running out of things to say.**\n\n**🔎 CONFIDENTIAL SOURCE**\n\nAn undercover journalist disguised as a restaurant menu overheard Lizzy attempting to order coffee and immediately alerted Dublin headquarters.","eastgateId":"eastgate-coffee"},{"h":"PRESIDENT MIKAEL TEMPORARILY ABANDONS NONSENSE TO REASSURE LIZZY OVER BIRTHDAY-PARTY CONCERNS","p":"An unexpected outbreak of emotional intelligence has left government officials rethinking everything they thought they knew about the President.","body":"**The Daily Gobshite | Exclusive Report — Presidential Relations**\n\n**EASTGATE —** Officials have reported an unexpected outbreak of emotional intelligence after President Mikael attempted to reassure Agent Yelizaveta during a conversation about his upcoming birthday party.\n\nThe incident occurred while both agents were enjoying drinks before their cinema outing.\n\nSources indicate that Lizzy had begun expressing concern about the birthday gathering.\n\nRather than responding with his usual mixture of sarcasm, questionable jokes and entirely justified self-confidence, President Mikael reportedly made a genuine effort to ease her worries.\n\n**GOVERNMENT LEFT STUNNED**\n\nThe Ministry of Presidential Behaviour has confirmed that the President listened, offered reassurance and attempted to make Agent Yelizaveta feel more comfortable about the situation.\n\nThis development has caught several government departments completely off guard.\n\nOfficials had reportedly prepared for nonsense.\n\nInstead, they witnessed a surprisingly sweet conversation.\n\n**THE PRESIDENT'S POSITION**\n\nWhile the precise details of the discussion remain private, intelligence reports confirm that Mikael wanted Lizzy to feel reassured.\n\nThe President understands that certain occasions can bring unnecessary worries, and he reportedly considered it important to help her feel more at ease.\n\nThis behaviour has been described by the Department of Romance as further evidence that beneath the presidential ego and constant claims of being Batman, Mikael might actually be a rather caring individual.\n\nThe President has neither confirmed nor denied this allegation.\n\n**THE AFTERMATH**\n\nThe conversation continued until both agents realised they needed to hurry to their film.\n\nWhether all of Lizzy's concerns were fully resolved remains unknown.\n\nHowever, the President's intentions appear clear.\n\n**He wanted her to feel comfortable, reassured and happy.**\n\n**EDITORIAL NOTE:** The Daily Gobshite would like to commend the President for his performance. We also wish to reassure readers that this newspaper has not been replaced by a romantic publication.\n\nNormal government nonsense will resume shortly.\n\n**🔎 CONFIDENTIAL SOURCE**\n\nAn undercover Irish journalist disguised as a waiter overheard the conversation. The agent was so shocked by Mikael's emotional intelligence that he immediately requested a psychological evaluation for himself. 🇮🇪😂","eastgateId":"eastgate-birthday"}];
NEWS_BREAKING.push(...NEWS_EASTGATE_ARTICLES); // Add to the original article pool; no existing reports removed.
// Newspaper guarantee: exactly one genuine full-length featured article, every day.
// Some early NEWS_BREAKING entries have only {h,p}; they belong in headline
// rotation and must never be promoted as the day's full article.
const NEWS_FULL_ARTICLE_POOL=NEWS_BREAKING.filter(item=>
 typeof item?.body==="string" && item.body.trim().length>=300
);
function featuredFullStoryForToday(){
 // The approved Eastgate investigations provide a safe fallback if the
 // rest of the article catalogue is ever changed or temporarily emptied.
 const pool=NEWS_FULL_ARTICLE_POOL.length ? NEWS_FULL_ARTICLE_POOL : NEWS_EASTGATE_ARTICLES;
 return pickForToday(pool,"featured-full-20261111");
}

const NEWS_EASTGATE_HEADLINES=["LIZZY PULLS A LEBONE, PRESIDENT FORCED TO EXERCISE PATIENCE — The Eastgate mission began with a minor delay as Agent Yelizaveta arrived slightly late. Government officials have praised Mikael for not immediately declaring a national emergency.","BREAKING: BATMAN VOLUNTARILY ENTERS HORROR MOVIE — Intelligence officials remain baffled after President Mikael willingly attended a film from a genre he openly dislikes. Romantic motivations have not been ruled out.","LIZZY REFUSES TO SAY IT WITH HER CHEST — New evidence suggests Agent Yelizaveta enjoys holding Mikael's hand. The Department of Romance has formally requested a public admission.","PRESIDENT ADMITS ENJOYING HAND-HOLDING — GOVERNMENT SHOCKED BY HONESTY — In a rare display of transparency, Mikael has openly acknowledged enjoying holding Lizzy's hand. Officials hope this new honesty policy will not spread to other government departments.","HUGGING SCANDAL TAKES UNEXPECTED TURN: ANGLE MAY HAVE BEEN THE PROBLEM — President Mikael's hugging reputation has received a major boost following evidence that successful hugs depend on Agent Yelizaveta approaching correctly.","LIZZY ACCUSED OF USING HORROR MOVIE AS PRESIDENTIAL ENTERTAINMENT — Investigators are examining reports that Agent Yelizaveta found Mikael's reactions significantly more entertaining than the actual film.","PRESIDENTIAL MEMORY DEPARTMENT OPENS PERMANENT FILE ON LIZZY — Following her suspicious enjoyment of the President's suffering, Lizzy has been reminded that Mikael possesses an exceptionally good memory.","GOVERNMENT QUESTIONS WHY HAND-HOLDING REQUIRES DEMONIC ACTIVITY — The Department of Romance has called for immediate reforms allowing Mikael and Lizzy to hold hands without the President first being subjected to terrifying cinema experiences.","EASTGATE COFFEE REQUEST PROMPTS NATIONAL INQUIRY — Agent Yelizaveta's attempt to order coffee during a date has left beverage officials demanding answers.","PRESIDENT AND LIZZY TALK SO MUCH THEY NEARLY MISS MOVIE — What began as a relaxing stop for drinks became a race against the clock when both agents realised the screening was about to begin.","DRINKS FINISHED AT ALARMING SPEED DURING CINEMA EMERGENCY — Officials have praised both agents for successfully completing an emergency beverage evacuation under severe time pressure.","BATMAN DENIES FEAR, CLAIMS HE WAS CONDUCTING THREAT ASSESSMENTS — The President has dismissed allegations that he was scared during the horror film, insisting all reactions were tactical and necessary.","HUGGING MINISTRY CALLS FOR FURTHER FIELD TESTS — Following the successful Eastgate hug, government scientists recommend repeat trials to confirm the findings. President Mikael has expressed enthusiastic support.","LIZZY'S HAND REPORTEDLY SAVES PRESIDENT FROM TACTICAL CINEMA EXIT — What critics called a potential escape has been described by the Presidential Office as an urgent Batman redeployment that was fortunately no longer necessary.","PRESIDENT DEMONSTRATES UNEXPECTED EMOTIONAL INTELLIGENCE — Reports suggest Mikael briefly suspended his usual nonsense to reassure Lizzy about his birthday party. Government officials are still processing the development.","MIKAEL EFFECT SURVIVES HORROR MOVIE EXPOSURE — Despite frightening conditions, Agent Yelizaveta remained suspiciously comfortable holding the President's hand. Scientists describe the findings as extremely interesting.","THIRD PRESIDENTIAL MISSION RUMOURED FOR 27 NOVEMBER — Intelligence suggests the pair may be planning another date. Location and activities remain classified, although fewer horror films have reportedly been recommended.","REPUBLIC CELEBRATES SECOND SUCCESSFUL MISSION — Operation: The Other Mommy has officially concluded with five completed objectives, a restored hugging reputation and a major diplomatic breakthrough in hand-holding.","PRESIDENT CALLS FOR END TO HORROR-BASED ROMANCE REQUIREMENTS — Mikael has questioned why perfectly pleasant activities such as holding hands must be preceded by intense cinematic distress.","DEPARTMENT OF ROMANCE REPORTS ALARMING LEVELS OF CUTENESS AT EASTGATE — Officials investigating the evening have concluded that, despite numerous scandals, both agents appeared to have a very lovely time."];
const NEWS_ADDED_TICKER=["BREAKING: President remembers another thing Lizzy wishes he didn't.","URGENT: Lizzy's patience reportedly approaching critical levels.","EXCLUSIVE: Mikael smiling at his phone again. Nation unsurprised.","ALERT: Horror movie negotiations enter dangerous hand-holding territory.","JUST IN: President declares Batman pyjamas a national treasure.","DEVELOPING: Lizzy accused of fashion over function.","REPORT: Small handbag still unable to hold anything useful.","SHOCK: President may be required to earn his salary.","LIVE: Lizzy continues to challenge Presidential authority.","CONFIRMED: Mikael still believes he is always right.","SCANDAL: Gobshite Media accused of telling the President's side.","EXCLUSIVE: President's lock screen has him in a chokehold.","BREAKING: Lizzy might be the bigger menace.","UPDATE: Mikael backs himself. Nobody is surprised.","URGENT: Both parties appear to enjoy being bossed around.","OFFICIAL: Ishwapha allegations dismissed by Presidential decree.","REPORT: President's dinner date could involve unfamiliar ingredients.","SHOCKING: Lizzy makes Mikael appear emotionally well-adjusted.","DEVELOPING: Menacing continues. No casualties, only flirting.","BREAKING: Both refuse to admit they're down bad.","BREAKING: PRESIDENT ACCUSED OF RUDE HANG-UP AFTER ACCIDENTAL CALL.","EXCLUSIVE: LIZZY DEMANDS BASIC TELEPHONE MANNERS.","URGENT: PRESIDENTIAL PHONE ETIQUETTE UNDER INVESTIGATION.","REPORT: MIKAEL HAS VOWED TO DO BETTER.","SHOCK: LIZZY REPORTEDLY ENJOYS TALKING TO PRESIDENT.","DEVELOPING: FEWER ACCIDENTAL CALLS COULD CAUSE MORE PROBLEMS.","JUST IN: GOVERNMENT CONSIDERS RANDOM HELLO CALLS.","SCANDAL: PRESIDENT'S FINGER SLIPS, LIZZY'S PATIENCE DOES NOT.","EXCLUSIVE: PRESIDENT MAY NOW BE REQUIRED TO SAY GOODBYE BEFORE HANGING UP.","NEW STUDY: SOMETIMES SHE JUST WANTS TO HEAR HIS VOICE.","OFFICIAL: UNEXPECTED CALLS WELCOME, UNEXPECTED HANG-UPS NOT.","BREAKING: PRESIDENT DISCOVERS PHONES CAN BE USED INTENTIONALLY.","BREAKING: MIKAEL CALLS LIZZY ON PURPOSE. NATION STUNNED.","EXCLUSIVE: LIZZY ALLEGEDLY SMILING AFTER PRESIDENTIAL CALL.","SHOCK: PRESIDENT DISCOVERS HE CAN CALL JUST TO SAY HI.","DEVELOPING: LIZZY REFUSES TO DISCLOSE LEVELS OF DELIGHT.","OFFICIAL: ACCIDENTAL CALL CRISIS MAY HAVE UNEXPECTEDLY ROMANTIC ENDING.","REPORT: RANDOM PRESIDENTIAL HELLO CALLS COULD BECOME REGULAR OCCURRENCE.","URGENT: BOTH PARTIES APPEAR TO ENJOY SPEAKING TO EACH OTHER."];
NEWS_ADDED_TICKER.push(...NEWS_EASTGATE_HEADLINES);
const NEWS_BANK_ARTICLES=[
 {h:"Inside the Bank of Micky: A Financial Update",p1:"The Bank of Micky continues to operate as the only financial institution in LizzyOS fully backed by charm, confidence, and the occasional weekly bonus. This blog will hold the full story of how funds are managed, where Micky Bucs come from, and what the future holds for savers.",p2:"Here is how it works. Every Micky Buc you deposit is stored in your savings balance and stays there until you withdraw it. Keep 15 MB or more saved for seven full days and the bank pays you a +5 MB weekly bonus, claimable once per week straight from the Bank of Micky page.",p3:"Withdrawals are instant, deposits are free, and nothing is ever deducted for holding your money. The vault holds the rewards you unlock along the way, from free items to the rarer prizes that only show up now and then.",tip:"deposit early in the week, never let your savings drop below 15 MB, and claim your bonus as soon as the timer clears."},
 {h:"Why Citizens Keep Choosing the Bank of Micky",p1:"When asked why they keep banking with the Bank of Micky, most citizens cite the same three reasons: it's reliable, it's fair, and nobody has ever been charged a mystery fee.",p2:"The weekly bonus system remains the bank's most talked-about feature. Keep at least 15 MB banked for seven consecutive days and you'll unlock a +5 MB bonus, ready to claim the moment the timer clears.",p3:"Unlike other institutions, the Bank of Micky has never once changed its terms overnight. What you see is genuinely what you get, which analysts describe as 'refreshingly rare.'",tip:"set a reminder for your bonus timer, and don't withdraw the day before it clears — patience pays, literally."},
 {h:"Bank of Micky Explains: Where Do Micky Bucs Actually Come From?",p1:"A common question from newer citizens: where do Micky Bucs come from in the first place? The answer, according to bank officials, is simple — daily activity, completed missions, and the occasional generous reward.",p2:"Every deposit strengthens your standing balance, and every seven days spent above the 15 MB threshold earns a further +5 MB, no paperwork required.",p3:"The bank stresses that there is no penalty for saving slowly. Whether you deposit a little or a lot, the rules apply exactly the same way to everyone.",tip:"small, regular deposits build up faster than people expect — check your balance weekly to see the difference."},
 {h:"The Bank of Micky's Quiet Reputation for Reliability",p1:"It rarely makes headlines, and that, insiders say, is exactly the point. The Bank of Micky has spent this week doing what it always does: processing deposits and withdrawals without a single hiccup.",p2:"The weekly bonus remains unchanged — 15 MB banked for seven days earns a +5 MB reward, claimable directly from the Bank of Micky page the moment it's ready.",p3:"Officials describe this week as 'business as usual,' which, for a bank, is considered high praise.",tip:"consistency beats big deposits — a steady balance above 15 MB is the fastest route to your next bonus."},
 {h:"Why Citizens Keep Trusting the Bank of Micky",p1:"The Bank of Micky continues to attract citizens with its simple approach to banking: keep your money safe, avoid unnecessary complications, and don't charge people mysterious fees just because you can.",p2:"The institution has also developed a reputation for rewarding responsible citizens. Those who demonstrate excellent financial behaviour may even receive unexpected bonuses.",p3:"Financial analysts describe this as 'surprisingly generous,' noting that few institutions bother rewarding good habits at all.",tip:"good financial behaviour tends to get noticed here — consistency is quietly the most rewarded habit in the system."},
 {h:"Economic Experts Issue Cost-of-Living Warning",p1:"The cost of almost everything continues to rise. Groceries are more expensive. Entertainment is more expensive. Everyday essentials are more expensive.",p2:"Citizens have therefore been encouraged to think carefully before spending their hard-earned money.",p3:"Unfortunately, this advice has reportedly been ignored by at least one individual who believes that owning the same pair of shoes in multiple colours is 'financial diversification.'",tip:"before any purchase, ask whether it's a need or a colour variant of something you already own."},
 {h:"The Mystery of the Missing Money",p1:"A growing number of citizens have reported a strange phenomenon. Money enters their bank account. They feel financially secure. They check again a few days later. The money has disappeared.",p2:"Experts have investigated the matter and discovered the most likely causes include food, shopping, subscriptions, entertainment and the dangerous phrase: 'It's only a little bit of money.'",p3:"The Bank of Micky recommends tracking exactly where that 'little bit' keeps going.",tip:"if your balance keeps vanishing, the phrase 'it's only a little bit' is usually the culprit."},
 {h:"Savings Remain Important, Experts Say",p1:"Financial experts continue to encourage citizens to save a portion of their income whenever possible. Even small amounts can add up over time.",p2:"The Bank of Micky recommends having enough savings to deal with unexpected expenses, emergencies and other unfortunate situations.",p3:"The bank also recommends keeping enough money available for life's occasional treats. Because financial responsibility is important. But so is having fun.",tip:"balance matters more than perfection — save consistently, but leave room for the occasional treat."},
 {h:"Bank of Micky Issues Important Financial Advice",p1:"The Bank of Micky has released three simple rules for responsible financial management: save when you can, don't spend money you don't have, and never enter a shopping centre while saying, 'I'm just going to look.'",p2:"The third rule was added after several previous incidents. Management considers it the most important.",p3:"Officials note that all three rules are easy to understand and, apparently, much harder to actually follow.",tip:"if you catch yourself saying 'I'm just going to look,' that's already the warning sign."}
];
const NEWS_PRESIDENT_ARTICLES=[
 {p1:"To everyone inside LizzyOS: thank you. This little world runs on the people who show up for it every day, save what they can, laugh at the life lessons, and keep coming back.",p2:"The plan stays simple. Keep the bank fair, keep the rewards worth chasing, and keep adding things worth exploring. If something feels broken or unfair, say so, and it gets fixed."},
 {p1:"This week's message is a short one: keep going. Whether that means banking a few more Micky Bucs, finishing one more mission, or simply logging back in tomorrow — it all counts.",p2:"This office continues to believe that the small, everyday choices matter more than the big dramatic ones. Show up, be kind, and the rest tends to follow."},
 {p1:"A brief note to every citizen reading this: the numbers matter less than the habit. A saved Micky Buc today is worth more than a big plan you never start.",p2:"The office remains committed to keeping things fair and worth showing up for. That hasn't changed, and it isn't going to."},
 {p1:"Some weeks are quiet, and that's not a bad thing. Quiet weeks mean nothing's broken, everyone's showing up, and the system is doing exactly what it's meant to do.",p2:"As always, if something feels off, say so. This office would rather hear about a small problem early than a big one late."},
 {p1:"Life doesn't always go according to plan, and frankly, that's probably for the best. Some of the best memories come from the moments nobody planned for.",p2:"So today, this office encourages all citizens to laugh a little louder, worry a little less, and stop treating every tiny inconvenience like a national emergency. There will be difficult days, confusing days, and days when you simply need to lie down and do nothing. All three are perfectly acceptable."},
 {p1:"This office has one simple request: be kind to people. You never really know what someone else is dealing with, and sometimes a small act of kindness can completely change someone's day.",p2:"Check in on the people you care about. Tell them you appreciate them. Make them laugh. And if someone is having a bad day, perhaps offer them a snack before attempting to solve their problems. This office considers it highly effective diplomacy."},
 {p1:"Not every good moment has to be a major event. Sometimes happiness is good food, your favourite song, a ridiculous conversation, laughing until your stomach hurts, or simply spending time with someone who makes you feel comfortable being yourself.",p2:"Don't wait for something extraordinary to happen before appreciating what's already around you. The little things have a habit of becoming the big memories."},
 {p1:"This office would like to remind citizens that thinking about something forty-seven times will not necessarily make the situation clearer. Sometimes you simply need to breathe, relax, and let tomorrow deal with tomorrow.",p2:"This office therefore recommends: think less, laugh more, sleep properly, eat something. Further instructions will be issued once this office has finished overthinking this statement."},
 {p1:"If today isn't your day, that's okay. One bad day doesn't define you. One mistake doesn't define you. One disappointment doesn't define you. You are still moving forward, even when it doesn't feel like it.",p2:"Give yourself some grace. Tomorrow is another opportunity to try again. And if all else fails, get comfortable, find a good snack, and remember that this office believes in you."}
];
const NEWS_LESSON_HEADLINE_LABEL="Life Lessons With Micky";
// Presidential Random Call Policy stays at the foot of the newspaper, as before.
const NEWS_GOBSHITE_POLICY={"h":"THE PRESIDENTIAL RANDOM CALL INITIATIVE — POLICY","body":"*A government programme designed to encourage intentional communication and prevent unauthorised hang-ups.*\n\n**Policy 001 — Accidental Call Protocol**  \nIf Mikael accidentally calls, he must greet Lizzy, explain the mistake, and say goodbye properly.\n\n**Policy 002 — Random Hello Calls**  \nMikael is encouraged to call Lizzy spontaneously just to say hello, ask about her day, or tell her something random.\n\n**Policy 003 — No Compulsory Agenda**  \nA Presidential phone call does not require a formal reason. Sometimes hearing her voice is a sufficient justification.\n\n**Policy 004 — The 30-Second Exception**  \nEven when busy, Mikael may make a quick call simply to say he's thinking about her, provided Lizzy is available.\n\n**Policy 005 — No Forced Conversations**  \nSpontaneous calls remain voluntary, and either person can be busy. The objective is affection, not a telecommunications attendance register."};
function gobEscape(value){
 return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
}
function gobMdInline(value){
 return gobEscape(value).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")
  .replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/\n/g,"<br>");
}
function gobParagraphs(value){
 return String(value??"").trim().split(/\n\s*\n/).filter(Boolean)
  .map(p=>"<p>"+gobMdInline(p)+"</p>").join("");
}
function addedFullStory(story){
 if(!story || typeof story.body!=="string" || !story.body.trim())return "";
 return `<details class="newsExpandedReport" open>
   <summary>Read the full article</summary>
   ${gobParagraphs(story.body)}
   ${story.verdict?`<blockquote class="newsQuote"><strong>Editor's verdict:</strong> ${gobEscape(story.verdict)}</blockquote>`:""}
  </details>`;
}
// Scoped to the article expansion and the already existing policy card.
const GOBSHITE_MINIMAL_CSS=`<style>
.newsPage .newsExpandedReport{margin-top:12px}
.newsPage .newsExpandedReport summary{cursor:pointer;font-weight:700}
.newsPage .newsExpandedReport p{margin:10px 0;line-height:1.65;overflow-wrap:anywhere}
.newsPage .newsExpandedReport p:has(>strong:only-child){margin-top:17px}
.newsPage .gobPolicy summary{cursor:pointer;font-weight:700}
.newsPage .gobPolicy p{margin:.6rem 0}
</style>`;

// The previous hashDayString (a naive ×31 rolling hash) had poor
// avalanche behaviour on these near-identical day strings — in testing,
// 5 of 7 consecutive days produced the exact same "In Other News" set.
// FNV-1a seeding a proper PRNG (mulberry32) + a real Fisher-Yates shuffle
// fixes that: every day now gets a genuinely distinct selection.
/* Johannesburg-local day change for newspaper rotation. */
function newsDayKey(){
 const parts=new Intl.DateTimeFormat("en-GB",{
  timeZone:"Africa/Johannesburg",year:"numeric",month:"2-digit",day:"2-digit"
 }).formatToParts(new Date());
 const get=t=>parts.find(p=>p.type===t)?.value||"00";
 return get("year")+"-"+get("month")+"-"+get("day");
}
function fnv1aSeed(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function mulberry32(seed){return function(){seed|=0;seed=(seed+0x6D2B79F5)|0;let t=Math.imul(seed^(seed>>>15),1|seed);t=(t+Math.imul(t^(t>>>7),61|t))^t;return ((t^(t>>>14))>>>0)/4294967296}}
function pickForToday(arr,salt){
 const dayKey=newsDayKey();
 const rnd=mulberry32(fnv1aSeed(dayKey+"|"+NEWS_ROTATION_VERSION+"|"+salt));
 const idx=Math.floor(rnd()*arr.length);
 return arr[idx];
}
function pickManyForToday(arr,salt,count){
 const dayKey=newsDayKey();
 const rnd=mulberry32(fnv1aSeed(dayKey+"|"+NEWS_ROTATION_VERSION+"|"+salt));
 const copy=arr.slice();
 for(let i=copy.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}
 return copy.slice(0,count);
}


function news(){
 currentPage="news";lastNewsDay=newsDayKey();
 setAddress("https://mickydailynews.lizzy");
 const today=new Date().toLocaleDateString("en-ZA",{timeZone:"Africa/Johannesburg",weekday:"long",year:"numeric",month:"long",day:"numeric"});
 const breaking=featuredFullStoryForToday();
 const banking=pickForToday(NEWS_BANKING,"banking");
 const lifestyle=pickForToday(NEWS_LIFESTYLE,"lifestyle");
 const sports=pickForToday(NEWS_SPORTS,"sports");
 const quote=pickForToday(NEWS_QUOTES,"quote");
 const bankArticle=pickForToday(NEWS_BANK_ARTICLES,"bankArticle");
 const presidentArticle=pickForToday(NEWS_PRESIDENT_ARTICLES,"presidentArticle");
 const ticker=pickManyForToday([
  ...pickManyForToday(NEWS_TICKER,"ticker-original",5),
  ...pickManyForToday(NEWS_ADDED_TICKER,"ticker-added-classic",1)
 ],"ticker-mixed",6);
 $("browserPage").innerHTML=`<div class="newsPage">
  <header class="newsHeader">
    <div class="newsMasthead">
      <span class="newsLogo">📰</span>
      <div>
        <h1>Micky's Daily News</h1>
        <small>Your most trusted source inside LizzyOS • ${today}</small>
      </div>
    </div>
    <div class="newsTagline">"All the news that's fit to print, and some that probably isn't."</div>
  </header>

  <div class="gobP1Jump"><strong>🗞️ NEW: Lizzy’s Reader Desk</strong><span>Vote in today’s poll, buy your own headline or write a guest column.</span><a href="#gobP1Mount">Open the Reader Desk ↓</a></div>
  <section class="newsBulletin">
    <div class="newsSectionTitle">🚨 Headlines Bulletin</div>
    <div class="newsHeadlineCard featured">
      <span class="newsLabel">BREAKING</span>
      <h2>${breaking.h}</h2>
      <p>${breaking.p}</p>
      <small>Updated today</small>
      ${addedFullStory(breaking)}
    </div>
    <div class="newsHeadlineGrid">
      <div class="newsHeadlineCard">
        <span class="newsLabel">BANKING</span>
        <h3>${banking.h}</h3>
        <p>${banking.p}</p>
      </div>
      <div class="newsHeadlineCard">
        <span class="newsLabel">LIFESTYLE</span>
        <h3>${lifestyle.h}</h3>
        <p>${lifestyle.p}</p>
      </div>
      <div class="newsHeadlineCard">
        <span class="newsLabel">SPORTS</span>
        <h3>${sports.h}</h3>
        <p>${sports.p}</p>
      </div>
    </div>
  </section>

  <section class="newsTickerSection">
    <div class="newsSectionTitle">📢 In Other News</div>
    <ul class="newsTicker">
      ${ticker.map(t=>`<li>${t}</li>`).join("")}
    </ul>
  </section>

  <section class="newsBlog">
    <div class="newsSectionTitle">🏦 The Bank and Funds</div>
    <article class="newsArticle">
      <h2>${bankArticle.h}</h2>
      <p class="newsByline">By Micky's Daily News Finance Desk</p>
      <p>${bankArticle.p1}</p>
      <p>${bankArticle.p2}</p>
      <p>${bankArticle.p3}</p>
      <div class="newsArticleBox">
        <strong>Quick tips:</strong> ${bankArticle.tip}
      </div>
    </article>
  </section>

  <section class="newsBlog">
    <div class="newsSectionTitle">🎙️ Words From the President</div>
    <article class="newsArticle">
      <h2>A Message to the People</h2>
      <p class="newsByline">Office of the President</p>
      <p>${presidentArticle.p1}</p>
      <p>${presidentArticle.p2}</p>
      <blockquote class="newsQuote">
        "${quote}"
        <cite>— The President</cite>
      </blockquote>
    </article>
  </section>

  <section class="newsBlog" id="gobP1Mount" aria-label="Daily Gobshite reader desk"></section>
  ${GOBSHITE_MINIMAL_CSS}
  <section class="newsBlog">
    <details class="gobPolicy newsArticle">
      <summary>📞 ${gobEscape(NEWS_GOBSHITE_POLICY.h)}</summary>
      <div>${gobParagraphs(NEWS_GOBSHITE_POLICY.body)}</div>
    </details>
  </section>
  <footer class="newsFooter">
    <p>© ${new Date().getFullYear()} Micky's Daily News • Printed digitally with love.</p>
    <button id="newsBackHome" class="newsHomeBtn">← Back to LizzySearch</button>
  </footer>
 </div>`;
 window.LizzyGobshitePart1?.mount?.();
}

function newsBackHome(){ home(); }
function open(){ $("internetWindow")?.classList.remove("hidden"); home(); }
function close(){ $("internetWindow")?.classList.add("hidden"); }

window.LizzyV3RenderDailyNews = news;
window.LizzyInternetCore={
  worker:WORKER,home,setAddress,notify,bankMoney,bankSpendable,bankSpend,bankCredit,bankCreatorBalance,bankWallet,bankRecord,bankDashboard
};

$("internetIcon")?.addEventListener("click",open);
$("internetClose")?.addEventListener("click",close);
$("internetCloseBtn")?.addEventListener("click",close);
$("browserHome")?.addEventListener("click",home);
$("browserBack")?.addEventListener("click",home);
$("browserPage")?.addEventListener("click",e=>{
 const site=e.target.closest("[data-site]")?.dataset.site;
 if(site==="bank")bank(); else if(site==="market"||site==="entertainment")window.LizzyMarketEntertainment?.open(site); else if(site==="lessons")lesson(); else if(site==="lizzylessons")lizzyLessonsPage(); else if(site==="news")news(); else if(site==="home")home();
 if(e.target.closest("#bankLoginBtn")) bankLogin();
 if(e.target.closest("#bankLogout")){sessionStorage.removeItem(BANK_SESSION);bank();}
 const bankAct=e.target.closest("[data-web-bank]")?.dataset.webBank;
 if(bankAct)bankAction(bankAct);
 const v=e.target.closest("[data-vote]")?.dataset.vote;
 if(v)vote(v);
 if(e.target.closest("#anotherLesson")){let n=current;while(n===current&&LESSONS.length>1)n=Math.floor(Math.random()*LESSONS.length);current=n;lesson()}
 if(e.target.closest("#submitLizzyLesson"))submitLizzyLesson();
 if(e.target.closest("#newsBackHome")) home();
});
$("browserPage")?.addEventListener("keydown",e=>{
 if(e.key==="Enter" && e.target?.id==="bankPassword")bankLogin();
});
console.log("LizzyOS Internet: ONLINE", LESSONS.length, "lessons");

// If this tab/PWA gets backgrounded, suspended, or restored from the
// browser's back-forward cache across midnight, the already-rendered
// News page would otherwise sit frozen with yesterday's picks until
// someone manually re-clicks into it. Catch that here: whenever the
// page becomes visible/resumed again, re-render News if the calendar
// day has actually moved on since it was last drawn.
function recheckStaleDay(){
 if(currentPage==="news"&&lastNewsDay&&newsDayKey()!==lastNewsDay)news();
}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")recheckStaleDay()});
window.addEventListener("pageshow",()=>recheckStaleDay());
window.addEventListener("focus",()=>recheckStaleDay());
 // Refresh the newspaper at Johannesburg midnight without switching tabs.
 setInterval(recheckStaleDay,60000);
 })();
