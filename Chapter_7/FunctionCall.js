function addASnowFlake() {
  var image = document.createElement("img");
  image.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Snow_flake.svg/230px-Snow_flake.svg.png";
  document.getElementById("images").appendChild(image);
}

//INSERT YOUR CODE HERE
for (i = 1; i <= 3; i++) {
  document.write(addASnowFlake());
}
