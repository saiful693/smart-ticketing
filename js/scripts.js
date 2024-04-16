function specificPosition() {
    const main1 = document.getElementById('main1');
    main1.scrollIntoView({
        behavior: "smooth"
    });
}



// main container work
const items = [];
const phoneNumber = [];


function handleMouseClickEvent(item) {


    setBackgroundColorById(item);
    items.push(item);




    //    seats
    const bookedSeat = document.getElementById('booked-seat');
    const seat = items.length;
    bookedSeat.innerText = seat;

    // reaming seats
    const value = getTextElementValueById('total-seat');
    const reamingSeat = value - 1
    setTextElementValueById('total-seat', reamingSeat);

    const seatsContainer = document.getElementById('seats-container');

    console.log(item);
    const tableRow = document.createElement('tr');
    tableRow.classList.add('border-none');
    tableRow.innerHTML = ` <td>` + item + `</td>
             <td>Economoy</td>
             <td>550</td>`
    seatsContainer.appendChild(tableRow);

    const totalPrice = document.getElementById('total-price');
    const total = 550 * items.length;
    totalPrice.innerText = total;



    if (items.length === 4) {
        showElementById('apply-copune');
    }

    // 
    const phoneElement = document.getElementById('phone-number');
    const phoneValueNumber = phoneElement.value;
    const phoneValueText=phoneValueNumber.toString()

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = total;

    return items.length;

}


// document.addEventListener('keyup',handleKeyboardKeyUpEvent)
document.getElementById('phone-number').addEventListener('keyup', function (event) {
    const playerPressed=event.key;
    phoneNumber.push(playerPressed);
    if (1<=items.length && 11<=phoneNumber.length ) {
        showElementById('btn-next');
    }
})


//   document.addEventListener('click',handleMouseClickEvent)


function seatChoose(clickItem, ) {
    console.log(items.length)
    const itemId = clickItem;
    if (items.length < 4) {
        handleMouseClickEvent(itemId);
    } else {
        console.log('limit exceed');

    }

}

document.getElementById('btn-apply').addEventListener('click', function () {
    // console.log('button clicked')
    const copuneElement = document.getElementById('copune-code');
    const elementValueText = copuneElement.value;
    if (elementValueText === 'NEW15') {
        const grandTotal = getTextElementValueById('grand-total')
        const multi = 15 * grandTotal;
        const parcentage = multi / 100;
        console.log(parcentage);

        const parcentageField = document.getElementById('parcentage-show');

        const p = document.createElement('p');
        p.innerHTML = `<p>`+`Total Discount amount: ` + parcentage + `</p>`   
        parcentageField.appendChild(p);

        const afterDiscount=grandTotal-parcentage
        setTextElementValueById('grand-total', afterDiscount)
        hideElementById('apply-copune')
        
    }
    else if(elementValueText === 'Couple 20'){
        const grandTotal = getTextElementValueById('grand-total')
        const multi = 20 * grandTotal;
        const parcentage = multi / 100;
        console.log(parcentage);

        const parcentageField = document.getElementById('parcentage-show');

        const p = document.createElement('p');
        p.innerHTML = `<p>`+`Total Discount amount: ` + parcentage + `</p>`   
        parcentageField.appendChild(p);

        const afterDiscount=grandTotal-parcentage
        setTextElementValueById('grand-total', afterDiscount)
        hideElementById('apply-copune');

        
    }
})







// background color added
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-greenMain');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
// 
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// showing element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// hide
function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}