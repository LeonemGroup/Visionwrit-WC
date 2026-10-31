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
    '<div class="container legal"><span>© 2026 Visionwrit · A Leonem Group LLC company</span></div>';
  document.body.append(footer);
  document.querySelectorAll(".play").forEach(a => a.href = PLAY_STORE_URL);
})();

function esc(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const val = id => (document.getElementById(id)?.value || "").trim();
const emailOk = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

/* Sends a form to the support inbox through FormSubmit (formsubmit.co).
   The first message ever sent triggers a one-time "Activate form" email to SUPPORT_EMAIL. */
async function sendForm({ form, button, box, subject, fields, replyTo }){
  const label = button.textContent;
  button.disabled = true;
  button.textContent = "Sending…";
  box.className = "result";
  box.textContent = "";
  const payload = Object.assign({}, fields, {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    _honey: form.querySelector("[name=_honey]")?.value || ""
  });
  if (replyTo) payload._replyto = replyTo;
  try {
    const res = await fetch("https://formsubmit.co/ajax/" + SUPPORT_EMAIL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && String(data.success) === "true") {
      box.className = "result show ok";
      box.innerHTML = "<strong>Thank you. Your message was sent.</strong><p class='muted' style='margin-top:4px'>" +
        (replyTo ? "We'll reply to " + esc(replyTo) + " soon." : "We read every message.") + "</p>";
      form.reset();
    } else if (/activat/i.test(data.message || "")) {
      box.className = "result show ok";
      box.innerHTML = "<strong>Almost ready.</strong><p class='muted' style='margin-top:4px'>This form is being switched on. Check " + esc(SUPPORT_EMAIL) +
        " for an email from FormSubmit and click Activate Form, then send this message again.</p>";
    } else {
      throw new Error(data.message || "The message couldn't be sent.");
    }
  } catch (e) {
    box.className = "result show bad";
    box.innerHTML = "<strong>Your message didn't go through.</strong><p class='muted' style='margin-top:4px'>Please try again in a moment, or email us at <a href='mailto:" +
      SUPPORT_EMAIL + "'>" + esc(SUPPORT_EMAIL) + "</a>.</p>";
  } finally {
    button.disabled = false;
    button.textContent = label;
  }
}
