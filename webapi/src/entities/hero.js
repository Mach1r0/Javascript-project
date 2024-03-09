class Hero  {
    constructor ({ id, name, age, power }){
        this.id = id
        this.name = name
        this.age = age
        this.power = power 
    }

    isValid() {
        const propertyNames = Object.getOwnPropertyDescriptor(this)
        const amountInvalid = propertyNames
        .map(property => (!!this[property]) ? null : `${property} is missing!`)
        .filter(item => !!item)

        console.log
    }
}

module.exports = Hero 

const hero = new Hero({ id: 1, name: "Chapolin", age: 100, power: "Superforça"})
console.log('valid', hero.isValid())