
import axios from "axios";
import {
  getAllDoctors,
  getDoctorById,
  changeStatus
} from "../Slicer/slicerGeneralDoctors";

export const getDoctor = (idDoctor) => async (dispatch) => {
  try {
    if(!idDoctor){
      return dispatch(getDoctorById({}));
    }
    const patientById = await axios.get(`http://localhost:3004/doctors/${idDoctor}`);
    return dispatch(getDoctorById(patientById.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getDoctors = () => async (dispatch) => {
  try {
    const patients = await axios.get("http://localhost:3004/doctors");
    return dispatch(getAllDoctors(patients.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusDoctor = (idDoctor) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:3004/doctors/status/${idDoctor}`);
    return dispatch(changeStatus());
  } catch (error) {
    console.log(error);
  }
};

export const editDoctor = (idDoctor, data) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:3004/doctors/${idDoctor}`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const postDoctor = (data) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:3004/doctors/`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

