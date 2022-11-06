db = connect("mongodb://localhost/mexico");

config.set("displayBatchSize", 300); // allows to display larger results

print("\nquestion 1.2 all participants");
printjson(db.pays.find({}, { nom: 1, _id: 0 }));

print("\n\nquestion 1.3 all matchs");
printjson(db.matchs.find({}, { paysv: 1, paysl: 1, _id: 0 }));

print("\n\nquestion 1.4 match played on the 5th of June 1986");
printjson(
  db.matchs.find(
    { date: { $eq: "1986-06-05" } },
    { paysv: 1, paysl: 1, _id: 0 }
  )
);

print("\n\nquestion 1.5 France's opponents");
franceL = db.matchs.find({ paysl: { $eq: "France" } }, { paysv: 1, _id: 0 });
franceV = db.matchs.find({ paysv: { $eq: "France" } }, { paysl: 1, _id: 0 });
printjson([...franceL.toArray(), ...franceV.toArray()]);

print("\n\nquestion 1.5 bis, renaming fields paysv and paysl to pays");
againstFrance = db.matchs.aggregate([
  { $match: { paysl: { $eq: "France" } } },
  { $project: { pays: "$paysv", _id: 0 } },
  {
    $unionWith: {
      coll: "matchs",
      pipeline: [
        { $match: { paysv: { $eq: "France" } } },
        { $project: { pays: "$paysl", _id: 0 } },
      ],
    },
  },
]);
printjson(againstFrance);

print("\n\nquestion 1.6 world cup winner");
finale = db.matchs.aggregate([
  { $match: { type: { $eq: "Finale" } } },
  {
    $project: {
      winner: {
        $cond: {
          if: { $gt: ["$butsv", "$butsl"] },
          then: "$paysv",
          else: "$paysl",
        },
      },
      _id: 0,
    },
  },
]);
printjson(finale);

print("\n\nquestion 3.1 add matchbutsglobal view");

if ([...db.getCollectionNames()].includes("matchbutsglobal")) {
  printjson(
    db.matchs.aggregate([
      {
        $project: {
          paysl: 1,
          paysv: 1,
          buts: { $sum: ["$butsv", "$butsl"] },
          type: 1,
          date: 1,
          _id: 0,
        },
      },
    ])
  );
} else {
  print("\ncreating matchbutsglobal view...");
  db.createView("matchbutsglobal", "matchs", [
    {
      $project: {
        paysl: 1,
        paysv: 1,
        buts: { $sum: ["$butsv", "$butsl"] },
        type: 1,
        date: 1,
      },
    },
  ]);
  print("done");
}

print("\n\nquestion 3.2 average goals scored when France was playing");
averageGoals = db.matchs.aggregate([
  {
    $match: {
      $or: [{ paysl: { $eq: "France" } }, { paysv: { $eq: "France" } }],
    },
  },
  {
    $project: {
      goals: {
        $sum: ["$butsv", "$butsl"],
      },
      _id: 0,
    },
  },
  {
    $group: {
      _id: 0,
      averageGoals: {
        $avg: "$goals",
      },
    },
  },
  {
    $project: {
      averageGoals: 1,
      _id: 0,
    },
  },
]);
printjson(averageGoals);

print("\n\n3.2 bis using the view");
printjson(
  db.matchbutsglobal.aggregate([
    {
      $match: {
        $or: [{ paysl: { $eq: "France" } }, { paysv: { $eq: "France" } }],
      },
    },
    {
      $group: {
        _id: 0,
        averageGoals: {
          $avg: "$buts",
        },
      },
    },
    {
      $project: {
        averageGoals: 1,
        _id: 0,
      },
    },
  ])
);

print("\n\nquestion 3.3 total goals scored by France");
printjson(
  db.matchs.aggregate([
    {
      $match: {
        $or: [{ paysl: { $eq: "France" } }, { paysv: { $eq: "France" } }],
      },
    },
    {
      $project: {
        goalsOneMatch: {
          $cond: {
            if: { $eq: ["France", "$paysl"] },
            then: "$butsl",
            else: "$butsv",
          },
        },
        _id: 0,
      },
    },
    {
      $group: {
        totalFrenchGoals: {
          $sum: "$goalsOneMatch",
        },
        _id: 0,
      },
    },
    {
      $project: {
        totalFrenchGoals: 1,
        _id: 0,
      },
    },
  ])
);

print("\n\nquestion 3.4 total goals per Poule, ordered by group");
goalsPerPool = db.matchbutsglobal.aggregate([
  {
    $match: {
      type: { $eq: "Poule" },
    },
  },
  {
    $lookup: {
      from: "pays",
      localField: "paysv",
      foreignField: "nom",
      as: "pays",
    },
  },
  {
    $project: {
      buts: 1,
      groupe: "$pays.groupe",
      _id: 0,
    },
  },
  {
    $group: {
      _id: "$groupe",
      goals: {
        $sum: "$buts",
      },
    },
  },
  {
    $sort: {
      _id: 1,
    },
  },
]);
printjson(goalsPerPool);
