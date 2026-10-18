/* =====================================================
   EDIT YOUR CONTENT HERE
   YouTube id = the part after "v=" in the video link
   (https://www.youtube.com/watch?v=THIS_PART).
   span = tile width out of 12 columns (3 to 7 works well).
   h    = tile height in px (use the same h for tiles in one row).
   ===================================================== */
const VIDEOS = {
  weddings: [
    {id:"GD1R-rWEhoA", title:"Anna & Bence",  meta:"2022", span:3, h:640, w:500},
    {id:"I8Kplsf1p5Q", title:"Réka & Dani",   meta:"2024", span:5, h:240},
    {id:"--h0tti6zg4", title:"Feri & Zümee",  meta:"2025", span:4, h:380},
    {id:"cAIV0wwR7EI", title:"Lilla & Marci", meta:"2025", span:3, h:500},
    {id:"gaKiJE2C8Tk", title:"Nóra & Gergő",  meta:"2026", span:4, h:500},
    {id:"RQorrnJIc2Q", title:"Mariann & Carlos", meta:"2023", span:5, h:380},
    {id:"vtaDi_R6CII", title:"Carla & Thomas",  meta:"2025", span:2, h:280},
    {id:"jX4jySkP6FQ", title:"Mazsi & Pazsi", meta:"2026", span:3, h:300},
    {id:"X5hPRvz_gUM", title:"Kuki & Pinas",  meta:"2023", span:4, h:293},
  ],
  concerts: [
    {id:"YOUTUBE_ID_6",  title:"Festival opening", meta:"2023", span:4, h:200, w:500},
    {id:"YOUTUBE_ID_7",  title:"Club night",       meta:"2024",       span:5, h:300},
    {id:"YOUTUBE_ID_8",  title:"Acoustic session", meta:"Live",       span:3, h:300},
    {id:"YOUTUBE_ID_9",  title:"Main stage",       meta:"Aftermovie", span:5, h:340},
    {id:"YOUTUBE_ID_10", title:"Support act",      meta:"Live",       span:7, h:340},
    {id:"YOUTUBE_ID_6",  title:"Festival opening", meta:"Aftermovie", span:4, h:300},
    {id:"YOUTUBE_ID_7",  title:"Club night",       meta:"Live",       span:5, h:300},
    {id:"YOUTUBE_ID_8",  title:"Acoustic session", meta:"Live",       span:3, h:300},
    {id:"YOUTUBE_ID_9",  title:"Main stage",       meta:"Aftermovie", span:5, h:340},
    {id:"YOUTUBE_ID_10", title:"Support act",      meta:"Live",       span:7, h:340},
  ],
  musicvideos: [
    {id:"huXEOj1BBoU", title:"Állandó Változás",   meta:"Magidom", span:2, h: 500},
    {id:"KivYRftLus0", title:"Királydráma", meta:"Magidom", span:2, h:300},
    {id:"8kePefatqBM", title:"Van Az a Pénz",  meta:"Magidom", span:6, h:300},
    {id:"TAtm_aNAHqM", title:"No Idol",   meta:"Darjeeling", span:6, h:500},
    {id:"IDUgsByn1Ak", title:"Secret Rooms",   meta:"Darjeeling", span:5, h:250},
    {id:"xMntfG0gzNA", title:"Darwinien", meta:"Darjeeling", span:7, h:250},
    {id:"A-pF38JtAH8", title:"Departure",  meta:"Systemless", span:5, h:294},
    {id:"la65Qmse9VY", title:"MNE LOPJ",   meta:"Magidom", span:6, h:805},
  ],
};

/* Hero reels (5): src = your short as an mp4 file (plays on hover),
   link = where a click goes, e.g. the Instagram reel. */
const REELS = [
  {src:"video/reel1.mp4", link:"https://www.instagram.com/reel/REEL_ID_1/"},
  {src:"video/reel2.mp4", link:"https://www.instagram.com/reel/REEL_ID_2/"},
  {src:"video/reel3.mp4", link:"https://www.instagram.com/reel/REEL_ID_3/"},
  {src:"video/reel4.mp4", link:"https://www.instagram.com/reel/REEL_ID_4/"},
  {src:"video/reel5.mp4", link:"https://www.instagram.com/reel/REEL_ID_5/"},
];

/* =====================================================
   CODE BELOW (normally no need to touch)
   ===================================================== */
const $ = (s, r=document) => r.querySelector(s);

/* ---- navbar: solid after the hero, mobile menu, REC timecode ---- */
const nav = $("#nav"), menu = $("#menu"), burger = $("#burger");
const onScroll = () => nav.classList.toggle("solid", scrollY > innerHeight * .6);
addEventListener("scroll", onScroll, {passive:true}); onScroll();
burger.addEventListener("click", () => {
  const o = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", o);
});
menu.addEventListener("click", e => {
  if(e.target.tagName === "A"){ menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }
});
const t0 = Date.now(), p2 = n => String(n).padStart(2, "0");
setInterval(() => {
  const s = Math.floor((Date.now() - t0) / 1000);
  $("#tc").textContent = `${p2(Math.floor(s/3600))}:${p2(Math.floor(s/60)%60)}:${p2(s%60)}`;
}, 1000);
$("#yr").textContent = new Date().getFullYear();

