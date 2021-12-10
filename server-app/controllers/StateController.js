import { statesService } from "../services/statesService.js"

export const testGetState = (req, res) => {
    res.send(statesService.get())
}

export default testGetState