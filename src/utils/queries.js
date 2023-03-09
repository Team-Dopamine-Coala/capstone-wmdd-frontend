import { BACKEND_BASE_URL, ANDROID_EMU_BASE_URL, AWS_BACKEND_BASE_URL } from "./static"

// CLASSES
export const getClassesOfCoach = async (coachid) => {
  if (coachid) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/class/${coachid}`)
    const data = await res.json()

    return data
  }
}

export const getSingleClass = async (coachid, classid, userToken) => {
  if (classid) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/class/${coachid}/${classid}`, {
      headers: {
        "Authorization": `Bearer ${userToken}`
      },
    })
    const data = await res.json()

    return data
  }
}
// STUDENTS =============================================
export const getStudentsByClass = async (classid) => {
  if (classid) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/student/${classid}`)
    const data = await res.json()

    return data
  }
}

// EVALUATIONS
export const getEvaluationsByClass = async (classid) => {
  if (classid) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/evaluation/${classid}`)
    const data = await res.json()

    return data
  }
}

export const getEvaluationsByStudentId = async (studentid) => {
  if (studentid) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/evaluation/student/${studentid}`)
    const data = await res.json()
    return data
  }
}

// ATTENDANCE
export const getAllAttendance = async (classid) => {

    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance/${classid}`)
    const data = await res.json()
    return data
}
// SKILL =============================================
