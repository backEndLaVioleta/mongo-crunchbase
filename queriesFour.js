db.getCollection('companies').find({})

db.companies.find().count();

db.companies.find({founded_year: 2004}).sort({name: 1}).projection({name: 1, founded_year: 1, _id: 0});

db.companies.find({$and:[
    {founded_year: 2004}, {founded_month:{$in: [4,5,6]}}
    ]}).sort({founded_month:1}).projection({founded_month: 1, name: 1, founded_year: 1, _id: 0});
    
db.companies.aggregate(
    [
    {$match: {offices: {$elemMatch:{"city": "Barcelona"}}}},
    {$project:{"offices.city": 1, name: 1, _id:0}}
    ]
    );
db.companies.find({"offices.city": "Barcelona"}).projection({offices: 1});
db.companies.find({offices: {$elemMatch: { city: "Barcelona"}}}).projection({offices: 1});

db.companies.aggregate([
{$group: {_id:"$name", employees: {$sum: "$number_of_employees"}}},
{$sort:{employees: -1} },
{$project:{  employees:1,  _id:1}},
{$limit: 10}
]);

db.companies.find({name: "Facebook"});

db.companies.aggregate([
{$match: {name: "Facebook"}},
{$project: { name: 1, number_of_employees: 1, _id: 0}}
]);

db.companies.aggregate([
{$match: {name: "Facebook"}},
// {$unwind: "$products"},
{$project: { name: 1, number_of_employees: 1, "products.name": 1,  _id: 0}}
])

db.companies.find().limit(1);