/* ---- hero reels (peek from the right, play on hover) ---- */
// const reelBox = $("#reels");
// REELS.forEach((r, i) => {
//   const s = document.createElement("div");
//   s.className = "slot"; s.style.setProperty("--k", i - 2);
//   s.innerHTML = `<a class="reel" href="${r.link}" target="_blank" rel="noopener" aria-label="Reel ${i+1}"><video src="${r.src}#t=0.1" muted loop playsinline preload="metadata"></video></a>`;
//   const a = $(".reel", s), v = $("video", s);
//   a.addEventListener("pointerenter", e => { if(e.pointerType === "mouse") v.play().catch(() => {}); });
//   a.addEventListener("pointerleave", e => { if(e.pointerType === "mouse") v.pause(); });
//   a.addEventListener("focus", () => v.play().catch(() => {}));
//   a.addEventListener("blur", () => v.pause());
//   a.addEventListener("click", e => {          /* touch screens: first tap opens, second tap follows the link */
//     if(matchMedia("(hover:none)").matches && !a.classList.contains("open")){
//       e.preventDefault();
//       document.querySelectorAll(".reel.open").forEach(o => { o.classList.remove("open"); $("video", o).pause(); });
//       a.classList.add("open"); v.play().catch(() => {});
//     }
//   });
//   reelBox.appendChild(s);
// });

/* ---- video tiles ---- */
const yt = (id, q="") => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1${q}`;

document.querySelectorAll(".vgrid").forEach(grid => {
  const list = VIDEOS[grid.dataset.cat] || [];
  list.forEach((it, i) => {
    const f = document.createElement("figure");
    f.className = "tile rv"; f.tabIndex = 0;
    f.style.setProperty("--s", it.span); f.style.setProperty("--h", (it.h || 300) + "px"); f.style.setProperty("--d", (i % 3) * .12 + "s");
    f.innerHTML = `<div class="pic"><img alt="" loading="lazy"><i class="play">▶</i>
                   <figcaption><b>${it.title}</b><span>${it.meta}</span></figcaption></div>`;
    const pic = $(".pic", f), img = $("img", f);

// try best quality first, then fall back
const sources = [
  `https://i.ytimg.com/vi/${it.id}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${it.id}/sddefault.jpg`,
  `https://i.ytimg.com/vi/${it.id}/hqdefault.jpg`
];
let n = 0;
const tryNext = () => {
  if (n < sources.length) img.src = sources[n++];
  else img.remove();
};
img.onload = () => {
  // YouTube's "missing" placeholder is 120px wide
  if (img.naturalWidth <= 120) tryNext();
};
img.onerror = tryNext;
tryNext();

    /* hover preview (muted, looping), mouse only */
    let timer, ifr;
    // f.addEventListener("pointerenter", e => {
    //   if(e.pointerType !== "mouse") return;
    //   timer = setTimeout(() => {
    //     ifr = document.createElement("iframe");
    //     ifr.src = yt(it.id, `&autoplay=1&mute=1&controls=0&loop=1&playlist=${it.id}&disablekb=1`);
    //     ifr.allow = "autoplay"; ifr.title = it.title;
    //     pic.appendChild(ifr);
    //   }, 300);
    // });
    // f.addEventListener("pointerleave", () => { clearTimeout(timer); if(ifr){ ifr.remove(); ifr = null; } });

    const open = () => { clearTimeout(timer); if(ifr){ ifr.remove(); ifr = null; } openLb(list, i); };
    f.addEventListener("click", open);
    f.addEventListener("keydown", e => { if(e.key === "Enter") open(); });
    grid.appendChild(f);
  });
});

/* ---- lightbox with prev / next ---- */
const lb = document.createElement("div");
lb.id = "lb";
lb.innerHTML = `<button class="lb-x" aria-label="Close">✕</button><button class="lb-p" aria-label="Previous">‹</button>
  <button class="lb-n" aria-label="Next">›</button><div class="lb-body"></div><div class="lb-i"><b></b><span></span></div>`;
document.body.appendChild(lb);
let cur = [], ix = 0;

function showLb(){
  const it = cur[ix];
  $(".lb-body", lb).innerHTML = `<iframe src="${yt(it.id, "&autoplay=1")}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${it.title}"></iframe>`;
  $(".lb-i b", lb).textContent = it.title;
  $(".lb-i span", lb).textContent = `${p2(ix+1)} / ${p2(cur.length)}`;
  $(".lb-p", lb).style.display = $(".lb-n", lb).style.display = cur.length > 1 ? "" : "none";
}
function openLb(list, i){ cur = list; ix = i; showLb(); lb.classList.add("show"); document.body.style.overflow = "hidden"; }
function closeLb(){ $(".lb-body", lb).innerHTML = ""; lb.classList.remove("show"); document.body.style.overflow = ""; }
function step(d){ ix = (ix + d + cur.length) % cur.length; showLb(); }

lb.addEventListener("click", e => {
  const c = e.target.classList;
  if(e.target === lb || c.contains("lb-x")) closeLb();
  else if(c.contains("lb-p")) step(-1);
  else if(c.contains("lb-n")) step(1);
});
addEventListener("keydown", e => {
  if(!lb.classList.contains("show")) return;
  if(e.key === "Escape") closeLb();
  if(e.key === "ArrowLeft") step(-1);
  if(e.key === "ArrowRight") step(1);
});

/* ---- scroll animations: fade in when visible, reset when out of view,
        so they replay every time you scroll past ---- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    e.target.classList.add("in");              // scrolling down: animate in
  } else if (e.boundingClientRect.top > 0) {
    e.target.classList.remove("in");           // left via the bottom: reset, ready to replay
  }
  // left via the top: do nothing, stays visible when you scroll back up
}), {threshold: .15, rootMargin: "0px 0px -6% 0px"});
document.querySelectorAll(".rv").forEach(el => io.observe(el));
