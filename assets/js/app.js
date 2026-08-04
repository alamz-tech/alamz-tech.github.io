/* ============================================================================
   ALAMZ TECH — render layer
   ----------------------------------------------------------------------------
   You should not normally need to edit this file. All content lives in
   config.js. This reads that config and builds the page from it.

   The one thing worth understanding: a product's `status` drives its badge,
   its CTA label, and what the CTA does. 'form' statuses open the shared
   dialog with the field set defined for that status; 'link' statuses render
   a plain anchor to the product. That is the whole mechanism.
   ========================================================================== */

(function () {
  'use strict';

  var C = window.ALAMZ;
  if (!C) { console.error('[alamz] config.js did not load — check the script tags in index.html.'); return; }

  /* ---------------------------------------------------------------- utils */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function svg(markup, cls) {
    var span = el('span', cls);
    span.innerHTML = markup;                 // hardcoded icon strings only
    span.setAttribute('aria-hidden', 'true');
    return span.firstElementChild;
  }

  function get(path) {
    return path.split('.').reduce(function (o, k) {
      return (o == null) ? undefined : o[k];
    }, C);
  }

  function $(sel) { return document.querySelector(sel); }

  var ARROW =
    '<svg class="btn__arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" ' +
    'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M3 8h10M9 4l4 4-4 4"/></svg>';

  var ICONS = {
    ledger:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"><path d="M5 3.5h11l3 3V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/>' +
      '<path d="M8 9h8M8 13h8M8 17h4"/></svg>',
    seed:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-7"/>' +
      '<path d="M12 14c0-4 2.8-7 7-7 0 4-2.8 7-7 7Z"/><path d="M12 16c0-3.3-2.3-6-5.5-6 0 3.3 2.3 6 5.5 6Z"/></svg>',
    path:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"><path d="M5 20c0-4 4-4 4-8s-4-4-4-8"/>' +
      '<circle cx="5" cy="4" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="5" cy="20" r="1.6"/>' +
      '<path d="M12 20h7M12 4h7"/></svg>',
    // products: one thing, built once, shipped repeatedly
    cube:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7Z"/>' +
      '<path d="M3.5 7 12 11.4 20.5 7M12 11.4v9.8"/></svg>',
    // services: joining a new thing into a system that already runs
    plug:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.5v5M15 2.5v5"/>' +
      '<path d="M6.5 7.5h11v3a5.5 5.5 0 0 1-11 0Z"/><path d="M12 16v5.5"/></svg>'
  };

  /* --------------------------------------------------------- text binding */

  document.querySelectorAll('[data-bind]').forEach(function (node) {
    var v = get(node.getAttribute('data-bind'));
    if (typeof v === 'string' && v) node.textContent = v;
  });

  /* ------------------------------------------------------------------ nav */

  (function renderNav() {
    var desktop = $('#nav');
    var mobile = $('#mobile-nav-list');
    (C.nav || []).forEach(function (item) {
      var a = el('a', 'nav__link', item.label);
      a.href = item.href;
      desktop.appendChild(a);

      var b = el('a', 'mobile-nav__link', item.label);
      b.href = item.href;
      b.setAttribute('data-close-menu', '');
      mobile.appendChild(b);
    });

    var cta = el('a', 'btn btn--quiet btn--sm', 'Get in touch');
    cta.href = '#contact';
    desktop.appendChild(cta);
  })();

  /* ------------------------------------------------------------- approach */

  (function renderApproach() {
    var host = $('#approach-body');
    (C.approach.body || []).forEach(function (para) {
      host.appendChild(el('p', null, para));
    });
  })();

  /* ------------------------------------------------------------ verticals */

  /* ----------------------------------------------------------- offerings */

  (function renderOfferings() {
    var host = $('#offerings');
    if (!host || !C.offerings) return;

    (C.offerings.items || []).forEach(function (v) {
      var card = el('article', 'vcard reveal' + (v.tone === 'quiet' ? ' vcard--quiet' : ''));

      if (ICONS[v.icon]) {
        var i = svg(ICONS[v.icon]);
        i.setAttribute('class', 'vcard__icon');
        card.appendChild(i);
      }

      card.appendChild(el('h3', 'vcard__name', v.name));

      var badge = el('span', 'badge badge--' + (v.tone || 'quiet'));
      badge.appendChild(el('span', 'badge__dot'));
      badge.appendChild(el('span', null, v.state));
      var badgeWrap = el('div');
      badgeWrap.appendChild(badge);
      card.appendChild(badgeWrap);

      card.appendChild(el('p', 'vcard__body', v.body));

      if (v.href && v.linkLabel) {
        var a = el('a', 'btn btn--quiet btn--sm');
        a.href = v.href;
        a.style.alignSelf = 'flex-start';
        a.style.marginTop = 'auto';
        a.appendChild(document.createTextNode(v.linkLabel));
        a.insertAdjacentHTML('beforeend', ARROW);
        card.appendChild(a);
      }

      host.appendChild(card);
    });
  })();

  /* ------------------------------------------------------ hero capability */

  (function renderHeroCaps() {
    var host = $('#hero-capabilities');
    if (!host || !C.hero) return;
    (C.hero.capabilities || []).forEach(function (row) {
      var r = el('div', 'datasheet__row');
      r.appendChild(el('span', 'datasheet__k', row.k));
      r.appendChild(el('span', 'datasheet__v', row.v));
      host.appendChild(r);
    });
  })();

  /* ------------------------------------------------------------- services */

  (function renderServices() {
    if (!C.services) return;

    function fill(sel, items) {
      var host = $(sel);
      if (!host) return;
      (items || []).forEach(function (t) { host.appendChild(el('li', 'svc__item', t)); });
    }
    fill('#services-what', C.services.what);
    fill('#services-who', C.services.who);

    var cta = $('#services-cta');
    if (cta) {
      cta.textContent = C.services.cta || 'Get in touch';
      cta.addEventListener('click', function () {
        openForm({ name: 'AI integration enquiry', status: 'services' },
                 { cta: C.services.cta, form: C.contact.form }, cta);
      });
    }
  })();

  /* --------------------------------------------------------- connectivity */

  function findTier(id) {
    if (!id || !C.connectivity) return null;
    var found = (C.connectivity.tiers || []).filter(function (t) { return t.id === id; })[0];
    if (!found) console.warn('[alamz] unknown connectivity tier "' + id + '" — check config.js.');
    return found || null;
  }

  /* The meter shows how much network a product needs, so an empty meter is the
     good outcome. Segments are decorative; the text carries the meaning. */
  function connMeter(tier) {
    var wrap = el('div', 'conn');
    wrap.appendChild(el('span', null, 'Network'));

    var meter = el('span', 'conn__meter');
    meter.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < 3; i++) {
      meter.appendChild(el('span', 'conn__seg' + (i < tier.segments ? ' conn__seg--on' : '')));
    }
    wrap.appendChild(meter);
    wrap.appendChild(el('span', 'conn__val', tier.label));
    return wrap;
  }

  (function renderSpectrum() {
    var host = $('#spectrum');
    if (!host || !C.connectivity) return;

    (C.connectivity.tiers || []).forEach(function (t) {
      var tier = el('div', 'tier' + (t.outOfScope ? ' tier--out' : ''));

      var head = el('div');
      head.style.display = 'flex';
      head.style.alignItems = 'center';
      head.style.justifyContent = 'space-between';
      head.style.gap = '0.75rem';
      head.appendChild(el('span', 'tier__name', t.label));

      var meter = el('span', 'conn__meter');
      meter.setAttribute('aria-hidden', 'true');
      for (var i = 0; i < 3; i++) {
        meter.appendChild(el('span', 'conn__seg' + (i < t.segments ? ' conn__seg--on' : '')));
      }
      head.appendChild(meter);
      tier.appendChild(head);

      tier.appendChild(el('p', 'tier__meaning', t.meaning));

      var who = el('div', 'tier__who');
      var here = (C.products || []).filter(function (p) { return p.connectivity === t.id; });

      if (t.outOfScope) {
        who.appendChild(el('p', 'tier__none', t.outOfScopeNote || 'Not where we build.'));
      } else if (here.length) {
        who.appendChild(el('p', 'tier__who-label', here.length > 1 ? 'Products' : 'Product'));
        here.forEach(function (p) { who.appendChild(el('p', 'tier__product', p.name)); });
      } else {
        who.appendChild(el('p', 'tier__none', 'Nothing here yet.'));
      }

      tier.appendChild(who);
      host.appendChild(tier);
    });
  })();

  /* ------------------------------------------------------------- products */

  (function renderProducts() {
    var host = $('#products-list');

    (C.products || []).forEach(function (p) {
      var status = C.statuses[p.status];
      if (!status) {
        console.warn('[alamz] product "' + p.id + '" has unknown status "' + p.status +
                     '". Add it to `statuses` in config.js.');
        return;
      }

      var card = el('article', 'pcard reveal');

      /* — main column — */
      var main = el('div', 'pcard__main');

      var top = el('div', 'pcard__top');
      top.appendChild(el('h3', 'pcard__name', p.name));

      var badge = el('span', 'badge badge--' + (status.tone || 'quiet'));
      badge.appendChild(el('span', 'badge__dot'));
      badge.appendChild(el('span', null, status.label));
      top.appendChild(badge);
      main.appendChild(top);

      if (p.kicker) main.appendChild(el('p', 'pcard__kicker', p.kicker));
      if (p.body)   main.appendChild(el('p', 'pcard__body', p.body));
      if (p.note)   main.appendChild(el('p', 'pcard__note', p.note));

      if (p.roadmap && p.roadmap.length) {
        var rm = el('div', 'pcard__roadmap');
        rm.appendChild(el('p', 'pcard__roadmap-label', 'On the roadmap'));
        var list = el('ul', 'pcard__roadmap-list');
        p.roadmap.forEach(function (r) { list.appendChild(el('li', 'pcard__roadmap-item', r)); });
        rm.appendChild(list);
        main.appendChild(rm);
      }

      card.appendChild(main);

      /* — side column: facts + the status-driven CTA — */
      var side = el('div', 'pcard__side');

      if (p.facts && p.facts.length) {
        var facts = el('ul', 'facts');
        p.facts.forEach(function (f) { facts.appendChild(el('li', 'facts__item', f)); });
        side.appendChild(facts);
      }

      /* Optional per-product spec sheet. Lives on the product it describes
         rather than in the hero, where it would read as a studio-wide target. */
      if (p.datasheet) {
        var ds = el('div', 'datasheet datasheet--inline');
        var head = el('div', 'datasheet__head');
        head.appendChild(el('span', null, p.datasheet.label || 'Spec'));
        head.appendChild(el('span', 'datasheet__dot'));
        ds.appendChild(head);

        var list = el('div', 'datasheet__list');
        (p.datasheet.rows || []).forEach(function (row) {
          var r = el('div', 'datasheet__row');
          r.appendChild(el('span', 'datasheet__k', row.k));
          r.appendChild(el('span', 'datasheet__v', row.v));
          list.appendChild(r);
        });
        ds.appendChild(list);

        if (p.datasheet.foot) ds.appendChild(el('p', 'datasheet__foot', p.datasheet.foot));
        main.appendChild(ds);
      }

      var tier = findTier(p.connectivity);
      if (tier) side.appendChild(connMeter(tier));

      var actions = el('div');
      actions.style.display = 'flex';
      actions.style.flexDirection = 'column';
      actions.style.gap = '0.5rem';

      var label = p.ctaLabel || status.cta;

      if (status.action === 'link') {
        if (p.ctaUrl) {
          var a = el('a', 'btn btn--primary btn--block');
          a.href = p.ctaUrl;
          a.rel = 'noopener';
          if (!/^#|^\//.test(p.ctaUrl)) a.target = '_blank';
          a.appendChild(document.createTextNode(label));
          a.insertAdjacentHTML('beforeend', ARROW);
          actions.appendChild(a);
        } else {
          console.warn('[alamz] product "' + p.id + '" is status "' + p.status +
                       '" but has no ctaUrl, so no button is shown. Add ctaUrl in config.js.');
        }
      } else if (status.action === 'form') {
        var btn = el('button', 'btn btn--primary btn--block', label);
        btn.type = 'button';
        btn.addEventListener('click', function () { openForm(p, status, btn); });
        actions.appendChild(btn);

        if (p.ctaUrl) {
          var more = el('a', 'btn btn--ghost btn--block btn--sm', 'Learn more');
          more.href = p.ctaUrl;
          more.rel = 'noopener';
          if (!/^#|^\//.test(p.ctaUrl)) more.target = '_blank';
          actions.appendChild(more);
        }
      }

      side.appendChild(actions);
      card.appendChild(side);
      host.appendChild(card);
    });
  })();

  /* ----------------------------------------------------------------- edge */

  (function renderRules() {
    var host = $('#rules');
    (C.edge.rules || []).forEach(function (r, i) {
      var row = el('div', 'rule reveal');

      var text = el('div', 'rule__text');
      /* The index is ordinal because these rules are applied in this order —
         each one only matters once the one above it holds. */
      text.appendChild(el('span', 'rule__idx', String(i + 1).padStart(2, '0')));
      text.appendChild(el('span', null, r.rule));

      row.appendChild(text);
      row.appendChild(el('p', 'rule__because', r.because));
      host.appendChild(row);
    });
  })();

  /* -------------------------------------------------------------- founder */

  (function renderFounder() {
    var mark = $('#founder-mark');
    var f = C.founder;

    function lettermark() {
      return el('span', 'founder__initials', f.initials || 'A');
    }

    if (f.photo) {
      var img = el('img', 'founder__photo');
      img.alt = f.name;
      /* Deliberately NOT loading="lazy": it is a small image that carries the
         page's credibility, and lazy-loading it only risks an empty frame. */
      img.decoding = 'async';
      img.width = 600;
      img.height = 600;
      /* If the photo has not been added yet (or the path is wrong) fall back to
         the lettermark. A broken-image icon in the founder section is the worst
         possible thing for a page whose job is to look credible. */
      img.addEventListener('error', function () {
        console.warn('[alamz] founder photo "' + f.photo + '" did not load — ' +
                     'save the file there, or clear `founder.photo` in config.js.');
        mark.textContent = '';
        mark.appendChild(lettermark());
      });
      img.src = f.photo;
      mark.appendChild(img);
    } else {
      mark.appendChild(lettermark());
    }

    var body = $('#founder-body');
    (f.body || []).forEach(function (para) { body.appendChild(el('p', null, para)); });
  })();

  /* ------------------------------------------------------ contact + footer */

  (function renderContact() {
    var host = $('#contact-actions');
    var email = (C.brand.email || '').trim();

    /* The form stays primary even when an address is published. A mailto on a
       phone with no mail client configured dead-ends silently, and it captures
       nothing structured. The address sits beside it for people who prefer to
       use their own client — and disappears cleanly if brand.email is ''. */
    var btn = el('button', 'btn btn--primary', C.contact.cta || 'Send us a message');
    btn.type = 'button';
    btn.addEventListener('click', function () {
      openForm({ name: 'General enquiry', status: 'contact' },
               { cta: C.contact.cta, form: C.contact.form }, btn);
    });
    host.appendChild(btn);

    if (email) {
      var mail = el('a', 'mail', email);
      mail.href = 'mailto:' + email;
      host.appendChild(mail);
    }

    var links = $('#footer-links');
    (C.social || []).forEach(function (s) {
      if (!s.url) return;                     // no URL yet → link stays hidden
      var a = el('a', 'footer__link', s.label);
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener me';
      links.appendChild(a);
    });

    if (email) {
      var mailLink = el('a', 'footer__link', 'Email');
      mailLink.href = 'mailto:' + email;
      links.appendChild(mailLink);
    }

    var bits = ['© ' + new Date().getFullYear(), C.brand.name];
    if (C.brand.location) bits.push(C.brand.location);
    $('#copyright').textContent = bits.join(' · ');
  })();

  /* ---------------------------------------------------------------- theme */

  (function themeToggle() {
    var btn = $('#theme-toggle');
    var root = document.documentElement;
    var meta = $('#theme-color');

    /* Light is the brand default — see the note in styles.css. Dark only
       applies when the visitor has explicitly asked for it. */
    function current() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }

    function sync() {
      var dark = current() === 'dark';
      btn.setAttribute('title', dark ? 'Switch to light' : 'Switch to dark');
      btn.setAttribute('aria-pressed', String(dark));
      if (meta) meta.setAttribute('content', dark ? '#14110E' : '#FCFBF9');
    }

    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('alamz-theme', next); } catch (e) {}
      sync();
    });
    sync();
  })();

  /* ----------------------------------------------------------- mobile nav */

  (function mobileNav() {
    var btn = $('#menu-btn');
    var panel = $('#mobile-nav');

    function close() {
      panel.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function () {
      var open = panel.getAttribute('data-open') === 'true';
      panel.setAttribute('data-open', String(!open));
      btn.setAttribute('aria-expanded', String(!open));
    });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('[data-close-menu]')) close();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  })();

  /* --------------------------------------------------------- header state */

  (function headerState() {
    var header = $('#header');
    var ticking = false;
    function update() {
      header.setAttribute('data-stuck', String(window.scrollY > 8));
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* --------------------------------------------------------------- reveal */

  (function reveal() {
    var nodes = document.querySelectorAll('.reveal');
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function revealAll() {
      nodes.forEach(function (n) { n.classList.add('is-in'); });
    }

    if (reduced || !('IntersectionObserver' in window)) { revealAll(); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    nodes.forEach(function (n) { io.observe(n); });

    /* Failsafe. An observer does not fire while the tab is hidden, and some
       browsers throttle it aggressively. Anything scrolled past must never be
       left invisible — an unreadable page is far worse than a skipped fade. */
    function sweep() {
      var bottom = window.innerHeight;
      nodes.forEach(function (n) {
        if (n.classList.contains('is-in')) return;
        if (n.getBoundingClientRect().top < bottom) {
          n.classList.add('is-in');
          io.unobserve(n);
        }
      });
    }
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) sweep();
    });
    window.addEventListener('pageshow', sweep);
    setTimeout(sweep, 2500);
  })();

  /* ============================================================================
     THE FORM
     One dialog. The field set, heading and button label are rebuilt from the
     product's status every time it opens.
     ========================================================================== */

  var dialog   = $('#dialog');
  var form     = $('#form');
  var fieldsEl = $('#fields');
  var msgEl    = $('#form-msg');
  var submitEl = $('#form-submit');
  var openerEl = null;
  var context  = null;

  function buildField(f) {
    var wrap = el('div', 'field');
    var id = 'f-' + f.name;

    var label = el('label', 'field__label', f.label);
    label.htmlFor = id;
    if (!f.required) label.appendChild(el('span', 'field__opt', 'optional'));
    wrap.appendChild(label);

    var input;
    if (f.type === 'textarea') {
      input = el('textarea', 'input');
    } else if (f.type === 'select') {
      input = el('select', 'input');
      var ph = el('option', null, 'Choose one…');
      ph.value = '';
      ph.disabled = true;
      ph.selected = true;
      input.appendChild(ph);
      (f.options || []).forEach(function (o) {
        var opt = el('option', null, o);
        opt.value = o;
        input.appendChild(opt);
      });
    } else {
      input = el('input', 'input');
      input.type = f.type || 'text';
      if (f.type === 'email') input.autocomplete = 'email';
      if (f.name === 'name')  input.autocomplete = 'name';
    }

    input.id = id;
    input.name = f.name;
    if (f.required) input.required = true;
    if (f.placeholder) input.placeholder = f.placeholder;
    wrap.appendChild(input);

    if (f.help) {
      var help = el('p', 'field__help', f.help);
      help.id = id + '-help';
      input.setAttribute('aria-describedby', help.id);
      wrap.appendChild(help);
    }
    return wrap;
  }

  function openForm(product, status, opener) {
    context = { product: product, status: status };
    openerEl = opener || null;

    var cfg = status.form || {};
    $('#dialog-eyebrow').textContent = product.name;
    $('#dialog-title').textContent = cfg.heading || status.cta;
    $('#dialog-intro').textContent = cfg.intro || '';
    submitEl.textContent = cfg.submit || 'Send';

    fieldsEl.textContent = '';
    var fields = (cfg.fields || []).concat(product.extraFields || []);
    fields.forEach(function (f) { fieldsEl.appendChild(buildField(f)); });

    hideMsg();
    form.reset();

    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');       // very old browsers: inline fallback

    var first = fieldsEl.querySelector('input, select, textarea');
    if (first) first.focus();
  }

  /* Only suggest emailing us if there is actually an address to email. Telling
     someone to "email us instead" with no address is worse than saying nothing. */
  function orElseEmail() {
    var e = (C.brand.email || '').trim();
    return e ? ' Or email ' + e + ' directly.' : '';
  }

  function showMsg(text, kind) {
    msgEl.textContent = text;
    msgEl.className = 'form__msg form__msg--' + kind;
    msgEl.hidden = false;
  }
  function hideMsg() { msgEl.hidden = true; msgEl.textContent = ''; }

  function closeDialog() {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    if (openerEl) openerEl.focus();
  }

  $('#dialog-close').addEventListener('click', closeDialog);

  /* Click on the backdrop (outside the form) closes it. */
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) closeDialog();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    hideMsg();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    /* Web3Forms needs the access key as well as the endpoint — without it the
       POST is accepted and then silently dropped, which looks like a working
       form that eats every submission. Treat a missing key as unconfigured. */
    var endpoint = (C.form.endpoint || '').trim();
    var needsKey = C.form.service === 'web3forms';
    if (!endpoint || (needsKey && !(C.form.accessKey || '').trim())) {
      console.warn('[alamz] form not configured — set form.' +
                   (needsKey ? 'accessKey' : 'endpoint') + ' in config.js.');
      showMsg(C.form.unconfiguredNotice + orElseEmail(), 'error');
      return;
    }

    var data = new FormData(form);

    /* Honeypot: a real person never sees this field, so anything in it is a bot.
       Handled here rather than with a service-specific field name, so it keeps
       working whichever provider the endpoint points at. We show success and
       send nothing — a bot told it failed just retries. */
    if ((data.get('_gotcha') || '').trim()) {
      fieldsEl.textContent = '';
      $('#dialog-intro').textContent = '';
      showMsg(context.status.form.success || 'Thank you — we have got it.', 'ok');
      submitEl.textContent = 'Close';
      submitEl.type = 'button';
      submitEl.addEventListener('click', closeDialog, { once: true });
      return;
    }
    data.delete('_gotcha');

    data.append('product', context.product.name);
    data.append('product_status', context.product.status);

    /* Formspree reads `_subject`; Web3Forms reads `subject`. Sending the right
       one is the only real difference between the two providers. */
    var subject = C.form.subjectPrefix + ' ' +
                  (context.status.form.heading || context.status.cta) +
                  ' — ' + context.product.name;
    data.append(C.form.service === 'web3forms' ? 'subject' : '_subject', subject);

    if (C.form.accessKey) data.append('access_key', C.form.accessKey);

    var original = submitEl.textContent;
    submitEl.disabled = true;
    submitEl.textContent = 'Sending…';

    fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json().catch(function () { return {}; });
      })
      .then(function () {
        fieldsEl.textContent = '';
        $('#dialog-intro').textContent = '';
        showMsg(context.status.form.success || 'Thank you — we have got it.', 'ok');
        submitEl.textContent = 'Close';
        submitEl.disabled = false;
        submitEl.type = 'button';
        submitEl.addEventListener('click', closeDialog, { once: true });
      })
      .catch(function (err) {
        console.error('[alamz] form submission failed:', err);
        showMsg('That did not send. Check your connection and try again.' + orElseEmail(), 'error');
        submitEl.disabled = false;
        submitEl.textContent = original;
      });
  });

  /* ------------------------------------------------------------ analytics */

  if (C.analytics) {
    var holder = document.createElement('div');
    holder.innerHTML = C.analytics;
    Array.prototype.forEach.call(holder.querySelectorAll('script'), function (old) {
      var s = document.createElement('script');
      Array.prototype.forEach.call(old.attributes, function (a) { s.setAttribute(a.name, a.value); });
      s.textContent = old.textContent;
      document.head.appendChild(s);
    });
  }

})();
