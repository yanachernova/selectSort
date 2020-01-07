var arrCards = []; // Global variable for the cards

const drawCard = (number, symbol, color) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mt-3");
    card.classList.add("ml-3");
    if (number == 1) {
        newnumber = "A";
        card.innerHTML = `
        <p id="symbolup" class="text-left mr-1 mt-2 ${color}">${symbol}</p>
        <h1 id="numbers" class="text-center">${newnumber}</h1>
        <p id="symboldown" class="text-right mr-1 mb-2 ${color}">${symbol}</p>
`;
    } else if (number == 13) {
        king = "K";
        card.innerHTML = `
        <p id="symbolup" class="text-left mr-1 mt-2 ${color}">${symbol}</p>
        <h1 id="numbers" class="text-center">${king}</h1>
        <p id="symboldown" class="text-right mr-1 mb-2 ${color}">${symbol}</p>
`;
    } else if (number == 12) {
        queen = "Q";
        card.innerHTML = `
        <p id="symbolup" class="text-left mr-1 mt-2 ${color}">${symbol}</p>
        <h1 id="numbers" class="text-center">${queen}</h1>
        <p id="symboldown" class="text-right mr-1 mb-2 ${color}">${symbol}</p>
`;
    }else if (number == 11) {
        prince = "J";
        card.innerHTML = `
        <p id="symbolup" class="text-left mr-1 mt-2 ${color}">${symbol}</p>
        <h1 id="numbers" class="text-center">${prince}</h1>
        <p id="symboldown" class="text-right mr-1 mb-2 ${color}">${symbol}</p>
`;
    }else {
        card.innerHTML = `
        <p id="symbolup" class="text-left mr-1 mt-2 ${color}">${symbol}</p>
        <h1 id="numbers" class="text-center">${number}</h1>
        <p id="symboldown" class="text-right mr-1 mb-2 ${color}">${symbol}</p>
`;
    }
    return card;
}

function InputNumber() {
    
    let newinput = document.getElementById("inputPassword2").value;
    if (newinput == "") {
        alert("Enter valid number");
    }
    else {
        for (var x = 1; x <= newinput; x++) {
            let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 12, 11, 1];
            let a = Math.floor(Math.random() * numbers.length);
            let symbols = ["♠", "♣", "♥", "♦"];
            let b = Math.floor(Math.random() * symbols.length);
            if (b == 2 || b == 3) {
                classColor = "redColor";
            } else {
                classColor = "blackColor";
            }
            let cards = document.querySelector(".cards");
            cards.appendChild(drawCard(numbers[a], symbols[b], classColor));
            arrCards.push({ "number": numbers[a], "symbol": symbols[b], "classCol": classColor });
        }
        //return arrCards;
    }
}

const OrderNumbers = () => {
    let newArrCards = arrCards.slice();
    selectSort(newArrCards);
    console.log(arrCards); // No Ordered
    console.log(newArrCards); // Ordered
}


const selectSort = (arr) => {
    let min = 0;
    while (min < arr.length-1){
        for(let i = min+1; i < arr.length; i++) {
          if (arr[min].number > arr[i].number) {
            let aux = arr[min].number;
            arr[min].number = arr[i].number;
            arr[i].number = aux;
            for(let j=0; j<arr.length; j++){
                console.log(arr[j]);
                let cards = document.querySelector(".cards2");
                cards.appendChild(drawCard(arr[j].number, arr[j].symbol, arr[j].classCol));
                if(j == arr.length-1){
                    let br = document.createElement("br"); 
                    cards.appendChild(br);
                }
            }
          }
        }
        min++;
    }
	return arr;
};