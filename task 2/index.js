let obj = [];
for (let i = 0; i < 10; i++) {
  let newObj1 = {
    text: `${i + 1}`,
    click: 0,
    next: [],
  };
  for (let j = 0; j < 10; j++) {
    let newObj2 = {
      text: `${i + 1}.${j + 1}`,
      click: 0,
      next: [],
    };
    for (let h = 0; h < 10; h++) {
      let newObj3 = {
        text: `${i + 1}.${j + 1}.${h + 1}`,
        click: 0,
        next: [],
      };
      newObj2.next.push(newObj3);
    }
    newObj1.next.push(newObj2);
  }
  obj.push(newObj1);
}
let pos = NaN;
let back = true;
function start () {
    clearDiv = document.getElementById("container");
    while (clearDiv.firstChild) clearDiv.removeChild(clearDiv.firstChild);  
    pos = NaN;
    for (let i = 0; i < 10; i++) {
    let elem = document.createElement("div");
    elem.innerHTML = `[(${obj[i].click}) ${obj[i].text}->]`;
    elem.id = obj[i].text;
    elem.onclick = () => {
        obj[i].click++;
        pos = i;
        click(obj[i]);
    };
    elem.addEventListener("click", () => change(obj[i], i)); // Спасибо ещё раз!
    document.getElementById("container").appendChild(elem);
    }
}
function click(obj) {
  cur = document.getElementById(obj.text);
  cur.innerHTML = `[(${obj.click}) ${obj.text}->]`;
}

function change(obj) {
  if (!(obj.next.length === 0)) {
    clearDiv = document.getElementById("container");
    while (clearDiv.firstChild) clearDiv.removeChild(clearDiv.firstChild);
    for (let i = 0; i < obj.next.length; i++) {
      let newObj = obj.next[i];
      let elem = document.createElement("div");
      elem.onclick = () => {
        newObj.click++;
        click(newObj);
      };
      elem.innerHTML = `[(${newObj.click}) ${newObj.text}->]`;
      elem.id = newObj.text;
      if (newObj.next.length !== 0) {
        elem.addEventListener("click", () => change(newObj, i));
      }
      document.getElementById("container").appendChild(elem);
    }
  }
  let button = document.createElement("button");
  button.innerHTML = `back`;
  button.onclick = () => {
    backButton();
  };
  document.getElementById("container").appendChild(button);
  back = false;
}

function backButton() {
  if (back) {
    start();
  } else {
    change(obj[pos], pos);
    back = true;
  }
}
start();