// ============================================================
// CONFIGURATION DES PAGES
// Pour ajouter une page : dupliquer un bloc et modifier
// Brain vault : Mika Brain/05-Écriture/ — writing-style.md pour le style
// ============================================================

const PAGES = {
  aube: {
    title: "Depuis",
    date: "5 avril 2026",
    text: `Tu m'avais dit que je ne sortais pas assez.

C'était vrai.

Je suis sorti.`,
    audio: {
      src: "https://github.com/inforniacontact-art/Pepite/raw/refs/heads/main/assets/Chill%20vibes.mp3",
      vol: 0.4,
      title: "Chill Vibes",
      link: "https://soundcloud.com/mickawolf/chill-vibes",
    },
    effect: "rays",
    instant: true,
    theme: {
      bg: "#1a1410, #2a2018, #3a3020",
      text: "#f5f1ed",
      accent: "#c9956e",
      card: "rgba(26, 20, 16, 0.8)",
    },
    css: `
      body {
        background: linear-gradient(135deg, #1a1410 0%, #2a2018 50%, #3a3020 100%) !important;
      }

      #title {
        font-family: "Playfair Display", serif;
        font-weight: 400;
        letter-spacing: 0.06em;
        font-size: clamp(2.5rem, 7vw, 4rem);
        color: #c9956e;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        margin-bottom: 0.6rem;
      }

      .date {
        color: rgba(245, 241, 237, 0.55);
        opacity: 1;
      }

      .poem-container {
        background: rgba(26, 20, 16, 0.7);
        border-color: rgba(201, 149, 110, 0.1);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(6px);
      }

      .poem {
        font-family: "Lora", serif;
        font-size: clamp(1rem, 2.1vw, 1.25rem);
        line-height: 1.9;
        letter-spacing: 0.01em;
        color: #f5f1ed;
      }

      .btn {
        background: transparent;
        border-color: rgba(201, 149, 110, 0.25);
        color: #f5f1ed;
      }

      .btn:hover {
        background: #c9956e;
        border-color: #c9956e;
        color: #1a1410;
      }

      .navbar {
        background: rgba(26, 20, 16, 0.9);
        border-bottom-color: rgba(201, 149, 110, 0.1);
      }

      .cursor { background: #c9956e; }
    `,
  },
  annee2026: {
    title: "2026",
    date: "15 Février 2026",
    instant: true,
    text: `Une nouvelle année commence.

J'espère que la relation que tu as choisie te va.

2025 conservera ta trace dans ma mémoire.
Ce regard et ce sourire, être choisi, c'était agréable.

Et c'est avec ce sentiment que j'avance depuis.
Un sentiment qui donne envie de trouver, de s'investir, de construire.

Cela a élevé mes exigences, envers l'autre comme de moi même.

Merci pour cette rencontre

Je te souhaite une année à la hauteur de tes ambitions.`,
    audio: {
      src: "https://github.com/inforniacontact-art/Pepite/raw/refs/heads/main/assets/2026.mp3",
      vol: 0.4,
      title: "2026",
      link: "https://soundcloud.com/mickawolf/first-of-2026",
    },
    effect: "none",
    speed: 42,
    theme: {
      bg: "#0f1419, #151d26, #1a242f",
      text: "#e6edf3",
      accent: "#4a90e2",
      card: "rgba(15, 20, 25, 0.9)",
    },
    css: `
      body {
        font-family: "Lora", serif;
        letter-spacing: 0em;
      }
      
      #title {
        font-family: "Playfair Display", serif;
        font-weight: 400;
        font-size: clamp(2.4rem, 6vw, 3.8rem);
        letter-spacing: 0.06em;
        margin-bottom: 0.8rem;
      }
      
      .date {
        font-family: "Lora", serif;
        color: #8b949e;
        font-size: 0.9rem;
        font-weight: 400;
        opacity: 1;
        margin-bottom: 2.5rem;
      }
      
      .poem-container {
        border: 1px solid rgba(74, 144, 226, 0.12);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(74, 144, 226, 0.06);
        position: relative;
      }
      
      .poem {
        font-family: "Lora", serif;
        font-size: clamp(1rem, 2vw, 1.2rem);
        line-height: 1.85;
        font-weight: 400;
        letter-spacing: 0em;
        color: #e6edf3;
      }
      
      .btn {
        font-family: "Lora", serif;
        background: transparent;
        border: 1px solid rgba(74, 144, 226, 0.2);
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        transition: all 0.3s;
      }
      
      .btn:hover {
        background: #4a90e2;
        border-color: #4a90e2;
        color: white;
        transform: translateY(-2px);
      }
      
      .cursor {
        background: #4a90e2;
        opacity: 0.9;
      }
      
      .writing-line {
        animation: fadeIn 0.2s ease-in forwards;
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(2px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .navbar {
        background: rgba(15, 20, 25, 0.9);
        border-bottom: 1px solid rgba(74, 144, 226, 0.08);
      }
      
      .nav-link {
        font-family: "Lora", serif;
        font-weight: 500;
        letter-spacing: 0.03em;
      }
      
      @media (prefers-reduced-motion: reduce) {
        .writing-line,
        .cursor,
        .btn {
          animation: none;
          transition: none;
        }
      }
    `,
  },
  message: {
    title: "Message",
    date: "11 octobre 2025",
    text: `Une nouvelle semaine est passée
Une de plus où j'ai envie de te remercier
Pour nos vies, c'était important de croiser nos chemin
J'ai vu la perle que tu as vue en moi,
J'espère que tu vois la pépite que j'ai vue en toi

Je perpétue ma vibe authentique,
J'ai des potes qui ne voient pas à quel point ils sont géniaux,
Je les force avec 2/3 coups de batte dans la figure histoire qu'ils s'en rendent compte
De la même manière que j'avais envie de me mettre des giffles et toi aussi.

Je ne me reconnais plus, je suis devenu un homme qui arrive à s'intimider
Tel un gars qui avait de longs cheveux et une grosse barbe qui finit par se les raser,
Qui découvre son visage, son crâne à la fois est un mix entre un militaire et un moine bouddhiste

Les gens se demandent quelle fille j'ai dans ma vie pour changer à ce point
Ils ne se douteraient jamais que la fille en question a été connue de manière très éphémère
Qu'elle n'est plus là depuis un bon moment

Je suis un peu dégoûté parce que je ne pourrai pas t'aider en retour
J'ai peur que tu deviennes cette fille que je ne connais que trop bien
Ces filles dont je n'ai jamais été attiré, que je n'ai jamais voulu avoir ne serait-ce qu'un seul instant dans ma vie
Je me suis aperçu que je n'ai cherché et touché que des filles qui cherchaient une relation
Comme n'importe quel homme j'ai fantasmé sur les coups d'un soir, vu que c'est la norme de la société d'avoir beaucoup d'expérience avec plein de filles
Et pourtant je n'ai jamais réussi à coucher totalement avec, des embrassades, des préliminaires tout au plus, mais impossible de coucher avec une femme que je n'aime pas, aussi belle soit-elle[...]

Tu as raison, je suis dragué au boulot, pas que d'ailleurs, mais je ne m'en rendais pas compte
Après ce sont des femmes fiancées, mariées, en couple, des femmes intègre, droite et sérieuse comme toi hein ?

La vie est injuste, tu me dis que tu es bien entourée, mais je n'y crois pas
J'ai la certitude que ce qui a saboté notre rencontre c'est ce qu'on t'a mis dans la tête
J'assume ma responsabilité d'avoir aimé fort, authentiquement
Et tu as très bien fait de mettre un terme à tout ça d'ailleurs,
j'allais tout sauf devenir qui je suis devenu et en train de devenir, impossible

Mais en même temps que tu mets un terme à tout ça, j'ai eu un goût amer pour ton avenir:
Toi qui me disais vouloir te marier, avoir des enfants, voir tes copines déjà mariées...
Ça implique un grand sacrifice, une grande discipline, celle avec laquelle on t'a éduquée,
Mais celle qui je pense était en train de s'effriter

La première femme dont j'ai été amoureux est en train de vivre ça,
Et toi, la deuxième femme dont je suis tombé amoureux, tu vas probablement connaître la même chose.
Mais pas tout de suite évidemment,
Pendant plusieurs années tu vas t'amuser, tu vas profiter et vivre de grandes choses, mais potentiellement tu vas sacrifier 50 ans derrière
J'ai hâte de voir dans 10, 15 ans que j'avais tort
J'ai hâte de voir que tu es restée une belle femme et devenue une maman incroyable !

Et puis, je devrais m'en foutre de tout ça, tu es bien entourée après tout.

J'explore le monde extérieur depuis, il me dégoute et me fascine.
"Tu ne sors pas assez" me dis-tu.
Et a raison j'ai passé beaucoup de temps enfermé chez moi, à lire, écrire, apprendre, réfléchir, méditer, faire du sport.
C'est beaucoup plus sain que de sortir en boîte, boire, fumer, se droguer, baiser.
Beaucoup plus sain que de te retrouver à m'aimer tout en projetant ce que les hommes du monde extérieur font habituellement.

Mais tu ne savais comment j'allais agir en tant qu'homme qui sort, qui a des options,
Tu craignais certainement que je fasse comme ton premier, beaucoup donner et puis, partir, voir ailleurs...
J'ai toujours eu le choix de faire ça.
Mais mes priorités restent les mêmes:
Finances, projets, carrière, sécurité, santé,
Les relations passent en dernier.
Tu veux m'accompagner ? Viens. Tu veux pas ? Pars, c'est ouvert.
Ca a toujours été ma philosophie, ma manière de voir les choses.
Et j'ai appris que c'était à l'exception de quand je tombe amoureux,
le temps de réguler mes émotions.

C'est peut-être celui-là le vrai message que j'avais envie de transmettre
Continue de rayonner
Peace`,
    audio: { src: "", vol: 0, title: "", link: "#" },
    effect: "none",
    speed: 50,
    theme: {
      bg: "#f8f7f5, #f0eeeb, #e8e5e0",
      text: "#3a3a3a",
      accent: "#6b5b49",
      card: "rgba(255,255,255,0.97)",
    },
  },
  bourgeon: {
    title: "Bourgeon écarlate",
    date: "2 septembre 2025",
    text: `Tu m'as aidé à tuer le garçon en émoi
Une pièce majeure, introuvable autrement
Puis éveillé l'être qui sommeillait chez moi
Et t'ai offert l'ancien et son souffle expirant

Tout ce que j'ai fait fut d'un élan assumé
Je n'ai point regardé ce que ton cœur voulait.
J'ai désiré aimer, m'améliorer, offrir
Et consenti aux pleurs, aux souffrances, à mourir

J'ai saisi ces instants comme une élévation
Et choisi sciemment, de vivre l'enseignement
Cela conduit maintenant à sa séparation
J'ai préféré l'occire, goûter le saignement

C'est d'une vivacité et positivité
Que j'avance et renais au rythme du présent
Je poursuis mon chemin d'un sourire affiché
Et m'abreuve sans fin du cadavre d'antan`,
    audio: {
      src: "https://github.com/inforniacontact-art/Pepite/raw/main/assets/Morceau%20sans%20titre.mp3",
      vol: 0.4,
      title: "Musique d'ambiance",
      link: "#",
    },
    effect: "none",
    speed: 60,
    theme: {
      bg: "#2a1a17, #3a2a27, #4a3a37",
      text: "#e8d4d4",
      accent: "#a85656",
      card: "rgba(42, 26, 23, 0.85)",
    },
    css: `
      #title {
        font-family: "Playfair Display", serif;
        text-shadow: 0 2px 8px rgba(168, 86, 86, 0.2);
      }
      
      .poem {
        color: #e8d4d4;
      }
      
      .btn {
        border-color: rgba(168, 86, 86, 0.2);
      }
      
      .btn:hover {
        background: #a85656;
        color: white;
      }
    `,
  },
  pepite: {
    title: "Pépite",
    date: "26 août 2025",
    text: `Pépite, toi la fille de passage
Rayonnante, douce, gentille et sage
Dont la splendeur contamina les coeurs
Avec intelligence et vie en couleurs

Munis de talons, ta collection rêvée,
C'est sur la piste que tu t'en vas briller 
Tu impressionnes tant par ton aura et ta dance,
Que Grace Kelly épierai ton élégance.

Tes petites attentions sont de précieux cadeaux,
Si bien que tout les maux se dissipent aussitôt,
Ta créativité et tes idées débordantes
Rendent chaque histoire unique et marquante.

Autour d'un mariage et d'un amour sincère
Trois Quatre enfants verront la lumière,
Muni de ta jeunesse, ton avenir est clair
Pépite, sera une mère extraordinaire.`,
    audio: {
      src: "https://github.com/inforniacontact-art/Pepite/raw/main/assets/21%202_4(1).mp3",
      vol: 0.15,
      title: "Puck Road",
      link: "https://soundcloud.com/mickawolf/puck-road",
    },
    effect: "particles",
    speed: 50,
    theme: {
      bg: "#f5e6ed, #f0d9e8, #ead9e8",
      text: "#5a2d5a",
      accent: "#d9669f",
      card: "rgba(245, 230, 237, 0.92)",
    },
  },
  souvenir: {
    title: "Souvenir d'une vie",
    date: "25 août 2025",
    text: `Je ne suis pas intéressé, mais intéressé par celle qui s'intéresse.
Au lieu de m'attirer physiquement, tu m'as touché intellectuellement.
J'ai vite perdu en clarté, mon cerveau s'est enlisé,
Les émotions m'ont frappé, mon cœur fut kidnappé.

La personne que j'étais se retrouve en captivité,
Incapable de proposer, trop stimulé pour discuter.
J'en perds mon authenticité, je suis le pantin de ma chimie,
Je deviens vite un larbin, piloté par mes circuits.

J'entends tes attentes, j'écoute ce que tu dis, 
Mais rude est la pente de ce que tu m'as instruit.
J'échoue et trébuche, tel un apprenti,
Et comme un jeune pruche, je pousse et grandis.

Une sortie cinéma, voir un film miteux,
Une promenade nocturne, croiser les nuiteux.
Un arrêt près d'un bar, goûter un spiritueux,
Une invite au resto, dans un mood amoureux.

Te ramener ? Je préfère attendre, pas trop me presser.
T'embrasser ? Pourquoi pas, mais tu es alcoolisée.
T'inviter ? Perturbant, c'est mon intimité.
Coucher ? Tentant, mais je ne veux profiter.

D'une balade arrosée, nous nous sommes rapprochés,
D'une belle soirée, nous nous sommes embrassés.
D'invitations improvisées, nous nous sommes câlinés,
D'une nuit agitée, nous nous sommes désirés.

Main dans les cheveux, je t'ai caressée,
Puis t'ai embrassée, t'ai vu sourire et briller.
D'un désir intense, tes yeux à demi fermés,
Dans le feu du désir, je t'ai vue t'abandonner.

De ces soirées inopinées,
Je n'oublierai l'amour porté. 
De ces moments éphémères,
Conserverai ta lumière

Je t'aime sans m'attacher,  
Je souffre sans te blâmer.
Jaloux sans te posséder,  
Frustré sans regretter.  

Pour toi toujours mon cœur battra,  
Même si je sais qu'on ne se reverra.  

Je t'aime. Adieu.`,
    audio: {
      src: "https://github.com/inforniacontact-art/Pepite/raw/refs/heads/main/assets/Travel%20Island%20v2.mp3",
      vol: 0.5,
      title: "Travel Island",
      link: "https://soundcloud.com/mickawolf/travel-island",
    },
    effect: "particles",
    speed: 50,
    theme: {
      bg: "#e6f2ff, #d9ecff, #cce6ff",
      text: "#1a4d80",
      accent: "#2d7ac4",
      card: "rgba(230, 242, 255, 0.92)",
    },
  },
};

