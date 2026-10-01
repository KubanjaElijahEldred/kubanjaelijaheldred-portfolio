/* ==========================================================================
   KEE Assistant — fully offline portfolio assistant
   No API key, no network calls, no server. Keyword + intent scoring over a
   local knowledge base about Kubanja Elijah Eldred and his work.
   ========================================================================== */
(function () {
  'use strict';

  var PROFILE = {
    name: 'Kubanja Elijah Eldred',
    short: 'Elijah',
    roles: [
      'Managing Director at K.E.E Technologies Ltd',
      'Software Engineering Student at Bugema University',
      'Full-Stack & AI Developer'
    ],
    email: 'kubanjaelijah2037@gmail.com',
    phone: '+256700290157',
    location: 'Uganda',
    site: 'https://kee-technologies.vercel.app/',
    links: [
      { label: 'GitHub', url: 'https://github.com/KubanjaElijahEldred' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/elijah-kubanja-800b53302' },
      { label: 'K.E.E Technologies', url: 'https://kee-technologies.vercel.app/' }
    ]
  };

  var TEAM = [
    'Mboira Isaac Newton',
    'Demaga Lawrence',
    'Akram Ssengooba'
  ];

  var SKILLS = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'Kotlin', 'Dart', 'SQL', 'C++'],
    frontend: ['React', 'Next.js', 'React Native', 'Expo', 'Materialize', 'Bootstrap', 'Tailwind'],
    backend: ['Node.js', 'Express', 'NestJS', 'Django', 'Django REST', 'REST APIs', 'WebSockets'],
    data: ['PostgreSQL', 'PostGIS', 'MySQL', 'MongoDB', 'Redis', 'Prisma', 'SQLite'],
    ai: ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Keras', 'NLP', 'Chatbots', 'Computer Vision', 'scikit-learn', 'Pandas', 'NumPy'],
    infra: ['Docker', 'Docker Compose', 'CI/CD', 'Git', 'GitHub Actions', 'Vercel', 'Netlify', 'Linux', 'Celery'],
    mobile: ['React Native', 'Expo', 'Android', 'Flutter', 'Kotlin']
  };

  /* Live projects mirrored from the K.E.E site */
  var PROJECTS = [
    { t: 'PlayIt — Movie Streaming', d: 'A Flutter movie discovery app built on TMDB — a home page of Recent releases and seven genre rows (Action, Adventure, Sci-Fi, Drama, Horror, Thriller, Series), search, bookmarks and an offline library with downloads.', u: 'https://play-it-movies.vercel.app/', g: 'https://github.com/KubanjaElijahEldred/Movie-App', k: ['playit', 'play it', 'movie', 'movies', 'streaming', 'tmdb', 'flutter', 'film', 'watchlist', 'dart'] },
    { t: 'ShopNet E-Commerce Platform', d: 'A modern e-commerce platform for browsing, carting and checkout — built for speed and mobile-first shopping.', u: 'https://shop-net-steel.vercel.app/', g: 'https://github.com/KubanjaElijahEldred/The-ShopNet', k: ['shop', 'ecommerce', 'e-commerce', 'shopnet', 'store', 'cart', 'retail'] },
    { t: 'Muwas Distilling Platform', d: 'A certified distilling company platform showcasing premium spirits, brand story and product catalogue.', u: 'https://muwas.vercel.app/', g: 'https://github.com/Demagalawrence/muwas', k: ['muwas', 'distilling', 'spirit', 'drinks', 'liquor', 'brand'] },
    { t: 'Chill Talk Podcast Platform', d: 'A podcast platform for discovering, streaming and sharing episodes — a clean, immersive listening experience.', u: 'https://chill-talk-podcast.vercel.app/', g: 'https://github.com/KubanjaElijahEldred/chill-talk-podcast', k: ['podcast', 'chill', 'audio', 'media', 'streaming', 'listen'] },
    { t: 'Lanegen Platform', d: 'Lane General Medical Center feedback and digital services platform for modern healthcare communication.', u: 'https://lanegen-o8ij.vercel.app/', g: 'https://github.com/KubanjaElijahEldred/lane-general-medical-center', k: ['lanegen', 'medical', 'health', 'hospital', 'clinic', 'patient', 'lane'] },
    { t: 'MyEffects Hub', d: 'A creative effects hub with rich visual effects, animations and interactive components engineered for wow.', u: 'https://e-vzone-efects-hub-project.vercel.app/', g: 'https://github.com/KubanjaElijahEldred/EVzone-Efects-Hub1', k: ['myeffects', 'effects', 'hub', 'animation', 'creative', 'visual'] },
    { t: 'Adiray Books — Online Bookstore', d: "A modern online bookstore for South Sudan's leading retailer — browsing, wishlists and multi-currency checkout.", u: 'https://www.adiraybooks.com', g: '', k: ['books', 'bookstore', 'adiray', 'reading', 'library'] },
    { t: 'Tagline (ConnectQR)', d: 'Turns your business card into a QR code — WhatsApp, public profile or offline peer-to-peer. Expo React Native app with a NestJS + PostgreSQL API.', u: '', g: 'https://github.com/Demagalawrence/Tagline', k: ['tagline', 'qr', 'connectqr', 'business card', 'expo', 'badge'] },
    { t: 'WiFi Hotspot Portal', d: 'A high-performance full-stack WiFi captive portal that authenticates guests — Next.js 15 frontend with NestJS + Prisma backend.', u: '', g: 'https://github.com/Demagalawrence/wifi-portal', k: ['wifi', 'hotspot', 'portal', 'captive', 'network', 'internet'] },
    { t: 'M-One Entertainment', d: 'An events production platform — sound, stage lights and screens with packages, gallery and quotes from concept to completion.', u: 'https://m-one-blush.vercel.app/', g: '', k: ['m-one', 'events', 'entertainment', 'production', 'sound', 'stage', 'music'] },
    { t: 'Greater Africa Organisation', d: 'The online home of the Greater Africa Organisation — championing connection, inspiration and impact across the continent.', u: 'https://greater-africa.vercel.app/', g: '', k: ['greater', 'africa', 'organisation', 'organization', 'community'] },
    { t: 'TravelGo — Tour & Travels', d: 'A tours and travel booking platform — tours, packages and trip planning for seamless, memorable journeys.', u: 'https://tours-and-tarvel.vercel.app/', g: '', k: ['travel', 'tours', 'travelgo', 'booking', 'trip', 'holiday'] },
    { t: 'Dian Cakes & Confectionaries', d: 'A sweet, elegant web presence showcasing cakes, confectioneries and orders for every celebration.', u: 'https://dian-cakes.vercel.app/', g: '', k: ['cakes', 'dian', 'bakery', 'confectionery', 'sweet', 'celebration'] },
    { t: 'Ezra Collective — Gaitano Ezra', d: 'A 3D & digital design studio portfolio for Gaitano Ezra — striking WebGL visuals, creative direction and immersive digital experiences.', u: 'https://gaitanoezra.vercel.app/', g: '', k: ['ezra', '3d', 'webgl', 'design studio', 'collective', 'creative studio'] },
    { t: 'Muno Mukabi Downtown SACCO', d: 'A comprehensive SACCO management system — member management, payments, savings, insurance, access codes and live analytics.', u: 'https://muno-mukabi-downtown-sacco.vercel.app/', g: '', k: ['sacco', 'muno', 'savings', 'credit', 'cooperative', 'fintech', 'banking'] },
    { t: 'Racheal Grace Nalulyo', d: 'A digital portfolio for a content strategist in Kampala — creative direction, visual storytelling and brand voice for hospitality, lifestyle and events brands.', u: 'https://rachealgracenalulyo.vercel.app/', g: '', k: ['racheal', 'creator', 'content strategy', 'brand voice', 'visual storytelling'] }
  ];

  /* ------------------------------------------------------------------ */
  /* Intent matching                                                     */
  /* ------------------------------------------------------------------ */

  var INTENTS = [
    {
      id: 'greeting',
      keys: ['hi', 'hello', 'hey', 'yo', 'good morning', 'good afternoon', 'good evening', 'howdy', 'sup', 'greetings'],
      reply: "Hi! I'm the KEE assistant. Ask me about Elijah's projects, skills, experience, K.E.E Technologies, or how to get in touch."
    },
    {
      id: 'who',
      keys: ['who are you', 'who is this', 'your name', 'introduce yourself', 'about you', 'about elijah', 'tell me about elijah', 'who is elijah', 'who is kubanja', 'bio', 'biography', 'introduce'],
      reply: PROFILE.name + ' is a ' + PROFILE.roles.join(', a ') + '.\n\nHe leads K.E.E Technologies Ltd — a Uganda-based engineering studio building production-grade web apps, mobile applications, AI/NLP systems and cloud-native infrastructure — together with ' + TEAM.join(', ') + '.'
    },
    {
      id: 'skills',
      keys: ['skills', 'stack', 'tech', 'technologies', 'tools', 'languages', 'what can you do', 'what does he do', 'expertise', 'frameworks', 'programming', 'proficient'],
      reply: 'Elijah works across the full stack:\n\n• Frontend — ' + SKILLS.frontend.join(', ') + '\n• Backend — ' + SKILLS.backend.join(', ') + '\n• Data — ' + SKILLS.data.join(', ') + '\n• AI/ML — ' + SKILLS.ai.slice(0, 8).join(', ') + '\n• Mobile — ' + SKILLS.mobile.join(', ') + '\n• Infrastructure — ' + SKILLS.infra.join(', ') + '\n\nStrongest areas: React + TypeScript frontends, Python/Django and Node/NestJS APIs, applied AI and chatbot systems.'
    },
    {
      id: 'ai',
      keys: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'nlp', 'chatbot', 'chatbots', 'llm', 'neural', 'pytorch', 'tensorflow', 'computer vision'],
      reply: 'AI is a core focus. Elijah builds:\n\n• Chatbots and conversational assistants (web and WhatsApp)\n• NLP pipelines — text classification, retrieval-augmented assistants\n• Computer vision models in PyTorch and TensorFlow\n• AI agents and intelligent automation\n\nSeveral K.E.E projects run on this stack, including the KEE assistant you are talking to right now — it runs entirely offline, in your browser, with no API key.'
    },
    {
      id: 'kee',
      keys: ['kee technologies', 'k.e.e technologies', 'kee tech', 'k.e.e tech', 'your company', 'the company', 'kee', 'k.e.e', 'company', 'organisation', 'organization', 'business', 'team', 'studio', 'agency', 'founders', 'who is in the team'],
      reply: 'K.E.E Technologies Ltd builds intelligent digital solutions — AI, NLP, IoT, chatbots, web platforms and online learning, from Kampala, Uganda to the world.\n\nLeadership team:\n• ' + PROFILE.name + ' — Managing Director\n• ' + TEAM.join('\n• ') + '\n\nLive site: ' + PROFILE.site
    },
    {
      id: 'contact',
      keys: ['contact', 'email', 'reach', 'hire', 'get in touch', 'phone', 'call', 'message', 'available', 'availability', 'work together', 'collaborate', 'freelance'],
      reply: 'Get in touch with ' + PROFILE.short + ':\n\n• Email — ' + PROFILE.email + '\n• Phone — ' + PROFILE.phone + '\n• Location — ' + PROFILE.location + '\n\nHe is open to freelance work, collaborations and full-time roles.'
    },
    {
      id: 'education',
      keys: ['education', 'university', 'school', 'study', 'student', 'studying', 'degree', 'course', 'bugema', 'grade'],
      reply: PROFILE.short + ' studies Software Engineering at Bugema University, Uganda, while leading K.E.E Technologies Ltd as Managing Director.'
    },
    {
      id: 'experience',
      keys: ['experience', 'work history', 'employment', 'cv', 'resume', 'career', 'background', 'timeline'],
      reply: PROFILE.short + ' combines study at Bugema University with hands-on leadership at K.E.E Technologies Ltd.\n\nAcross 120+ repositories he has shipped e-commerce platforms, SACCO and inventory systems, healthcare platforms, podcast and media tools, mobile apps and AI systems — many of them live on Vercel.'
    },
    {
      id: 'projects',
      keys: ['all projects', 'your projects', 'show me projects', 'list projects', 'what projects', 'projects', 'project', 'portfolio', 'your work', 'your apps', 'websites', 'repos', 'github', 'source code'],
      reply: 'There are ' + PROJECTS.length + ' live projects in the showcase. Name one and I will fill you in — for example PlayIt, ShopNet, Muwas, Chill Talk, Lanegen, MyEffects Hub, Tagline, the WiFi Hotspot Portal, Muno Mukabi SACCO or TravelGo.\n\nOr scroll the Projects section below.'
    },
    {
      id: 'tech_frontend',
      keys: ['react', 'nextjs', 'next.js', 'typescript', 'javascript', 'frontend', 'front-end', 'css', 'html', 'tailwind', 'redux'],
      reply: 'On the frontend Elijah builds with React and TypeScript, Next.js, React Native (Expo) and modern CSS. ShopNet, Muwas, Ezra Collective and the K.E.E site itself are React + TypeScript.'
    },
    {
      id: 'tech_backend',
      keys: ['backend', 'back-end', 'node', 'nodejs', 'express', 'nestjs', 'django', 'python', 'flask', 'api', 'rest', 'database', 'postgres', 'mysql'],
      reply: 'On the backend he uses Node.js, Express, NestJS, Python, Django and Django REST, with PostgreSQL, MySQL, MongoDB, Redis and Prisma. EcoGuard pairs FastAPI + Postgres/PostGIS with Redis and Celery.'
    },
    {
      id: 'mobile',
      keys: ['mobile', 'android', 'ios', 'app', 'flutter', 'kotlin', 'expo', 'react native', 'phone'],
      reply: 'Mobile work spans React Native with Expo, Kotlin and Android Studio, plus Flutter projects. Tagline (ConnectQR) is an Expo React Native app backed by a NestJS + PostgreSQL API.'
    },
    {
      id: 'infra',
      keys: ['devops', 'docker', 'cloud', 'deploy', 'deployment', 'hosting', 'vercel', 'netlify', 'ci/cd', 'cicd', 'infrastructure', 'server'],
      reply: 'Elijah ships with Docker, Docker Compose, CI/CD pipelines, GitHub Actions, Vercel and Netlify, plus Linux server administration. Most of the live projects run on Vercel.'
    },
    {
      id: 'thanks',
      keys: ['thanks', 'thank you', 'thx', 'cheers', 'appreciate', 'nice', 'cool', 'awesome', 'great', 'perfect'],
      reply: "Any time! If you want to go deeper on a specific project, just ask — or email " + PROFILE.email + '.'
    },
    {
      id: 'bye',
      keys: ['bye', 'goodbye', 'see you', 'later', 'good night'],
      reply: 'Goodbye! 👋 Thanks for visiting the portfolio of ' + PROFILE.name + '.'
    }
  ];

  var SUGGESTIONS = {
    who: PROFILE.links,
    contact: [
      { label: PROFILE.email, url: 'mailto:' + PROFILE.email },
      { label: 'GitHub', url: 'https://github.com/KubanjaElijahEldred' }
    ],
    kee: [{ label: 'Visit K.E.E site', url: PROFILE.site }],
    experience: [{ label: 'All projects', url: '#projects' }, { label: 'GitHub profile', url: 'https://github.com/KubanjaElijahEldred' }]
  };

  function normalise(s) {
    return ' ' + s.toLowerCase().replace(/[^a-z0-9+#.\s-]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  }

  /* Phrase matches must outweigh single generic words, otherwise
     "tell me about kee technologies" loses to the "about" keyword. */
  var PHRASE_SCORE = 12;
  var WORD_SCORE = 4;
  var MATCH_THRESHOLD = 4;

  function hit(q, key) {
    if (key.indexOf(' ') > -1 || key.indexOf('-') > -1) {
      return q.indexOf(key) > -1 ? PHRASE_SCORE : 0;
    }
    return new RegExp('(^|[^a-z0-9])' + key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-z0-9]|$)').test(q) ? WORD_SCORE : 0;
  }

  function findProject(q) {
    var best = null;
    var bestScore = 0;
    PROJECTS.forEach(function (p) {
      var score = 0;
      if (q.indexOf(p.t.toLowerCase()) > -1) score += 12;
      p.k.forEach(function (kw) { score += hit(q, kw.toLowerCase()); });
      if (score > bestScore) { bestScore = score; best = p; }
    });
    return bestScore >= MATCH_THRESHOLD ? best : null;
  }

  function findIntent(q) {
    var best = null;
    var bestScore = 0;
    INTENTS.forEach(function (it) {
      var score = 0;
      var longest = 0;
      it.keys.forEach(function (k) {
        var h = hit(q, k);
        if (h) {
          score += h;
          if (k.length > longest) longest = k.length;
        }
      });
      if (score > 0) {
        // ties broken toward the intent holding the longest matched phrase
        var total = score * 100 + longest;
        if (total > bestScore) { bestScore = total; best = it; }
      }
    });
    return bestScore > 0 ? best : null;
  }

  function describeProject(p) {
    var out = p.t + '\n\n' + p.d;
    var acts = [];
    if (p.u) acts.push({ label: 'Open live site', url: p.u });
    if (p.g) acts.push({ label: 'View source', url: p.g });
    if (!acts.length && !p.u) acts.push({ label: 'All projects', url: '#projects' });
    return { text: out, actions: acts };
  }

  function respond(raw) {
    var q = normalise(raw);
    if (!q.trim()) return null;

    var project = findProject(q);
    if (project) {
      var r = describeProject(project);
      return { text: r.text, actions: r.actions };
    }

    var intent = findIntent(q);
    if (intent) {
      return { text: intent.reply, actions: SUGGESTIONS[intent.id] || null };
    }

    return {
      text: "I don't have that one yet. Try asking about:\n\n• His projects — PlayIt, ShopNet, Muwas, Chill Talk, Lanegen, SACCO, TravelGo\n• His skills and tech stack\n• AI, chatbots and NLP work\n• K.E.E Technologies and the team\n• Education and experience\n• Contact details",
      actions: [{ label: 'All projects', url: '#projects' }, { label: 'Email ' + PROFILE.short, url: 'mailto:' + PROFILE.email }]
    };
  }

  /* ------------------------------------------------------------------ */
  /* UI                                                                  */
  /* ------------------------------------------------------------------ */

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function mount() {
    if (document.getElementById('kee-assistant-root')) return;

    var root = el('div', 'assistant-root');
    root.id = 'kee-assistant-root';

    /* panel */
    var panel = el('div', 'assistant-panel');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'KEE assistant chat');

    var head = el('div', 'assistant-head');
    var avatar = el('div', 'assistant-avatar', 'KE');
    var dot = el('span', 'assistant-status-dot');
    avatar.appendChild(dot);
    head.appendChild(avatar);
    var titleWrap = el('div', 'assistant-title');
    titleWrap.appendChild(el('strong', null, 'KEE Assistant'));
    titleWrap.appendChild(el('small', null, 'Online · offline &amp; private'));
    head.appendChild(titleWrap);
    var close = el('button', 'assistant-close', '&times;');
    close.type = 'button';
    close.setAttribute('aria-label', 'Close assistant');
    head.appendChild(close);
    panel.appendChild(head);

    var body = el('div', 'assistant-body');
    body.id = 'kee-assistant-body';
    panel.appendChild(body);

    var chips = el('div', 'assistant-chips');
    ['Who is Elijah?', 'Best projects', 'Tech stack', 'AI work', 'Contact'].forEach(function (c) {
      var b = el('button', null, c);
      b.type = 'button';
      b.addEventListener('click', function () { ask(c); });
      chips.appendChild(b);
    });
    panel.appendChild(chips);

    var form = el('div', 'assistant-input');
    var input = el('input');
    input.type = 'text';
    input.placeholder = 'Ask about projects, skills, contact…';
    input.setAttribute('aria-label', 'Message the assistant');
    var send = el('button', 'assistant-send', '&#10148;');
    send.type = 'button';
    send.setAttribute('aria-label', 'Send message');
    form.appendChild(input);
    form.appendChild(send);
    panel.appendChild(form);

    /* launcher */
    var launcher = el('button', 'assistant-launcher');
    launcher.type = 'button';
    launcher.setAttribute('aria-label', 'Open the KEE assistant');
    var bot = el('span', 'assistant-launcher-bot');
    bot.appendChild(el('span', 'assistant-bot-tip'));
    bot.appendChild(el('span', 'assistant-status-dot'));
    launcher.appendChild(bot);
    launcher.appendChild(el('span', 'assistant-launcher-label', 'Ask KEE'));

    root.appendChild(panel);
    root.appendChild(launcher);
    document.body.appendChild(root);

    /* behaviour */
    function scroll() { body.scrollTop = body.scrollHeight; }

    function addMessage(who, text, actions) {
      var m = el('div', 'assistant-msg ' + who, text);
      body.appendChild(m);
      if (actions && actions.length) {
        var row = el('div', 'assistant-actions');
        actions.forEach(function (a) {
          var link = el('a', 'assistant-action', a.label);
          link.href = a.url;
          if (a.url.indexOf('http') === 0) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          } else {
            link.addEventListener('click', function () { closePanel(); });
          }
          row.appendChild(link);
        });
        m.appendChild(row);
      }
      scroll();
    }

    function addTyping() {
      var t = el('div', 'assistant-msg bot', '<span class="assistant-typing"><i></i><i></i><i></i></span>');
      body.appendChild(t);
      scroll();
      return t;
    }

    function ask(text) {
      var q = (text != null ? text : input.value).trim();
      if (!q) return;
      addMessage('user', q);
      input.value = '';
      send.disabled = true;
      var t = addTyping();
      var result = respond(q);
      setTimeout(function () {
        t.remove();
        addMessage('bot', result.text.replace(/\n/g, '<br>'), result.actions);
        send.disabled = false;
        input.focus();
      }, 420);
    }

    function openPanel() {
      panel.classList.add('is-open');
      launcher.hidden = true;
      if (!body.childElementCount) {
        addMessage('bot',
          "Hi — I'm <b>KEE Assistant</b>, the offline assistant for " + PROFILE.name + "'s portfolio.<br><br>" +
          "I run entirely in your browser: no API key, no server, nothing you type leaves this device.<br><br>" +
          'Ask me about his projects, skills, AI work, K.E.E Technologies or how to contact him.');
      }
      scroll();
      setTimeout(function () { input.focus(); }, 60);
    }

    function closePanel() {
      panel.classList.remove('is-open');
      launcher.hidden = false;
    }

    function toggle() {
      if (panel.classList.contains('is-open')) closePanel(); else openPanel();
    }

    launcher.addEventListener('click', toggle);
    close.addEventListener('click', closePanel);
    send.addEventListener('click', function () { ask(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); ask(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) closePanel();
    });

    /* A desktop shortcut so the assistant is genuinely reachable without
       hunting for the button. */
    document.addEventListener('keydown', function (e) {
      if (!(e.ctrlKey && e.shiftKey && e.key === 'A')) return;
      e.preventDefault();
      toggle();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
