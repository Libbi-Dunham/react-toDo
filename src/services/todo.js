import { client, checkError } from './client';

export async function fetchToDos() {
  const respsonse = await client.from('todos').select('*');
  return checkError(respsonse);
}

export async function createToDo(task) {
  const response = await client
    .from('todos')
    .insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(response);
}

export async function todoCompleted(id, is_complete) {
  const response = await client.from('todos').update({ is_complete }).eq('id', id);
  return checkError(response);
}
