// DOM EX2

// const reservations = {
//     bob: {
//          claimed: false 
//         },
//     ted: {
//          claimed: true 
//         }
// }
// const button = document.getElementById("button")
// button.onclick = function (x) {
// const name = document.getElementById("name").value.toLowerCase()
// if (reservations[name]) {
//     if (reservations[name].claimed) {   
//         console.log('your seats are allready claimed, ' + name)
//     } else {
//         console.log('welcome '+name)
//     }
// } else {
//     console.log('you have no reservation')
// }
// }

// END

const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}
for (let i = 1; i < 8; i++) {
  const newBox = document.createElement("div")
  newBox.setAttribute('class' , 'box')
  newBox.style.backgroundColor = getRandomColor()
  newBox.onmouseenter = function(){
    const randomColor = getRandomColor()
    newBox.style.backgroundColor = randomColor
  }
  document.getElementById('container').appendChild(newBox)
}

//I tried doing this a little different, did not succeed yet.
  // for(let i = 1; i < 8; i++){
  //   container = document.getElementById('container');
  //   container.innerHTML+='<div class="items" "onmouseenter="getRandomColor(x)"></div>';
  //   let square= document.getElementsByClassName('items');
  //   square.onmouseenter = function(){
  //     const randomColor=getRandomColor()
  //     square.style.backgroundColor = randomColor
  //   }
  // }

