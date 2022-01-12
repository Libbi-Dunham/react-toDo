// import React, { useEffect, useState } from 'react';
// import { fetchToDos } from '../../services/todo';
// import TodoTask from '../../components/TodoTask';

// export default function ToDo() {
//   const [task, setTask] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const taskData = await fetchToDos();
//       setTask(taskData);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <ul>
//         {task.map((item) => (
//           <div key={item.id}>
//             <TodoTask input="radio" {...item} />
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }
