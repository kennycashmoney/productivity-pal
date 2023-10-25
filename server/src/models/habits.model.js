/** data access layer */
const habitsDatabase = require("./habits.mongo");

const DEFAULT_HABIT_ID = 1;

async function getLatestHabitId() {
  const latestHabit = await habitsDatabase.findOne({}).sort("-id");

  if (!latestHabit) {
    return DEFAULT_HABIT_ID;
  }

  return latestHabit.id;
}

async function saveHabit(habit) {
  await habitsDatabase.findOneAndUpdate(
    {
      id: habit.id,
    },
    habit,
    { upsert: true }
  );
}

async function getAllHabits() {
  return [
    {
      habitTitle: "test habit 1",
      durationMinutes: 60,
    },
    {
      habitTitle: "test habit 2",
      durationMinutes: 30,
    },
    {
      habitTitle: "test habit 3",
      durationMinutes: 120,
    },
  ];
}

async function createNewHabit(habit) {
  console.log(`TODO: insert "${habit.habitTitle}" to mongodb`);

  const newHabitId = (await getLatestHabitId()) + 1;
  const newHabit = Object.assign(habit, {
    id: newHabitId,
    completed: false,
  });

  await saveHabit(newHabit);
}

module.exports = {
  getAllHabits,
  createNewHabit,
};
