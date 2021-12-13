const Engineer = require("../LIB/Engineer");

describe("Engineer",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const githubUsername = "Jamatx38"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(typeof(engineer)).toEqual("object")
        })
    }) 
    
    describe("Name", () => {
        it("should return name", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const githubUsername = "Jamatx38"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.name).toEqual(name)
        })
    })

    describe("Id", () => {
        it("should return id", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const githubUsername = "Jamatx38"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.id).toEqual(id)
        })
    })
    
    describe("Email", () => {
        it("should return email", () => {
            const name = "Jaime"
            const id = "6"
            const email = "james@email.com"
            const githubUsername = "Jamatx38"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.email).toEqual(email)
        })
    })
}) 