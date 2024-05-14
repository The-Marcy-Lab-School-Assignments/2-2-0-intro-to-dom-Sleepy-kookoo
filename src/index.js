const header1 = document.createElement("h1");
header1.id = "main-heading";
header1.textContent = 'Hello World!';

document.body.append(header1);

const para = document.createElement("p");
para.id = "main-text";
para.className = "boring-text";
para.textContent = "Look, I'm some text!";

document.body.append(para);
