let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge() {
    let birthDate = new Date(userInput.value);
    if (isNaN(birthDate)) {
        result.innerHTML = "Please enter a valid date.";
        return;
    }
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let ageDay, ageMonth, ageYear;
    ageYear = currentYear - birthYear;
    ageMonth = currentMonth - birthMonth;
    ageDay = currentDay - birthDay;

    if(currentMonth >= birthMonth) {
        ageMonth = currentMonth - birthMonth;
    } else {
        ageYear--;
        ageMonth = 12 + currentMonth - birthMonth;
    }
    if(currentDay >= birthDay) {
        ageDay = currentDay - birthDay;
    } else{
        ageMonth--;
        ageDay = getDaysInMonth(birthMonth, birthYear) + currentDay - birthDay;
    }
    if(ageMonth < 0) {
        ageMonth = 11;
        ageYear--;
    }
    result.innerHTML = `You are ${ageYear} years, ${ageMonth} months, and ${ageDay} days old.`;

}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}