const findTheOldest = function(oldestArray) {
    const currentYear = new Date().getFullYear();
    let oldestPerson = oldestArray.reduce((oldest, person) => {
        const deathYear = person.yearOfDeath ? person.yearOfDeath : currentYear;
        const personAge = deathYear - person.yearOfBirth;

        const oldestDeathYear = oldest.yearOfDeath ? oldest.yearOfDeath : currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
