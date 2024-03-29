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
    // console.log("class of coach data", data)
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

export const getStudentById = async (classid, id) => {
  if (id) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/student/${classid}/${id}`)
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

// EVALUATION COMMENT =====================================
export const getEvaluationComment = async (classid, studentid) => {
  if (studentid && classid) {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/evaluationcomment/${classid}/${studentid}`)
    const data = await res.json()

    return data
  }
}

// ATTENDANCE =============================================
export const getAllAttendance = async (classid) => {

    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance/${classid}`)
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

  const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/level/${levelid}`)
  const data = await res.json()

  return data
}
//CURRICULUM ===============================================
  export const fetchSkills = async () => {

    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/skill`)
    const data = await res.json()
    return data

  }

  export const fetchSkill = async (id) => {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/skill/${id}`)

    const data = await res.json()
    return data
  }

  //USER ===================================================
  export const fetchUserById = async (id, userToken) => {
    const res = await fetch(`${AWS_BACKEND_BASE_URL}/api/users/${id}`,{
      headers: {
        "Authorization": `Bearer ${userToken}`
      },
    })

    const data = await res.json()
    return data
  }