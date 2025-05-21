import Chance from 'chance'


const chance = new Chance()

export class AuthCode {

    code() {

        return chance.integer({min: 100000, max: 999999})
    }
}