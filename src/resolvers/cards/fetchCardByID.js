import { Card } from "@/models"
import getInfo from "@/methods/cards/getInfo"

async function fetchCardByID({ guru, cardId = `` } = {}) {
  try {
    const { card = {} } = await getInfo({ guru, cardId })
    const result = new Card(card)
    info(`Successfully ran fetchCardByID`, { cardId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchCardByID`, err)
  }
}

export default fetchCardByID
