import { usePersistentState } from "../../lib/persistent-state";

type TTodoItem = {
  label: string;
  state: 1 | 2 | 3;
  aside: string;
};

type TTodo = {
  [date: string]: TTodoItem[];
};

class Todo {
  data: TTodo;
  constructor() {
    this.data = usePersistentState<TTodo>({}, "todo");
  }

  push() {}
}
