import { Row } from "./row"

export const Card = new GqlObject({
  name: `Card`,
  description: `A Guru Card Object.`,
  fields: disabled => ({
    id: globalId(`Card`),
    cardId: {
      type: GqlID,
      description: `The Card's ID.`
    },
    rows: {
      type: !disabled && new GqlList(Row),
      description: `Rows from Card tables.`,
    },
    error: {
      type: GqlString,
      description: `HTTP error.`,
    },
    statusCode: {
      type: GqlString,
      description: `HTTP status code.`
    }
  })
})

export const Queries = {
  card: {
    type: Card,
    description: `Gets a Card by its ID.`,
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: `The ID of the Card to fetch. (Required)`
      }
    },
    resolve: (parent, { id: cardId }, { card }) => card.load(cardId)
  }
}

export const Definition = Card

export default { Definition, Queries }
