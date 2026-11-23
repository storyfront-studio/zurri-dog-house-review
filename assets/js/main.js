const WA="254717023461";
const nav=document.getElementById("nav"),tg=document.querySelector(".tg"),nx=document.querySelector(".nx");
if(tg&&nav){tg.addEventListener("click",()=>nav.classList.add("open"));nx&&nx.addEventListener("click",()=>nav.classList.remove("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}
const els=document.querySelectorAll(".rv");if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}else els.forEach(e=>e.classList.add("in"));
document.querySelectorAll("[data-y]").forEach(e=>e.textContent=new Date().getFullYear());
const f=document.getElementById("enq");if(f){const q=new URLSearchParams(location.search).get("service"),s=document.getElementById("s");if(q&&s)for(const o of s.options)if(o.text===q){s.value=o.text;break}
const dt=document.getElementById("dt");if(dt)dt.min=new Date().toISOString().slice(0,10);
f.addEventListener("submit",e=>{e.preventDefault();const v=id=>document.getElementById(id).value.trim();const L=["Hello Zurri Dog House! I would like to book or enquire.","Name: "+v("n"),"Dog: "+v("d"),"Service: "+v("s"),"Start date: "+v("dt"),"Length: "+v("ln")];if(v("nt"))L.push("Notes: "+v("nt"));window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(L.join("\n")),"_blank","noopener")})}
