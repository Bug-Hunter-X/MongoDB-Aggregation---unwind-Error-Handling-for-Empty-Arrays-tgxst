```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $match: { /* some filter */ }
  },
  {
    $lookup: {
      from: "anotherCollection",
      localField: "someField",
      foreignField: "anotherField",
      as: "results"
    }
  },
  {
    $unwind: "$results" //Error prone step
  }
])
```