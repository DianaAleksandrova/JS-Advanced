class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak] == undefined) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (this.resources === 0) {
            return ("You don't have enough resources to start the hike");
        }

        if (this.goals[peak] != undefined) {
        
            let currentResources = time * 10;
            let leftResources = this.resources - currentResources;

            if (leftResources < 0) {
                return 'You don\'t have enough resources to complete the hike';
            } else {
                this.resources -= currentResources;
                this.listOfHikes.push({ peak, time, difficultyLevel });
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
            }
        }else {
            throw new Error(`${peak} is not in your current goals`);
        }
    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }
    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }
        if (criteria === 'hard' || criteria === 'easy') {
            let allHikes = this.listOfHikes.filter((h) => h.difficultyLevel == criteria);
            let sortedHikes = allHikes.sort((a, b) => a.time - b.time);
            let bestHike = sortedHikes[0];

            if (bestHike === undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        } else if (criteria === 'all') {
            let result = [];
            result.push("All hiking records:");
            this.listOfHikes.forEach((h) => result.push(`${this.username} hiked ${h.peak} for ${h.time} hours`));
        }
        return result.join('\n');
    }
}
//Testing showRecord
const Hike = result;
let newHike = new Hike('Vili');

assert.equal(newHike.addGoal("Musala", 2925), "You have successfully added a new goal - Musala");
assert.equal(newHike.hike("Musala", 8, "hard"), "You hiked Musala peak for 8 hours and you have 20% resources left");
assert.equal(newHike.showRecord("easy"), "Vili has not done any easy hiking yet");
assert.equal(newHike.addGoal("Vihren", 2914), "You have successfully added a new goal - Vihren");
assert.equal(newHike.hike("Vihren", 4, "hard"), "You don't have enough resources to complete the hike");
assert.equal(newHike.showRecord("hard"), "Vili's best hard hike is Musala peak, for 8 hours");
assert.equal(newHike.addGoal("Rui", 1706), "You have successfully added a new goal - Rui");
assert.equal(newHike.hike("Rui", 3, "easy"), "You don't have enough resources to complete the hike");
assert.equal(newHike.showRecord("all"), "All hiking records:\nVili hiked Musala for 8 hours");



