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
