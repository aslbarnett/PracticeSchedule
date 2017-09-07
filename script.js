var RESISTANCE_TYPE = [
    [
        'Upper Body',
        'Lower Body',
        'Total Body'
    ],
    [
        'Front of Body',
        'Back of Body',
        'Total Body'
    ],
    [
        'Total Body',
        'Total Body',
        'Total Body'
    ]
];

var CARDIO_TYPE = [
    [
        'General',
        'General',
        'General'
    ],
    [
        'General',
        'Plyo',
        'Dance'
    ],
    [
        'General',
        'General',
        'Plyo'
    ],
    [
        'General',
        'General',
        'Dance'
    ]
];

var RECOVERY_TYPE = [
    'Yoga',
    'Active Recovery',
    'Stretch'
];

var masterList = [];
var numOfDays = 6;

var RESISTANCE_SELECTION = _.shuffle(RESISTANCE_TYPE[Math.floor(Math.random() * RESISTANCE_TYPE.length)]);


var CARDIO_SELECTION = _.shuffle(CARDIO_TYPE[Math.floor(Math.random() * CARDIO_TYPE.length)]);
var RECOVERY_SELECTION = RECOVERY_TYPE[Math.floor(Math.random() * RECOVERY_TYPE.length)];

var prevWorkout;

for (var i = 0; i < numOfDays; i++) {
    if (i === 0) {
        var typeList = [RESISTANCE_SELECTION, CARDIO_SELECTION];
        var randType = typeList[Math.floor(Math.random() * typeList.length)];
        if (randType === CARDIO_SELECTION) {

            prevWorkout = CARDIO_SELECTION;
            masterList.push(CARDIO_SELECTION[0]);
            CARDIO_SELECTION.splice(0, 1);
        } else {

            prevWorkout = RESISTANCE_SELECTION;
            masterList.push(RESISTANCE_SELECTION[0]);
            RESISTANCE_SELECTION.splice(0, 1);
        }
    } else {
        if (prevWorkout === CARDIO_SELECTION) {

            prevWorkout = RESISTANCE_SELECTION;
            masterList.push(RESISTANCE_SELECTION[0]);
            RESISTANCE_SELECTION.splice(0, 1);
        } else {

            prevWorkout = CARDIO_SELECTION;
            masterList.push(CARDIO_SELECTION[0]);
            CARDIO_SELECTION.splice(0, 1);
        }
    }
}

var randomPlacementNumber = Math.floor(Math.random() * 7);

masterList.splice(randomPlacementNumber, 0, RECOVERY_SELECTION);




console.log('master', masterList);