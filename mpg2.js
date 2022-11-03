'use strict';

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
        const elem = $(selector);
        elem.focus();
        elem.select();
}

const getErrorMsg = msg => `${msg} must be a valid number greater than zero.`;


const processEntries = () => {
    const miles = parseFloat($("#milesDriven").value);
    const pricePerGallon = parseFloat($("#pricePerGallon").value);
    const vehicleGasRating = parseFloat($("#mpgRating").value);
    

    if (isNaN(miles) || milesDriven <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#milesDriven");    
    }

    else if (isNaN(pricePerGallon) || pricePerGallon <= 0) {
        alert(getErrorMsg("Price per gallon"));
        focusAndSelect("#pricePerGallon");
    }

    else if (isNaN(vehicleGasRating) || vehicleGasRating <= 0) {
        alert(getErrorMsg("Vehicle miles per gallon rating"));
        focusAndSelect("#mpgRating");
    }

    else {
        $("#gasUsed").value = (miles / vehicleGasRating).toFixed(2);
        $("#totalFuelCost").value = `$ ${((miles / vehicleGasRating) * pricePerGallon).toFixed(2)}`;
    };
}

function clearPage() {
    $("#form").reset();  
    $("#milesDriven").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
});

document.addEventListener("DOMContentLoaded", () => {
    $("#clear").addEventListener("click", clearPage);
});