(() => {
  const D = window.CATALOGUE;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const state = {
    q: "",
    domains: new Set(),
    levels: new Set(),
    roles: new Set(),
    skills: new Set(),
    types: new Set(),
    certOnly: false,
    duration: "any",
    sort: "featured",
    compare: new Set(),
    activeRole: "scrum-master",
    theme: localStorage.getItem("lc-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    favs: new Set(JSON.parse(localStorage.getItem("lc-favs") || "[]")),
    recent: JSON.parse(localStorage.getItem("lc-recent") || "[]")
  };

  const courseById = Object.fromEntries(D.courses.map(c => [c.id, c]));
  const competencyName = Object.fromEntries(D.competencies.map(c => [c.id, c.name]));
  const roleName = Object.fromEntries(D.roles.map(r => [r.id, r.name]));
  const domainName = Object.fromEntries(D.domains.map(d => [d.id, d.name]));

  function saveFavs() { localStorage.setItem("lc-favs", JSON.stringify([...state.favs])); }
  function saveRecent() { localStorage.setItem("lc-recent", JSON.stringify(state.recent.slice(0, 8))); }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem("lc-theme", state.theme);
    const btn = $("#themeToggle");
    if (btn) btn.title = state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  }

  function hoursBucket(h) {
    if (h <= 8) return "short";
    if (h <= 16) return "standard";
    return "extended";
  }

  function filteredCourses() {
    let list = D.courses.slice();
    const q = state.q.trim().toLowerCase();
    if (q) {
      list = list.filter(c => {
        const blob = [c.title, c.short, c.description, ...(c.tags || []), ...(c.skills || []), c.certification?.name, c.certification?.body]
          .join(" ").toLowerCase();
        return blob.includes(q);
      });
    }
    if (state.domains.size) list = list.filter(c => state.domains.has(c.domain));
    if (state.levels.size) list = list.filter(c => state.levels.has(c.level));
    if (state.roles.size) list = list.filter(c => c.roles.some(r => state.roles.has(r)));
    if (state.skills.size) list = list.filter(c => c.skills.some(s => state.skills.has(s)));
    if (state.types.size) list = list.filter(c => state.types.has(c.type || "workshop"));
    if (state.certOnly) list = list.filter(c => c.certification && c.certification.body !== "Practice workshop" && c.certification.body !== "Optional" && c.certification.body !== "Consulting program" && c.certification.body !== "Aligned prep");
    if (state.duration !== "any") list = list.filter(c => hoursBucket(c.durationHours) === state.duration);

    if (state.sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
    else if (state.sort === "duration") list.sort((a, b) => a.durationHours - b.durationHours);
    else if (state.sort === "level") {
      const order = { beginner: 1, intermediate: 2, advanced: 3, expert: 4 };
      list.sort((a, b) => order[a.level] - order[b.level]);
    } else {
      list.sort((a, b) => Number(!!b.trending) - Number(!!a.trending) || a.title.localeCompare(b.title));
    }
    return list;
  }

  function renderSuggestions() {
    const box = $("#suggest");
    const q = state.q.trim().toLowerCase();
    if (!q) { box.classList.remove("open"); box.innerHTML = ""; return; }
    const hits = D.courses.filter(c => (c.title + c.short + c.tags.join(" ")).toLowerCase().includes(q)).slice(0, 6);
    if (!hits.length) { box.classList.remove("open"); box.innerHTML = ""; return; }
    box.innerHTML = hits.map(c => `
      <button type="button" data-open="${c.id}">
        ${c.title}
        <small>${domainName[c.domain]} · ${c.level}</small>
      </button>
    `).join("");
    box.classList.add("open");
  }

  function courseCard(c) {
    const fav = state.favs.has(c.id);
    const compared = state.compare.has(c.id);
    const kind = c.type === "consulting" ? "Consulting" : "Workshop";
    return `
      <article class="card" data-course="${c.id}">
        <div class="card-top">
          <div style="display:flex;flex-wrap:wrap;gap:.35rem;">
            <span class="badge level-${c.level}">${c.level}</span>
            <span class="badge" style="${c.type === "consulting" ? "background:rgba(13,148,136,.14);color:var(--accent-2);" : ""}">${kind}</span>
          </div>
          <button class="icon-btn fav ${fav ? "active" : ""}" data-fav="${c.id}" title="Bookmark" aria-label="Bookmark ${c.title}">★</button>
        </div>
        <h3>${c.title}</h3>
        <p>${c.short}</p>
        <div class="meta-row">
          <span class="meta-pill">${c.durationLabel}</span>
          <span class="meta-pill">${c.delivery[0]}</span>
          <span class="meta-pill">${c.certification?.name || "Workshop"}</span>
        </div>
        <div class="tag-row">${c.tags.slice(0, 3).map(t => `<span class="tag">#${t}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="btn btn-ghost" data-open="${c.id}" type="button">Details</button>
          <label style="display:inline-flex;gap:.35rem;align-items:center;font-size:.8rem;color:var(--muted);font-weight:650;">
            <input type="checkbox" data-compare="${c.id}" ${compared ? "checked" : ""} /> Compare
          </label>
        </div>
      </article>
    `;
  }

  function renderCourses() {
    const list = filteredCourses();
    $("#resultCount").textContent = `${list.length} offering${list.length === 1 ? "" : "s"}`;
    $("#courseGrid").innerHTML = list.length ? list.map(courseCard).join("") : `<div class="empty">No offerings match these filters. Clear filters to reset.</div>`;
    renderRecent();
  }

  function renderRecent() {
    const el = $("#recentList");
    if (!el) return;
    const items = state.recent.map(id => courseById[id]).filter(Boolean);
    el.innerHTML = items.length
      ? items.map(c => `<button class="chip" data-open="${c.id}" type="button">${c.title}</button>`).join("")
      : `<span class="chip">No recently viewed courses yet</span>`;
  }

  function renderDomains() {
    $("#domainCloud").innerHTML = D.domains.map(d => {
      const count = D.courses.filter(c => c.domain === d.id).length;
      return `<button class="chip ${state.domains.has(d.id) ? "active" : ""}" data-domain-chip="${d.id}" type="button">${d.name} (${count})</button>`;
    }).join("");
  }

  function renderTrending() {
    const trending = D.courses.filter(c => c.trending || c.tags.includes("popular")).slice(0, 4);
    $("#trendingGrid").innerHTML = trending.map(courseCard).join("");
  }

  function renderPaths() {
    $("#pathGrid").innerHTML = D.paths.map(p => {
      const steps = p.steps.map(s => {
        const c = courseById[s.courseId];
        return `<div class="roadmap-step"><b>${s.level}</b><span>${c ? c.title : s.courseId}</span></div>`;
      }).join("");
      return `
        <article class="card path-card" data-path="${p.id}">
          <span class="badge">${roleName[p.role] || p.role}</span>
          <h3>${p.name}</h3>
          <p>${p.blurb}</p>
          <div class="roadmap">${steps}</div>
          <div class="meta-row" style="margin-top:.75rem">
            <span class="meta-pill">~${p.hours} hours</span>
            <span class="meta-pill">${p.steps.length} stages</span>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderCapability(roleId = state.activeRole) {
    state.activeRole = roleId;
    $$("#roleList button").forEach(b => b.classList.toggle("active", b.dataset.role === roleId));
    const cap = D.capabilities[roleId];
    const path = D.paths.find(p => p.role === roleId);
    if (!cap) {
      $("#heatmap").innerHTML = `<div class="empty">Select a role to view capability targets.</div>`;
      return;
    }
    const rows = cap.matrix.map(m => {
      const pct = (m.target / 4) * 100;
      return `<div class="heat-row"><span>${competencyName[m.competency] || m.competency}</span><div class="heat-bar" title="Target level ${m.target}/4"><i style="width:${pct}%"></i></div></div>`;
    }).join("");
    const recs = (path?.steps || []).map(s => courseById[s.courseId]).filter(Boolean)
      .map(c => `<li><button data-open="${c.id}" type="button" style="color:var(--accent);font-weight:650;">${c.title}</button></li>`).join("");
    $("#heatmap").innerHTML = `
      <h3 style="margin-bottom:.35rem;">${roleName[roleId]} capability targets</h3>
      <p style="color:var(--muted);font-size:.9rem;margin-bottom:.8rem;">Proficiency heatmap for pathway completion (1 awareness → 4 expert).</p>
      ${rows}
      <div class="cap-meta">
        <div class="panel">
          <h4>Knowledge areas</h4>
          <ul>${cap.knowledge.map(k => `<li>${k}</li>`).join("")}</ul>
        </div>
        <div class="panel">
          <h4>Certification path</h4>
          <ul>${cap.certifications.map(k => `<li>${k}</li>`).join("")}</ul>
        </div>
        <div class="panel" style="grid-column:1/-1">
          <h4>Recommended learning sequence</h4>
          <ul>${recs || "<li>No mapped pathway yet</li>"}</ul>
        </div>
      </div>
    `;
  }

  function renderImpact() {
    const i = D.meta.impact;
    $("#impactStats").innerHTML = `
      <div class="stat-card"><strong>${i.people}</strong><span>professionals trained</span></div>
      <div class="stat-card"><strong>${i.countries}</strong><span>countries represented</span></div>
      <div class="stat-card"><strong>${i.sessions}</strong><span>workshop sessions</span></div>
      <div class="stat-card"><strong>${i.passRate}</strong><span>assessment pass rate</span></div>
    `;
    $("#clientPills").innerHTML = i.clients.map(c => `<span>${c}</span>`).join("");
    $("#geoPills").innerHTML = i.geographies.map(c => `<span>${c}</span>`).join("");
    const skillCounts = {};
    D.courses.forEach(c => c.skills.forEach(s => { skillCounts[s] = (skillCounts[s] || 0) + 1; }));
    const topSkills = Object.entries(skillCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
    $("#skillPills").innerHTML = topSkills.map(([s, n]) => `<span>${s} · ${n}</span>`).join("");
  }

  function renderFilters() {
    $("#domainFilters").innerHTML = D.domains.map(d => `
      <label><input type="checkbox" data-filter="domains" value="${d.id}" ${state.domains.has(d.id) ? "checked" : ""}/> ${d.name}</label>
    `).join("");
    $("#levelFilters").innerHTML = D.levels.map(l => `
      <label><input type="checkbox" data-filter="levels" value="${l.id}" ${state.levels.has(l.id) ? "checked" : ""}/> ${l.name}</label>
    `).join("");
    $("#roleFilters").innerHTML = D.roles.map(r => `
      <label><input type="checkbox" data-filter="roles" value="${r.id}" ${state.roles.has(r.id) ? "checked" : ""}/> ${r.name}</label>
    `).join("");
    $("#skillFilters").innerHTML = D.skills.slice(0, 12).map(s => `
      <label><input type="checkbox" data-filter="skills" value="${s}" ${state.skills.has(s) ? "checked" : ""}/> ${s}</label>
    `).join("");
    $("#typeFilters").innerHTML = `
      <label><input type="checkbox" data-filter="types" value="workshop" ${state.types.has("workshop") ? "checked" : ""}/> Workshop / certification</label>
      <label><input type="checkbox" data-filter="types" value="consulting" ${state.types.has("consulting") ? "checked" : ""}/> Capability consulting</label>
    `;
    $("#roleList").innerHTML = D.roles.map(r => `
      <button type="button" data-role="${r.id}" class="${r.id === state.activeRole ? "active" : ""}">${r.name}</button>
    `).join("");
  }

  function openCourse(id) {
    const c = courseById[id];
    if (!c) return;
    state.recent = [id, ...state.recent.filter(x => x !== id)].slice(0, 8);
    saveRecent();
    renderRecent();

    $("#drawerTitle").textContent = c.title;
    $("#drawerBadges").innerHTML = `
      <span class="badge level-${c.level}">${c.level}</span>
      <span class="badge">${domainName[c.domain]}</span>
      <span class="badge">${c.certification?.name || "Workshop"}</span>
    `;
    const list = (t, arr) => arr?.length ? `<div class="block"><h4>${t}</h4><ul>${arr.map(x => `<li>${x}</li>`).join("")}</ul></div>` : "";
    $("#drawerBody").innerHTML = `
      <div class="block"><p>${c.description}</p></div>
      ${c.note ? `<div class="block"><p><strong>Note:</strong> ${c.note}</p></div>` : ""}
      <div class="block"><h4>Snapshot</h4>
        <div class="meta-row">
          <span class="meta-pill">${c.durationLabel}</span>
          <span class="meta-pill">${c.delivery.join(" / ")}</span>
          <span class="meta-pill">${c.format.join(" · ")}</span>
          ${c.priceNote ? `<span class="meta-pill">${c.priceNote}</span>` : ""}
        </div>
      </div>
      ${list("Learning objectives", c.objectives)}
      ${list("Target audience", c.audience)}
      ${list("Prerequisites", c.prerequisites)}
      ${list("Skills developed", c.skills)}
      ${list("Competencies developed", c.competencies.map(id => competencyName[id] || id))}
      ${list("Tools used", c.tools)}
      ${list("Business outcomes", c.outcomes)}
      ${list("Recommended follow-on", (c.followOn || []).map(id => courseById[id]?.title || id))}
      <div class="block"><h4>Certification alignment</h4>
        <p>${c.certification.body} — <strong>${c.certification.name}</strong> (${c.certification.attempts})</p>
      </div>
      ${c.link ? `<div class="block"><a class="btn btn-ghost" href="${c.link}" target="_blank" rel="noopener">Official program page ↗</a></div>` : ""}
    `;
    $("#drawerCta").href = `mailto:${D.meta.email}?subject=${encodeURIComponent("Enquiry: " + c.title)}`;
    $("#drawer").classList.add("open");
    $("#backdrop").classList.add("open");
    $("#backdrop").hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    $("#drawer").classList.remove("open");
    $("#backdrop").classList.remove("open");
    setTimeout(() => { $("#backdrop").hidden = true; }, 200);
    document.body.style.overflow = "";
  }

  function updateCompareBar() {
    const bar = $("#compareBar");
    const n = state.compare.size;
    if (n >= 1) {
      bar.classList.add("open");
      $("#compareCount").textContent = `${n} selected`;
    } else bar.classList.remove("open");
  }

  function openCompare() {
    const ids = [...state.compare];
    if (ids.length < 2) {
      alert("Select at least 2 courses to compare.");
      return;
    }
    const courses = ids.map(id => courseById[id]).filter(Boolean).slice(0, 3);
    const rows = [
      ["Title", c => c.title],
      ["Level", c => c.level],
      ["Domain", c => domainName[c.domain]],
      ["Duration", c => c.durationLabel],
      ["Delivery", c => c.delivery.join(", ")],
      ["Certification", c => `${c.certification.body} · ${c.certification.name}`],
      ["Skills", c => c.skills.join(", ")],
      ["Follow-on", c => (c.followOn || []).map(id => courseById[id]?.title || id).join(", ") || "—"]
    ];
    $("#compareBody").innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1rem;">
        <h3>Course comparison</h3>
        <button class="icon-btn" id="closeCompare" type="button" aria-label="Close">×</button>
      </div>
      <table class="compare-table">
        <thead><tr><th>Attribute</th>${courses.map(c => `<th>${c.title}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows.map(([label, fn]) => `<tr><th>${label}</th>${courses.map(c => `<td>${fn(c)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    `;
    $("#compareModal").classList.add("open");
    $("#backdrop").classList.add("open");
    $("#backdrop").hidden = false;
    $("#closeCompare").onclick = closeCompare;
  }

  function closeCompare() {
    $("#compareModal").classList.remove("open");
    if (!$("#drawer").classList.contains("open")) {
      $("#backdrop").classList.remove("open");
      setTimeout(() => { $("#backdrop").hidden = true; }, 200);
    }
  }

  function bind() {
    $("#themeToggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
    });
    $("#menuToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
    $$("#navLinks a").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));

    const search = $("#globalSearch");
    search.addEventListener("input", () => {
      state.q = search.value;
      renderSuggestions();
      renderCourses();
    });
    search.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { $("#suggest").classList.remove("open"); }
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-wrap")) $("#suggest").classList.remove("open");
    });

    $("#filterPanel").addEventListener("change", (e) => {
      const t = e.target;
      if (t.matches("[data-filter]")) {
        const key = t.dataset.filter;
        if (t.checked) state[key].add(t.value);
        else state[key].delete(t.value);
        renderCourses();
        renderDomains();
      }
      if (t.id === "certOnly") { state.certOnly = t.checked; renderCourses(); }
      if (t.id === "durationFilter") { state.duration = t.value; renderCourses(); }
      if (t.id === "sortFilter") { state.sort = t.value; renderCourses(); }
    });

    $("#clearFilters").addEventListener("click", () => {
      state.domains.clear(); state.levels.clear(); state.roles.clear(); state.skills.clear(); state.types.clear();
      state.certOnly = false; state.duration = "any"; state.q = "";
      $("#globalSearch").value = "";
      $("#certOnly").checked = false;
      $("#durationFilter").value = "any";
      renderFilters(); renderDomains(); renderCourses(); renderSuggestions();
    });

    document.body.addEventListener("click", (e) => {
      const openBtn = e.target.closest("[data-open]");
      if (openBtn) { e.preventDefault(); openCourse(openBtn.dataset.open); $("#suggest").classList.remove("open"); return; }

      const favBtn = e.target.closest("[data-fav]");
      if (favBtn) {
        const id = favBtn.dataset.fav;
        if (state.favs.has(id)) state.favs.delete(id); else state.favs.add(id);
        saveFavs();
        renderCourses();
        renderTrending();
        return;
      }

      const domainChip = e.target.closest("[data-domain-chip]");
      if (domainChip) {
        const id = domainChip.dataset.domainChip;
        if (state.domains.has(id)) state.domains.delete(id); else state.domains.add(id);
        renderFilters(); renderDomains(); renderCourses();
        document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const roleBtn = e.target.closest("#roleList [data-role]");
      if (roleBtn) { renderCapability(roleBtn.dataset.role); return; }
    });

    document.body.addEventListener("change", (e) => {
      const cmp = e.target.closest("[data-compare]");
      if (!cmp) return;
      const id = cmp.dataset.compare;
      if (cmp.checked) {
        if (state.compare.size >= 3) {
          cmp.checked = false;
          alert("Compare up to 3 courses at a time.");
          return;
        }
        state.compare.add(id);
      } else state.compare.delete(id);
      updateCompareBar();
    });

    $("#drawerClose").addEventListener("click", closeDrawer);
    $("#backdrop").addEventListener("click", () => { closeDrawer(); closeCompare(); });
    $("#compareOpen").addEventListener("click", openCompare);
    $("#compareClear").addEventListener("click", () => {
      state.compare.clear();
      updateCompareBar();
      renderCourses();
      renderTrending();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeDrawer(); closeCompare(); $("#suggest").classList.remove("open"); }
    });

    const toTop = $("#toTop");
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 500);
      const sections = ["home", "catalogue", "paths", "capabilities", "impact", "trainer"];
      let active = "home";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) active = id;
      });
      $$(".nav-links a, .quick-jump a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${active}`);
      });
    });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function init() {
    applyTheme();
    $("#year").textContent = new Date().getFullYear();
    $("#ownerName").textContent = D.meta.owner;
    $("#mailLink").href = `mailto:${D.meta.email}`;
    $("#mailLink").textContent = D.meta.email;
    $("#profileTrainer").href = D.meta.profiles.trainer;
    $("#profileScrum").href = D.meta.profiles.scrum;
    $("#profileKanban").href = D.meta.profiles.kanban;
    $("#profileLinkedin").href = D.meta.profiles.linkedin;

    renderFilters();
    renderDomains();
    renderCourses();
    renderTrending();
    renderPaths();
    renderCapability();
    renderImpact();
    bind();

    const hash = location.hash.replace("#", "");
    if (hash && document.getElementById(hash)) {
      setTimeout(() => document.getElementById(hash).scrollIntoView(), 50);
    }
  }

  init();
})();
