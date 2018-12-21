import { fetchCardByID } from "@/resolvers"

export const loadCard = guru => new Dataloader(
  arr => Promise.all(arr.map(cardId => fetchCardByID({ guru, cardId }))), { batch: false }
)
