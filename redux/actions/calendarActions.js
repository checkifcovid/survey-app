// Action Types
export const UPDATE_CALENDAR = 'UPDATE_CALENDAR'

// Action Creator
export const updateCalendar = (date) => ({
  type: UPDATE_CALENDAR,
  payload: date,
})
