import { Component } from "react";
import { ClassCompState, PropsType } from "./types";
import "./style.scss";
import { users } from "../../utils/mockData";

export class ClassComp extends Component<PropsType, ClassCompState> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      showUsers: true,
      moreState: "test",
      searched: "",
    };
  }

  render() {
    return (
      <div className="ClassComp">
        <h2>This is a class component demo</h2>
        <button
          onClick={() => this.setState(s => ({ showUsers: !s.showUsers }))}
        >
          toggle users
        </button>
        <input
          type="text"
          placeholder="seak a user"
          value={this.state.searched}
          onChange={e =>
            this.setState({ searched: e.target.value.trim().toLowerCase() })
          }
        />
        <div>
          {this.state.showUsers &&
            users.map(u => (
              <div key={u.id}>
                {(u.nick + u.id)
                  .trim()
                  .toLowerCase()
                  .includes(this.state.searched) && (
                  <div key={u.id}>
                    <p>
                      <em>
                        `${u.id}. {u.nick}`
                      </em>
                      <small>
                        <strong>{u.isSubscriber && "subsciber"}</strong>
                      </small>
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ClassComp;
