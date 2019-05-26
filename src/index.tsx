import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

class MobxData {
  @observable clickedCount = 0;

  @action
  increment() {
    this.clickedCount++;
  }

  @computed
  get hasBeenClicked() {
    console.log('called');
    return this.clickedCount > 0;
  }
}

@observer
class ReactPlusMobx extends React.Component<{}> {
  data = new MobxData();
  render() {
    return (
      <>
        <button onClick={() => this.data.increment()}>
          Click count: {this.data.clickedCount}
        </button>
        {
          this.data.hasBeenClicked
          && <div>The button is clicked!</div>
        }
        {
          this.data.hasBeenClicked
          && <div>The button is clicked!</div>
        }
      </>
    );
  }
}

ReactDOM.render(
  <ReactPlusMobx />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
