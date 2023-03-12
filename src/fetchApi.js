import axios from 'axios';

export async function getContacts() {
  try {
    const { data } = await axios.get(
      'https://6409e3796ecd4f9e18be6db1.mockapi.io/contacts'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addContacts(name, number) {
  try {
    const res = await axios.post(
      `https://6409e3796ecd4f9e18be6db1.mockapi.io/contacts`,
      {
        name,
        number,
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteContacts(id) {
  try {
    await axios.delete(
      `https://6409e3796ecd4f9e18be6db1.mockapi.io/contacts/${id}`
    );
    return;
  } catch (error) {
    console.error(error);
  }
}
