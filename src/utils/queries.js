import { BACKEND_BASE_URL, ANDROID_EMU_BASE_URL } from "./static"

// CLASSES
export const getClassesOfCoach = async (coachid) => {
  if (coachid) {
    const res = await fetch(`${ANDROID_EMU_BASE_URL}/api/class/${coachid}`)
    const data = await res.json()

    return data
  }
}


// EVALUATIONS
export const getEvaluationsByClass = async (classid) => {
  if (classid) {
    const res = await fetch(`${ANDROID_EMU_BASE_URL}/api/evaluation/${classid}`)
    const data = await res.json()

    return data
  }
}

export const getEvaluationsByStudentId = async (studentid) => {
  if (studentid) {
    const res = await fetch(`${ANDROID_EMU_BASE_URL}/api/evaluation/student/${studentid}`)
    const data = await res.json()

    return data
  }
}