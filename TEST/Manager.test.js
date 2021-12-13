const Manager = require("../lib/Manager");

describe("Manager",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const officeNumber = "66"
            const manager = new Manager(name, id, email, officeNumber)
            expect(typeof(manager)).toEqual("object")
        })
    }) 
    
    describe("Name", () => {
        it("should return name", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const officeNumber = "66"
            const manager = new Manager(name, id, email, officeNumber)
            expect(manager.name).toEqual(name)
        })
    })

    describe("Id", () => {
        it("should return id", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const officeNumber = "66"
            const manager = new Manager(name, id, email, officeNumber)
            expect(manager.id).toEqual(id)
        })
    })
    
    describe("Email", () => {
        it("should return email", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const officeNumber = "66"
            const manager = new Manager(name, id, email, officeNumber)
            expect(manager.email).toEqual(email)
        })
    })
}) 