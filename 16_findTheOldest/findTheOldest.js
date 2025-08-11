const findTheOldest = function(arr) {
    const sortedPeople = arr.sort((a, b) => {
        const currentYear = new Date();
        let birthYearA = a.yearOfBirth;
        let deathYearA = a.yearOfDeath || currentYear.getFullYear();
        let birthYearB = b.yearOfBirth;
        let deathYearB = b.yearOfDeath || currentYear.getFullYear();

        return (birthYearA - deathYearA) - (birthYearB - deathYearB);
    })

    return sortedPeople[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
