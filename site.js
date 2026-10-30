/* ===== Settings: change these when the site goes live ===== */
const SUPPORT_EMAIL = "support@visionwrit.com";   // placeholder until the domain and inbox exist
const PLAY_STORE_URL = "#";                        // Google Play listing (com.visionwrit.app) once published
/* ========================================================== */

const NAV = [["index.html","Home"],["help.html","Help Center"],["faq.html","FAQ"],["feature-requests.html","Feature Requests"]];
const LOGO = '<img src="img/mark.png" alt="" width="17" height="34">Visionwrit';

(function layout(){
  const page = document.body.dataset.page;
  const header = document.createElement("header");
  header.className = "nav";
  header.innerHTML =
    '<div class="container"><a class="logo" href="index.html" aria-label="Visionwrit home">' + LOGO + '</a>' +
    '<button class="menu-btn" aria-expanded="false" aria-controls="navlinks" aria-label="Menu"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>' +
    '<nav class="nav-links" id="navlinks" aria-label="Main">' +
    NAV.map(([h,t]) => '<a href="' + h + '"' + (h===page ? ' aria-current="page"' : '') + '>' + t + '</a>').join("") +
    '</nav><a class="btn btn-primary btn-sm play" href="#">Get the app</a></div>';
  document.body.prepend(header);
  const btn = header.querySelector(".menu-btn"), links = header.querySelector(".nav-links");
  btn.addEventListener("click", () => { const o = links.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });

  const footer = document.createElement("footer");
  footer.innerHTML =
    '<div class="container foot"><div><a class="logo" href="index.html">' + LOGO + '</a><p>Write the vision. Make it plain. Read it daily.</p></div>' +
    '<div><h4>Support</h4><ul><li><a href="help.html">Help Center</a></li><li><a href="faq.html">FAQ</a></li><li><a href="help.html#contact">Contact us</a></li></ul></div>' +
    '<div><h4>Visionwrit</h4><ul><li><a class="play" href="#">Google Play</a></li><li><a href="index.html#plus">Visionwrit Plus</a></li><li><a href="feature-requests.html">Roadmap</a></li></ul></div></div>' +
    '<div class="container legal"><span>© 2026 Visionwrit · A Leonem Group LLC company</span><span>No ads. We never sell your data.</span></div>';
  document.body.append(footer);
  document.querySelectorAll(".play").forEach(a => a.href = PLAY_STORE_URL);
})();

function esc(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const val = id => (document.getElementById(id)?.value || "").trim();
const emailOk = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function showResult(box, subject, body){
  const mailto = "mailto:" + SUPPORT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  box.innerHTML =
    "<strong>Your message is ready.</strong>" +
    "<p class='muted' style='font-size:.93rem;margin-top:4px'>Open it in your email app, or copy it and send it to <strong>" + esc(SUPPORT_EMAIL) + "</strong>.</p>" +
    "<pre>Subject: " + esc(subject) + "\n\n" + esc(body) + "</pre>" +
    "<div class='actions'><a class='btn btn-primary btn-sm' href='" + mailto + "'>Open in email app</a>" +
    "<button type='button' class='btn btn-outline btn-sm' data-copy>Copy message</button><span class='muted' data-status style='font-size:.9rem'></span></div>";
  box.classList.add("show");
  box.querySelector("[data-copy]").addEventListener("click", async () => {
    const st = box.querySelector("[data-status]");
    try { await navigator.clipboard.writeText("To: " + SUPPORT_EMAIL + "\nSubject: " + subject + "\n\n" + body); st.textContent = "Copied."; }
    catch(e){ st.textContent = "Couldn't copy. Select the text above instead."; }
  });
}
