const realMain = () => {
  const issueDivs = Array.from(document.getElementsByTagName("div"))
    .filter(el => el.id && el.id.startsWith("issue_"));
  for (let i = 0; i < issueDivs.length; i++) {
    const el = issueDivs[i];
    const text = el.innerText;
    if (text.includes("Loading…")) {
      setTimeout(realMain, 1000);
      return;
    }
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
  }
};

const main = () => realMain();

main();