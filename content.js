const modifyEl = (meEmail, el) => {
  const text = el.innerText;

  const a = el.getElementsByTagName("a")[0];
  el.style.cursor = "pointer";
  el.onclick = () => {
    document.location = a.href;
  };

  let bgColor = "";
  if (text.includes("Review required")) {
    bgColor = "#ffebe9";
  } else if (text.includes("Changes requested")) {
    bgColor = "#d8b9ff";
  } else if (text.includes("Draft")) {
    bgColor = "#fff8c5";
  } else if (text.includes("Approved")) {
    bgColor = "#ccffd8";
  } else {
    console.log("no color for text: ", text);
  }
  if (bgColor) {
    el.style.backgroundColor = bgColor;
  }
};

const realMain = () => {
  const issueDivs = Array.from(document.getElementsByTagName("div"))
    .filter(el => el.id && el.id.startsWith("issue_"));
  for (let i = 0; i < issueDivs.length; i++) {
    const el = issueDivs[i];
    const text = el.innerText;
    if (text.includes("Loading…")) {
      setTimeout(realMain, 300);
      return;
    }
  }

  const meEmail = document.getElementsByClassName('avatar-small')[0].getAttribute('alt').replace(/@/, '');
  issueDivs.forEach(modifyEl.bind(null, meEmail));
  Array.from(document.querySelectorAll('a[data-hovercard-type="user"]')).forEach(el => {
    el.style.fontWeight = '900';
    if (el.innerText === meEmail) {
      el.style.textTransform = 'uppercase';
      el.style.border = '2px solid #770000';
      el.style.backgroundColor = '#00ee00';
    }
  })
};

const main = () => realMain();

main();
