# Guru GraphQL Best Practices App

```
curl -s 'https://xlmgmzzm1b.execute-api.us-west-2.amazonaws.com/dev/graphql' -H 'content-type: application/json' --data-binary '{"operationName":"testQuery","variables":{},"query":"query testQuery {\n  card(id: 3) {\n    body\n    statusCode\n  }\n}\n"}' --compressed | jq
```