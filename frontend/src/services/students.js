import axios from 'axios';
import { SERVER } from './constants';
import { flattenResponse } from '@/lib/flattenResponse';

export async function getStudents() {
  try {
    const res = await axios.get(
      SERVER + '/api/students?pagination[pageSize]=100',
    );
    const {
      data: { data },
    } = res;

    const flattenedData = flattenResponse(data);

    return flattenedData;
  } catch (err) {
    console.log('an error occured:', err.message);
  }
}

export async function createStudent(data) {
  try {
    // console.log(data);
    const res = await axios.post(SERVER + '/api/students/', {
      data: {
        ...data,
      },
    });

    // console.log(res);
  } catch (err) {
    console.log('An error occured!');
    console.log(err.message);
  }
}

export async function updateStudent({ id, data: newData }) {
  try {
    const res = await axios.put(`${SERVER}/api/students/${id}`, {
      data: { ...newData },
    });
  } catch (err) {
    console.log(err.message);
  }
}

export async function deleteStudent({ id }) {
  try {
    const res = await axios.delete(`${SERVER}/api/students/${id}`);
    console.log(res);
  } catch (err) {
    console.log(err.message);
    console.log('Failed to delete student Api');
  }
}
