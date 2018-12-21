import { invariant, missingArgument } from "@/utilities"
import Row from "./row"

export default class Card {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.statusCode = data?.statusCode,
    this.error = data?.error,
    this.title = data?.title,
    this.rows = data?.rows?.map(row => new Row({ card: data?.id, ...row }))
  }
}
