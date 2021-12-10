import { json } from "express";
import { readFileSync } from "fs";

export const statesService = {
    get: () => {
        const states = readFileSync('storage/dataStates.json', 'utf-8')
        return JSON.parse(states)
    }
}

export default {
    statesService
}