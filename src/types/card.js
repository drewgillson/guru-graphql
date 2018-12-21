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
    title: {
      type: GqlString,
      description: `The Card's Title`
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
  },
  cards: {
    type: new GqlList(Card),
    description: `Gets a list of Cards by their IDs.`,
    args: {
      id: {
        type: new GqlList(new GqlNonNull(GqlID)),
        description: `The IDs of the Cards to fetch. (Required)`
      }
    },
    resolve: (parent, args, { card }) => card.loadMany(args.id)
  }}

export const Definition = Card

export default { Definition, Queries }
