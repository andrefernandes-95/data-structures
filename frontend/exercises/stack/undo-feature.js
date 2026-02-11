/**

🧪 Exercise: Undo feature

You have:

const actions = ["type A", "type B", "delete B"]


Implement an undo system that reverts the last action.

(Hint: LIFO)

 */

const actions = ["type A", "type B", "delete B"];

class ActionHandler {
  history = [];

  currentAction;

  execute(action) {
    this.history.push(action);
    console.log("executing action: ", action);
  }

  undo() {
    const foregoneItem = this.history.pop();
    console.log("cancelling: ", foregoneItem);
  }
}

const actionHandler = new ActionHandler();

actions.forEach((action) => {
  actionHandler.execute(action);
});

actionHandler.undo();
