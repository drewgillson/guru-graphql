# Guru API GraphQL Implementation

```
curl -s 'https://yu3gypcoyi.execute-api.us-west-2.amazonaws.com/dev/graphql' -H 'content-type: application/json' --data-binary '{"operationName":"testQuery","variables":{},"query":"query testQuery {\n  card(id: \"TkEzzk6c\") {\n    title\n    statusCode\n  }\n}\n"}' --compressed | jq
```