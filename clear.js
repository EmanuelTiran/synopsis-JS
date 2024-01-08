

const btn2 = () => { var btn2 = document.createElement('button');
btn2.innerText = "clear";
btn2.addEventListener("click", () => {
  location.reload();
}
)
document.body.appendChild(btn2);
}

btn2();