import "isomorphic-fetch"
import { invariant, missingArgument } from "@/utilities"

export class Guru {
  constructor(apiUser, apiKey) {
    invariant(apiUser, missingArgument({ apiUser }))
    invariant(apiKey, missingArgument({ apiKey }))
    this.apiUser = apiUser
    this.apiKey = apiKey
  }
}

export default new Guru(GURU_API_USER, GURU_API_KEY)