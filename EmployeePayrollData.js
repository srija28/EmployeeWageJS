class EmployeePayrollData{
  
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get id(){return this._id;}
    set id(id){this._id = id;}

    get name(){return this._name;}
    set name(name){this._name = name;}

    get salary(){return this._salary;}
    set salary(salary){this._salary = salary;}

    get gender(){return this._gender;}
    set gender(gender){this._gender = gender;}

    get startDate(){return this._startDate;}
    set startDate(startDate){this._startDate = startDate;}

    toString(){
        const options ={ year : "numeric", month : "long", day : "numeric"};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id = "+ this.id + ", name = "+ this.name +", salary = "+this.salary +", gender = "+ this.gender +", startDate = "+ empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Shreya", 100000, "F", new Date());
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(2, "Srija", 200000, "F", new Date());
console.log(newEmployeePayrollData.toString());