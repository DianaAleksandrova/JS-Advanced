class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || salary < 0 || !position || !department) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, position, salary });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const entries = Object.entries(this.departments);
        let bestDepartment = '';
        let previousAvg = 0;
        let highestAvg = 0;

        for (let entry in entries) {
            const department = entries[entry][0]
            const employees = entries[entry][1];
            let totalSalaries = 0;
            for (let i = 0; i < employees.length; i++) {
                totalSalaries += employees[i].salary;
            }
            const averageSalary = totalSalaries / employees.length;
            if (averageSalary > previousAvg) {
                previousAvg = averageSalary;
                bestDepartment = department;
                highestAvg = averageSalary;
            }
        }

        let result = [
            `Best Department is: ${bestDepartment}`,
            `Average salary: ${highestAvg.toFixed(2)}`
        ];
        const bestDptEmployees = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        for (let employee in bestDptEmployees) {
            const { name, salary, position } = this.departments[bestDepartment][employee];
            result.push(`${name} ${salary} ${position}`)
        }

        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());