const HeroRepository = require("../repositories/heroRepository")

class HeroService {
    constructor({ HeroRepository }){
        console.log(HeroRepository); // Add this line
        this.HeroRepository = HeroRepository
    }

    async find(itemId){
        return this.HeroRepository.find(itemId)
    }

    async create (data){
        return this.HeroRepository.create(data)
    }
}

module.exports = HeroService