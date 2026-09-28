// Static demo: all content below is pre-written sample data. No API calls.
const DATA = {
  "Photosynthesis": {
    explain: "Photosynthesis is how plants turn sunlight, water and carbon dioxide into glucose (food) and oxygen. It happens in chloroplasts, where chlorophyll absorbs light. Light reactions capture energy; the Calvin cycle uses it to build sugar.",
    summary: ["Plants make food using sunlight, water and CO2.", "Chlorophyll in chloroplasts absorbs light.", "Products: glucose and oxygen."],
    quiz: [
      { q: "Which gas do plants take in for photosynthesis?", o: ["Oxygen", "Carbon dioxide", "Nitrogen"], a: 1 },
      { q: "Where does photosynthesis take place?", o: ["Mitochondria", "Nucleus", "Chloroplasts"], a: 2 }
    ]
  },
  "Newton's Laws of Motion": {
    explain: "First law: an object stays at rest or in uniform motion unless a net force acts on it. Second law: force equals mass times acceleration (F = ma). Third law: every action has an equal and opposite reaction.",
    summary: ["Law 1: inertia.", "Law 2: F = ma.", "Law 3: action and reaction are equal and opposite."],
    quiz: [
      { q: "Which law is described by F = ma?", o: ["First", "Second", "Third"], a: 1 },
      { q: "A rocket pushes gas down and moves up. Which law?", o: ["Third", "First", "Second"], a: 0 }
    ]
  },
  "Python Lists": {
    explain: "A list is an ordered, changeable collection written with square brackets, e.g. nums = [1, 2, 3]. You can index (nums[0]), slice (nums[1:]), append items and loop over them with for.",
    summary: ["Lists are ordered and mutable.", "Use [] to create, append() to add.", "Indexing starts at 0."],
    quiz: [
      { q: "What is nums[0] for nums = [5, 6, 7]?", o: ["5", "6", "7"], a: 0 },
      { q: "Which method adds an item to the end?", o: ["push()", "append()", "add()"], a: 1 }
    ]
  }
};

const topicEl = document.getElementById("topic");
const panel = document.getElementById("panel");
let tab = "explain";

Object.keys(DATA).forEach(t => topicEl.add(new Option(t, t)));
topicEl.addEventListener("change", render);
document.querySelectorAll(".tabs button").forEach(b =>
  b.addEventListener("click", () => {
    tab = b.dataset.tab;
    document.querySelectorAll(".tabs button").forEach(x => x.classList.toggle("active", x === b));
    render();
  })
);

function render() {
  const d = DATA[topicEl.value];
  panel.innerHTML = "";
  if (tab === "explain") {
    panel.textContent = d.explain;
  } else if (tab === "summary") {
    const ul = document.createElement("ul");
    d.summary.forEach(s => { const li = document.createElement("li"); li.textContent = s; ul.appendChild(li); });
    panel.appendChild(ul);
  } else {
    d.quiz.forEach(item => {
      const box = document.createElement("div");
      box.className = "q";
      const p = document.createElement("strong");
      p.textContent = item.q;
      box.appendChild(p);
      item.o.forEach((text, i) => {
        const btn = document.createElement("button");
        btn.className = "opt";
        btn.textContent = text;
        btn.addEventListener("click", () => {
          box.querySelectorAll(".opt").forEach(x => x.classList.remove("right", "wrong"));
          btn.classList.add(i === item.a ? "right" : "wrong");
        });
        box.appendChild(btn);
      });
      panel.appendChild(box);
    });
  }
}
render();
