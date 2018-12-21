export const Row = new GqlObject({
    name: `Row`,
    description: `A Row Object.`,
    fields: () => ({
      id: globalId(`Row`),
      rowId: {
        type: GqlID,
        description: `The Row's ID.`
      },
      text: {
        type: GqlString,
        description: `The Text of the Row.`
      }
    })
  })
  
  export const Queries = {
  }
  
  export const Definition = Row
  
  export default { Definition, Queries }