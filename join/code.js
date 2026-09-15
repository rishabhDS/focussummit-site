(function () {
  function fromQuery() {
    try {
      return new URLSearchParams(location.search).get('c') || '';
    } catch (_) {
      return '';
    }
  }
  function fromHash() {
    return (location.hash || '').replace(/^#/, '');
  }
  function fromPath() {
    var parts = location.pathname.split('/').filter(Boolean);
    var seg = '';
    for (var i = 0; i < parts.length - 1; i++) {
      var p = String(parts[i]).toLowerCase();
      if (p === 'join' || p === 'permit') {
        seg = parts[i + 1] || '';
        break;
      }
    }
    if (!seg) seg = parts[parts.length - 1] || '';
    var lower = String(seg).toLowerCase();
    if (lower === 'index.html' || lower === 'join' || lower === 'permit') {
      return '';
    }
    return seg;
  }
  var raw = (fromQuery() || fromHash() || fromPath()).toUpperCase();
  var code = raw.replace(/[^0-9A-Z]/g, '').slice(0, 8);
  var el = document.getElementById('code');
  if (!el) return;
  if (code.length >= 6) {
    el.textContent = code.slice(0, 3) + '-' + code.slice(3);
    var open = document.getElementById('open-app');
    if (open) open.href = 'focussummit://join/' + code;
    document.title = 'Join ' + code + ' on Focus: Summit Together';
  } else {
    el.textContent = '—';
    var hint = document.querySelector('.hint');
    if (hint) hint.textContent = 'Ask your friend to send the link again.';
  }
})();
