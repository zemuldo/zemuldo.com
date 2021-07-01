export function colorText(string, color) {
  return `<span style="color: ${color};">${string}</span>`;
}

export function greenText(strings) {
  return strings.map((s) => '<span style="color: green !important;">' + s + '</span>');
}
export function getYearsBetween(sdt) {
  let date_difference = new Date(new Date() - sdt);
  let years = date_difference.toISOString().slice(0, 4) - 1970;
  let months = function (months) {
    if (months === 0) return '';
    if (months > 11) {
      years += 1;
      return '';
    }
    if (months === 1) {
      return ' and ' + months + ' Month';
    }
    return ' and ' + months + ' Months';
  };
  return years + ' Years' + months(date_difference.getMonth() + 1);
}

export function platformLogo() {
  let os = 'apple';
  if (typeof window === 'undefined') {
    return 'apple';
  }
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'apple';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'apple';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'ms';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  } else os = 'apple';

  return os;
}