// ============================================================
// APPLICATION
// ============================================================

class App {
  constructor() {
    this.$ = {
      nav: document.getElementById("nav"),
      title: document.getElementById("title"),
      date: document.getElementById("date"),
      poem: document.getElementById("poem"),
      start: document.getElementById("start"),
      play: document.getElementById("play"),
      pause: document.getElementById("pause"),
      resume: document.getElementById("resume"),
      skip: document.getElementById("skip"),
      audio: document.getElementById("audio"),
      toggle: document.getElementById("audio-toggle"),
      status: document.getElementById("audio-status"),
      volume: document.getElementById("volume"),
      theme: document.getElementById("theme"),
      particles: document.getElementById("particles"),
      musicTitle: document.getElementById("music-title"),
      musicLink: document.getElementById("music-link"),
    };

    this.page = null;
    this.idx = 0;
    this.playing = false;
    this.timeout = null;
    this.intervals = [];
    this.container = document.querySelector(".container");
    this.pageGen = 0;

    this.cursor = document.createElement("span");
    this.cursor.className = "cursor";

    this.initNav();
    this.initEvents();
    this.load();

    window.addEventListener("hashchange", () => this.load());
  }

  initNav() {
    Object.keys(PAGES).forEach((id) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.className = "nav-link";
      a.dataset.page = id;
      a.textContent = PAGES[id].title;
      li.appendChild(a);
      this.$.nav.appendChild(li);
    });
  }

  initEvents() {
    this.$.start.onclick = () => this.start();
    this.$.play.onclick = () => this.play();
    this.$.pause.onclick = () => this.pause();
    this.$.resume.onclick = () => this.resume();
    this.$.skip.onclick = () => this.skip();
    this.$.toggle.onclick = () => this.toggleAudio();
    this.$.volume.oninput = (e) =>
      (this.$.audio.volume = parseFloat(e.target.value));
  }

  load() {
    const id = location.hash.slice(1) || "annee2026";
    const page = PAGES[id];
    if (!page || page === this.page) return;

    this.cleanup();
    this.page = page;

    // Nav active state
    document.querySelectorAll(".nav-link").forEach((a) => {
      a.classList.toggle("active", a.dataset.page === id);
    });

    // Page transition
    if (this.container) {
      this.container.style.animation = "none";
      void this.container.offsetWidth;
      this.container.style.animation = "";
    }

    // UI
    this.$.title.textContent = page.title;
    this.$.date.textContent = page.date;
    this.$.musicTitle.textContent = page.audio.title;
    this.$.musicLink.href = page.audio.link;
    document.title = page.title;

    // Audio
    this.$.audio.querySelector("source").src = page.audio.src;
    this.$.audio.load();
    this.$.audio.volume = page.audio.vol;
    this.$.volume.value = page.audio.vol;

    // Thème
    const [bg1, bg2, bg3] = page.theme.bg.split(",").map((s) => s.trim());
    this.$.theme.textContent = `
      :root {
        --bg-primary: ${bg1};
        --bg-secondary: ${bg2 || bg1};
        --bg-accent: ${bg3 || bg2 || bg1};
        --text-primary: ${page.theme.text};
        --accent: ${page.theme.accent};
        --card-bg: ${page.theme.card};
      }
      body { background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-accent) 100%); }
      ${page.css || ""}
    `;

    // Effets
    this.applyEffect(page.effect);

    // Reset
    const controls = document.querySelector(".controls");
    if (page.instant) {
      if (controls) controls.hidden = true;
      this.showInstant();
    } else {
      if (controls) controls.hidden = false;
      this.$.poem.appendChild(this.cursor);
      this.$.start.hidden = false;
      this.$.play.hidden = true;
      this.$.pause.hidden = true;
      this.$.resume.hidden = true;
    }

    // Autoplay audio on page entry
    if (page.audio.src) {
      const gen = this.pageGen;
      this.$.audio.addEventListener("canplay", () => {
        if (this.pageGen === gen) this.startAudio();
      }, { once: true });
    }
  }

  start() {
    this.$.start.hidden = true;
    this.$.pause.hidden = false;
    this.play();
    if (this.$.audio.paused) this.startAudio();
  }

  play() {
    if (this.idx >= this.page.text.length) this.reset();
    this.playing = true;
    this.$.play.hidden = true;
    this.$.pause.hidden = false;
    this.$.resume.hidden = true;
    this.type();
  }

  pause() {
    this.playing = false;
    clearTimeout(this.timeout);
    this.$.pause.hidden = true;
    this.$.resume.hidden = false;
  }

  resume() {
    this.playing = true;
    this.$.resume.hidden = true;
    this.$.pause.hidden = false;
    this.type();
  }

  skip() {
    this.playing = false;
    clearTimeout(this.timeout);
    this.$.poem.innerHTML = "";
    this.page.text.split("\n").forEach((line, i) => {
      if (i > 0) this.$.poem.appendChild(document.createTextNode("\n"));
      const s = document.createElement("span");
      s.textContent = line;
      s.className = "writing-line";
      s.style.animationDelay = `${i * 0.1}s`;
      this.$.poem.appendChild(s);
    });
    this.$.poem.appendChild(this.cursor);
    this.idx = this.page.text.length;
    this.$.play.hidden = false;
    this.$.pause.hidden = true;
    this.$.resume.hidden = true;
  }

  reset() {
    this.playing = false;
    clearTimeout(this.timeout);
    this.idx = 0;
    this.$.poem.innerHTML = "";
    this.$.poem.appendChild(this.cursor);
  }

  type() {
    if (!this.playing || this.idx >= this.page.text.length) return;

    const c = this.page.text[this.idx];
    const p = this.idx > 0 ? this.page.text[this.idx - 1] : "";

    const s = document.createElement("span");
    s.textContent = c;
    s.className = "writing-line";
    this.$.poem.insertBefore(s, this.cursor);

    if (c === "\n" || this.idx % 50 === 0) {
      setTimeout(
        () =>
          this.cursor.scrollIntoView({ behavior: "smooth", block: "center" }),
        100
      );
    }

    this.idx++;
    const delay = this.getDelay(c, p);
    this.timeout = setTimeout(() => this.type(), delay);
  }

  getDelay(c, p) {
    const base = this.page.speed;
    if (c === "\n") return p === "\n" ? 1200 : 400;
    if (c === " ") return base * 0.7;
    if (",;:".includes(c)) return 200;
    if (".!?".includes(c)) return 600;
    return base;
  }

  async startAudio() {
    const gen = this.pageGen;
    try {
      this.$.audio.muted = true;
      await this.$.audio.play();
      setTimeout(() => {
        if (this.pageGen !== gen) return;
        this.$.audio.muted = false;
        this.updateAudio(true, "En lecture");
      }, 100);
    } catch {
      if (this.pageGen !== gen) return;
      this.$.audio.muted = false;
      try {
        await this.$.audio.play();
        if (this.pageGen !== gen) return;
        this.updateAudio(true, "En lecture");
      } catch {
        if (this.pageGen !== gen) return;
        this.updateAudio(false, "Activer");
      }
    }
  }

  async toggleAudio() {
    if (this.$.audio.paused) {
      try {
        await this.$.audio.play();
        this.updateAudio(true, "En lecture");
      } catch {
        this.updateAudio(false, "Erreur");
      }
    } else {
      this.$.audio.pause();
      this.updateAudio(false, "En pause");
    }
  }

  updateAudio(playing, text) {
    this.$.toggle.textContent = playing ? "🔊" : "🔇";
    this.$.status.textContent = text;
  }

  applyEffect(type) {
    this.$.particles.innerHTML = "";
    this.intervals.forEach(clearInterval);
    this.intervals = [];

    if (type === "rays") {
      const count = 14;
      for (let i = 0; i < count; i++) {
        const r = document.createElement("div");
        r.className = "sun-ray";
        const angle = -65 + (130 / (count - 1)) * i;
        const w = 1 + Math.random() * 2;
        r.style.width = `${w}px`;
        r.style.marginLeft = `${-w / 2}px`;
        r.style.height = `${55 + Math.random() * 35}vh`;
        r.style.transform = `rotate(${angle}deg)`;
        r.style.animationDelay = `${(i * 0.55).toFixed(1)}s`;
        r.style.animationDuration = `${6 + Math.random() * 5}s`;
        this.$.particles.appendChild(r);
      }
    } else if (type === "particles") {
      for (let i = 0; i < 8; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = `${Math.random() * 100}%`;
        p.style.animationDelay = `${Math.random() * 12}s`;
        p.style.animationDuration = `${8 + Math.random() * 8}s`;
        this.$.particles.appendChild(p);
      }
    }
  }

  showInstant() {
    this.$.poem.innerHTML = "";
    const lines = this.page.text.split("\n");
    lines.forEach((line, i) => {
      if (i > 0) this.$.poem.appendChild(document.createTextNode("\n"));
      const s = document.createElement("span");
      s.textContent = line;
      s.className = "instant-line";
      s.style.animationDelay = `${i * 0.15}s`;
      this.$.poem.appendChild(s);
    });
    this.idx = this.page.text.length;
  }

  cleanup() {
    this.pageGen++;
    this.playing = false;
    clearTimeout(this.timeout);
    this.intervals.forEach(clearInterval);
    this.intervals = [];
    this.idx = 0;
    this.$.poem.innerHTML = "";
    this.$.particles.innerHTML = "";
    this.$.audio.pause();
    this.$.audio.currentTime = 0;
    const controls = document.querySelector(".controls");
    if (controls) controls.hidden = false;
  }
}

// ============================================================
// DÉMARRAGE
// ============================================================

new App();
