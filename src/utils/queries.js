import { BACKEND_BASE_URL, ANDROID_EMU_BASE_URL, AWS_BACKEND_BASE_URL } from "./static"

// CLASSES =============================================
export const getClassesOfCoach = async (coachid, userToken) => {
  if (coachid) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/class/${coachid}`, {
      headers: {
        "Authorization": `Bearer ${userToken}`
      },
    })
    const data = await res.json()
    console.log("class of coach data", data)
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

// EVALUATIONS =============================================
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

// SKILLS =============================================
export const getSkills = async () => {
  const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/skill/`)
  const data = await res.json()

  return data
}

export const getSkillsById = async (skillid) => {
  if (skillid) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/skill/${skillid}`)
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

