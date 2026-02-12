

// ------------------ Default Data ------------------
let data = [
  {
    seat:"হবিগঞ্জ-১",
    candidates:[
      {image:"image/md bodrul reja.png", name:"মোহাম্মদ বদরুর রেজা",party:"ইসলামিক ফ্রন্ট বাংলাদেশ",symbol:"চেয়ার",votes:15280},
      {image:"image/kaji tufayel ahmod.png", name:"কাজী তোফায়েল আহমেদ",party:"বাংলাদেশ জাতীয় সমাজতান্ত্রিক দল (জাসদ)",symbol:"কার",votes:12450},
      {image:"image/reja kibriya.png", name:"রেজা কিবরিয়া",party:"বিএনপি",symbol:"ধানের শীষ",votes:19870},
      {image:"image/mowlana sirajul islam.png", name:"মাওলানা সিরাজুল ইসলাম",party:"বাংলাদেশ খেলাফত মজলিস",symbol:"রিক্সা",votes:7320},
      {image:"image/shakh sujat mia.png", name:"শেখ সুজাত মিয়া",party:"স্বতন্ত্র",symbol:"ঘোড়া",votes:4150},
    ]
  },
  {
    seat:"হবিগঞ্জ-২",
    candidates:[
      {image:"image/abdul basit ajad.png", name:"আব্দুল বাছিত আজাদ",party:"খেলাফত মজলিস",symbol:"দেওয়াল ঘড়ি",votes:10340},
      {image:"image/muktadir chowduri.png", name:"আব্দুল মুক্তাদির চৌধুরী",party:"জাতীয় পার্টি",symbol:"লাঙল",votes:16420},
      {image:"image/lukman ahmed talukder.png", name:"লুকমান আহমদ তালুকদার",party:"বাসদ",symbol:"মই",votes:5240},
      {image:"image/afsar ahmed.png", name:"আফছার আহমদ",party:"স্বতন্ত্র",symbol:"ফুটবল",votes:7320},
      {image:"image/doctor jibon.png", name:"আবু মনসুর সাখাওয়াত হাসান",party:"বিএনপি",symbol:"ধানের শীষ",votes:18210},
    ]
  },
  {
    seat:"হবিগঞ্জ-৩",
    candidates:[
      {image:"image/SM Saruare.png", name:"মোঃ শাহিনুর রহমান",party:"সাংস্কৃতিক মুক্তিজোট",symbol:"ছড়ি",votes:4860},
      {image:"image/kaji mohosin ahomed.png", name:"কাজী মহসিন আহমদ",party:"জামায়াতে ইসলামী",symbol:"দাঁড়িপাল্লা",votes:17340},
      {image:"image/SM Saruare.png", name:"এস. এম. সরওয়ার",party:"বাংলাদেশ ইসলামী ফ্রন্ট",symbol:"মোমবাতি",votes:8420},
      {image:"image/Mohib uddin ahomed suhel.png", name:"মহিব উদ্দিন আহমেদ সোহেল",party:"ইসলামী আন্দোলন বাংলাদেশ",symbol:"হাতপাখা",votes:11280},
      {image:"image/abdul momin chowduri.png", name:"আব্দুল মুমিন চৌধুরী",party:"জাতীয় পার্টি",symbol:"লাঙল",votes:6540},
      {image:"image/gk gows.png", name:"আলহাজ্ব মোঃ জি কে গউছ",party:"বিএনপি",symbol:"ধানের শীষ",votes:20110},
    ]
  },
  {
    seat:"হবিগঞ্জ-৪",
    candidates:[
      {image:"image/Rasedul islam kukhon.png", name:"মোঃ রাশেদুল ইসলাম খোকন",party:"সাংস্কৃতিক মুক্তিজোট",symbol:"ছড়ি",votes:5120},
      {image:"image/Taheri.png", name:"মোঃ গিয়াস উদ্দিন",party:"বাংলাদেশ ইসলামী ফ্রন্ট",symbol:"মোমবাতি",votes:8360},
      {image:"image/Mujibur Rahaman.png", name:"মোঃ মুজিবুর রহমান",party:"বাসদ",symbol:"মই",votes:4380},
      {image:"image/Mijanur Rahaman Chowdury.png", name:"মোঃ মিজানুর রহমান চৌধুরী",party:"স্বতন্ত্র",symbol:"ঘোড়া",votes:9870},
      {image:"image/sm foysol.png", name:"এস. এম. ফয়সল",party:"বিএনপি",symbol:"ধানের শীষ",votes:21450},
      {image:"image/saleha ahomod sajon.png", name:"সালেহ আহমদ সাজন",party:"স্বতন্ত্র",symbol:"ফুটবল",votes:7640},
      {image:"image/sha muhamod alamin.png", name:"শাহ মোঃ আল আমিন",party:"বাংলাদেশ মুসলিম লীগ",symbol:"হারিকেন",votes:3290},
      {image:"image/rejaul mustofa.png", name:"মুঃ রেজাউল মোস্তফা",party:"ইনসানিয়াত বিপ্লব বাংলাদেশ",symbol:"আপেল",votes:22180},
    ]
  }
];


// ------------------ Load Saved Vote ------------------
const saved = localStorage.getItem("liveVotes");
if(saved){
  data = JSON.parse(saved);
}


// ------------------ Render Function ------------------
// ------------------ Global State ------------------
let showTop2 = false;


// ------------------ Render Function ------------------
function render(){
  const container = document.getElementById("seats");
  container.innerHTML = "";

  data.forEach((seat)=>{
    // vote অনুযায়ী sort
    seat.candidates.sort((a,b)=> b.votes - a.votes);
    const max = seat.candidates[0].votes;

    let html = `
      <div class="seat">
        <div class="seat-title">${seat.seat} আসন</div>
    `;

    seat.candidates.forEach((c,i)=>{

      // 👉 যদি Top2 mode ON থাকে → শুধু প্রথম 2 জন
      if(showTop2 && i > 1) return;

      html += `
        <div class="candidate ${i===0 ? 'leader' : ''}">
          
          <div class="photo">
            <img src="${c.image || 'image/default.png'}" alt="${c.name}">
          </div>

          <div class="info">
            <div class="name">${c.name}</div>
            <div class="party">${c.party}</div>
            <div class="symbol">প্রতীক: ${c.symbol}</div>

            <div class="bar">
              <div class="fill" style="width:${(c.votes/max)*100}%"></div>
            </div>
          </div>

          <div class="votes">${c.votes.toLocaleString()}</div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML += html;
  });
}


// ------------------ First Load ------------------
render();


// ------------------ Single Global Button ------------------
const btn = document.getElementById("top2Btn");

btn.addEventListener("click", function(){
  showTop2 = !showTop2;

  this.textContent = showTop2
    ? "Show All Candidates"
    : "Show Top 2";

  render();
});






// ------------------ Auto Live Update ------------------
window.addEventListener("storage", function(e){
  if(e.key === "liveVotes"){
    data = JSON.parse(e.newValue);
    render();
  }
});


