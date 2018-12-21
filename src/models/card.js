import { invariant, missingArgument } from "@/utilities"

export default class Card {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.statusCode = data?.statusCode,
    this.error = data?.error,
    this.body = data?.body
  }
}
