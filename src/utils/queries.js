import { BACKEND_BASE_URL } from "./static"

// EVALUATIONS
export const getEvaluationsByClass = async (classid) => {
  if (classid) {
    const res = await fetch(`${BACKEND_BASE_URL}/api/evaluation/${classid}`)
    const data = await res.json()

    return data
  }
}

export const getEvaluationsByStudentId = async (studentid) => {
  if (studentid) {
    const res = await fetch(`${BACKEND_BASE_URL}/api/evaluation/student/${studentid}`)
    const data = await res.json()
    return data
  }
}
