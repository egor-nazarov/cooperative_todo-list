import * as React from "react";
import InputField from "./input-field/input-field";
import TasksStates from "./tasks-states/tasks-states";

export default class ComponentsHandler extends React.Component<ComponentsHandlerProps, ComponentsHandlerState> {
    render(){
        return(
            <div className="content__container container">
                <div className="row">
                    <div className="card col-lg-12">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-5">Кооперативный Todo-list</h1>
                            <InputField />
                            {/*<TasksStates />*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
