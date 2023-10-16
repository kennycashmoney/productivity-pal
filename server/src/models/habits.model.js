/** data access layer */

async function getAllHabits() {
    return [
        {title: 'test habit 1'},
        {title: 'test habit 2'},
        {title: 'test habit 3'},
    ]
}

async function createNewHabit(habit) {
    console.log(`TODO: insert "${habit.title}" to mongodb`);
}


module.exports = {
    getAllHabits,
    createNewHabit,
}