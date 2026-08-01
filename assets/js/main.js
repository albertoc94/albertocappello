(function () {
  'use strict';

  document.documentElement.classList.add('has-js');

  var RESET_MS = 1800;
  var timers = new WeakMap();

  function flash(btn, ok) {
    var status = btn.querySelector('[data-copy-status]');
    clearTimeout(timers.get(btn));

    btn.classList.toggle('is-copied', ok);
    if (status) status.textContent = ok ? 'Copied' : 'Copy failed';

    timers.set(btn, setTimeout(function () {
      btn.classList.remove('is-copied');
      if (status) status.textContent = '';
    }, RESET_MS));
  }

  // Fallback for browsers without the async clipboard API, and for pages
  // served over plain http (where navigator.clipboard is undefined).
  function legacyCopy(text) {
    var field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.top = '-9999px';
    document.body.appendChild(field);
    field.select();

    var ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (err) {
      ok = false;
    }
    document.body.removeChild(field);
    return ok;
  }

  document.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-copy]');
    if (!btn) return;

    event.preventDefault();
    var text = btn.getAttribute('data-copy');

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        function () { flash(btn, true); },
        function () { flash(btn, legacyCopy(text)); }
      );
    } else {
      flash(btn, legacyCopy(text));
    }
  });
})();
