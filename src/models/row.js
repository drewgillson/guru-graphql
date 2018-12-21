import { invariant, missingArgument } from "@/utilities"

export default class Row {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.rowId = data?.id
    this.text = data?.raw
  }
}