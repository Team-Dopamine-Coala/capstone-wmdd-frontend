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

// ATTENDANCE
export const getAllAttendance = async () => {

    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance`)
    const data = await res.json()

    return data
}
// SKILL =============================================
export const getSkillById = async (skillid) => {

  const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/skill/${skillid}`)
  const data = await res.json()

  return data
}
// PROGRAM =============================================
export const getProgramById = async (programid) => {

  const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/program/${programid}`)
  const data = await res.json()

  return data
}
// LEVEL ===============================================
export const getLevelById = async (levelid) => {

// ATTENDANCE
export const getAllAttendance = async (classid) => {

    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance/${classid}`)
    const data = await res.json()
    return data
}

  return data
}
