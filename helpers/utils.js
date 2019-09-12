export function whiteText(string) {
  return '<span style="color: white !important;">' + string + '</span>';
}

export function greenText(strings) {
  return strings.map((s) =>'<span style="color: green !important;">' + s + '</span>');
}
export function getYearsBetween(sdt) {
  let date_difference = new Date(new Date() - sdt);
  let years = date_difference.toISOString().slice(0, 4) - 1970;
  let months = function(months) {
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
