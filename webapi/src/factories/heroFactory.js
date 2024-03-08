const HeroRepository = require('./../repositories/heroRepository')
const HeroService = require('./../services/heroService')
const { join } = require('path')
const filename = join(__dirname, '../../database', 'data.json')

const generateInstance = () => {
    const heroRepository = new HeroRepository({
        file: filename
    })
    const heroService = new HeroService({
        HeroRepository: heroRepository
    })

    return heroService
}

module.exports = { generateInstance } 

// generateInstance().find().then(console.log)