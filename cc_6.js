// Employee base class //
class Employee {
    constructor(name,department) {
        this.name = name;
        this.department = department;
    }
    describe () {
        return `{this.name} currently works in the ${this.department} department.`;

    }
}

// Manager sub class //
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
describe() {
    return `${this.name} is a manager for this ${this.department} department including
    ${this.teamSize}`;
}
}

// Managers and employees //
const emp1 = new Employee ("John", "Grocery",);
const emp2 = new Employee ("Tom", "Produce",)
const emp3 = new Employee ("Sophia", "Seafood",)
const man1 = new Manager ("Morgan", "Deli", 25)
const man2 = new Manager ("James", "Baker", 15)
const man3 = new Manager ("Pubert", "Customer Service", 50)