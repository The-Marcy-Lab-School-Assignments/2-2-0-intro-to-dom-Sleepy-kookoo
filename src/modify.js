/** FEEDBACK: Great job getting all test cases to pass! */
const getMainHeadingText = () => {
  console.log(document.querySelector("#main-heading").textContent);
};

const getAllMainText = () => {
  const nodeList = document.querySelectorAll(".main-text");
  let str = "";
  nodeList.forEach((mainTextElements) => {
    str += mainTextElements.textContent + ","
  });
  console.log(str.slice(0, -1))
};

const setSubtitleText = () => {
  let sub = document.getElementById("subtitle")
  sub.textContent = "This is a subtitle!"
};

const modifyDivClassList = () => {
  const classList = document.getElementById("modify-classes").classList;
  classList.remove("bad-class");
  classList.add("new-class");
};

const addH2 = () => {
  const newHeading = document.createElement("h2");
  newHeading.id = "h2-test";
  newHeading.textContent = "Another one!";

  document.body.append(newHeading);

};

const removeOldInfo = () => {
  const old = document.getElementById("old-info");
  old.remove();
};

const makeAlphabet = () => {
  const alp = document.querySelector('#alphabet')
  let num = alp.dataset.numLetters;
  /** FEEDBACK: Here you could've also used a string! */
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for (let i = 0; i < num; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`;
    alp.appendChild(listItem);
  };
}

const makeBio = () => {
  let bio = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`;
  document.getElementById("my-bio").innerHTML = bio;
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
