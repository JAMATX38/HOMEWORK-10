
const Employee = require("../lib/Employee");

describe("Employee",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const employee = new Employee(name, id, email)
            expect(typeof(employee)).toEqual("object")
        })
    }) 

    describe("Name", () => {
        it("should return name", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const employee = new Employee(name, id, email)
            expect(employee.name).toEqual(name)
        })
    })

    describe("Id", () => {
        it("should return id", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const employee = new Employee(name, id, email)
            expect(employee.id).toEqual(id)
        })
    })

    describe("Email", () => {
        it("should return email", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const employee = new Employee(name, id, email)
            expect(employee.email).toEqual(email)
        })
    })
}) 
