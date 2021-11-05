const queries = {
    0 :[{}],
    1 :[{$project:{name: 1, _id: 0}}],
    2 :[{$count: "_id"}],
    3 :{},
    4 :{},
    5 :[{$match:{$and:[{founded_year:2004}, {founded_month:{$in:[4,5,6]}}]}},
        {$sort:{founded_month:1}},
        {$project:{name:1,}}],
    6 :{},
    7 :{},
    8 :{},
    9 :{},
    10 :{},
    11 :{},
    12 :{},
    13 :{},
    14 :{},
    15 :{},
    16 :{},
    17 :{},
    18 :{}
    };
    export default queries;
