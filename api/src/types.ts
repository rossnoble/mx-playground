export interface Todo {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  createdAt: string;
}

export interface CreateTodoInput {
  title: string;
  description?: string | null;
}

export interface UpdateTodoInput {
  title?: string | null;
  description?: string | null;
  completed?: boolean | null;
}
