for (var i = 0; i < dogs.length; i++) {
  var obj = dogs[i];

  var li = document.createElement("li");
  li.innerHTML = `
        <figure>
            <img src="./img/perros/${obj["name"]}.jpeg" alt="${obj["name"]}">
            <figcaption>
            ${obj["name"]} ${obj["male"]?"♂":"♀"}
            </figcaption>
        </figure>
      `;
  document.getElementById(sizes[obj["size"]]).appendChild(li);
}
