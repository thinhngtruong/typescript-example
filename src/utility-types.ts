interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

// Partial

type OptionalTodo = Partial<Todo>;

// Readonly

type ReadOnlyTodo = Readonly<Todo>;

// Record

type TaskType = 'school' | 'home';

type Task = Record<TaskType, Todo>;

// type Task = { school: Todo, home: Todo }

// Omit

type TodoInfo = Pick<Todo, 'title' | 'description'>;

type TodoInfoOmit = Omit<Todo, 'title'>;

// Extract

type T0 = 'a' | 'b' | 'c';

type T1 = Extract<Todo, 'a' | 'f' | 'c'>;

// Exclude

type TodoExclude = Exclude<keyof Todo, 'id'>;

// NonNullable

type T2 = NonNullable<string | number | null | undefined>;

// ReturnType

function myTodo() {
  return {
    title: 'abc',
    description: 'def',
  };
}

type returnType = ReturnType<typeof myTodo>;
