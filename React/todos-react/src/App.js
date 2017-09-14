import React, { Component } from 'react';
import './App.css';

let todos = [
    {
      title: "My first task",
      responsible: "quang",
      description: "eat",
      priority: "high"
    },
    {
        title: "My second task",
        responsible: "quang",
        description: "sleep",
        priority: "medium"
    },
    {
        title: "My third task",
        responsible: "quang",
        description: "code",
        priority: "low"
    }

];

class Input extends Component{
    constructor(props){
        super();
        this.state ={
            title : "",
            responsible: "",
            description: "",
            priority: "low"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            title : "",
            responsible: "",
            description: "",
            priority: "low"
        })
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    render(){
        return (
            <div>
                <h4>Add new task</h4>
                <form className={"form-horizontal"} onSubmit={this.handleSubmit}>
                    <div className={"form-group"}>
                        <label htmlFor={"inputTodoTitle"} className={"col-sm-2 control-label"}/>
                        <div className={"col-sm-8"}>
                            <input name={"title"}
                                   type={"text"}
                                   className={"form-control"}
                                   id={"inputTodoTitle"}
                                   value={this.state.title}
                                   onChange={this.handleInputChange}
                                   placeholder={"Title"}>
                            </input>
                        </div>
                    </div>

                    <div className={"form-group"}>
                        <label htmlFor={"inputTodoResponsible"} className={"col-sm-2 control-label"}/>
                        <div className={"col-sm-8"}>
                            <input name={"responsible"}
                                   type={"text"}
                                   className={"form-control"}
                                   id={"inputTodoResponsible"}
                                   value={this.state.responsible}
                                   onChange={this.handleInputChange}
                                   placeholder={"Responsible"}>
                            </input>
                        </div>
                    </div>

                    <div className={"form-group"}>
                        <label htmlFor={"inputTodoDescription"} className={"col-sm-2 control-label"}/>
                        <div className={"col-sm-8"}>
                            <textarea name={"description"}
                                   rows={"3"}
                                   className={"form-control"}
                                   id={"inputTodoDescription"}
                                   value={this.state.description}
                                   onChange={this.handleInputChange}
                                   placeholder={"Description"}
                                   style={{resize: "none"}} >
                            </textarea>
                        </div>
                    </div>

                    <div className={"form-group"}>
                        <label htmlFor={"inputTodoPriority"} className={"col-sm-2 control-label"}/>
                        <div className={"col-sm-8"}>
                            <select name={"priority"}
                                    className={"form-control"}
                                    id={"inputTodoPriority"}
                                    value={this.state.priority}
                                    onChange={this.handleInputChange}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                    </div>

                    <div className={"form-group"}>
                        <div className={"col-sm-offset-2 col-sm-10"}>
                            <button type={"submit"} className={"btn btn-success"}>Add</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

class App extends Component {
    constructor(props){
        super();
        this.state = {
            todos: todos
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleRemoveTask(index){
        let new_todos = this.state.todos.slice();
        new_todos = new_todos.filter((e,i)=>{
           return i !== index;
        });

        this.setState({
            todos: new_todos
        });


    }

    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos,todo]
        })
    }

  render() {
    return (
      <div className="container">
          <Input onAddTodo={this.handleAddTodo}/>
          <hr/>
          <h4>Todo count: <span className="badge">{this.state.todos.length}</span></h4>
          <ul className={"list-group"}>
              {this.state.todos.map((todo, index) =>
                  <li className={"list-group-item"} key={index}>
                    <h4 className={"list-group-item-heading"}>
                        {todo.title}
                        <small>
                            <span className={"label label-info"}>
                                {todo.priority}
                            </span>
                        </small>
                    </h4>

                    <p><span className={"glyphicon glyphicon-user"}/> {todo.responsible}</p>

                    <p>{todo.description}</p>

                    <button className={"btn btn-danger btn-sm"}
                            onClick={this.handleRemoveTask.bind(this,index)}>
                        <span className={"glyphicon glyphicon-trash"}/> Delete
                    </button>
                  </li>
              )}
          </ul>
      </div>
    );
  }
}

export default App;
